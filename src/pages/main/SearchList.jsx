import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import BottomNav from '../../components/BottomNav';
import { searchLocations } from '../../services/locationService';

const CHIPS = ['Free', 'Has Pads', 'Open Now', 'Cleanest', '24×7'];

export default function SearchList() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(['Has Pads']);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortByDistance, setSortByDistance] = useState(true);

    const toggle = (c) => setActive(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

    useEffect(() => {
        let isMounted = true;

        const fetchResults = async () => {
            setLoading(true);
            try {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const data = await searchLocations({
                            searchQuery: query,
                            lat: latitude,
                            lng: longitude,
                            radiusKm: 10
                        });

                        if (!isMounted) return;

                        // Apply pill filters
                        let filtered = data;
                        if (active.includes('Free')) filtered = filtered.filter(l => l.isFree);
                        if (active.includes('Has Pads')) filtered = filtered.filter(l => l.hasPads);
                        if (active.includes('24×7') || active.includes('Open Now')) filtered = filtered.filter(l => l.is24x7);
                        if (active.includes('Cleanest')) filtered = filtered.filter(l => (l.cleanlinessScore ?? 0) >= 4);

                        // Sort by distance (ascending)
                        filtered = filtered.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));

                        setResults(filtered);
                        setLoading(false);
                    },
                    (error) => {
                        console.error('Geo error', error);
                        setLoading(false);
                    },
                    { timeout: 10000, maximumAge: 60000 }
                );
            } catch (err) {
                console.error(err);
                if (isMounted) setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchResults();
        }, 300); // 300ms debounce

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [query, active]);

    return (
        <div className="min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            {/* TopBar with shadow-header */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-5 h-20 w-full bg-white shadow-[0_4px_0_0_#ff4b72]">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors">
                        <span className="material-symbols-outlined text-primary">arrow_back</span>
                    </button>
                    <h1 className="font-headline font-extrabold text-[26px] tracking-tight text-primary">SafeSpaces</h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-surface-container rounded-full p-1 border-2 border-outline-variant">
                        <button className="px-4 py-1.5 rounded-full text-[13px] font-bold bg-white text-on-surface shadow-card">List</button>
                        <button onClick={() => navigate('/app/map')} className="px-4 py-1.5 rounded-full text-[13px] font-bold text-on-surface-variant flex items-center gap-1 hover:text-primary">
                            <span className="material-symbols-outlined text-[16px]">map</span>Map
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-5 mt-6 space-y-6">
                {/* Search */}
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by location or mall..."
                        className="w-full pl-14 pr-5 py-5 bg-white border-2 border-outline-variant rounded-xl text-[15px] font-medium outline-none transition-all focus:border-primary focus:shadow-[0_4px_0_0_#ff4b72] shadow-[0_4px_0_0_#e2e8f0]"
                    />
                </div>

                {/* Filter chips */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                    {/* Permanent "Filters" chip — always primary tactile per Stitch */}
                    <button
                        className="flex-none flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white font-bold text-[13px] border-2 border-primary active:translate-y-1"
                        style={{ boxShadow: '0 4px 0 0 #a10038' }}
                        onMouseDown={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                        onMouseUp={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #a10038'; e.currentTarget.style.transform = ''; }}
                        onTouchStart={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                        onTouchEnd={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #a10038'; e.currentTarget.style.transform = ''; }}
                    >
                        <span className="material-symbols-outlined text-[18px]">tune</span> Filters
                    </button>
                    {CHIPS.map(c => (
                        <button key={c} onClick={() => toggle(c)}
                            className={`flex-none px-4 py-2 rounded-full font-bold text-[13px] border-2 transition-all active:scale-95 ${active.includes(c)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-on-surface border-outline-variant hover:border-primary'
                                }`}>
                            {c}
                        </button>
                    ))}
                </div>

                {/* Results */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-extrabold text-xl tracking-tight text-on-surface">{results.length} results nearby</h2>
                        <button
                            onClick={() => {
                                setSortByDistance(prev => !prev);
                                setResults(prev => [...prev].sort((a, b) =>
                                    sortByDistance
                                        ? (a.name ?? '').localeCompare(b.name ?? '')
                                        : (a.distance ?? Infinity) - (b.distance ?? Infinity)
                                ));
                            }}
                            className="flex items-center gap-1 text-tertiary font-bold text-[13px] uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[16px]">sort</span>
                            {sortByDistance ? 'Distance' : 'A–Z'}
                        </button>
                    </div>

                    <div className="space-y-4">
                        {loading ? (
                            <div className="text-center py-10">
                                <span className="material-symbols-outlined animate-spin text-primary text-4xl">sync</span>
                            </div>
                        ) : results.length === 0 ? (
                            <div className="text-center py-10 bg-white rounded-xl border-2 border-outline-variant p-6">
                                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">location_off</span>
                                <h3 className="font-extrabold text-lg text-on-surface">No locations found</h3>
                                <p className="text-sm font-medium text-slate-500">Try adjusting your filters or search query.</p>
                            </div>
                        ) : (
                            results.map(r => (
                                <div key={r.id} onClick={() => navigate(`/app/details/${r.id}`)}
                                    className="bg-white rounded-lg border-2 border-outline-variant p-5 shadow-card hover:border-primary transition-all cursor-pointer">
                                    <div className="flex gap-5">
                                        <div className="w-24 h-24 rounded-lg bg-surface-container flex-none overflow-hidden border-2 border-outline-variant/30 flex items-center justify-center text-4xl">
                                            {r.type === 'pad_machine' ? '💧' : '🚻'}
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-extrabold text-[17px] leading-tight text-on-surface">{r.name}</h3>
                                                <div className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-md font-bold text-[13px]">
                                                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                    {(r.avgRating || 0).toFixed(1)}
                                                </div>
                                            </div>
                                            <p className="text-on-surface-variant text-[13px] font-medium flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px] text-tertiary">location_on</span>
                                                {r.distance ? r.distance.toFixed(1) + 'km' : ''} · {r.address || 'Navigation available'}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {r.hasPads && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold uppercase tracking-wider rounded-full border border-outline-variant/30">
                                                        Has Pads
                                                    </span>
                                                )}
                                                {r.isFree && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold uppercase tracking-wider rounded-full border border-outline-variant/30">
                                                        Free
                                                    </span>
                                                )}
                                                {r.is24x7 && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-[11px] font-bold uppercase tracking-wider rounded-full border border-outline-variant/30">
                                                        24×7
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Gamification */}
                    <div className="mt-6 bg-primary-fixed/30 rounded-lg p-5 border-2 border-dashed border-primary/30 flex items-center justify-between">
                        <div>
                            <h4 className="font-extrabold text-primary text-[17px]">Daily Discovery</h4>
                            <p className="text-on-surface-variant text-[13px] font-medium">Find 2 more to earn 50 LooCoins!</p>
                        </div>
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="28" cy="28" r="24" fill="transparent" stroke="#ff8fa7" strokeWidth="5" strokeDasharray="150" strokeDashoffset="100" />
                            </svg>
                            <span className="absolute font-black text-primary text-sm">1/3</span>
                        </div>
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    );
}
