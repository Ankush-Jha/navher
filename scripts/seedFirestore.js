/**
 * NavHer — Firestore Seed Script
 * Seeds the `locations` and `vouchers` collections with realistic data.
 * Run with: bun scripts/seedFirestore.js
 *
 * Locations are around Mumbai, India. Change lat/lng to your target city.
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNQVipQkG_FJbhmya9LxyaHe5lbbDO_Eg",
    authDomain: "navher-app-wiscon.firebaseapp.com",
    projectId: "navher-app-wiscon",
    storageBucket: "navher-app-wiscon.firebasestorage.app",
    messagingSenderId: "353829022034",
    appId: "1:353829022034:web:c94774ae1fe7396e58f28b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ─── Seed Locations ───────────────────────────────────────────────────────────
// These are realistic washrooms, pad machines, and pharmacies in Mumbai
const LOCATIONS = [
    {
        type: "washroom",
        name: "Phoenix Palladium Mall Restroom",
        address: "Lower Parel, Mumbai, 400013",
        lat: 19.0013, lng: 72.8254,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 4.5, safetyScore: 4.8, privacyScore: 4.2,
        avgRating: 4.5, reviewCount: 12,
        status: "active", verified: true,
        amenities: ["Hot Water", "Baby Changing"],
    },
    {
        type: "pad_machine",
        name: "Andheri Station West Pad Machine",
        address: "Andheri West Station, Mumbai",
        lat: 19.1187, lng: 72.8468,
        hasPads: true, isFree: false, is24x7: true,
        cleanlinessScore: 3.8, safetyScore: 4.2, privacyScore: 3.5,
        avgRating: 4.0, reviewCount: 7,
        status: "active", verified: true,
        amenities: [],
    },
    {
        type: "washroom",
        name: "Inorbit Mall Women's Lounge",
        address: "Malad West, Mumbai, 400064",
        lat: 19.1857, lng: 72.8403,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 4.7, safetyScore: 4.9, privacyScore: 4.6,
        avgRating: 4.7, reviewCount: 22,
        status: "active", verified: true,
        amenities: ["Lounge Area", "Baby Changing", "Charging Points"],
    },
    {
        type: "pharmacy",
        name: "Apollo Pharmacy — Bandra",
        address: "Hill Road, Bandra West, Mumbai",
        lat: 19.0600, lng: 72.8368,
        hasPads: true, isFree: false, is24x7: true,
        cleanlinessScore: 4.3, safetyScore: 4.6, privacyScore: 3.8,
        avgRating: 4.4, reviewCount: 15,
        status: "active", verified: true,
        amenities: [],
    },
    {
        type: "washroom",
        name: "CST Station Women's Toilet",
        address: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
        lat: 18.9399, lng: 72.8355,
        hasPads: false, isFree: true, is24x7: true,
        cleanlinessScore: 2.8, safetyScore: 3.5, privacyScore: 3.0,
        avgRating: 3.0, reviewCount: 34,
        status: "active", verified: true,
        amenities: [],
    },
    {
        type: "pad_machine",
        name: "Worli Pad Vending Machine",
        address: "Worli Sea Face, Mumbai",
        lat: 19.0148, lng: 72.8180,
        hasPads: true, isFree: false, is24x7: true,
        cleanlinessScore: 3.9, safetyScore: 4.1, privacyScore: 3.7,
        avgRating: 3.9, reviewCount: 5,
        status: "active", verified: false,
        amenities: [],
    },
    {
        type: "washroom",
        name: "R City Mall Premium Lounge",
        address: "Ghatkopar West, Mumbai",
        lat: 19.0846, lng: 72.9082,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 4.6, safetyScore: 4.7, privacyScore: 4.5,
        avgRating: 4.6, reviewCount: 18,
        status: "active", verified: true,
        amenities: ["Hot Water", "Air Dryer"],
    },
    {
        type: "pharmacy",
        name: "MedPlus Pharmacy — Dadar",
        address: "Dr Ambedkar Road, Dadar West, Mumbai",
        lat: 19.0187, lng: 72.8408,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 4.0, safetyScore: 4.2, privacyScore: 3.6,
        avgRating: 4.0, reviewCount: 9,
        status: "active", verified: true,
        amenities: [],
    },
    {
        type: "washroom",
        name: "Colaba Municipal Women's Toilet",
        address: "Colaba Causeway, Mumbai",
        lat: 18.9223, lng: 72.8319,
        hasPads: false, isFree: true, is24x7: false,
        cleanlinessScore: 2.5, safetyScore: 3.2, privacyScore: 2.8,
        avgRating: 2.8, reviewCount: 11,
        status: "active", verified: false,
        amenities: [],
    },
    {
        type: "pad_machine",
        name: "Lokhandwala Market Dispenser",
        address: "Lokhandwala Complex, Andheri West, Mumbai",
        lat: 19.1368, lng: 72.8293,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 3.7, safetyScore: 4.0, privacyScore: 3.5,
        avgRating: 3.8, reviewCount: 3,
        status: "active", verified: false,
        amenities: [],
    },
    {
        type: "washroom",
        name: "Seawoods Grand Central Premium Restroom",
        address: "Seawoods, Navi Mumbai",
        lat: 19.0172, lng: 73.0188,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 4.8, safetyScore: 4.9, privacyScore: 4.7,
        avgRating: 4.8, reviewCount: 26,
        status: "active", verified: true,
        amenities: ["Lounge Area", "Hot Water", "Charging Points"],
    },
    {
        type: "pharmacy",
        name: "Netmeds Pharmacy — Powai",
        address: "Hiranandani Gardens, Powai, Mumbai",
        lat: 19.1176, lng: 72.9060,
        hasPads: true, isFree: false, is24x7: false,
        cleanlinessScore: 4.2, safetyScore: 4.3, privacyScore: 3.9,
        avgRating: 4.2, reviewCount: 8,
        status: "active", verified: true,
        amenities: [],
    },
];

// ─── Seed Vouchers ────────────────────────────────────────────────────────────
const VOUCHERS = [
    {
        icon: "shopping_cart",
        title: "₹50 Off on Blinkit",
        sub: "Min order ₹199",
        pointsCost: 100,
        value: 50,
        brand: "Blinkit",
        code: "NAVHER50",
        expiresAt: "2026-06-30",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
    },
    {
        icon: "bolt",
        title: "₹100 Off on Zepto",
        sub: "Min order ₹499",
        pointsCost: 200,
        value: 100,
        brand: "Zepto",
        code: "NAVHER100",
        expiresAt: "2026-06-30",
        bg: "bg-purple-50",
        color: "text-purple-600",
    },
    {
        icon: "medical_services",
        title: "Free Pad Pack",
        sub: "Redeemable at partner stores",
        pointsCost: 50,
        value: 0,
        brand: "NavHer Partner",
        code: "NAVHERFREE",
        expiresAt: "2026-06-30",
        bg: "bg-secondary-container",
        color: "text-secondary",
    },
    {
        icon: "local_grocery_store",
        title: "₹75 Off on Swiggy Instamart",
        sub: "Min order ₹299",
        pointsCost: 150,
        value: 75,
        brand: "Swiggy Instamart",
        code: "NH75INSTA",
        expiresAt: "2026-05-31",
        bg: "bg-orange-50",
        color: "text-orange-600",
    },
    {
        icon: "favorite",
        title: "1-Month Period Tracker Premium",
        sub: "NavHer+ subscription",
        pointsCost: 300,
        value: 0,
        brand: "NavHer",
        code: "NHPLUS1M",
        expiresAt: "2026-12-31",
        bg: "bg-primary-fixed",
        color: "text-primary",
    },
];

async function clearCollection(colName) {
    const snap = await getDocs(collection(db, colName));
    const deletes = snap.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deletes);
    console.log(`✓ Cleared ${colName} (${snap.size} docs)`);
}

async function seed() {
    console.log("🌱 Starting NavHer Firestore seed...\n");

    // Clear existing data
    await clearCollection("locations");
    await clearCollection("vouchers");

    // Seed locations
    console.log("📍 Seeding locations...");
    for (const loc of LOCATIONS) {
        const ref = await addDoc(collection(db, "locations"), {
            ...loc,
            createdAt: new Date(),
            updatedAt: new Date(),
            addedBy: "seed-script",
        });
        console.log(`  ✓ ${loc.name} (${ref.id})`);
    }

    // Seed vouchers
    console.log("\n🎁 Seeding vouchers...");
    for (const v of VOUCHERS) {
        const ref = await addDoc(collection(db, "vouchers"), v);
        console.log(`  ✓ ${v.title} (${ref.id})`);
    }

    console.log("\n✅ Seed complete!");
    process.exit(0);
}

seed().catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
});
