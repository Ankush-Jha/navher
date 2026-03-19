// Notification service — Firestore CRUD for in-app notifications + FCM
import {
    collection,
    doc,
    addDoc,
    getDocs,
    updateDoc,
    query,
    where,
    orderBy,
    limit,
    writeBatch,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { getToken } from "firebase/messaging";
import { getMessagingInstance } from "../lib/firebase";

// ─── Fetch notifications ───────────────────────────────────────────────────────

export async function getNotifications(userId, maxResults = 50) {
    const q = query(
        collection(db, "notifications"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc"),
        limit(maxResults)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ─── Mark a notification as read ─────────────────────────────────────────────

export async function markNotificationRead(notificationId) {
    await updateDoc(doc(db, "notifications", notificationId), { read: true });
}

// ─── Mark all notifications as read ──────────────────────────────────────────

export async function markAllNotificationsRead(userId) {
    const unread = await getDocs(
        query(collection(db, "notifications"), where("userId", "==", userId), where("read", "==", false))
    );

    const batch = writeBatch(db);
    unread.docs.forEach((d) => batch.update(d.ref, { read: true }));
    await batch.commit();
}

// ─── Real-time notification count ────────────────────────────────────────────

export function listenToUnreadCount(userId, callback) {
    const q = query(
        collection(db, "notifications"),
        where("userId", "==", userId),
        where("read", "==", false)
    );
    return onSnapshot(q, (snap) => callback(snap.size));
}

// ─── Create a notification (called internally / by Cloud Functions) ───────────

export async function createNotification({ userId, type, title, body, data = {} }) {
    await addDoc(collection(db, "notifications"), {
        userId,
        type,   // "sos_nearby" | "review_reply" | "points_earned" | "pad_update" | "cycle_reminder"
        title,
        body,
        data,
        read: false,
        createdAt: serverTimestamp(),
    });
}

// ─── FCM Token registration ────────────────────────────────────────────────────

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

export async function requestNotificationPermission() {
    try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") return null;

        const messaging = await getMessagingInstance();
        if (!messaging) return null;

        const token = await getToken(messaging, { vapidKey: VAPID_KEY });
        return token;
    } catch (err) {
        console.error("FCM token error:", err);
        return null;
    }
}
