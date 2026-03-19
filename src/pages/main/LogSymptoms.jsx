import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import DuoButton from '../../components/DuoButton';
import { logCycleDay } from '../../services/cycleService';
import { auth } from '../../lib/firebase';
import { db } from '../../lib/firebase';
import { doc, increment, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const FLOW_OPTIONS = ['None', 'Spotting', 'Light', 'Medium', 'Heavy'];
const MOODS = ['😊', '😴', '😢', '😤', '🥰', '🤒'];
const SYMPTOMS = [
    { icon: 'sprint', label: 'Cramps' },
    { icon: 'headset_mic', label: 'Headache' },
    { icon: 'king_bed', label: 'Fatigue' },
    { icon: 'local_dining', label: 'Cravings' },
    { icon: 'sentiment_very_dissatisfied', label: 'Bloating' },
    { icon: 'water', label: 'Back Pain' },
];

export default function LogSymptoms() {
    const navigate = useNavigate();
    const [flow, setFlow] = useState(2);
    const [mood, setMood] = useState(null);
    const [symptoms, setSymptoms] = useState([]);
    const [pain, setPain] = useState(3);
    const [note, setNote] = useState('');
    const [done, setDone] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const toggleSymptom = (s) =>
        setSymptoms((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

    const handleSave = async () => {
        const uid = auth.currentUser?.uid;
        if (!uid) {
            toast.error('Please log in to save symptoms.');
            return;
        }
        setSaving(true);
        setError('');
        try {
            const today = new Date().toISOString().split('T')[0];
            await logCycleDay({
                userId: uid,
                date: today,
                type: 'symptom',
                symptoms,
                flow: FLOW_OPTIONS[flow].toLowerCase(),
                notes: `Pain: ${pain}/10. Mood: ${mood || 'not set'}. ${note}`.trim(),
            });

            // Award +10 foxPoints in Firestore
            try {
                await updateDoc(doc(db, 'users', uid), { 'rewards.totalPoints': increment(10) });
            } catch (pointsErr) {
                console.warn('Points update failed (non-critical):', pointsErr);
            }

            setDone(true);
        } catch (err) {
            console.error('Log error:', err);
            toast.error('Could not save log. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    if (done) {
        return (
            <div className="flex flex-col h-dvh bg-white font-display items-center justify-center px-6 text-center">
                <div className="text-7xl mb-6">🎉</div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Logged!</h2>
                <p className="text-slate-500 font-semibold mb-2">
                    <span className="font-extrabold text-accent-green">+10 Points</span> added to your balance
                </p>
                <p className="text-xs text-slate-400 font-semibold mb-8">Keep logging daily to maintain your streak 🔥</p>
                <DuoButton color="primary" onClick={() => navigate('/app/tracker')}>Back to Tracker</DuoButton>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-dvh bg-white font-display pb-32">
            <TopBar title="Log Today" onBack={() => navigate(-1)} />

            <div className="px-5 pt-2 space-y-6">
                {/* Flow */}
                <div>
                    <p className="section-label mb-3">Flow Intensity</p>
                    <div className="flex gap-2">
                        {FLOW_OPTIONS.map((f, i) => (
                            <button
                                key={f}
                                onClick={() => setFlow(i)}
                                className={`flex-1 py-3 rounded-xl text-xs font-extrabold border-2 transition-all ${flow === i
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-slate-100 text-slate-500 bg-slate-50'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mood */}
                <div>
                    <p className="section-label mb-3">Today's Mood</p>
                    <div className="flex gap-3 justify-between">
                        {MOODS.map((m, i) => (
                            <button
                                key={i}
                                onClick={() => setMood(i)}
                                className={`flex-1 text-3xl py-3 rounded-xl border-2 transition-all ${mood === i ? 'border-primary bg-primary/8 scale-110' : 'border-slate-100 bg-slate-50'
                                    }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Symptoms */}
                <div>
                    <p className="section-label mb-3">Symptoms</p>
                    <div className="grid grid-cols-3 gap-2">
                        {SYMPTOMS.map((s) => (
                            <button
                                key={s.label}
                                onClick={() => toggleSymptom(s.label)}
                                className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl border-2 transition-all ${symptoms.includes(s.label)
                                    ? 'border-primary bg-primary/10'
                                    : 'border-slate-100 bg-slate-50'
                                    }`}
                            >
                                <span className={`material-symbols-outlined fill text-[22px] ${symptoms.includes(s.label) ? 'text-primary' : 'text-slate-400'}`}>
                                    {s.icon}
                                </span>
                                <span className={`text-[11px] font-extrabold ${symptoms.includes(s.label) ? 'text-primary' : 'text-slate-500'}`}>
                                    {s.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pain level */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <p className="section-label">Pain Level</p>
                        <span className="font-extrabold text-primary text-lg">{pain}/10</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        value={pain}
                        onChange={(e) => setPain(Number(e.target.value))}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                        <span>No Pain</span>
                        <span>Severe</span>
                    </div>
                </div>

                {/* Note */}
                <div>
                    <p className="section-label mb-2">Quick Note</p>
                    <div className="notion-card p-4 shadow-card">
                        <textarea
                            rows={3}
                            placeholder="Anything else to note…"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-full text-sm font-semibold text-slate-700 placeholder:text-slate-300 bg-transparent focus:outline-none resize-none"
                        />
                    </div>
                </div>
            </div>

            <div className="bottom-cta">
                {error && <p className="text-center text-red-500 font-bold text-sm mb-3">{error}</p>}
                <DuoButton color="primary" onClick={handleSave} disabled={saving}>
                    {saving ? (
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Saving…</span>
                    ) : (
                        <><span className="material-symbols-outlined fill mr-2">check_circle</span>Save Today's Log</>
                    )}
                </DuoButton>
            </div>
        </div>
    );
}
