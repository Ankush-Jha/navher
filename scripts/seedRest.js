#!/usr/bin/env node
/**
 * Seeds Firestore via REST API using the Firebase CLI access token.
 * No gcloud or service account needed — leverages your existing firebase login.
 * Run: bun scripts/seedRest.js
 */

import { execSync } from "child_process";

const PROJECT = "navher-app-wiscon";
const DB = "(default)";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/${DB}/documents`;

// Get access token from Firebase CLI session
let TOKEN;
try {
    TOKEN = execSync("firebase login:list --json 2>/dev/null | bun -e \"let d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(Object.values(d?.result||{})[0]?.tokens?.access_token||'')\"", { encoding: "utf8" }).trim();
} catch { }

// Alternative: try gcloud auth
if (!TOKEN) {
    try { TOKEN = execSync("gcloud auth print-access-token 2>/dev/null", { encoding: "utf8" }).trim(); } catch { }
}

// Last resort: use firebase application default token
if (!TOKEN) {
    try { TOKEN = execSync("firebase --project=" + PROJECT + " auth:export /dev/null 2>&1 | grep -o 'access_token.*' | head -1", { encoding: "utf8" }).trim(); } catch { }
}

if (!TOKEN) {
    console.error("❌ Could not get access token. Run 'firebase login' and try again, or add a serviceAccount key.");
    process.exit(1);
}

async function addDoc(collectionId, data) {
    const res = await fetch(`${BASE}/${collectionId}`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify({ fields: toFirestoreFields(data) }),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
    }
    return res.json();
}

function toFirestoreFields(obj) {
    const fields = {};
    for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "string") fields[k] = { stringValue: v };
        else if (typeof v === "boolean") fields[k] = { booleanValue: v };
        else if (typeof v === "number" && Number.isInteger(v)) fields[k] = { integerValue: String(v) };
        else if (typeof v === "number") fields[k] = { doubleValue: v };
    }
    return fields;
}

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
    { type: "pad_machine", name: "Lokhandwala Market Dispenser", address: "Lokhandwala Complex, Andheri West", lat: 19.1368, lng: 72.8293, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 3.7, safetyScore: 4.0, privacyScore: 3.5, avgRating: 3.8, reviewCount: 3, status: "active", verified: false },
    { type: "washroom", name: "Seawoods Grand Central Restroom", address: "Seawoods, Navi Mumbai", lat: 19.0172, lng: 73.0188, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.8, safetyScore: 4.9, privacyScore: 4.7, avgRating: 4.8, reviewCount: 26, status: "active", verified: true },
    { type: "pharmacy", name: "Netmeds Pharmacy — Powai", address: "Hiranandani Gardens, Powai, Mumbai", lat: 19.1176, lng: 72.9060, hasPads: true, isFree: false, is24x7: false, cleanlinessScore: 4.2, safetyScore: 4.3, privacyScore: 3.9, avgRating: 4.2, reviewCount: 8, status: "active", verified: true },
];

const VOUCHERS = [
    { icon: "shopping_cart", title: "50 Off on Blinkit", sub: "Min order 199", pointsCost: 100, value: 50, brand: "Blinkit", code: "NAVHER50", bg: "bg-yellow-50", color: "text-yellow-600" },
    { icon: "bolt", title: "100 Off on Zepto", sub: "Min order 499", pointsCost: 200, value: 100, brand: "Zepto", code: "NAVHER100", bg: "bg-purple-50", color: "text-purple-600" },
    { icon: "medical_services", title: "Free Pad Pack", sub: "Redeemable at partner stores", pointsCost: 50, value: 0, brand: "NavHer Partner", code: "NAVHERFREE", bg: "bg-secondary-container", color: "text-secondary" },
    { icon: "local_grocery_store", title: "75 Off on Swiggy Instamart", sub: "Min order 299", pointsCost: 150, value: 75, brand: "Swiggy Instamart", code: "NH75INSTA", bg: "bg-orange-50", color: "text-orange-600" },
    { icon: "favorite", title: "1-Month Tracker Premium", sub: "NavHer+ subscription", pointsCost: 300, value: 0, brand: "NavHer", code: "NHPLUS1M", bg: "bg-primary-fixed", color: "text-primary" },
];

async function main() {
    console.log("🌱 Seeding NavHer Firestore via REST...\n");

    console.log("📍 Seeding locations...");
    let ok = 0;
    for (const loc of LOCATIONS) {
        try {
            await addDoc("locations", loc);
            console.log(`  ✓ ${loc.name}`);
            ok++;
        } catch (e) {
            console.error(`  ✗ ${loc.name}:`, e.message);
        }
    }
    console.log(`\n📍 ${ok}/${LOCATIONS.length} locations seeded`);

    console.log("\n🎁 Seeding vouchers...");
    let vok = 0;
    for (const v of VOUCHERS) {
        try {
            await addDoc("vouchers", v);
            console.log(`  ✓ ${v.title}`);
            vok++;
        } catch (e) {
            console.error(`  ✗ ${v.title}:`, e.message);
        }
    }
    console.log(`\n🎁 ${vok}/${VOUCHERS.length} vouchers seeded`);

    console.log("\n✅ Seed complete!");
}

main().catch(e => { console.error("❌", e.message); process.exit(1); });
