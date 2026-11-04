// Built-in location dataset for Sharda University, Knowledge Park III, Greater Noida.
// Works offline / without Firestore so the map is never empty.
//
// source: 'osm'    → real place, coordinates taken from OpenStreetMap
// source: 'campus' → sample on-campus amenity (approximate position) used for the demo

export const SHARDA_CENTER = { lat: 28.4734, lng: 77.4829 }; // Sharda University main campus
export const SHARDA_NAME = 'Sharda University, Greater Noida';
// If the user is farther than this from Sharda we show the Sharda area anyway (demo mode)
export const SHARDA_SERVICE_RADIUS_KM = 25;

const base = {
    isFree: false, hasPads: false, is24x7: false,
    cleanlinessScore: 0, safetyScore: 0, privacyScore: 0,
    avgRating: 0, reviewCount: 0,
    status: 'active', verified: false, amenities: [], osm: false, builtin: true,
};

const ICONS = {
    washroom: ['🚻', 'Public Washroom'],
    pharmacy: ['💊', 'Pharmacy / Medical Store'],
    hospital: ['🏥', 'Hospital'],
    clinic: ['🩺', 'Clinic / Health Centre'],
    hotel: ['🏨', 'Hotel'],
    pad_machine: ['🩸', 'Pad Vending Machine'],
};

function loc(id, type, name, address, lat, lng, extra = {}) {
    const [icon, typeLabel] = ICONS[type];
    return { ...base, id: `sharda_${id}`, type, icon, typeLabel, name, address, lat, lng, ...extra };
}

export const SHARDA_LOCATIONS = [
    // ── On campus (sample amenities, approximate positions) ───────────────────
    loc('acad_wc', 'washroom', "Sharda University – Academic Block Women's Washroom", 'Sharda University Campus, Knowledge Park III',
        28.4738, 77.4834, { source: 'campus', hasPads: true, isFree: true, cleanlinessScore: 4.4, safetyScore: 4.7, privacyScore: 4.3, avgRating: 4.5, reviewCount: 18, verified: true, openingHours: 'Mo-Sa 08:00-18:00' }),
    loc('lib_pad', 'pad_machine', 'Sharda University – Library Pad Vending Machine', 'Central Library, Sharda University',
        28.4729, 77.4838, { source: 'campus', hasPads: true, cleanlinessScore: 4.0, safetyScore: 4.5, privacyScore: 4.0, avgRating: 4.2, reviewCount: 9, verified: true, openingHours: 'Mo-Sa 08:00-20:00' }),
    loc('hostel_pad', 'pad_machine', "Sharda University – Girls' Hostel Pad Machine", "Girls' Hostel, Sharda University",
        28.4743, 77.4850, { source: 'campus', hasPads: true, is24x7: true, cleanlinessScore: 4.1, safetyScore: 4.8, privacyScore: 4.4, avgRating: 4.4, reviewCount: 14, verified: true }),
    loc('food_wc', 'washroom', "Sharda University – Food Court Women's Restroom", 'Food Court, Sharda University',
        28.4727, 77.4826, { source: 'campus', isFree: true, cleanlinessScore: 3.9, safetyScore: 4.3, privacyScore: 4.0, avgRating: 4.0, reviewCount: 11 }),
    loc('gate_med', 'pharmacy', 'Medical Store – Near Sharda Main Gate', 'Knowledge Park III, Greater Noida',
        28.4749, 77.4819, { source: 'campus', hasPads: true, cleanlinessScore: 4.2, safetyScore: 4.4, privacyScore: 3.8, avgRating: 4.2, reviewCount: 7 }),

    // ── Hospitals & clinics (real, from OpenStreetMap) ────────────────────────
    loc('sharda_hospital', 'hospital', 'Sharda Hospital', 'Knowledge Park III, Greater Noida',
        28.47451, 77.48268, { source: 'osm', hasPads: true, is24x7: true, verified: true }),
    loc('sandeep_clinic', 'clinic', 'Dr Sandeep Nagar Shardha Hospital', 'Near Sharda University, Greater Noida',
        28.47426, 77.48225, { source: 'osm', hasPads: true, verified: true }),
    loc('bakson', 'hospital', 'Bakson Hospital', 'Greater Noida',
        28.46762, 77.502, { source: 'osm', hasPads: true, verified: true }),
    loc('kailash', 'hospital', 'Kailash Hospital Greater Noida', 'Knowledge Park, Greater Noida',
        28.47078, 77.50535, { source: 'osm', hasPads: true, is24x7: true, verified: true }),
    loc('nimt', 'hospital', 'NIMT Hospital', 'Greater Noida',
        28.46725, 77.50838, { source: 'osm', hasPads: true, verified: true }),

    // ── Hotels (real, from OpenStreetMap) ─────────────────────────────────────
    loc('holiday_inn', 'hotel', 'Holiday Inn Express Greater Noida Knowledge Park', 'Knowledge Park, Greater Noida',
        28.48876, 77.49081, { source: 'osm', is24x7: true, openingHours: '24/7', verified: true }),
    loc('sangvi', 'hotel', 'Sangvi Palace Hotel', 'Greater Noida',
        28.47931, 77.49258, { source: 'osm', verified: true }),
    loc('ashira', 'hotel', 'Ashira Inn', 'Near Sharda University, Greater Noida',
        28.4767, 77.47682, { source: 'osm', verified: true }),

    // ── Public toilets (real, from OpenStreetMap) ─────────────────────────────
    loc('pari_wc', 'washroom', 'Public Toilet – Pari Chowk', 'Pari Chowk, Greater Noida',
        28.46543, 77.51071, { source: 'osm', isFree: true, is24x7: true, openingHours: '24/7', verified: true }),
    loc('kp_wc', 'washroom', 'Public Toilet – Knowledge Park Road', 'Knowledge Park, Greater Noida',
        28.45917, 77.46469, { source: 'osm', isFree: true, verified: true }),
    loc('yamuna_wc', 'washroom', 'Public Toilet – Yamuna Expressway Side', 'Greater Noida',
        28.45017, 77.47417, { source: 'osm', isFree: true, verified: true }),
];

