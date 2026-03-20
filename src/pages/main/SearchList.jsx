import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { searchLocations } from '../../services/locationService';
import { fetchRealPOIsNearby } from '../../services/overpassService';
import toast from 'react-hot-toast';

const CHIPS = ['Free', 'Has Pads', 'Open Now', '24×7', 'Cleanest'];

const TYPE_ICONS = {
    washroom: '🚻',
    pharmacy: '💊',
    pad_machine: '🩸',
    hospital: '🏥',
};

function distanceKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function SearchList() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [active, setActive] = useState([]); // no default filter — show everything
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortByDistance, setSortByDistance] = useState(true);
    const userPosRef = useRef(null);

    const toggle = (c) => setActive(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

    // Debounce the search query to avoid spamming APIs on every keystroke
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        const FALLBACK = { lat: 28.6139, lng: 77.2090 }; // Delhi fallback

        const run = async (lat, lng) => {
            if (!isMounted) return;
            userPosRef.current = { lat, lng };

            // Fetch both Firestore community locations + real OSM POIs in parallel
            const [firestoreData, osmData] = await Promise.allSettled([
                searchLocations({ searchQuery: debouncedQuery, lat, lng, radiusKm: 10 }),
                fetchRealPOIsNearby({ lat, lng, radiusKm: 5 }),
            ]);

            if (!isMounted) return;

            const fsItems = (firestoreData.status === 'fulfilled' ? firestoreData.value : [])
                .map(l => ({ ...l, distance: distanceKm(lat, lng, l.lat, l.lng) }));

            const osmItems = (osmData.status === 'fulfilled' ? osmData.value : [])
                .map(l => ({ ...l, distance: distanceKm(lat, lng, l.lat, l.lng) }));

            // Merge — Firestore takes priority, OSM fills gaps
            const fsIds = new Set(fsItems.map(l => l.id));
            const merged = [
                ...fsItems,
                ...osmItems.filter(l => !fsIds.has(l.id)),
            ];

            // Apply search query filter
            let filtered = debouncedQuery.trim()
                ? merged.filter(l =>
                    l.name?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                    l.address?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                    l.type?.toLowerCase().includes(debouncedQuery.toLowerCase()))
                : merged;

            // Apply chip filters
            if (active.includes('Free')) filtered = filtered.filter(l => l.isFree);
            if (active.includes('Has Pads')) filtered = filtered.filter(l => l.hasPads);
            if (active.includes('24×7') || active.includes('Open Now')) filtered = filtered.filter(l => l.is24x7);
            if (active.includes('Cleanest')) filtered = filtered.filter(l => (l.cleanlinessScore ?? 0) >= 4);

            // Sort by distance
            filtered.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));

            setResults(filtered);
            setLoading(false);
        };

        navigator.geolocation.getCurrentPosition(
            pos => run(pos.coords.latitude, pos.coords.longitude),
            () => {
                toast('📍 Location unavailable — showing Delhi results', { icon: '⚠️', duration: 4000 });
                run(FALLBACK.lat, FALLBACK.lng);
            },
            { timeout: 10000, enableHighAccuracy: true, maximumAge: 30000 }
        );

        return () => { isMounted = false; };
    }, [debouncedQuery, active]);

    return (
        <div className="min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            {/* Header */}
            <header className="sticky top-0 z-[600] flex items-center justify-between px-5 h-20 w-full bg-white shadow-[0_4px_0_0_#ff4b72]">
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
                        placeholder="Search washrooms, pharmacies, pads…"
                        className="w-full pl-14 pr-5 py-5 bg-white border-2 border-outline-variant rounded-xl text-[15px] font-medium outline-none transition-all focus:border-primary focus:shadow-[0_4px_0_0_#ff4b72] shadow-[0_4px_0_0_#e2e8f0]"
                    />
                </div>

                {/* Filter chips */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
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
                        <h2 className="font-extrabold text-xl tracking-tight text-on-surface">
                            {loading ? 'Searching…' : `${results.length} places nearby`}
                        </h2>
                        {!loading && results.length > 1 && (
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
                        )}
                    </div>

                    <div className="space-y-4">
                        {loading ? (
                            <div className="text-center py-16">
                                <span className="material-symbols-outlined animate-spin text-primary text-5xl">sync</span>
                                <p className="mt-3 font-bold text-on-surface-variant">Finding places near you…</p>
                            </div>
                        ) : results.length === 0 ? (
                            <div className="text-center py-10 bg-white rounded-xl border-2 border-outline-variant p-6">
                                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">location_off</span>
                                <h3 className="font-extrabold text-lg text-on-surface">No places found</h3>
                                <p className="text-sm font-medium text-slate-500 mt-1">Try removing a filter or expanding your search.</p>
                            </div>
                        ) : (
                            results.map(r => (
                                <div key={r.id}
                                    onClick={() => r.osm ? navigate('/app/add-location', { state: { prefill: r } }) : navigate(`/app/details/${r.id}`)}
                                    className="bg-white rounded-xl border-2 border-outline-variant p-4 shadow-card hover:border-primary transition-all cursor-pointer active:scale-[0.98]">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-xl bg-surface-container flex-none flex items-center justify-center text-3xl border border-outline-variant/30">
                                            {TYPE_ICONS[r.type] ?? '📍'}
                                        </div>
                                        <div className="flex-1 min-w-0 space-y-1">
                                            <div className="flex justify-between items-start gap-2">
                                                <h3 className="font-extrabold text-[16px] leading-tight text-on-surface truncate">{r.name}</h3>
                                                {r.avgRating > 0 && (
                                                    <div className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-md font-bold text-[12px] shrink-0">
                                                        <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                        {r.avgRating.toFixed(1)}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-on-surface-variant text-[12px] font-medium flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[13px] text-tertiary">location_on</span>
                                                {r.distance != null ? r.distance.toFixed(2) + ' km away' : ''}
                                                {r.address ? ` · ${r.address}` : ''}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {r.osm && <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100">OSM</span>}
                                                {r.hasPads && <span className="px-2 py-0.5 bg-pink-50 text-pink-600 text-[10px] font-bold rounded-full border border-pink-100">🩸 Has Pads</span>}
                                                {r.isFree && <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100">Free</span>}
                                                {r.is24x7 && <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full border border-amber-100">24×7</span>}
                                                <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded-full capitalize">{r.type?.replace('_', ' ')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Gamification nudge */}
                    {!loading && (
                        <div className="mt-6 bg-primary-fixed/30 rounded-xl p-5 border-2 border-dashed border-primary/30 flex items-center justify-between">
                            <div>
                                <h4 className="font-extrabold text-primary text-[17px]">Daily Discovery</h4>
                                <p className="text-on-surface-variant text-[13px] font-medium">Spot a missing place? Add it and earn 50 LooPoints!</p>
                            </div>
                            <button
                                onClick={() => navigate('/app/add-location')}
                                className="ml-4 shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md"
                            >
                                <span className="material-symbols-outlined">add_location_alt</span>
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <BottomNav />
        </div>
    );
}
