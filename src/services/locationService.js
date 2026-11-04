// Location service — Firestore CRUD for washrooms and pad machines
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    GeoPoint,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { awardPoints } from "./userService";
import { getBuiltinNearby, getBuiltinById, mergeLocations } from "../data/shardaLocations";

// ─── Haversine distance (km) ──────────────────────────────────────────────────

export function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Get nearby locations ─────────────────────────────────────────────────────

/**
 * Returns locations within ~radiusKm of given coordinates.
 * TODO(TechDebt): Firestore doesn't support native geo queries. The current client-side
 * filtering via bounding box is sufficient for MVP scale. However, for a production
 * database > 10,000 bounds, implement 'geofirestore' or Geohashing to avoid hefty read costs.
 */
export async function getNearbyLocations({ lat, lng, radiusKm = 5, filters = {} }) {
    const latDelta = radiusKm / 111; // ~111 km per degree latitude
    const lngDelta = radiusKm / (111 * Math.cos((lat * Math.PI) / 180));

    // Community locations from Firestore — never let a slow/blocked DB empty the map
    let remote = [];
    try {
        const q = query(
            collection(db, "locations"),
            where("lat", ">=", lat - latDelta),
            where("lat", "<=", lat + latDelta),
            where("status", "==", "active")
        );
        const snap = await Promise.race([
            getDocs(q),
            new Promise((_, rej) => setTimeout(() => rej(new Error("Firestore timeout")), 4000)),
        ]);
        remote = snap.docs
            .map((d) => {
                const data = d.data();
                return { id: d.id, ...data, distance: haversineKm(lat, lng, data.lat, data.lng) };
            })
            .filter((l) => Math.abs(l.lng - lng) <= lngDelta);
    } catch (err) {
        console.warn("Firestore locations unavailable, using built-in Sharda data:", err.message);
    }

    // Built-in Sharda University dataset (always available)
    let results = mergeLocations(remote, getBuiltinNearby(lat, lng, radiusKm));

    // Apply filters
    if (filters.isFree) results = results.filter((l) => l.isFree);
    if (filters.hasPads) results = results.filter((l) => l.hasPads);
    if (filters.is24x7) results = results.filter((l) => l.is24x7);
    if (filters.type) results = results.filter((l) => l.type === filters.type);

    // Sort by distance
    results.sort((a, b) => a.distance - b.distance);

    return results;
}

// ─── Get single location ──────────────────────────────────────────────────────

export async function getLocation(locationId) {
    const builtin = getBuiltinById(locationId);
    try {
        const snap = await getDoc(doc(db, "locations", locationId));
        if (snap.exists()) return { ...(builtin || {}), id: snap.id, ...snap.data() };
    } catch (err) {
        if (!builtin) throw err;
        console.warn("Firestore unavailable, showing built-in location:", err.message);
    }
    return builtin;
}

// ─── Check pad availability ───────────────────────────────────────────────────

export async function checkPadAvailability(lat, lng) {
    const nearby = await getNearbyLocations({ lat, lng, radiusKm: 1, filters: { hasPads: true } });
    return {
        available: nearby.length > 0,
        nearestDistance: nearby[0]?.distance ?? null,
    };
}

// ─── Add new location ─────────────────────────────────────────────────────────

export async function addLocation({ type, name, lat, lng, address, addedBy }) {
    const docRef = await addDoc(collection(db, "locations"), {
        type,           // "washroom" | "pad_machine"
        name,
        lat,
        lng,
        address,
        isFree: false,
        hasPads: false,
        is24x7: false,
        cleanlinessScore: 0,
        safetyScore: 0,
        privacyScore: 0,
        avgRating: 0,
        reviewCount: 0,
        status: "active",          // immediately visible on map (MVP: trust community)
        addedBy,
        verified: false,
        amenities: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });

    return { id: docRef.id };
}

// ─── Search locations ─────────────────────────────────────────────────────────

export async function searchLocations({ searchQuery, lat, lng, radiusKm = 10 }) {
    // Firestore doesn't support full-text search natively.
    // We fetch nearby and filter by name client-side (good enough for MVP).
    const nearby = await getNearbyLocations({ lat, lng, radiusKm });

    if (!searchQuery?.trim()) return nearby;

    const q = searchQuery.toLowerCase();
    return nearby.filter(
        (l) =>
            l.name?.toLowerCase().includes(q) ||
            l.address?.toLowerCase().includes(q) ||
            l.type?.includes(q)
    );
}

// ─── Report location issue ────────────────────────────────────────────────────

export async function reportLocation(locationId, { type, description, userId }) {
    await addDoc(collection(db, "locations", locationId, "reports"), {
        type,
        description,
        userId,
        createdAt: serverTimestamp(),
    });
}

// ─── Update location status ───────────────────────────────────────────────────

export async function updateLocationStatus(locationId, status, userId) {
    await updateDoc(doc(db, "locations", locationId), {
        status,
        updatedAt: serverTimestamp(),
    });

    // Log community activity
    await addDoc(collection(db, "locations", locationId, "activity"), {
        action: `Status updated: ${status}`,
        userId,
        createdAt: serverTimestamp(),
    });

    // Award points
    await awardPoints(userId, 5, "pad_update", locationId);
}

// ─── Get location activity ────────────────────────────────────────────────────
export async function getLocationActivity(locationId, limitNum = 10) {
    const q = query(
        collection(db, "locations", locationId, "activity"),
        orderBy("createdAt", "desc"),
        limit(limitNum)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
