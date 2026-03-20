// Auth service — wraps Firebase Auth operations
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile, getUserProfile } from "../services/userService";

// ─── Timeout helper — fail fast if Firestore is blocked ──────────────────────

function withTimeout(promise, ms = 3000) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Firestore timeout")), ms)
        ),
    ]);
}

// ─── Email / Password ─────────────────────────────────────────────────────────

export async function registerWithEmail(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // Best-effort profile creation — don't block sign-in if Firestore is slow
    withTimeout(createUserProfile(user.uid, {
        email: user.email ?? "",
        name: "",
        avatar: "🦊",
    })).catch((err) => console.warn("Profile creation skipped:", err.message));

    return { isNewUser: true, user };
}

export async function loginWithEmail(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;

    let isNewUser = false;
    try {
        const existing = await withTimeout(getUserProfile(user.uid));
        isNewUser = !existing;
    } catch (err) {
        console.warn("Firestore unavailable during login:", err.message);
    }

    return { isNewUser, user };
}

// ─── Google Sign-In ───────────────────────────────────────────────────────────

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    // Do NOT force account picker on every login — returning users should
    // be signed in silently without picking their account again
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Default to false (returning user) — safer than true.
    // If Firestore times out, we send them to /app/map not /auth/setup.
    let isNewUser = false;
    try {
        const existing = await withTimeout(getUserProfile(user.uid));
        isNewUser = !existing;

        if (isNewUser) {
            withTimeout(createUserProfile(user.uid, {
                name: user.displayName ?? "",
                email: user.email ?? "",
                avatar: "🦊",
            })).catch((err) => console.warn("Profile creation skipped:", err.message));
        }
    } catch (firestoreErr) {
        console.warn("Firestore unavailable during sign-in:", firestoreErr.message);
        // isNewUser stays false — go to map, not setup
    }

    return { isNewUser, user };
}

// ─── Logout ───────────────────────────────────────────────────────────────────

export async function logout() {
    await signOut(auth);
}

// ─── Update display name / avatar ────────────────────────────────────────────

export async function updateUserDisplayName(name) {
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
    }
}

// ─── Auth state listener ─────────────────────────────────────────────────────

export function listenToAuthState(callback) {
    return onAuthStateChanged(auth, callback);
}

export { auth };
