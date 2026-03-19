// SOS service — Firestore real-time SOS broadcasts + community response
import {
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    arrayUnion,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { awardPoints } from "./userService";

// ─── Trigger SOS ──────────────────────────────────────────────────────────────

export async function triggerSOS({ userId, userName, userAvatar, lat, lng }) {
    const docRef = await addDoc(collection(db, "sos_alerts"), {
        userId,
        userName,
        userAvatar,
        lat,
        lng,
        status: "active",          // active | resolved | cancelled
        responderIds: [],
        createdAt: serverTimestamp(),
        resolvedAt: null,
    });

    return { sosId: docRef.id };
}

// ─── Respond to SOS ───────────────────────────────────────────────────────────

export async function respondToSOS(sosId, responderId) {
    const sosRef = doc(db, "sos_alerts", sosId);
    await updateDoc(sosRef, {
        responderIds: arrayUnion(responderId),
        updatedAt: serverTimestamp(),
    });
    // Award 50 points for responding to SOS
    await awardPoints(responderId, 50, "sos_responded", sosId);
}

// ─── Resolve SOS ──────────────────────────────────────────────────────────────

export async function resolveSOS(sosId, userId) {
    await updateDoc(doc(db, "sos_alerts", sosId), {
        status: "resolved",
        resolvedAt: serverTimestamp(),
        resolvedBy: userId,
    });
}

// ─── Cancel SOS ───────────────────────────────────────────────────────────────

export async function cancelSOS(sosId) {
    await updateDoc(doc(db, "sos_alerts", sosId), {
        status: "cancelled",
        resolvedAt: serverTimestamp(),
    });
}

// ─── Get active SOS near location ─────────────────────────────────────────────

export async function getNearbyActiveSOS({ lat, lng, radiusKm = 5 }) {
    const q = query(
        collection(db, "sos_alerts"),
        where("status", "==", "active"),
        orderBy("createdAt", "desc"),
        limit(20)
    );
    const snap = await getDocs(q);
    // Filter client-side by distance
    const { haversineKm } = await import("./locationService");
    return snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((s) => haversineKm(lat, lng, s.lat, s.lng) <= radiusKm);
}

// ─── Real-time SOS listener ───────────────────────────────────────────────────

export function listenToActiveSOS(callback) {
    const q = query(
        collection(db, "sos_alerts"),
        where("status", "==", "active"),
        orderBy("createdAt", "desc"),
        limit(10)
    );
    return onSnapshot(q, (snap) => {
        const alerts = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        callback(alerts);
    });
}

// ─── SOS Chat ─────────────────────────────────────────────────────────────────

export async function sendSOSMessage({ sosId, userId, userName, userAvatar, text }) {
    await addDoc(collection(db, "sos_alerts", sosId, "messages"), {
        userId,
        userName,
        userAvatar,
        text,
        createdAt: serverTimestamp(),
    });
}

export function listenToSOSMessages(sosId, callback) {
    const q = query(
        collection(db, "sos_alerts", sosId, "messages"),
        orderBy("createdAt", "asc")
    );
    return onSnapshot(q, (snap) => {
        const messages = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        callback(messages);
    });
}
