// Auth service — wraps Firebase Auth operations
import {
    signInWithPhoneNumber,
    RecaptchaVerifier,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile, getUserProfile } from "../services/userService";

// ─── Phone OTP ────────────────────────────────────────────────────────────────

let confirmationResult = null;

/**
 * Step 1: Send OTP to phone number
 * @param {string} phoneNumber — e.g. "+919876543210"
 * @param {HTMLElement} recaptchaContainer — DOM element for invisible reCAPTCHA
 */
export async function sendPhoneOTP(phoneNumber, recaptchaContainer) {
    const appVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {
        size: "invisible",
    });

    confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    return confirmationResult;
}

/**
 * Step 2: Verify OTP and sign in
 * @param {string} otp — 6-digit OTP entered by user
 * @returns {{ isNewUser: boolean, user: object }}
 */
export async function verifyPhoneOTP(otp) {
    if (!confirmationResult) throw new Error("No OTP sent yet. Call sendPhoneOTP first.");

    const result = await confirmationResult.confirm(otp);
    const user = result.user;

    // Check if this is a new user — create Firestore profile
    const existing = await getUserProfile(user.uid);
    const isNewUser = !existing;

    if (isNewUser) {
        await createUserProfile(user.uid, {
            phone: user.phoneNumber ?? "",
            name: "",
            avatar: "🦊",
        });
    }

    return { isNewUser, user };
}

// ─── Google Sign-In ───────────────────────────────────────────────────────────

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const existing = await getUserProfile(user.uid);
    const isNewUser = !existing;

    if (isNewUser) {
        await createUserProfile(user.uid, {
            name: user.displayName ?? "",
            email: user.email ?? "",
            avatar: "🦊",
        });
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
