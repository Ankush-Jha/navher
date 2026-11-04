// Review service — Firestore CRUD for location reviews
import {
    collection,
    doc,
    addDoc,
    getDocs,
    updateDoc,
    setDoc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    increment,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { awardPoints } from "./userService";
import { getBuiltinById } from "../data/shardaLocations";

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

    // Update location aggregate scores (best-effort — the review itself is already saved)
    try {
    const locationRef = doc(db, "locations", locationId);
    // Recompute averages by loading all reviews
    const allReviews = await getLocationReviews(locationId);
    const avgRating = allReviews.reduce((s, r) => s + (r.rating ?? 0), 0) / allReviews.length;
    const avgClean = allReviews.reduce((s, r) => s + (r.cleanlinessRating ?? 0), 0) / allReviews.length;
    const avgSafety = allReviews.reduce((s, r) => s + (r.safetyRating ?? 0), 0) / allReviews.length;
    const avgPrivacy = allReviews.reduce((s, r) => s + (r.privacyRating ?? 0), 0) / allReviews.length;

    // setDoc+merge so built-in (Sharda) locations that have no Firestore doc yet still work
    const builtin = getBuiltinById(locationId);
    await setDoc(locationRef, {
        ...(builtin ? { name: builtin.name, type: builtin.type, address: builtin.address, lat: builtin.lat, lng: builtin.lng, status: "active" } : {}),
        avgRating: Math.round(avgRating * 10) / 10,
        cleanlinessScore: Math.round(avgClean * 10) / 10,
        safetyScore: Math.round(avgSafety * 10) / 10,
        privacyScore: Math.round(avgPrivacy * 10) / 10,
        reviewCount: allReviews.length,
        updatedAt: serverTimestamp(),
    }, { merge: true });
    } catch (err) {
        console.warn("Location score update skipped:", err.message);
    }

    // Award points for review (25 points)
    await awardPoints(userId, 25, "review_submitted", docRef.id);

    return { id: docRef.id };
}

// ─── Get reviews for a location ───────────────────────────────────────────────

export async function getLocationReviews(locationId, maxResults = 50) {
    try {
        const q = query(
            collection(db, "reviews"),
            where("locationId", "==", locationId),
            orderBy("createdAt", "desc"),
            limit(maxResults)
        );
        const snap = await getDocs(q);
        return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (err) {
        // Composite index missing → fall back to an unordered query sorted client-side
        console.warn("Ordered review query failed, falling back:", err.message);
        const snap = await getDocs(query(collection(db, "reviews"), where("locationId", "==", locationId)));
        return snap.docs
            .map((d) => ({ id: d.id, ...d.data() }))
            .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0))
            .slice(0, maxResults);
    }
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
