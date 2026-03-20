import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { triggerSOS, cancelSOS } from '../../services/sosService';
import { useAppStore } from '../../store';
import { auth } from '../../lib/firebase';
import toast from 'react-hot-toast';

const STEP_ICONS = [
    { icon: 'notifications_active', bg: 'bg-primary-fixed', color: 'text-primary', title: '1. Alerts Sent', desc: 'Nearby verified helpers receive an urgent notification.' },
    { icon: 'chat_bubble', bg: 'bg-tertiary-fixed', color: 'text-tertiary', title: '2. Secure Chat', desc: 'A private encrypted chat opens with active responders.' },
    { icon: 'location_on', bg: 'bg-secondary-fixed', color: 'text-secondary', title: '3. Location Shared', desc: 'Your live location is shared only with confirmed matches.' },
];

export default function CommunitySOS() {
    const navigate = useNavigate();
    const [anon, setAnon] = useState(true);
    const [pressed, setPressed] = useState(false);
    const [sosActive, setSosActive] = useState(false);
    const [sosId, setSosId] = useState(null);
    const [countdown, setCountdown] = useState(10);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { user, triggerSOS: storeTriggerSOS, clearSOS } = useAppStore();
    const timerRef = useRef(null);

    // Countdown timer when SOS is active
    useEffect(() => {
        if (sosActive && countdown > 0) {
            timerRef.current = setTimeout(() => setCountdown(c => c - 1), 1000);
        }
        return () => clearTimeout(timerRef.current);
    }, [sosActive, countdown]);

    const handleActivateSOS = async () => {
        setLoading(true);
        setError('');
        try {
            const position = await new Promise((res, rej) =>
                navigator.geolocation.getCurrentPosition(res, rej, { timeout: 8000 })
            );
            const { latitude: lat, longitude: lng } = position.coords;
            const uid = auth.currentUser?.uid;
            const { sosId: id } = await triggerSOS({
                userId: uid,
                userName: anon ? 'Anonymous' : (user?.name || 'NavHer User'),
                userAvatar: anon ? '🦊' : (user?.avatar || '🦊'),
                lat,
                lng,
            });
            setSosId(id);
            setSosActive(true);
            setCountdown(10);
            storeTriggerSOS({ lat, lng });
        } catch (err) {
            console.error('SOS error:', err);
            toast.error('Could not get location. Please enable GPS and try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCancelSOS = async () => {
        if (sosId) await cancelSOS(sosId);
        setSosActive(false);
        setSosId(null);
        setCountdown(10);
        clearSOS();
    };


    return (
        <div className="flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            {/* Inline SOS pulse keyframes */}
            <style>{`
                @keyframes sos-pulse {
                    0%   { transform: scale(.8); opacity: 0.5; }
                    50%  { transform: scale(1);   opacity: 0.3; }
                    100% { transform: scale(1.2); opacity: 0;   }
                }
                .sos-ring-1 { animation: sos-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite; }
                .sos-ring-2 { animation: sos-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite; animation-delay: 0.5s; }
            `}</style>

            {/* Top Bar */}
            <header className="w-full top-0 sticky z-50 bg-white flex items-center justify-between px-4 h-16 border-b-2 border-zinc-100">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors"
                    >
                        <span className="material-symbols-outlined text-zinc-500">arrow_back</span>
                    </button>
                    <h1 className="font-headline font-extrabold text-[28px] tracking-tight text-primary">
                        Safety SOS
                    </h1>
                </div>
                <div className="flex items-center gap-2 bg-secondary-container px-3 py-1.5 rounded-full border-2 border-secondary/20">
                    <span
                        className="material-symbols-outlined text-on-secondary-container text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        verified_user
                    </span>
                    <span className="text-xs font-bold text-on-secondary-container tracking-tight">SECURE</span>
                </div>
            </header>

            <main className="px-5 pt-4 space-y-6">
                {/* Anonymous Mode Toggle */}
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border-2 border-outline-variant">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary-fixed rounded-full overflow-hidden flex items-center justify-center border-2 border-primary/20">
                            <span className="text-4xl">{anon ? '🦊' : (user?.avatar || '🦊')}</span>
                        </div>
                        <div>
                            <p className="font-bold text-on-surface">Anonymous Mode</p>
                            <p className="text-xs text-on-surface-variant">Your identity stays hidden</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={anon}
                            onChange={() => setAnon(a => !a)}
                        />
                        <div className="w-14 h-8 bg-surface-container-highest rounded-full peer
                            peer-checked:bg-secondary
                            after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white
                            after:rounded-full after:h-6 after:w-6 after:transition-all
                            peer-checked:after:translate-x-6 border border-outline-variant"
                        />
                    </label>
                </div>

                {/* SOS Core Area */}
                <div className="relative flex flex-col items-center justify-center py-10 space-y-8">
                    {/* Pulsing Rings — behind everything */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="absolute w-64 h-64 bg-primary/20 rounded-full sos-ring-1" />
                        <div className="absolute w-80 h-80 bg-primary/10 rounded-full sos-ring-2" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        {/* Main SOS Button */}
                        {!sosActive ? (
                            <button
                                className="relative w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center border-4 border-[#d33c5e] transition-all disabled:opacity-60"
                                style={{ boxShadow: pressed ? 'none' : '0 4px 0 0 #d33c5e' }}
                                onMouseDown={() => setPressed(true)}
                                onMouseUp={() => { setPressed(false); handleActivateSOS(); }}
                                onTouchStart={() => setPressed(true)}
                                onTouchEnd={() => { setPressed(false); handleActivateSOS(); }}
                                disabled={loading}
                            >
                                <span className="material-symbols-outlined text-white text-6xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                                <span className="text-white font-extrabold text-xl tracking-tight">{loading ? 'Locating...' : 'ACTIVATE SOS'}</span>
                            </button>
                        ) : (
                            <div className="w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center border-4 border-[#d33c5e] animate-pulse">
                                <span className="material-symbols-outlined text-white text-5xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
                                <span className="text-white font-extrabold text-2xl">{String(countdown).padStart(2, '0')}s</span>
                                <span className="text-white/80 text-xs font-bold">BROADCASTING</span>
                            </div>
                        )}

                        <div className="text-center px-4">
                            {error && <p className="text-red-500 font-bold text-sm mb-2">{error}</p>}
                            {sosActive ? (
                                <>
                                    <p className="text-on-surface font-bold text-lg mb-1">🚨 Alert Sent — Searching...</p>
                                    <p className="text-primary font-extrabold text-2xl tracking-tighter">00:{String(countdown).padStart(2, '0')}</p>
                                    <button onClick={() => navigate(`/app/sos-chat?sosId=${sosId}`)} className="mt-3 px-6 py-2 bg-secondary text-white font-bold rounded-full text-sm">
                                        Open Chat with Helpers →
                                    </button>
                                </>
                            ) : (
                                <p className="text-on-surface-variant text-sm max-w-[280px] mx-auto">
                                    Broadcast an anonymous alert to verified women helpers within 500m.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Cancel */}
                    {sosActive && (
                        <button
                            onClick={handleCancelSOS}
                            className="px-8 py-3 bg-white text-on-surface-variant font-bold border-2 border-outline-variant rounded-full text-sm"
                            style={{ boxShadow: '0 4px 0 0 #cbd5e1' }}
                        >
                            CANCEL ALERT
                        </button>
                    )}
                </div>

                {/* What happens next? */}
                <section className="space-y-4">
                    <h2 className="font-extrabold text-xl px-2 tracking-tight">What happens next?</h2>
                    <div className="grid grid-cols-1 gap-3">
                        {STEP_ICONS.map((s) => (
                            <div key={s.title} className="bg-white p-4 rounded-lg border-2 border-outline-variant flex gap-4">
                                <div className={`w-12 h-12 ${s.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                                    <span
                                        className={`material-symbols-outlined ${s.color}`}
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        {s.icon}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">{s.title}</p>
                                    <p className="text-sm text-on-surface-variant">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fallback — Emergency Call */}
                <button
                    onClick={() => window.open('tel:112')}
                    className="w-full bg-surface-container-highest/30 border-2 border-dashed border-error/40 p-5 rounded-lg flex items-center justify-between group active:scale-95 transition-all"
                >
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-error text-3xl">call</span>
                        <div className="text-left">
                            <p className="font-extrabold text-error">Call Emergency Services</p>
                            <p className="text-xs text-on-surface-variant">Dial 112 immediately</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-error">chevron_right</span>
                </button>
            </main>

            <BottomNav />
        </div>
    );
}
