/**
 * overpassService.js — fetches real POIs from OpenStreetMap via Overpass API
 * No API key required. Works globally. India-specific tags included.
 */

const OVERPASS_ENDPOINTS = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.private.coffee/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
];

// ─── Safe AbortSignal (Safari compat) ────────────────────────────────────────
function timeoutSignal(ms) {
    try {
        return AbortSignal.timeout(ms);
    } catch {
        const ctrl = new AbortController();
        setTimeout(() => ctrl.abort(), ms);
        return ctrl.signal;
    }
}

// ─── Overpass QL query builder — India-specific tags included ─────────────────
function buildQuery(lat, lng, radiusM) {
    return `
[out:json][timeout:25];
(
  node["amenity"="toilets"](around:${radiusM},${lat},${lng});
  way["amenity"="toilets"](around:${radiusM},${lat},${lng});

  node["amenity"="pharmacy"](around:${radiusM},${lat},${lng});
  node["healthcare"="pharmacy"](around:${radiusM},${lat},${lng});
  node["shop"="chemist"](around:${radiusM},${lat},${lng});
  node["shop"="medical"](around:${radiusM},${lat},${lng});
  node["shop"~"pharmacy|medical|chemist|medicine",i](around:${radiusM},${lat},${lng});

  node["amenity"="hospital"](around:${radiusM},${lat},${lng});
  node["amenity"="clinic"](around:${radiusM},${lat},${lng});
  node["amenity"="doctors"](around:${radiusM},${lat},${lng});
  node["amenity"="nursing_home"](around:${radiusM},${lat},${lng});
  node["healthcare"~"hospital|clinic|centre",i](around:${radiusM},${lat},${lng});

  node["tourism"="hotel"](around:${radiusM},${lat},${lng});
  node["tourism"="guest_house"](around:${radiusM},${lat},${lng});
  node["tourism"="hostel"](around:${radiusM},${lat},${lng});
  node["tourism"="motel"](around:${radiusM},${lat},${lng});
  node["amenity"="hotel"](around:${radiusM},${lat},${lng});

  node["vending"="sanitary_pad"](around:${radiusM},${lat},${lng});
  node["vending"="feminine_hygiene"](around:${radiusM},${lat},${lng});
  node["vending"~"sanitary|pad|hygiene",i](around:${radiusM},${lat},${lng});
);
out body center;
`;
}

// ─── Map OSM tags → NavHer location types ────────────────────────────────────
function osmToNavHer(element) {
    const tags = element.tags || {};
    const amenity = tags.amenity;
    const shop = tags.shop;
    const healthcare = tags.healthcare;
    const vending = tags.vending;
    const tourism = tags.tourism;

    let type = 'washroom';
    let hasPads = false;
    let icon = '🚻';
    let typeLabel = 'Public Washroom';

    if (amenity === 'toilets') {
        type = 'washroom'; icon = '🚻'; typeLabel = 'Public Washroom';
        hasPads = tags['dispensing'] === 'yes' || tags['sanitary_pads'] === 'yes';
    } else if (
        amenity === 'pharmacy' || healthcare === 'pharmacy' ||
        shop === 'chemist' || shop === 'medical' ||
        (shop && /pharmacy|medical|medicine|chemist/i.test(shop))
    ) {
        type = 'pharmacy'; icon = '💊'; typeLabel = 'Pharmacy / Medical Store';
        hasPads = true;
    } else if (amenity === 'hospital') {
        type = 'hospital'; icon = '🏥'; typeLabel = 'Hospital';
        hasPads = true;
    } else if (amenity === 'clinic' || amenity === 'doctors' || amenity === 'nursing_home' ||
        (healthcare && /hospital|clinic|centre/i.test(healthcare))) {
        type = 'clinic'; icon = '🩺'; typeLabel = 'Clinic / Health Centre';
        hasPads = true;
    } else if (tourism === 'hotel' || amenity === 'hotel') {
        type = 'hotel'; icon = '🏨'; typeLabel = 'Hotel';
        hasPads = false;
    } else if (tourism === 'guest_house') {
        type = 'hotel'; icon = '🏡'; typeLabel = 'Guest House';
        hasPads = false;
    } else if (tourism === 'hostel') {
        type = 'hotel'; icon = '🏠'; typeLabel = 'Hostel';
        hasPads = false;
    } else if (tourism === 'motel') {
        type = 'hotel'; icon = '🛏️'; typeLabel = 'Motel';
        hasPads = false;
    } else if (vending) {
        type = 'pad_machine'; icon = '🩸'; typeLabel = 'Pad Vending Machine';
        hasPads = true;
    }

    // Extract phone number from various OSM phone tags
    const phone = tags.phone || tags['contact:phone'] || tags['contact:mobile'] ||
        tags['phone:mobile'] || tags['telephone'] || null;

    const name =
        tags.name || tags['name:en'] || tags['name:hi'] ||
        tags.operator || tags.brand || typeLabel;

    const is24x7 = tags['opening_hours'] === '24/7';
    const isFree = amenity === 'toilets' ? (tags['fee'] !== 'yes') : false;
    const isFemaleOnly = tags['female'] === 'yes' || tags['unisex'] === 'no';

    const lat = element.center?.lat ?? element.lat;
    const lng = element.center?.lon ?? element.lon;

    return {
        id: `osm_${element.id}`,
        osm: true,
        lat, lng,
        name, typeLabel, type, icon, phone,
        address: tags['addr:full'] || tags['addr:street'] || tags['addr:locality'] || tags['addr:city'] || '',
        website: tags.website || tags['contact:website'] || null,
        openingHours: tags['opening_hours'] || null,
        hasPads, isFree, is24x7, isFemaleOnly,
        status: 'active',
        verified: false,
        avgRating: 0, reviewCount: 0,
        cleanlinessScore: 0, safetyScore: 0, privacyScore: 0,
        osmTags: tags,
    };
}

