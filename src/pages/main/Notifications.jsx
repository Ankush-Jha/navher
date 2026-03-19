import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import BottomNav from '../../components/BottomNav';
import { getNotifications, markAllNotificationsRead } from '../../services/notificationService';
import { auth } from '../../lib/firebase';

const ICON_MAP = {
    sos_nearby: { icon: 'sos', color: 'bg-primary/10 text-primary' },
    pad_update: { icon: 'water_drop', color: 'bg-blue-100 text-blue-500' },
    points_earned: { icon: 'stars', color: 'bg-yellow-100 text-yellow-500' },
    cycle_reminder: { icon: 'favorite', color: 'bg-green-100 text-green-500' },
    review_approved: { icon: 'rate_review', color: 'bg-slate-100 text-slate-500' },
};

export default function Notifications() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if (!uid) { setLoading(false); return; }
        getNotifications(uid)
            .then(setNotifications)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleMarkAllRead = async () => {
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        await markAllNotificationsRead(uid);
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    // Group by Today vs Earlier
    const todayStr = new Date().toDateString();
    const todayItems = notifications.filter(n => n.createdAt?.toDate?.()?.toDateString?.() === todayStr);
    const earlierItems = notifications.filter(n => n.createdAt?.toDate?.()?.toDateString?.() !== todayStr);
    const GROUPS = [
        ...(todayItems.length ? [{ label: 'Today', items: todayItems }] : []),
        ...(earlierItems.length ? [{ label: 'Earlier', items: earlierItems }] : []),
    ];

    return (
        <div className="min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            <TopBar title="Notifications" onBack={() => navigate(-1)}>
                {unreadCount > 0 && (
                    <button
                        onClick={handleMarkAllRead}
                        className="text-xs font-bold text-primary hover:underline"
                    >
                        Mark all read
                    </button>
                )}
            </TopBar>

            <main className="px-5 pt-24 space-y-6">
                {loading ? (
                    <div className="flex flex-col items-center py-20 gap-4">
                        <div className="text-4xl animate-bounce">🔔</div>
                        <p className="font-bold text-on-surface-variant">Loading notifications…</p>
                    </div>
                ) : GROUPS.length === 0 ? (
                    <div className="flex flex-col items-center py-20 gap-4 text-center">
                        <div className="text-5xl">✅</div>
                        <p className="font-extrabold text-on-surface text-lg">You're all caught up!</p>
                        <p className="text-on-surface-variant text-sm">New alerts from your community will appear here.</p>
                    </div>
                ) : (
                    GROUPS.map((group) => (
                        <section key={group.label} className="space-y-3">
                            <h2 className="section-label px-1">{group.label}</h2>
                            {group.items.map((n) => {
                                const style = ICON_MAP[n.type] ?? { icon: 'notifications', color: 'bg-surface-container text-on-surface' };
                                return (
                                    <div
                                        key={n.id}
                                        className={`flex items-start gap-4 p-4 rounded-2xl border-2 ${n.read ? 'bg-white border-outline-variant' : 'bg-primary-fixed/30 border-primary/30'}`}
                                    >
                                        <div className={`w-12 h-12 ${style.color} rounded-2xl flex items-center justify-center shrink-0`}>
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{style.icon}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="font-extrabold text-on-surface text-sm leading-tight">{n.title}</p>
                                                {!n.read && <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-1" />}
                                            </div>
                                            <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-2">{n.body}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    ))
                )}
            </main>

            <BottomNav active="profile" />
        </div>
    );
}
