// User service — Firestore CRUD for user profiles, settings, and rewards
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    collection,
    getDocs,
    query,
    where,
    serverTimestamp,
    increment,
} from "firebase/firestore";
import { db } from "../lib/firebase";

// ─── Collection references ────────────────────────────────────────────────────
const usersCol = () => collection(db, "users");
const userDoc = (uid) => doc(db, "users", uid);
const settingsDoc = (uid) => doc(db, "users", uid, "private", "settings");
const rewardsDoc = (uid) => doc(db, "users", uid, "private", "rewards");

// ─── Create ───────────────────────────────────────────────────────────────────

/**
 * Called on first sign-in to create user profile + defaults
 */
export async function createUserProfile(uid, { name = "", phone = "", email = "", avatar = "🦊" } = {}) {
    const batch = [
        // Public profile
        setDoc(userDoc(uid), {
            name,
            phone,
            email,
            avatar,
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
        }),
        // Private settings (default values)
        setDoc(settingsDoc(uid), {
            sosAlertsEnabled: true,
            padUpdatesEnabled: true,
            cycleRemindersEnabled: false,
            shareLocationEnabled: true,
            emergencyContactName: "",
            emergencyContactPhone: "",
            language: "English",
            fcmToken: "",
        }),
        // Rewards
        setDoc(rewardsDoc(uid), {
            totalPoints: 0,
            currentLevel: 1,
            levelName: "Navigator",
            xpCurrent: 0,
            xpNextLevel: 100,
            consecutiveLogDays: 0,
            lastLogDate: null,
        }),
    ];

    await Promise.all(batch);
}

// ─── Read ─────────────────────────────────────────────────────────────────────

export async function getUserProfile(uid) {
    const snap = await getDoc(userDoc(uid));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getUserSettings(uid) {
    const snap = await getDoc(settingsDoc(uid));
    return snap.exists() ? snap.data() : null;
}

export async function getUserRewards(uid) {
    const snap = await getDoc(rewardsDoc(uid));
    return snap.exists() ? snap.data() : null;
}

export async function getFullUserData(uid) {
    const [profile, settings, rewards] = await Promise.all([
        getUserProfile(uid),
        getUserSettings(uid),
        getUserRewards(uid),
    ]);
    return { ...profile, settings, rewards };
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateUserProfile(uid, data) {
    await updateDoc(userDoc(uid), { ...data, updatedAt: serverTimestamp() });
}

export async function updateUserSettings(uid, data) {
    await updateDoc(settingsDoc(uid), data);
}

export async function updateEmergencyContact(uid, { name, phone, relationship }) {
    await updateDoc(settingsDoc(uid), {
        emergencyContactName: name,
        emergencyContactPhone: phone,
        emergencyContactRelationship: relationship,
    });
}

export async function updateFCMToken(uid, token) {
    await updateDoc(settingsDoc(uid), { fcmToken: token });
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export async function getUserStats(uid) {
    const [locationsSnap, reviewsSnap] = await Promise.all([
        getDocs(query(collection(db, "locations"), where("addedBy", "==", uid))),
        getDocs(query(collection(db, "reviews"), where("userId", "==", uid))),
    ]);

    const rewards = await getUserRewards(uid);

    return {
        locationsAdded: locationsSnap.size,
        reviewsWritten: reviewsSnap.size,
        sosesHelped: 0, // computed from sos_alerts responderIds later
        pointsEarned: rewards?.totalPoints ?? 0,
    };
}

// ─── Rewards / Points ─────────────────────────────────────────────────────────

const LEVEL_THRESHOLDS = [0, 100, 250, 500, 900, 1400, 2000];
const LEVEL_NAMES = ["Navigator", "Explorer", "Guide", "Guardian", "Champion", "Protector", "Legend"];

export async function awardPoints(uid, points, reason, referenceId = null) {
    const rewards = await getUserRewards(uid);
    if (!rewards) return;

    const newTotal = (rewards.totalPoints ?? 0) + points;
    const newXP = (rewards.xpCurrent ?? 0) + points;

    // Level up check
    let newLevel = rewards.currentLevel ?? 1;
    while (newLevel < LEVEL_THRESHOLDS.length && newXP >= LEVEL_THRESHOLDS[newLevel]) {
        newLevel++;
    }

    const leveledUp = newLevel > (rewards.currentLevel ?? 1);

    await updateDoc(rewardsDoc(uid), {
        totalPoints: newTotal,
        xpCurrent: newXP,
        currentLevel: newLevel,
        levelName: LEVEL_NAMES[newLevel - 1] ?? "Legend",
        xpNextLevel: LEVEL_THRESHOLDS[newLevel] ?? newXP,
    });

    // Log the transaction
    await setDoc(
        doc(collection(db, "users", uid, "pointTransactions")),
        {
            points,
            reason,
            referenceId,
            timestamp: serverTimestamp(),
        }
    );

    return { newTotal, leveledUp, newLevel };
}

// ─── Delete (soft) ────────────────────────────────────────────────────────────

export async function softDeleteUser(uid) {
    await updateDoc(userDoc(uid), {
        deleted: true,
        deletedAt: serverTimestamp(),
        name: "Deleted User",
        phone: "",
        email: "",
    });
}
