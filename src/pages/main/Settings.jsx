import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../lib/authService';
import { useAppStore } from '../../store';
import { getUserSettings, updateUserSettings, softDeleteUser } from '../../services/userService';
import { auth } from '../../lib/firebase';
import TopBar from '../../components/TopBar';
import toast from 'react-hot-toast';

const SECTIONS = [
    {
        title: 'Account',
        rows: [
            { icon: 'person', label: 'Edit Profile', sub: 'Name, avatar, phone', nav: true, route: '/auth/setup' },
            { icon: 'location_on', label: 'My Locations', sub: 'Places you added', nav: true, route: '/app/search' },
        ],
    },
    {
        title: 'Notifications',
        rows: [
            { icon: 'campaign', label: 'SOS Alerts', sub: 'Alerts from nearby women', toggle: true, def: true },
            { icon: 'water_drop', label: 'Pad Machine Updates', sub: 'Stock & status changes', toggle: true, def: true },
            { icon: 'favorite', label: 'Cycle Reminders', sub: 'Period & fertile window', toggle: true, def: false },
        ],
    },
    {
        title: 'Safety',
        rows: [
            { icon: 'share_location', label: 'Share Live Location', sub: 'During SOS broadcast', toggle: true, def: true },
            { icon: 'contact_emergency', label: 'Emergency Contact', sub: 'Tap to set up', nav: true, action: 'emergency_contact' },
        ],
    },
    {
        title: 'About',
        rows: [
            { icon: 'info', label: 'About NavHer', sub: 'v1.0.0', nav: true, action: 'about' },
            { icon: 'privacy_tip', label: 'Privacy Policy', sub: '', nav: true, action: 'privacy' },
            { icon: 'help', label: 'Help & Support', sub: '', nav: true, action: 'help' },
        ],
    },
];

function Toggle({ on, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className={`w-12 h-7 rounded-full transition-all relative shrink-0 ${on ? 'bg-accent-green' : 'bg-slate-200'}`}
        >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${on ? 'right-1' : 'left-1'}`} />
        </button>
    );
}

export default function Settings() {
    const navigate = useNavigate();
    const { clearAuth } = useAppStore();
    const [toggles, setToggles] = useState(
        Object.fromEntries(SECTIONS.flatMap((s) => s.rows.filter((r) => r.toggle).map((r) => [r.label, r.def])))
    );

    // Load settings from Firestore on mount
    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        getUserSettings(uid).then((s) => {
            if (!s) return;
            setToggles(prev => ({
                ...prev,
                'SOS Alerts': s.sosAlertsEnabled ?? true,
                'Pad Machine Updates': s.padUpdatesEnabled ?? true,
                'Cycle Reminders': s.cycleRemindersEnabled ?? false,
                'Share Live Location': s.shareLocationEnabled ?? true,
            }));
        }).catch(console.error);
    }, []);

    // Persist toggle changes to Firestore
    const handleToggle = async (label) => {
        const val = !toggles[label];
        setToggles(prev => ({ ...prev, [label]: val }));
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        const keyMap = {
            'SOS Alerts': 'sosAlertsEnabled',
            'Pad Machine Updates': 'padUpdatesEnabled',
            'Cycle Reminders': 'cycleRemindersEnabled',
            'Share Live Location': 'shareLocationEnabled',
        };
        if (keyMap[label]) await updateUserSettings(uid, { [keyMap[label]]: val });
    };

    const handleLogout = async () => {
        if (!window.confirm('Are you sure you want to log out?')) return;
        await logout();
        clearAuth();
        navigate('/auth/onboarding', { replace: true });
    };

    const handleDeleteAccount = async () => {
        if (!window.confirm('Permanently delete your account? This cannot be undone.')) return;
        const uid = auth.currentUser?.uid;
        if (uid) await softDeleteUser(uid);
        await logout();
        clearAuth();
        navigate('/auth/onboarding', { replace: true });
    };

    return (
        <div className="flex flex-col min-h-dvh bg-white font-display pb-16">
            <TopBar title="Settings" onBack={() => navigate(-1)} />


            <div className="px-4 pt-4 space-y-6">
                {SECTIONS.map((sec) => (
                    <div key={sec.title}>
                        <p className="section-label mb-2 px-1">{sec.title}</p>
                        <div className="notion-card shadow-card overflow-hidden">
                            {sec.rows.map((row, idx) => {
                                const handleRowClick = () => {
                                    if (row.route) { navigate(row.route); return; }
                                    if (row.action === 'emergency_contact') {
                                        const num = window.prompt('Enter emergency contact number:');
                                        if (num && num.trim()) {
                                            toast.success(`Emergency contact saved: ${num.trim()}`);
                                        }
                                        return;
                                    }
                                    if (row.action === 'about') { toast('NavHer v1.0.0 — Made with 💗 for women\'s safety.\nBy Team NavHer', { duration: 4000 }); return; }
                                    if (row.action === 'privacy') { toast('Your data is encrypted and never shared with third parties.', { icon: '🔒', duration: 4000 }); return; }
                                    if (row.action === 'help') { toast('Email us at help@navher.app or call 112 for emergencies.', { icon: '📧', duration: 4000 }); return; }
                                };
                                return (
                                    <div
                                        key={row.label}
                                        onClick={row.nav ? handleRowClick : undefined}
                                        className={`flex items-center gap-4 p-4 ${idx < sec.rows.length - 1 ? 'border-b border-slate-50' : ''} ${row.nav ? 'cursor-pointer active:bg-slate-50 transition-colors' : ''}`}
                                    >
                                        <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined fill text-slate-500 text-[20px]">{row.icon}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-extrabold text-slate-800 text-sm">{row.label}</p>
                                            {row.sub && <p className="text-xs text-slate-400 font-semibold mt-0.5">{row.sub}</p>}
                                        </div>
                                        {row.toggle ? (
                                            <Toggle
                                                on={toggles[row.label]}
                                                onToggle={() => handleToggle(row.label)}
                                            />
                                        ) : (
                                            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Logout */}
                <div className="notion-card shadow-card overflow-hidden">
                    <button onClick={handleLogout} className="w-full flex items-center gap-4 p-4 text-left">
                        <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[20px]">logout</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-extrabold text-primary text-sm">Log Out</p>
                            <p className="text-xs text-slate-400 font-semibold">Sign out of your account</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </button>
                </div>

                {/* Danger zone */}
                <div className="notion-card shadow-card overflow-hidden border border-red-50">
                    <button onClick={handleDeleteAccount} className="w-full flex items-center gap-4 p-4 text-left">
                        <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center">
                            <span className="material-symbols-outlined fill text-red-500 text-[20px]">delete_forever</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-extrabold text-red-500 text-sm">Delete Account</p>
                            <p className="text-xs text-slate-400 font-semibold">This action cannot be undone</p>
                        </div>
                    </button>
                </div>

                <div className="text-center pb-8">
                    <p className="text-xs text-slate-300 font-bold">NavHer v1.0.0 · Made with 💗 for women</p>
                </div>
            </div>
        </div>
    );
}
