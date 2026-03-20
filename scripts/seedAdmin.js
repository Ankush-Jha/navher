/**
 * NavHer — Firestore Seed Script (Admin SDK version)
 * Uses Firebase Admin SDK to bypass security rules.
 * Run with: bun scripts/seedAdmin.js
 *
 * Requires GOOGLE_APPLICATION_CREDENTIALS env var pointing to a service account JSON,
 * OR run `firebase login:ci` to get a CI token.
 *
 * Quickest to run: firebase CLI emulator
 *
 * For demo purposes, this also works directly if you have firebase-admin installed.
 */

const { initializeApp, cert, applicationDefault } = await import('firebase-admin/app');
const { getFirestore, FieldValue } = await import('firebase-admin/firestore');

// Try applicationDefault (works if you have gcloud auth or GOOGLE_APPLICATION_CREDENTIALS)
// OR use a service account JSON file:
// import serviceAccount from '../serviceAccountKey.json' assert { type: 'json' };
// initializeApp({ credential: cert(serviceAccount) });
initializeApp({ credential: applicationDefault() });

const db = getFirestore();

// ─── Seed data ────────────────────────────────────────────────────────────────
const LOCATIONS = [
    { type: "washroom", name: "Phoenix Palladium Mall Restroom", address: "Lower Parel, Mumbai, 400013", lat: 19.0013, lng: 72.8254, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.5, safetyScore: 4.8, privacyScore: 4.2, avgRating: 4.5, reviewCount: 12, status: "active", verified: true },
    { type: "pad_machine", name: "Andheri Station West Pad Machine", address: "Andheri West Station, Mumbai", lat: 19.1187, lng: 72.8468, hasPads: true, isFree: false, is24x7: true, cleanlinessScore: 3.8, safetyScore: 4.2, privacyScore: 3.5, avgRating: 4.0, reviewCount: 7, status: "active", verified: true },
    { type: "washroom", name: "Inorbit Mall Women's Lounge", address: "Malad West, Mumbai, 400064", lat: 19.1857, lng: 72.8403, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.7, safetyScore: 4.9, privacyScore: 4.6, avgRating: 4.7, reviewCount: 22, status: "active", verified: true },
    { type: "pharmacy", name: "Apollo Pharmacy — Bandra", address: "Hill Road, Bandra West, Mumbai", lat: 19.0600, lng: 72.8368, hasPads: true, isFree: false, is24x7: true, cleanlinessScore: 4.3, safetyScore: 4.6, privacyScore: 3.8, avgRating: 4.4, reviewCount: 15, status: "active", verified: true },
    { type: "washroom", name: "CST Station Women's Toilet", address: "Chhatrapati Shivaji Maharaj Terminus, Mumbai", lat: 18.9399, lng: 72.8355, hasPads: false, isFree: true, is24x7: true, cleanlinessScore: 2.8, safetyScore: 3.5, privacyScore: 3.0, avgRating: 3.0, reviewCount: 34, status: "active", verified: true },
    { type: "pad_machine", name: "Worli Pad Vending Machine", address: "Worli Sea Face, Mumbai", lat: 19.0148, lng: 72.8180, hasPads: true, isFree: false, is24x7: true, cleanlinessScore: 3.9, safetyScore: 4.1, privacyScore: 3.7, avgRating: 3.9, reviewCount: 5, status: "active", verified: false },
    { type: "washroom", name: "R City Mall Premium Lounge", address: "Ghatkopar West, Mumbai", lat: 19.0846, lng: 72.9082, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.6, safetyScore: 4.7, privacyScore: 4.5, avgRating: 4.6, reviewCount: 18, status: "active", verified: true },
    { type: "pharmacy", name: "MedPlus Pharmacy — Dadar", address: "Dr Ambedkar Road, Dadar West, Mumbai", lat: 19.0187, lng: 72.8408, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.0, safetyScore: 4.2, privacyScore: 3.6, avgRating: 4.0, reviewCount: 9, status: "active", verified: true },
    { type: "washroom", name: "Colaba Municipal Women's Toilet", address: "Colaba Causeway, Mumbai", lat: 18.9223, lng: 72.8319, hasPads: false, isFree: true, is24x7: false, cleanlinessScore: 2.5, safetyScore: 3.2, privacyScore: 2.8, avgRating: 2.8, reviewCount: 11, status: "active", verified: false },
    { type: "pad_machine", name: "Lokhandwala Market Dispenser", address: "Lokhandwala Complex, Andheri West, Mumbai", lat: 19.1368, lng: 72.8293, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 3.7, safetyScore: 4.0, privacyScore: 3.5, avgRating: 3.8, reviewCount: 3, status: "active", verified: false },
    { type: "washroom", name: "Seawoods Grand Central Premium Restroom", address: "Seawoods, Navi Mumbai", lat: 19.0172, lng: 73.0188, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.8, safetyScore: 4.9, privacyScore: 4.7, avgRating: 4.8, reviewCount: 26, status: "active", verified: true },
    { type: "pharmacy", name: "Netmeds Pharmacy — Powai", address: "Hiranandani Gardens, Powai, Mumbai", lat: 19.1176, lng: 72.9060, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.2, safetyScore: 4.3, privacyScore: 3.9, avgRating: 4.2, reviewCount: 8, status: "active", verified: true },
];

const VOUCHERS = [
    { icon: "shopping_cart", title: "₹50 Off on Blinkit", sub: "Min order ₹199", pointsCost: 100, value: 50, brand: "Blinkit", code: "NAVHER50", bg: "bg-yellow-50", color: "text-yellow-600" },
    { icon: "bolt", title: "₹100 Off on Zepto", sub: "Min order ₹499", pointsCost: 200, value: 100, brand: "Zepto", code: "NAVHER100", bg: "bg-purple-50", color: "text-purple-600" },
    { icon: "medical_services", title: "Free Pad Pack", sub: "Redeemable at partner stores", pointsCost: 50, value: 0, brand: "NavHer Partner", code: "NAVHERFREE", bg: "bg-secondary-container", color: "text-secondary" },
    { icon: "local_grocery_store", title: "₹75 Off on Swiggy Instamart", sub: "Min order ₹299", pointsCost: 150, value: 75, brand: "Swiggy Instamart", code: "NH75INSTA", bg: "bg-orange-50", color: "text-orange-600" },
    { icon: "favorite", title: "1-Month Period Tracker Premium", sub: "NavHer+ subscription", pointsCost: 300, value: 0, brand: "NavHer", code: "NHPLUS1M", bg: "bg-primary-fixed", color: "text-primary" },
];

async function seed() {
    console.log("🌱 NavHer Admin Seed starting...\n");

    // Seed locations
    const locBatch = db.batch();
    for (const loc of LOCATIONS) {
        const ref = db.collection('locations').doc();
        locBatch.set(ref, { ...loc, createdAt: FieldValue.serverTimestamp(), addedBy: 'seed-admin' });
    }
    await locBatch.commit();
    console.log(`✓ ${LOCATIONS.length} locations seeded`);

    // Seed vouchers
    const vBatch = db.batch();
    for (const v of VOUCHERS) {
        const ref = db.collection('vouchers').doc();
        vBatch.set(ref, v);
    }
    await vBatch.commit();
    console.log(`✓ ${VOUCHERS.length} vouchers seeded`);

    console.log("\n✅ Done!");
    process.exit(0);
}

seed().catch(err => {
    console.error("❌", err.message);
    process.exit(1);
});
