import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
    { icon: 'home', label: 'Home', path: '/app/map', fill: true },
    { icon: 'search', label: 'Search', path: '/app/list', fill: false },
    { icon: 'calendar_today', label: 'Tracker', path: '/app/tracker', fill: true },
    { icon: 'redeem', label: 'Rewards', path: '/app/rewards', fill: false },
    { icon: 'person', label: 'Profile', path: '/app/profile', fill: true },
];

export default function BottomNav() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <nav
            className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white border-t-2 border-zinc-100 rounded-t-[32px]"
            style={{ boxShadow: '0 -4px 12px rgba(0,0,0,0.05)' }}
        >
            {NAV_ITEMS.map((item) => {
                const active = pathname.startsWith(item.path);
                return (
                    <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={`flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-full transition-all duration-200 active:scale-95 ${active
                                ? 'bg-primary/10 text-primary'
                                : 'text-zinc-400 hover:text-primary'
                            }`}
                    >
                        <span
                            className="material-symbols-outlined text-[24px]"
                            style={active && item.fill
                                ? { fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 24" }
                                : { fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24" }
                            }
                        >
                            {item.icon}
                        </span>
                        <span className="font-bold text-[10px] uppercase tracking-widest mt-0.5">
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}