// ─── Main fetch — tries multiple endpoints ────────────────────────────────────
let _cache = {};

export async function fetchRealPOIsNearby({ lat, lng, radiusKm = 3 }) {
    if (!lat || !lng) return [];
    const cacheKey = `${lat.toFixed(3)}_${lng.toFixed(3)}_${radiusKm}`;
    if (_cache[cacheKey]) return _cache[cacheKey];

    const radiusM = radiusKm * 1000;
    const queryBody = buildQuery(lat, lng, radiusM);

    // Overpass expects the query as a form field named `data` (a raw text/plain body
    // is rejected with HTTP 406 by overpass-api.de). Race the mirrors: first success wins.
    let data = null;
    try {
        data = await Promise.any(OVERPASS_ENDPOINTS.map(async (endpoint) => {
            const res = await fetch(endpoint, {
                method: 'POST',
                body: 'data=' + encodeURIComponent(queryBody),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                signal: timeoutSignal(15000),
            });
            if (!res.ok) throw new Error(`${endpoint} → HTTP ${res.status}`);
            return res.json();
        }));
    } catch (err) {
        console.warn('Overpass endpoints failed:', err?.errors?.map(e => e.message) || err.message);
    }

    if (!data) {
        console.error('All Overpass endpoints failed');
        return [];
    }

    const elements = data?.elements || [];
    const results = elements
        .filter(e => (e.lat && e.lon) || (e.center?.lat && e.center?.lon))
        .map(osmToNavHer);

    _cache[cacheKey] = results;
    console.log(`[Overpass] Fetched ${results.length} POIs near ${lat.toFixed(4)},${lng.toFixed(4)}`);
    return results;
}

// ─── Nominatim geocoding ──────────────────────────────────────────────────────
export async function geocodeAddress(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=5&countrycodes=in`;
    const res = await fetch(url, {
        headers: { 'Accept-Language': 'en', 'User-Agent': 'NavHer/1.0 (navher-app-wiscon.web.app)' },
        signal: timeoutSignal(8000),
    });
    const results = await res.json();
    return results.map(r => ({
        lat: parseFloat(r.lat),
        lng: parseFloat(r.lon),
        display: r.display_name,
        type: r.type,
    }));
}

// ─── Reverse geocoding ────────────────────────────────────────────────────────
export async function reverseGeocode(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    const res = await fetch(url, {
        headers: { 'Accept-Language': 'en', 'User-Agent': 'NavHer/1.0 (navher-app-wiscon.web.app)' },
        signal: timeoutSignal(8000),
    });
    const data = await res.json();
    return data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}
