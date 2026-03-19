import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { getCurrentCycleStatus, logCycleDay } from '../../services/cycleService';
import { auth } from '../../lib/firebase';
import toast from 'react-hot-toast';

const PHASE_INFO = {
    period: { label: 'Period Active 🔴', tip: 'Stay warm and hydrated. Your body is working hard.', badge: 'bg-red-100 text-red-600', color: 'border-red-400' },
    pms: { label: 'PMS Phase 🟡', tip: 'Be gentle with yourself. PMS can bring mood shifts.', badge: 'bg-yellow-100 text-yellow-600', color: 'border-yellow-400' },
    ovulation: { label: 'Ovulation Day 💚', tip: 'Energy peak! Great day for outdoor activities.', badge: 'bg-green-100 text-green-600', color: 'border-green-400' },
    fertile: { label: 'Fertile Window 💚', tip: 'High-energy days ahead. Stay active!', badge: 'bg-teal-100 text-teal-600', color: 'border-teal-400' },
    follicular: { label: 'Follicular Phase 🔵', tip: 'Energy is rising. Great time to start new things!', badge: 'bg-blue-100 text-blue-600', color: 'border-blue-400' },
    unknown: { label: 'Log Your Cycle', tip: 'Log your period start to get predictions.', badge: 'bg-slate-100 text-slate-600', color: 'border-slate-200' },
};

