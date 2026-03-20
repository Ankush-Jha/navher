import React, { useState, useEffect } from 'react';
import Avatar from '../../components/Avatar';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { useAppStore } from '../../store';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { awardPoints } from '../../services/userService';
import toast from 'react-hot-toast';

const DEFAULT_VOUCHERS = [
    { icon: 'shopping_cart', bg: 'bg-surface-container', color: 'text-primary', title: '₹50 Blinkit Off', sub: 'Grocery delivery', pointsCost: 100, pts: '100 pts' },
    { icon: 'bolt', bg: 'bg-tertiary-container', color: 'text-tertiary', title: '₹100 Zepto Off', sub: '10-min delivery', pointsCost: 200, pts: '200 pts' },
    { icon: 'medical_services', bg: 'bg-secondary-container', color: 'text-secondary', title: 'Free Sanitary Pad', sub: 'Health & Hygiene', pointsCost: 50, pts: '50 pts' },
];

const ALL_BADGES = [
    { id: 'safety_first', icon: 'verified_user', bg: 'bg-secondary-container', border: 'border-secondary', color: 'text-secondary', label: 'Safety First', reqLevel: 1 },
    { id: 'reviewer_pro', icon: 'rate_review', bg: 'bg-tertiary-container', border: 'border-tertiary', color: 'text-tertiary', label: 'Reviewer Pro', reqLevel: 2 },
    { id: 'first_loo', icon: 'location_on', bg: 'bg-primary-fixed', border: 'border-primary', color: 'text-primary', label: 'First Loo Added', reqLevel: 5 },
    { id: 'streak_master', icon: 'local_fire_department', bg: 'bg-error-container', border: 'border-error', color: 'text-error', label: 'Streak Master', reqLevel: 10 },
];

