const PROJECT = "navher-app-wiscon";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

async function get(collection, limit = 10) {
    const res = await fetch(`${BASE}/${collection}?pageSize=${limit}`);
    const data = await res.json();
    if (!res.ok) return { error: data.error?.message, status: res.status };
    return { count: data.documents?.length ?? 0, docs: data.documents ?? [] };
}

async function main() {
    console.log("🦊 NavHer Feature Audit — " + new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
    console.log("=".repeat(60));

    // 1. Hosting
    console.log("\n🌐 FIREBASE HOSTING");
    const hostRes = await fetch("https://navher-app-wiscon.web.app");
    const html = await hostRes.text();
    console.log(`   HTTP ${hostRes.status}: ${hostRes.ok ? "✅" : "❌"}`);
    console.log(`   Vite bundle present: ${html.includes("assets/index") ? "✅" : "❌"}`);

    // 2. Google Maps API
    console.log("\n🗺️  GOOGLE MAPS API KEY");
    const mapsRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Mumbai&key=AIzaSyCScKMpkjoLB5tTF5YUglACQ692wXFvjNo`);
    const mapsData = await mapsRes.json();
    console.log(`   Status: ${mapsData.status}`);
    console.log(`   Key valid: ${(mapsData.status === "OK" || mapsData.status === "ZERO_RESULTS") ? "✅" : "❌ " + (mapsData.error_message || "")}`);

    // 3. Public Firestore collections
    console.log("\n📦 FIRESTORE COLLECTIONS");
    for (const col of ["locations", "vouchers"]) {
        const r = await get(col);
        console.log(`   ${r.error ? "❌" : "✅"} ${col}: ${r.error ? r.error : r.count + " docs"}`);
    }

    // 4. Location data details
    console.log("\n📍 LOCATION DATA");
    const locs = await get("locations", 15);
    if (!locs.error && locs.docs.length > 0) {
        for (const doc of locs.docs) {
            const f = doc.fields;
            const name = f?.name?.stringValue;
            const status = f?.status?.stringValue;
            const type = f?.type?.stringValue;
            const lat = f?.lat?.doubleValue;
            const hasPads = f?.hasPads?.booleanValue;
            console.log(`   ${status === "active" ? "✅" : "⚠️"} [${type}] ${name} | status=${status} lat=${lat} hasPads=${hasPads}`);
        }
    } else {
        console.log(`   ❌ No locations: ${locs.error}`);
    }

    // 5. Voucher data
    console.log("\n🎁 VOUCHERS");
    const vouchers = await get("vouchers", 10);
    if (!vouchers.error && vouchers.docs.length > 0) {
        for (const doc of vouchers.docs) {
            const f = doc.fields;
            console.log(`   ✅ ${f?.title?.stringValue} — ${f?.pointsCost?.integerValue}pts — code:${f?.code?.stringValue}`);
        }
    } else {
        console.log(`   ❌ ${vouchers.error}`);
    }

    // 6. Security rules
    console.log("\n🔒 SECURITY RULES (unauthenticated reads should be DENIED)");
    for (const col of ["users", "cycle_logs", "orders"]) {
        const r = await get(col);
        if (r.error) {
            console.log(`   ✅ ${col}: BLOCKED — "${r.error}"`);
        } else {
            console.log(`   ❌ ${col}: EXPOSED — ${r.count} docs without auth!`);
        }
    }

    // 7. SOS
    console.log("\n🆘 SOS COLLECTION");
    const sos = await get("sos_alerts");
    console.log(`   ${sos.error ? "✅ Protected (" + sos.status + ")" : "📋 " + sos.count + " active SOS docs"}`);

    console.log("\n" + "=".repeat(60));
    console.log("Audit complete ✅");
}

main().catch(console.error);