export default function CycleTracker() {
    const navigate = useNavigate();
    const [cycleStatus, setCycleStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [logging, setLogging] = useState(false);
    const [logMessage, setLogMessage] = useState('');

    // Current month display
    const now = new Date();
    const monthName = now.toLocaleString('default', { month: 'long', year: 'numeric' });
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const todayDay = now.getDate();

    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if (!uid) { setLoading(false); return; }
        getCurrentCycleStatus(uid).then(setCycleStatus).catch(console.error).finally(() => setLoading(false));
    }, []);

    const handleLogPeriodStart = async () => {
        setLogging(true);
        setLogMessage('');
        try {
            const uid = auth.currentUser?.uid;
            const today = now.toISOString().split('T')[0];
            await logCycleDay({ userId: uid, date: today, type: 'period_start', flow: 'medium' });
            setLogMessage('✅ Period logged! Predictions updated.');
            // Refresh
            const updated = await getCurrentCycleStatus(uid);
            setCycleStatus(updated);
        } catch (err) {
            console.error('Cycle log error:', err);
            toast.error('Could not log period. Please try again.');
        } finally {
            setLogging(false);
        }
    };

    const phase = cycleStatus?.phase || 'unknown';
    const phaseInfo = PHASE_INFO[phase] || PHASE_INFO.unknown;
    const prediction = cycleStatus?.prediction;
    const daysUntil = cycleStatus?.daysUntil;

    // Calendar: which days are period days (from logs)
    const periodDays = new Set();
    (cycleStatus?.logs || []).forEach(log => {
        if (log.type === 'period_start' || log.type === 'period_end') {
            const d = new Date(log.date);
            if (d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()) {
                periodDays.add(d.getDate());
            }
        }
    });

    // Build calendar cells
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    return (
        <div className="flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-28">
            {/* Header */}
            <header className="flex items-center justify-between px-6 h-16 w-full fixed top-0 z-50 bg-white border-b-2 border-zinc-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-50 transition-all text-zinc-500">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="font-headline font-extrabold text-[28px] leading-[1.1] text-primary tracking-tighter">Cycle Tracker</h1>
                </div>
                <div className="w-10" />
            </header>

            <main className="mt-20 px-4 space-y-6">
                {/* Phase Banner */}
                <section className={`relative bg-primary-fixed border-t-4 ${phaseInfo.color} rounded-lg p-5 flex items-start gap-4 shadow-sm overflow-hidden`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-primary/20">
                        <span className="text-3xl">🦊</span>
                    </div>
                    <div className="flex-1">
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-2 ${phaseInfo.badge}`}>
                            {phaseInfo.label}
                        </div>
                        {loading ? (
                            <p className="text-on-primary-fixed font-bold animate-pulse">Loading your cycle…</p>
                        ) : (
                            <>
                                <p className="font-bold text-on-primary-fixed text-[15px] leading-tight">{phaseInfo.tip}</p>
                                {daysUntil !== null && daysUntil > 0 && (
                                    <p className="text-primary font-extrabold text-sm mt-1">Period due in {daysUntil} day{daysUntil !== 1 ? 's' : ''}</p>
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* Calendar */}
                <section className="bg-white rounded-lg p-6 border-2 border-zinc-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-headline font-extrabold text-xl">{monthName}</h2>
                    </div>
                    {/* Day headers */}
                    <div className="grid grid-cols-7 mb-4">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                            <div key={i} className="text-center text-[12px] font-bold text-zinc-400 uppercase tracking-widest">{d}</div>
                        ))}
                    </div>
                    {/* Date cells */}
                    <div className="grid grid-cols-7 gap-y-2">
                        {cells.map((day, i) => {
                            if (!day) return <div key={`e${i}`} className="h-10" />;
                            const isPeriodDay = periodDays.has(day);
                            const isToday = day === todayDay;
                            const isPredicted = prediction && (() => {
                                const periodDate = new Date(prediction.nextPeriodDate);
                                const checkDate = new Date(now.getFullYear(), now.getMonth(), day);
                                const diff = Math.floor((checkDate - periodDate) / 86400000);
                                return diff >= 0 && diff <= 5;
                            })();

                            if (isToday) return (
                                <div key={day} className="flex items-center justify-center h-10 relative">
                                    <div className="absolute inset-0 bg-primary rounded-full scale-75 border-4 border-white shadow-sm" />
                                    <span className="relative z-20 text-white font-bold">{day}</span>
                                </div>
                            );
                            if (isPeriodDay) return (
                                <div key={day} className="flex items-center justify-center h-10 font-bold bg-primary/20 text-primary rounded-full">{day}</div>
                            );
                            if (isPredicted) return (
                                <div key={day} className="flex items-center justify-center h-10 font-bold bg-primary-fixed/60 text-primary rounded-full">{day}</div>
                            );
                            return (
                                <div key={day} className={`flex items-center justify-center h-10 font-medium ${day < todayDay ? 'text-zinc-400' : ''}`}>{day}</div>
                            );
                        })}
                    </div>
                    {/* Legend */}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-zinc-100 justify-center">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <span className="text-xs text-zinc-500 font-bold">Today</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-primary/20" />
                            <span className="text-xs text-zinc-500 font-bold">Logged Period</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-primary-fixed" />
                            <span className="text-xs text-zinc-500 font-bold">Predicted</span>
                        </div>
                    </div>
                </section>

                {/* Prediction Card */}
                {prediction && (
                    <section className="bg-white rounded-lg p-6 border-2 border-zinc-100 shadow-sm">
                        <h3 className="font-headline font-extrabold text-[13px] uppercase tracking-widest text-zinc-400 mb-2">Next Period Prediction</h3>
                        <p className="text-2xl font-extrabold text-on-surface">{new Date(prediction.nextPeriodDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                        <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden mt-3">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${Math.min(100, Math.max(0, ((28 - (daysUntil || 0)) / 28) * 100))}%` }} />
                        </div>
                        <p className="mt-2 text-sm text-zinc-500 font-medium">Avg cycle: {prediction.avgCycleLength} days · Ovulation ~{new Date(prediction.ovulationDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                    </section>
                )}

                {/* Log message  */}
                {logMessage && (
                    <div className={`p-4 rounded-2xl text-center font-bold text-sm border-2 ${logMessage.startsWith('✅') ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-600'}`}>
                        {logMessage}
                    </div>
                )}

                {/* Quick Actions */}
                <section className="grid grid-cols-2 gap-4">
                    <button
                        onClick={handleLogPeriodStart}
                        disabled={logging}
                        className="bg-primary text-white font-headline font-extrabold p-5 rounded-lg text-center flex flex-col items-center gap-2 transition-all active:translate-y-1 disabled:opacity-60"
                        style={{ boxShadow: '0 4px 0 0 #d33c5e' }}
                    >
                        <span className="material-symbols-outlined text-3xl">water_drop</span>
                        <span>{logging ? 'Logging…' : 'Log Period Start'}</span>
                    </button>
                    <button
                        onClick={() => navigate('/app/log-symptoms')}
                        className="text-white font-headline font-extrabold p-5 rounded-lg text-center flex flex-col items-center gap-2 transition-all"
                        style={{ backgroundColor: '#00C4B4', boxShadow: '0 4px 0 0 #008f83' }}
                    >
                        <span className="material-symbols-outlined text-3xl">edit_note</span>
                        <span>Log Symptoms</span>
                    </button>
                </section>

                {/* Insight */}
                <section className="border-2 border-dashed border-zinc-200 rounded-lg p-4 flex items-center gap-4 bg-white">
                    <div className="w-10 h-10 flex-shrink-0 bg-white rounded-full border border-zinc-100 flex items-center justify-center shadow-sm">
                        <span className="text-xl">🦊</span>
                    </div>
                    <p className="text-[15px] text-on-surface-variant italic leading-snug">"{phaseInfo.tip}"</p>
                </section>

                {/* Order CTA */}
                {(phase === 'pms' || phase === 'period') && (
                    <button
                        onClick={() => navigate('/app/emergency')}
                        className="w-full bg-primary text-white font-headline font-extrabold py-4 rounded-full text-lg flex items-center justify-center gap-2"
                        style={{ boxShadow: '0 4px 0 0 #d33c5e' }}
                    >
                        <span className="material-symbols-outlined">shopping_bag</span>
                        Order Pads Now — 15 min delivery
                    </button>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
