// Cycle tracking service — Firestore CRUD for menstrual cycle data
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
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { awardPoints } from "./userService";

// ─── Log a period start / symptom day ────────────────────────────────────────

export async function logCycleDay({ userId, date, type, symptoms = [], notes = "", flow = "" }) {
    const docRef = await addDoc(collection(db, "cycle_logs"), {
        userId,
        date,        // ISO string e.g. "2025-03-19"
        type,        // "period_start" | "period_end" | "symptom" | "ovulation"
        symptoms,    // ["cramps", "headache", ...]
        notes,
        flow,        // "light" | "medium" | "heavy"
        createdAt: serverTimestamp(),
    });

    // Award 10 points for logging
    await awardPoints(userId, 10, "cycle_logged", docRef.id);

    return { id: docRef.id };
}

// ─── Get cycle history for user ───────────────────────────────────────────────

export async function getCycleHistory(userId, monthsBack = 6) {
    const since = new Date();
    since.setMonth(since.getMonth() - monthsBack);
    const sinceStr = since.toISOString().split("T")[0];

    const q = query(
        collection(db, "cycle_logs"),
        where("userId", "==", userId),
        where("date", ">=", sinceStr),
        orderBy("date", "asc")
    );

    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ─── Predict next period ──────────────────────────────────────────────────────

export function predictNextPeriod(cycleLogs) {
    const starts = cycleLogs
        .filter((l) => l.type === "period_start")
        .map((l) => new Date(l.date))
        .sort((a, b) => a - b);

    if (starts.length === 0) return null;

    // With only 1 log, use standard 28-day cycle as baseline prediction
    if (starts.length === 1) {
        const lastStart = starts[0];
        const nextStart = new Date(lastStart.getTime() + 28 * 24 * 60 * 60 * 1000);
        return {
            avgCycleLength: 28,
            nextPeriodDate: nextStart.toISOString().split("T")[0],
            ovulationDate: new Date(lastStart.getTime() + 14 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0],
            estimated: true,
        };
    }

    // Average cycle length from last 3 periods (need ≥ 2 logs)
    const recent = starts.slice(-3);
    const gaps = [];
    for (let i = 1; i < recent.length; i++) {
        gaps.push((recent[i] - recent[i - 1]) / (1000 * 60 * 60 * 24));
    }
    const avgCycleLength = Math.round(gaps.reduce((a, b) => a + b, 0) / gaps.length);
    const lastStart = recent[recent.length - 1];
    const nextStart = new Date(lastStart.getTime() + avgCycleLength * 24 * 60 * 60 * 1000);

    return {
        avgCycleLength,
        nextPeriodDate: nextStart.toISOString().split("T")[0],
        ovulationDate: new Date(lastStart.getTime() + (avgCycleLength - 14) * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0],
    };
}

// ─── Get current cycle status ─────────────────────────────────────────────────

export async function getCurrentCycleStatus(userId) {
    const logs = await getCycleHistory(userId, 6);
    const prediction = predictNextPeriod(logs);

    // Days until next period
    let daysUntil = null;
    let phase = "unknown";

    if (prediction) {
        const today = new Date().toISOString().split("T")[0];
        const diff = Math.ceil(
            (new Date(prediction.nextPeriodDate) - new Date(today)) / (1000 * 60 * 60 * 24)
        );
        daysUntil = diff;

        if (diff <= 0) phase = "period";
        else if (diff <= 5) phase = "pms";
        else if (prediction.ovulationDate === today) phase = "ovulation";
        else if (diff <= 10) phase = "fertile";
        else phase = "follicular";
    }

    return { logs, prediction, daysUntil, phase };
}
