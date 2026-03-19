// Review service — Firestore CRUD for location reviews
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
    serverTimestamp,
    increment,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { awardPoints } from "./userService";

// ─── Submit a review ──────────────────────────────────────────────────────────

export async function submitReview({
    locationId, userId, userName, userAvatar,
    rating, text, cleanlinessRating, safetyRating, privacyRating, hasPad,
}) {
    // Save review document
    const docRef = await addDoc(collection(db, "reviews"), {
        locationId,
        userId,
        userName,
        userAvatar,
        rating,
        text,
        cleanlinessRating,
        safetyRating,
        privacyRating,
        hasPad,
        createdAt: serverTimestamp(),
    });

    // Update location aggregate scores
    const locationRef = doc(db, "locations", locationId);
    // Recompute averages by loading all reviews
    const allReviews = await getLocationReviews(locationId);
    const avgRating = allReviews.reduce((s, r) => s + (r.rating ?? 0), 0) / allReviews.length;
    const avgClean = allReviews.reduce((s, r) => s + (r.cleanlinessRating ?? 0), 0) / allReviews.length;
    const avgSafety = allReviews.reduce((s, r) => s + (r.safetyRating ?? 0), 0) / allReviews.length;
    const avgPrivacy = allReviews.reduce((s, r) => s + (r.privacyRating ?? 0), 0) / allReviews.length;

    await updateDoc(locationRef, {
        avgRating: Math.round(avgRating * 10) / 10,
        cleanlinessScore: Math.round(avgClean * 10) / 10,
        safetyScore: Math.round(avgSafety * 10) / 10,
        privacyScore: Math.round(avgPrivacy * 10) / 10,
        reviewCount: allReviews.length,
        updatedAt: serverTimestamp(),
    });

    // Award points for review (25 points)
    await awardPoints(userId, 25, "review_submitted", docRef.id);

    return { id: docRef.id };
}

// ─── Get reviews for a location ───────────────────────────────────────────────

export async function getLocationReviews(locationId, maxResults = 50) {
    const q = query(
        collection(db, "reviews"),
        where("locationId", "==", locationId),
        orderBy("createdAt", "desc"),
        limit(maxResults)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ─── Get reviews by user ──────────────────────────────────────────────────────

export async function getUserReviews(userId) {
    const q = query(
        collection(db, "reviews"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