// ─── helpers ─────────────────────────────────────────────────────────────────

export function distanceKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function getBuiltinById(id) {
    return SHARDA_LOCATIONS.find((l) => l.id === id) || null;
}

/** Built-in locations within radiusKm of (lat,lng), nearest first, with `distance` (km). */
export function getBuiltinNearby(lat, lng, radiusKm = 5) {
    return SHARDA_LOCATIONS
        .map((l) => ({ ...l, distance: distanceKm(lat, lng, l.lat, l.lng) }))
        .filter((l) => l.distance <= radiusKm)
        .sort((a, b) => a.distance - b.distance);
}

/** True when a position is close enough to Sharda for real-location mode. */
export function isNearSharda(lat, lng) {
    return distanceKm(lat, lng, SHARDA_CENTER.lat, SHARDA_CENTER.lng) <= SHARDA_SERVICE_RADIUS_KM;
}

/**
 * Merge several lists of locations, dropping duplicates (same id, or same type
 * + same name, or same type within ~40 m). Earlier lists win.
 */
export function mergeLocations(...lists) {
    const out = [];
    const ids = new Set();
    for (const list of lists) {
        for (const l of list || []) {
            if (!l || ids.has(l.id)) continue;
            const name = (l.name || '').trim().toLowerCase();
            const dup = out.some((o) =>
                o.type === l.type &&
                ((name && name === (o.name || '').trim().toLowerCase()) ||
                    distanceKm(o.lat, o.lng, l.lat, l.lng) < 0.04)
            );
            if (dup) continue;
            ids.add(l.id);
            out.push(l);
        }
    }
    return out;
}
