import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { useAppStore } from '../../store';
import { getUserStats } from '../../services/userService';
import { auth } from '../../lib/firebase';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const MENU = [
    { icon: 'card_giftcard', label: 'My Rewards', path: '/app/rewards' },
    { icon: 'contact_emergency', label: 'Safety Contacts', path: '/app/settings' },
    { icon: 'calendar_month', label: 'Cycle Privacy', path: '/app/settings' },
    { icon: 'notifications_active', label: 'Notification Settings', path: '/app/notifications' },
];

// Compute level title based on points
function getLevelInfo(points) {
    if (points < 100) return { level: 1, title: 'Newcomer', next: 100 };
    if (points < 300) return { level: 2, title: 'Explorer', next: 300 };
    if (points < 600) return { level: 3, title: 'Pad Finder', next: 600 };
    if (points < 1000) return { level: 4, title: 'Safe Scout', next: 1000 };
    if (points < 1500) return { level: 5, title: 'Loo Guardian', next: 1500 };
    if (points < 2200) return { level: 6, title: 'Pad Guardian', next: 2200 };
    if (points < 3000) return { level: 7, title: 'Safety Hero', next: 3000 };
    return { level: 8, title: 'NavHer Legend', next: points + 1 };
}

function getMemberSince(firebaseUser) {
    try {
        const created = firebaseUser?.metadata?.creationTime;
        if (!created) return 'Recent member';
        const date = new Date(created);
        return `Member since ${date.toLocaleString('default', { month: 'short', year: 'numeric' })}`;
    } catch {
        return 'NavHer Member';
    }
}

function getLooieTip(stats, levelInfo, userName) {
    const name = userName ? userName.split(' ')[0] : 'there';
    if (stats.reviewsWritten < 3) return `Write ${3 - stats.reviewsWritten} more review${3 - stats.reviewsWritten !== 1 ? 's' : ''} to unlock your first badge, ${name}!`;
    if (stats.locationsAdded < 5) return `Add ${5 - stats.locationsAdded} more location${5 - stats.locationsAdded !== 1 ? 's' : ''} to earn the Pioneer badge!`;
    return `Amazing work, ${name}! You're a Level ${levelInfo.level} ${levelInfo.title}. Keep helping the community! 🦊`;
}

export default function Profile() {
    const navigate = useNavigate();
    const { user, setUser } = useAppStore();
    const [stats, setStats] = useState({ locationsAdded: 0, reviewsWritten: 0, sosesHelped: 0 });

    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if (uid) {
            getUserStats(uid).then(setStats).catch(console.error);
        }
    }, []);

    const points = user?.foxPoints ?? 0;
    const levelInfo = getLevelInfo(points);
    const xpPct = Math.min(100, Math.round((points / levelInfo.next) * 100));
    const memberSince = getMemberSince(auth.currentUser);
    const looieTip = getLooieTip(stats, levelInfo, user?.name);

    const STATS = [
        { icon: 'add_location', bg: 'bg-tertiary-fixed', text: 'text-tertiary', label: 'Locations Added', val: String(stats.locationsAdded) },
        { icon: 'rate_review', bg: 'bg-secondary-fixed', text: 'text-secondary', label: 'Reviews', val: String(stats.reviewsWritten) },
        { icon: 'emergency_share', bg: 'bg-error-container', text: 'text-error', label: 'SOSes Helped', val: String(stats.sosesHelped) },
        { icon: 'toll', bg: 'bg-primary-fixed', text: 'text-primary', label: 'Points Earned', val: String(points) },
    ];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/auth/onboarding');
        } catch (err) {
            console.error('Logout error:', err);
            toast.error('Failed to log out. Please try again.');
        }
    };

    return (
        <div className="min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            {/* Header */}
            <header className="bg-white fixed top-0 w-full z-50 border-b-2 border-neutral-100 shadow-sm flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/app/map')} className="text-primary hover:bg-rose-50 p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="font-headline font-extrabold text-[26px] tracking-tight text-primary">Profile</h1>
                </div>
                <button onClick={() => navigate('/app/settings')} className="text-on-surface-variant p-2 rounded-full hover:bg-surface-container">
                    <span className="material-symbols-outlined">settings</span>
                </button>
            </header>

            <main className="pt-24 px-5 space-y-6">
                {/* Avatar */}
                <section className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-primary p-1 bg-white flex items-center justify-center text-6xl">
                            {user?.avatar || '🦊'}
                        </div>
                        <div className="absolute bottom-1 right-1 bg-secondary text-white p-1.5 rounded-full border-4 border-white">
                            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-extrabold text-2xl tracking-tight text-on-surface">{user?.name || 'NavHer User'}</h2>
                        <p className="text-on-surface-variant font-medium text-[15px]">{memberSince}</p>
                    </div>
                </section>

                {/* XP Card */}
                <section className="bg-primary rounded-lg p-6 text-white relative overflow-hidden"
                    style={{ boxShadow: '0 4px 0 0 #d33c5e' }}>
                    <div className="absolute top-0 left-0 w-full h-1 pointer-events-none" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%)' }} />
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-90">Current Status</p>
                            <h3 className="text-xl font-extrabold">Level {levelInfo.level}: {levelInfo.title}</h3>
                        </div>
                        <span className="material-symbols-outlined text-4xl opacity-50">shield_moon</span>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 bg-black/20 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full relative transition-all duration-500" style={{ width: `${xpPct}%` }}>
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-full" />
                            </div>
                        </div>
                        <div className="flex justify-between text-sm font-bold">
                            <span>{points.toLocaleString()} pts</span>
                            <span>{levelInfo.next.toLocaleString()} pts</span>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-2 gap-4">
                    {STATS.map(s => (
                        <div key={s.label} className="bg-white p-5 rounded-lg border-2 border-neutral-100 flex flex-col items-center text-center space-y-2 shadow-card">
                            <div className={`${s.bg} p-3 rounded-full ${s.text}`}>
                                <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                            </div>
                            <p className="text-2xl font-extrabold text-on-surface">{s.val}</p>
                            <p className="section-label">{s.label}</p>
                        </div>
                    ))}
                </section>

                {/* Looie tip */}
                <section className="bg-tertiary-container/30 border-2 border-dashed border-tertiary rounded-lg p-4 flex items-center gap-4">
                    <div className="w-14 h-14 shrink-0 bg-white rounded-full border-2 border-tertiary flex items-center justify-center text-2xl">🦊</div>
                    <p className="text-sm font-bold text-on-tertiary-container leading-tight">"{looieTip}"</p>
                </section>

                {/* Menu */}
                <section className="bg-white rounded-lg border-2 border-neutral-100 overflow-hidden shadow-card mb-8">
                    {MENU.map((m, i) => (
                        <button key={m.label} onClick={() => navigate(m.path)}
                            className={`w-full flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors ${i < MENU.length - 1 ? 'border-b border-neutral-50' : ''}`}>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">{m.icon}</span>
                                <span className="font-bold text-on-surface">{m.label}</span>
                            </div>
                            <span className="material-symbols-outlined text-neutral-400">chevron_right</span>
                        </button>
                    ))}
                    <button onClick={handleLogout}
                        className="w-full flex items-center justify-between p-5 hover:bg-red-50 transition-colors text-error border-t border-neutral-50">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">logout</span>
                            <span className="font-bold">Logout</span>
                        </div>
                        <span className="material-symbols-outlined opacity-50">chevron_right</span>
                    </button>
                </section>
            </main>
            <BottomNav />
        </div>
    );
}