export default function Rewards() {
    const navigate = useNavigate();
    const { user } = useAppStore();
    const [vouchers, setVouchers] = useState([]);
    const [loadingVouchers, setLoadingVouchers] = useState(true);

    useEffect(() => {
        async function fetchRewards() {
            try {
                const snap = await Promise.race([
                    getDocs(collection(db, 'vouchers')),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000)),
                ]);
                if (!snap.empty) {
                    setVouchers(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                } else {
                    setVouchers(DEFAULT_VOUCHERS);
                }
            } catch (err) {
                console.warn('Vouchers fallback to defaults:', err.message);
                setVouchers(DEFAULT_VOUCHERS);
            } finally {
                setLoadingVouchers(false);
            }
        }
        fetchRewards();
    }, []);

    const xpPercent = Math.min(100, Math.max(0, (user.xp / Math.max(1, user.xpNext)) * 100));
    const [redeemed, setRedeemed] = useState({});

    const handleRedeem = async (v) => {
        const cost = v.pointsCost ?? parseInt(v.pts, 10);
        if (isNaN(cost)) { toast.error('Invalid voucher.'); return; }
        if ((user.foxPoints ?? 0) < cost) {
            toast.error(`You need ${cost} LooPoints. You have ${user.foxPoints ?? 0}.`);
            return;
        }
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        try {
            await awardPoints(uid, -cost, 'voucher_redeemed', v.id || v.title);
            setRedeemed(r => ({ ...r, [v.title]: true }));
            toast.success(`🎉 Redeemed! Your code: ${v.code ?? 'NAVHER'}`, { duration: 6000 });
        } catch (err) {
            console.error('Redeem error:', err);
            toast.error('Redemption failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            {/* Header with primary tactile shadow */}
            <header className="fixed top-0 w-full z-50 flex items-center px-4 h-16 bg-white"
                style={{ boxShadow: '0 4px 0 0 #d33c5e' }}>
                <div className="flex items-center justify-between w-full">
                    <span
                        onClick={() => navigate('/app/map')}
                        className="material-symbols-outlined text-zinc-500 hover:opacity-80 transition-opacity cursor-pointer"
                    >
                        arrow_back
                    </span>
                    <h1 className="font-headline font-extrabold text-[28px] leading-[1.1] tracking-tight text-primary">
                        Rewards
                    </h1>
                    <div className="w-6" />
                </div>
            </header>

            <main className="pt-24 px-4 space-y-6 max-w-md mx-auto w-full">
                {/* Level & XP Status Card */}
                <section className="bg-white rounded-lg p-5 border-2 border-primary/10 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                            <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">Current Status</p>
                            <h2 className="text-xl font-extrabold text-on-surface">Level {user.level}: {user.levelName}</h2>
                        </div>
                        <div className="bg-secondary-container p-2 rounded-full flex items-center justify-center w-12 h-12">
                            <Avatar value={user.avatar} size="w-12 h-12" textSize="text-3xl" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold text-on-surface-variant">
                            <span>{user.xp} XP</span>
                            <span>{user.xpNext} XP</span>
                        </div>
                        <div className="w-full h-4 bg-surface-container-high rounded-full overflow-hidden relative border border-outline-variant">
                            <div className="h-full bg-primary rounded-full relative transition-all duration-500" style={{ width: `${xpPercent}%` }}>
                                {/* Glass glare — single 1px line */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                            auto_awesome
                        </span>
                        <span>You're {Math.max(0, user.xpNext - user.xp)} XP away from Level {user.level + 1}!</span>
                    </div>
                </section>

                {/* LooPoints Balance — tactile card */}
                <section className="grid grid-cols-2 gap-4">
                    <div
                        className="col-span-2 bg-primary text-white p-6 rounded-lg relative overflow-hidden"
                        style={{ boxShadow: '0 4px 0 0 #d33c5e' }}
                    >
                        {/* Glass glare strip */}
                        <div className="absolute top-0 left-0 w-full h-8"
                            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)' }}
                        />
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                monetization_on
                            </span>
                        </div>
                        <p className="font-bold text-white/80 uppercase tracking-widest text-xs mb-1">Your Balance</p>
                        <h3 className="text-4xl font-extrabold">{user.foxPoints || 0} LooPoints</h3>
                    </div>

                    {/* How to earn row */}
                    <div
                        className="col-span-2 flex items-center justify-between p-4 bg-surface-container rounded-lg border-2 border-dashed border-primary/30 cursor-pointer group"
                        onClick={() => toast('💡 Add locations (+15), write reviews (+25), log symptoms (+10), help SOS (+50)!', { icon: '⭐', duration: 5000 })}
                    >
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">stars</span>
                            <span className="font-bold text-on-surface">How to earn more points?</span>
                        </div>
                        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </div>
                </section>

                {/* Redeem Vouchers */}
                <section className="space-y-4">
                    <h4 className="font-extrabold text-xl text-on-surface">Redeem Vouchers</h4>
                    {loadingVouchers ? (
                        <div className="flex justify-center p-4">
                            <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {vouchers.map((v) => (
                                <div
                                    key={v.title}
                                    className={`flex items-center justify-between p-4 bg-white border-2 rounded-lg transition-colors ${redeemed[v.title] ? 'border-green-200 bg-green-50' : 'border-outline-variant'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 ${v.bg} rounded-full flex items-center justify-center ${v.color}`}>
                                            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                {v.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-extrabold text-on-surface">{v.title}</p>
                                            <p className="text-sm text-on-surface-variant font-medium">{v.sub}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRedeem(v)}
                                        disabled={redeemed[v.title]}
                                        className={`px-3 py-1.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${redeemed[v.title]
                                            ? 'bg-green-100 text-green-700'
                                            : (user.foxPoints ?? 0) >= (v.pointsCost ?? 999)
                                                ? 'bg-primary text-white active:scale-95'
                                                : 'bg-primary-fixed text-on-primary-fixed-variant opacity-60'
                                            }`}
                                    >
                                        {redeemed[v.title] ? '✓ Done' : `${v.pointsCost ?? v.pts} pts`}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* My Badges */}
                <section className="space-y-4">
                    <h4 className="font-extrabold text-xl text-on-surface">My Badges</h4>
                    <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {ALL_BADGES.map((b) => {
                            const isLocked = user.badges ? !user.badges.includes(b.id) : ((user.level ?? 1) < b.reqLevel);
                            return (
                                <div
                                    key={b.label}
                                    className={`flex-shrink-0 flex flex-col items-center gap-2 w-24 ${isLocked ? 'opacity-40 grayscale' : ''}`}
                                >
                                    <div className={`w-20 h-20 rounded-full ${isLocked ? 'bg-surface-container' : b.bg} border-2 ${isLocked ? 'border-outline-variant' : b.border} flex items-center justify-center relative overflow-hidden`}>
                                        {/* Glass glare */}
                                        <div className="absolute inset-0"
                                            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)' }}
                                        />
                                        <span
                                            className={`material-symbols-outlined ${isLocked ? 'text-on-surface-variant' : b.color} text-4xl relative z-10`}
                                            style={{ fontVariationSettings: isLocked ? "'FILL' 0" : "'FILL' 1" }}
                                        >
                                            {isLocked ? 'lock' : b.icon}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold text-on-surface text-center uppercase tracking-tighter">
                                        {b.label}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>

            <BottomNav />
        </div>
    );
}
