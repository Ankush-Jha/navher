import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { getNearbyLocations } from '../../services/locationService';
import { useAppStore } from '../../store';

const PINS = [
    { id: 1, top: '38%', left: '43%', type: 'primary', name: 'The Oberoi Hotel', dist: '250m', pads: true },
    { id: 2, top: '55%', left: '62%', type: 'secondary', name: 'Select Citywalk', dist: '850m', pads: true },
    { id: 3, top: '30%', left: '65%', type: 'tertiary', name: 'Starbucks CP', dist: '1.1km', pads: false },
];

const FILTERS = [
    { label: 'Free', icon: 'payments' },
    { label: 'Has Pads', icon: 'opacity' },
    { label: 'Cleanest', icon: 'cleaning_services' },
    { label: '24×7', icon: 'schedule' },
];

export default function HomeMap() {
    const navigate = useNavigate();
    const { user } = useAppStore();
    const [selected, setSelected] = useState(null);
    const [activeFilters, setActiveFilters] = useState(['Has Pads']);
    const [locations, setLocations] = useState([]);
    const [userPos, setUserPos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;
                setUserPos({ lat, lng });
                try {
                    const nearby = await getNearbyLocations({ lat, lng, radiusKm: 5 });
                    setLocations(nearby);
                } catch (e) {
                    console.error('Location fetch error:', e);
                } finally {
                    setLoading(false);
                }
            },
            () => setLoading(false),
            { timeout: 8000 }
        );
    }, []);

    const toggleFilter = (f) => setActiveFilters(p => p.includes(f) ? p.filter(x => x !== f) : [...p, f]);
    const selectedPin = locations.find(p => p.id === selected);
    const filtLabel = (f) => (typeof f === 'string' ? f : f.label);
    const filteredLocations = locations.filter(loc => {
        if (activeFilters.includes('Has Pads') && !loc.hasPads) return false;
        if (activeFilters.includes('Free') && loc.isFree === false) return false;
        if (activeFilters.includes('24×7') && !loc.open24h) return false;
        return true;
    });

    // Pin positions: distribute across mock canvas using a spread from center based on distance
    const PIN_COLORS = ['primary', 'secondary', 'tertiary'];


    return (
        <div className="h-dvh flex flex-col relative font-body bg-[#eef2f5] overflow-hidden">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary fill text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>potted_plant</span>
                    <h1 className="font-headline font-extrabold text-[26px] tracking-tight text-primary">NavHer</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors" onClick={() => navigate('/app/notifications')}>
                        <span className="material-symbols-outlined text-on-surface">notifications</span>
                    </button>
                    <button onClick={() => navigate('/app/profile')} className="w-10 h-10 rounded-full bg-primary-fixed border-2 border-primary flex items-center justify-center text-lg">
                        {user.avatar || '🦊'}
                    </button>
                </div>
            </header>

            {/* Map Canvas */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#eef2f5] relative overflow-hidden">
                    {/* Road lines */}
                    <div className="absolute top-1/4 left-1/3 w-2 h-24 bg-white rounded-full opacity-50 rotate-45" />
                    <div className="absolute top-1/2 left-1/4 w-32 h-4 bg-white rounded-full opacity-50" />
                    <div className="absolute top-1/3 left-1/2 w-48 h-3 bg-white rounded-full opacity-40 -rotate-12" />
                    {/* Location pins from Firestore */}
                    {loading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 px-6 py-3 rounded-2xl font-bold text-primary animate-pulse">Finding nearby locations…</div>
                        </div>
                    ) : filteredLocations.map((loc, idx) => {
                        // Spread pins visually across canvas based on index
                        const positions = [
                            { top: '38%', left: '43%' }, { top: '55%', left: '62%' },
                            { top: '30%', left: '65%' }, { top: '45%', left: '25%' },
                            { top: '65%', left: '40%' }, { top: '25%', left: '50%' },
                        ];
                        const pos = positions[idx % positions.length];
                        const colorClass = PIN_COLORS[idx % PIN_COLORS.length];
                        return (
                            <button key={loc.id} className="absolute group z-10" style={{ top: pos.top, left: pos.left }}
                                onClick={() => setSelected(loc.id === selected ? null : loc.id)}>
                                <div className={`bg-${colorClass} text-white p-2 rounded-full shadow-lg group-active:scale-95 transition-transform flex items-center justify-center border-2 border-white ${selected === loc.id ? 'scale-125' : ''}`}>
                                    <span className="material-symbols-outlined fill text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                </div>
                            </button>
                        );
                    })}
                    {/* Current location pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md relative">
                            <div className="absolute inset-0 rounded-full bg-tertiary animate-ping opacity-25" />
                        </div>
                    </div>
                </div>
                {/* Map gradient edges */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0) 15%,rgba(255,255,255,0) 75%,rgba(255,255,255,0.9) 100%)' }} />
            </div>

            {/* Overlays */}
            <div className="relative z-20 pt-20 px-5 flex flex-col gap-3">
                {/* Emergency banner */}
                <div className="bg-error-container border-2 border-error/10 rounded-xl p-3 flex items-center justify-between shadow-card animate-pulse">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-error">emergency</span>
                        <p className="text-on-error-container font-bold text-[13px]">No pads within 1 km? Order in 15 mins →</p>
                    </div>
                    <button onClick={() => navigate('/app/emergency')} className="text-[12px] font-extrabold text-error uppercase tracking-widest px-3 py-1 bg-white/50 rounded-full">Order</button>
                </div>
                {/* Filter chips */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {FILTERS.map(f => (
                        <button key={f.label} onClick={() => toggleFilter(f.label)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-[13px] flex items-center gap-1.5 border-2 transition-all active:scale-95 ${activeFilters.includes(f.label)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-on-surface border-outline-variant'
                                }`}>
                            <span className="material-symbols-outlined text-[16px]"
                                style={{ fontVariationSettings: activeFilters.includes(f.label) ? "'FILL' 1" : "'FILL' 0" }}>
                                {f.icon}
                            </span>
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Find Nearest Safe Loo FAB — centered */}
            <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40">
                <button onClick={() => navigate('/app/list')}
                    className="bg-primary text-white h-14 px-6 rounded-full flex items-center gap-2 font-extrabold text-[14px] whitespace-nowrap"
                    style={{ boxShadow: '0 4px 0 0 #d33c5e' }}
                    onMouseDown={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                    onMouseUp={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #d33c5e'; e.currentTarget.style.transform = ''; }}
                    onTouchStart={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                    onTouchEnd={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #d33c5e'; e.currentTarget.style.transform = ''; }}
                >
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
                    Find Nearest Safe Loo
                </button>
            </div>

            {/* SOS circular FAB — bottom right */}
            <div className="fixed bottom-28 right-5 z-40">
                <button
                    onClick={() => navigate('/app/sos')}
                    className="w-14 h-14 bg-error text-white rounded-full flex flex-col items-center justify-center gap-0.5 border-4 border-white"
                    style={{ boxShadow: '0 4px 0 0 #b3001b' }}
                    onMouseDown={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                    onMouseUp={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #b3001b'; e.currentTarget.style.transform = ''; }}
                    onTouchStart={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                    onTouchEnd={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #b3001b'; e.currentTarget.style.transform = ''; }}
                    title="Emergency SOS"
                >
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                    <span className="text-[9px] font-black tracking-widest">SOS</span>
                </button>
            </div>

            {/* Peek card when pin selected */}
            {selectedPin && (
                <div className="fixed bottom-24 left-4 right-4 z-40 bg-white rounded-[1.5rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-2 border-outline-variant flex items-center gap-4"
                    onClick={() => navigate(`/app/details/${selectedPin.id}`, { state: { name: selectedPin.name } })}>
                    <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🚻</div>
                    <div className="flex-1">
                        <p className="font-extrabold text-on-surface">{selectedPin.name}</p>
                        <p className="text-sm text-on-surface-variant font-medium">{selectedPin.distance ? `${(selectedPin.distance * 1000).toFixed(0)}m away` : 'Nearby'}</p>
                        {selectedPin.padAvailable && <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold rounded-full mt-1">
                            <span className="material-symbols-outlined text-[12px]">check_circle</span> Has Pads
                        </span>}
                    </div>
                    <span className="material-symbols-outlined text-outline">chevron_right</span>
                </div>
            )}

            {/* Bottom sheet handle */}
            {!selectedPin && (
                <div className="fixed bottom-0 left-0 w-full z-30 bg-surface-container-low rounded-t-[2rem] shadow-top border-t-2 border-white pt-3 pb-28"
                    style={{ maxHeight: '30vh' }}>
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-1.5 bg-outline-variant rounded-full" />
                    </div>
                    <p className="text-center text-[13px] font-bold text-on-surface-variant uppercase tracking-widest">
                        {loading ? 'Searching nearby…' : `${filteredLocations.length} safe space${filteredLocations.length !== 1 ? 's' : ''} nearby`}
                    </p>
                </div>
            )}

            <BottomNav />
        </div>
    );
}
