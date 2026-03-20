import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Avatar from '../../components/Avatar';
import BottomNav from '../../components/BottomNav';
import { getNearbyLocations } from '../../services/locationService';
import { fetchRealPOIsNearby } from '../../services/overpassService';
import { listenToActiveSOS, respondToSOS } from '../../services/sosService';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

// Fix Leaflet default icon path with Vite bundling
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ─── Pin icons per type ───────────────────────────────────────────────────────
function makePinIcon(color, emoji) {
    return L.divIcon({
        className: '',
        html: `<div style="
            background:${color};border:2.5px solid #fff;
            border-radius:50% 50% 50% 0;transform:rotate(-45deg);
            width:34px;height:34px;box-shadow:0 3px 10px rgba(0,0,0,0.3);
            display:flex;align-items:center;justify-content:center;
        "><span style="transform:rotate(45deg);font-size:15px;line-height:1">${emoji}</span></div>`,
        iconSize: [34, 34], iconAnchor: [17, 34], popupAnchor: [0, -36],
    });
}

const PIN_ICONS = {
    washroom: makePinIcon('#E8356D', '🚻'),
    pharmacy: makePinIcon('#6C5CE7', '💊'),
    hospital: makePinIcon('#e17055', '🏥'),
    clinic: makePinIcon('#f39c12', '🩺'),
    hotel: makePinIcon('#0984e3', '🏨'),
    pad_machine: makePinIcon('#00B894', '🩸'),
    default: makePinIcon('#636e72', '📍'),
};

const USER_ICON = L.divIcon({
    className: '',
    html: `<div style="width:18px;height:18px;background:#4285F4;border:3px solid #fff;
           border-radius:50%;box-shadow:0 2px 8px rgba(66,133,244,0.6);"></div>`,
    iconSize: [18, 18], iconAnchor: [9, 9],
});

// Blinking red SOS beacon pin
const SOS_ICON = L.divIcon({
    className: '',
    html: `<div style="position:relative;width:40px;height:40px;">
        <div style="position:absolute;inset:0;background:#E8356D;border-radius:50%;opacity:0.3;
            animation:sosPulse 1s ease-out infinite;"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
            width:26px;height:26px;background:#E8356D;border:3px solid #fff;
            border-radius:50%;display:flex;align-items:center;justify-content:center;
            box-shadow:0 0 0 3px rgba(232,53,109,0.4),0 3px 10px rgba(0,0,0,0.3);
            font-size:14px;line-height:1;">🆘</div>
        <style>@keyframes sosPulse{0%{transform:scale(1);opacity:0.4}70%{transform:scale(2.2);opacity:0}100%{transform:scale(2.2);opacity:0}}</style>
    </div>`,
    iconSize: [40, 40], iconAnchor: [20, 20], popupAnchor: [0, -22],
});

// ─── Filter chips ─────────────────────────────────────────────────────────────
const FILTERS = [
    { label: 'Washroom', icon: 'wc', key: 'type:washroom' },
    { label: 'Pharmacy', icon: 'local_pharmacy', key: 'type:pharmacy' },
    { label: 'Hospital', icon: 'local_hospital', key: 'type:hospital' },
    { label: 'Hotel', icon: 'hotel', key: 'type:hotel' },
    { label: 'Has Pads', icon: 'opacity', key: 'hasPads' },
    { label: '24×7', icon: 'schedule', key: 'is24x7' },
    { label: 'Free', icon: 'payments', key: 'isFree' },
];

// ─── Order Pads quick links ───────────────────────────────────────────────────
const ORDER_LINKS = [
    { label: 'Blinkit', emoji: '🟡', url: 'https://blinkit.com/s/?q=sanitary+pads', color: '#f6c90e', text: '#333' },
    { label: 'Zepto', emoji: '⚡', url: 'https://www.zeptonow.com/search?query=pads', color: '#8B5CF6', text: '#fff' },
    { label: 'Instamart', emoji: '🛒', url: 'https://www.swiggy.com/instamart/search?query=pads', color: '#ff5200', text: '#fff' },
];

const DELHI_CENTER = { lat: 28.6139, lng: 77.2090 };

// ─── Fly to user on first position ───────────────────────────────────────────
function FlyToUser({ pos }) {
    const map = useMap();
    useEffect(() => {
        if (pos) map.setView([pos.lat, pos.lng], 15, { animate: true, duration: 1 });
    }, [pos, map]);
    return null;
}

// ─── Navigate to place via Google Maps ───────────────────────────────────────
function openNavigation(lat, lng, name) {
    const label = encodeURIComponent(name);
    // Tries native maps app first via geo: URI, falls back to Google Maps web
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${label}&travelmode=walking`;
    window.open(url, '_blank');
}

export default function HomeMap() {
    const navigate = useNavigate();
    const { user, firebaseUser } = useAppStore();
    const myUid = firebaseUser?.uid;
    const [activeFilters, setActiveFilters] = useState([]);
    const [locations, setLocations] = useState([]);
    const [osmLocations, setOsmLocations] = useState([]);
    const [userPos, setUserPos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [osmLoading, setOsmLoading] = useState(false);
    const [sosAlerts, setSosAlerts] = useState([]);  // active SOS from OTHER users
    const [sosAlert, setSosAlert] = useState(null); // banner alert
    const prevSosIdsRef = useRef(new Set());

    // ── Geolocation + data fetch ──────────────────────────────────────────────
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;
                setUserPos({ lat, lng });

                // 1. Firestore community locations
                try {
                    const nearby = await Promise.race([
                        getNearbyLocations({ lat, lng, radiusKm: 5 }),
                        new Promise((_, r) => setTimeout(() => r(new Error('timeout')), 4000)),
                    ]);
                    setLocations(nearby);
                } catch (e) { console.warn('Firestore timeout:', e.message); }
                setLoading(false);

                // 2. OSM real-world POIs (background)
                setOsmLoading(true);
                try {
                    const osm = await fetchRealPOIsNearby({ lat, lng, radiusKm: 3 });
                    setOsmLocations(osm);
                } catch (e) { console.warn('Overpass failed:', e.message); }
                finally { setOsmLoading(false); }
            },
            () => {
                // Geolocation denied — still show Delhi POIs but warn user
                toast('📍 Location unavailable — showing Delhi area', { icon: '⚠️', duration: 4000 });
                setLoading(false);
                setOsmLoading(true);
                fetchRealPOIsNearby({ lat: DELHI_CENTER.lat, lng: DELHI_CENTER.lng, radiusKm: 3 })
                    .then(setOsmLocations).catch(console.warn)
                    .finally(() => setOsmLoading(false));
            },
            { timeout: 10000, enableHighAccuracy: true, maximumAge: 30000 }
        );
    }, []);

    // ── Real-time SOS listener — shows OTHER users' SOS on this device ────────
    useEffect(() => {
        const unsub = listenToActiveSOS((alerts) => {
            setSosAlerts(alerts);
            // Show banner for newly appearing SOS alerts
            for (const a of alerts) {
                if (!prevSosIdsRef.current.has(a.id) && a.userId !== myUid) {
                    setSosAlert(a); // show banner
                    toast.error(`🆘 SOS from ${a.userName || 'Someone nearby'}! Check map.`, {
                        duration: 8000, position: 'top-center',
                    });
                }
            }
            // Track which SOS IDs we've already announced
            prevSosIdsRef.current = new Set(alerts.map(a => a.id));
        });
        return () => unsub();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myUid]);

    // ── Merge + filter ────────────────────────────────────────────────────────
    const allLocations = React.useMemo(() => {
        const fsIds = new Set(locations.map(l => l.id));
        let merged = [...locations, ...osmLocations.filter(l => !fsIds.has(l.id))];

        for (const f of activeFilters) {
            if (f === 'hasPads') merged = merged.filter(l => l.hasPads);
            if (f === 'isFree') merged = merged.filter(l => l.isFree);
            if (f === 'is24x7') merged = merged.filter(l => l.is24x7);
            if (f === 'type:washroom') merged = merged.filter(l => l.type === 'washroom');
            if (f === 'type:pharmacy') merged = merged.filter(l => l.type === 'pharmacy');
            if (f === 'type:hospital') merged = merged.filter(l => l.type === 'hospital' || l.type === 'clinic');
            if (f === 'type:hotel') merged = merged.filter(l => l.type === 'hotel');
        }
        return merged;
    }, [locations, osmLocations, activeFilters]);

    const toggleFilter = (key) =>
        setActiveFilters(f => f.includes(key) ? f.filter(x => x !== key) : [...f, key]);

    const mapCenter = userPos
        ? [userPos.lat, userPos.lng]
        : [DELHI_CENTER.lat, DELHI_CENTER.lng];

    return (
        <div className="flex flex-col min-h-dvh bg-surface font-body text-on-surface">

            {/* ── SOS Alert Banner ─────────────────────────────────────────── */}
            {sosAlert && sosAlert.userId !== myUid && (
                <div className="fixed top-0 left-0 right-0 z-[700] flex items-center gap-3 bg-red-600 text-white px-4 py-3 shadow-lg">
                    <span className="text-2xl animate-bounce">🆘</span>
                    <div className="flex-1 min-w-0">
                        <p className="font-extrabold text-[13px] leading-tight">SOS Alert Nearby!</p>
                        <p className="text-[11px] text-red-100 truncate">{sosAlert.userName || 'Someone'} needs help</p>
                    </div>
                    <button
                        onClick={async () => {
                            if (myUid) await respondToSOS(sosAlert.id, myUid);
                            navigate(`/app/sos-chat?sosId=${sosAlert.id}`);
                        }}
                        className="shrink-0 bg-white text-red-600 font-extrabold text-[12px] px-3 py-1.5 rounded-full"
                    >
                        Help
                    </button>
                    <button onClick={() => setSosAlert(null)} className="shrink-0 text-white/70 text-lg font-bold px-1">✕</button>
                </div>
            )}

            {/* ── Top bar ───────────────────────────────────────────────────── */}
            <header className="fixed top-0 left-0 right-0 z-[600] bg-white/95 backdrop-blur-md border-b border-outline-variant px-4 pt-3 pb-2 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">NavHer</p>
                        <h1 className="text-[18px] font-extrabold text-on-surface leading-tight">Safe Spaces Near You</h1>
                    </div>
                    <button onClick={() => navigate('/app/profile')} className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
                        <Avatar value={user?.avatar} size="w-10 h-10" textSize="text-xl" />
                    </button>
                </div>

                {/* ── Order pads strip ──────────────────────────────────────── */}
                <div className="flex gap-2 items-center overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                    <span className="text-[11px] font-extrabold text-on-surface-variant uppercase tracking-widest shrink-0">Order Pads:</span>
                    {ORDER_LINKS.map(o => (
                        <button
                            key={o.label}
                            onClick={() => window.open(o.url, '_blank')}
                            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border border-outline-variant active:scale-95 transition-all"
                            style={{ background: o.color, color: o.text }}
                        >
                            {o.emoji} {o.label}
                        </button>
                    ))}
                </div>

                {/* ── Filter chips ──────────────────────────────────────────── */}
                <div className="flex gap-2 mt-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                    {FILTERS.map(f => (
                        <button
                            key={f.key}
                            onClick={() => toggleFilter(f.key)}
                            className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap border transition-all active:scale-95 ${activeFilters.includes(f.key)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-surface-container text-on-surface-variant border-outline-variant'
                                }`}
                        >
                            <span className="material-symbols-outlined text-[13px]">{f.icon}</span>
                            {f.label}
                        </button>
                    ))}
                </div>
            </header>

            {/* ── Map ───────────────────────────────────────────────────────── */}
            <main className="flex-1 pt-36 pb-20">
                <div className="relative w-full" style={{ height: 'calc(100dvh - 14rem - 4rem)', isolation: 'isolate' }}>
                    <MapContainer
                        center={mapCenter}
                        zoom={14}
                        style={{ width: '100%', height: '100%' }}
                        zoomControl={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                            maxZoom={19}
                        />

                        {userPos && <FlyToUser pos={userPos} />}

                        {/* SOS beacon pins — other users' active SOS */}
                        {sosAlerts
                            .filter(s => s.userId !== myUid) // don't show own SOS
                            .map(s => (
                                <Marker key={s.id} position={[s.lat, s.lng]} icon={SOS_ICON}>
                                    <Popup minWidth={200}>
                                        <div>
                                            <p className="font-extrabold text-red-600 text-[15px] mb-1">🆘 SOS Alert!</p>
                                            <p className="text-[13px] font-medium mb-3">
                                                <strong>{s.userName || 'Someone'}</strong> needs help nearby.
                                            </p>
                                            <button
                                                onClick={async () => {
                                                    if (!myUid) return;
                                                    await respondToSOS(s.id, myUid);
                                                    navigate(`/app/sos-chat?sosId=${s.id}`);
                                                }}
                                                className="w-full py-2 bg-red-600 text-white font-extrabold rounded-lg text-[13px] active:scale-95"
                                            >
                                                🙋 I Can Help — Respond
                                            </button>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))
                        }

                        {/* User dot */}
                        {userPos && (
                            <>
                                <Marker position={[userPos.lat, userPos.lng]} icon={USER_ICON}>
                                    <Popup>📍 You are here</Popup>
                                </Marker>
                                <Circle
                                    center={[userPos.lat, userPos.lng]}
                                    radius={300}
                                    pathOptions={{ color: '#4285F4', fillColor: '#4285F4', fillOpacity: 0.08, weight: 1.5 }}
                                />
                            </>
                        )}

                        {/* Location pins */}
                        {allLocations.map(loc => (
                            <Marker
                                key={loc.id}
                                position={[loc.lat, loc.lng]}
                                icon={PIN_ICONS[loc.type] || PIN_ICONS.default}
                            >
                                <Popup minWidth={220}>
                                    <div className="font-body">
                                        {/* Type badge + name */}
                                        <div className="flex items-start gap-2 mb-2">
                                            <span className="text-2xl">{loc.icon || '📍'}</span>
                                            <div>
                                                <p className="font-extrabold text-[14px] leading-tight">{loc.name}</p>
                                                <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                                                    {loc.typeLabel || loc.type?.replace('_', ' ')}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Address */}
                                        {loc.address && (
                                            <p className="text-[11px] text-gray-500 mb-1.5 flex items-start gap-1">
                                                📌 {loc.address}
                                            </p>
                                        )}

                                        {/* Phone number */}
                                        {loc.phone && (
                                            <a
                                                href={`tel:${loc.phone}`}
                                                className="flex items-center gap-1.5 text-[12px] font-bold text-primary mb-2 hover:underline"
                                            >
                                                📞 {loc.phone}
                                            </a>
                                        )}

                                        {/* Opening hours */}
                                        {loc.openingHours && (
                                            <p className="text-[11px] text-gray-500 mb-2">⏰ {loc.openingHours}</p>
                                        )}

                                        {/* Badges */}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {loc.hasPads && <span className="px-1.5 py-0.5 bg-pink-50   text-pink-600  text-[10px] font-bold rounded-full">🩸 Has Pads</span>}
                                            {loc.isFree && <span className="px-1.5 py-0.5 bg-green-50  text-green-600 text-[10px] font-bold rounded-full">Free</span>}
                                            {loc.is24x7 && <span className="px-1.5 py-0.5 bg-blue-50   text-blue-600  text-[10px] font-bold rounded-full">24×7</span>}
                                            {loc.osm && <span className="px-1.5 py-0.5 bg-gray-50   text-gray-500  text-[10px] rounded-full">OSM</span>}
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => openNavigation(loc.lat, loc.lng, loc.name)}
                                                className="flex-1 flex items-center justify-center gap-1 bg-primary text-white py-2 rounded-lg text-[12px] font-bold"
                                            >
                                                🧭 Navigate
                                            </button>
                                            {loc.phone && (
                                                <a
                                                    href={`tel:${loc.phone}`}
                                                    className="px-3 flex items-center justify-center bg-green-500 text-white rounded-lg text-[12px] font-bold"
                                                >
                                                    📞
                                                </a>
                                            )}
                                            {!loc.osm && (
                                                <button
                                                    onClick={() => navigate(`/app/details/${loc.id}`)}
                                                    className="px-3 flex items-center justify-center bg-surface-container text-on-surface rounded-lg text-[12px] font-bold border border-outline-variant"
                                                >
                                                    →
                                                </button>
                                            )}
                                        </div>

                                        {/* Add to NavHer for OSM locations */}
                                        {loc.osm && (
                                            <button
                                                onClick={() => navigate('/app/add-location', { state: { prefill: loc } })}
                                                className="mt-2 w-full text-[11px] text-primary font-bold text-center py-1 border border-primary/30 rounded-lg hover:bg-primary/5"
                                            >
                                                + Add to NavHer community
                                            </button>
                                        )}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* Loading overlay */}
                    {loading && (
                        <div className="absolute inset-0 bg-surface/80 flex flex-col items-center justify-center gap-3 z-[500]">
                            <span className="material-symbols-outlined text-5xl text-primary animate-pulse">location_searching</span>
                            <p className="font-bold text-on-surface">Finding your location…</p>
                        </div>
                    )}

                    {/* OSM loading chip */}
                    {!loading && osmLoading && (
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white border border-outline-variant rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm z-[500] text-xs font-bold">
                            <span className="material-symbols-outlined text-sm text-primary animate-spin">progress_activity</span>
                            Loading real places…
                        </div>
                    )}

                    {/* Count badge */}
                    {!loading && (
                        <div className="absolute bottom-4 left-4 bg-white border border-outline-variant rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 z-[500]">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-xs font-bold text-on-surface">{allLocations.length} places</span>
                        </div>
                    )}

                    {/* Recenter to my location button */}
                    {userPos && (
                        <button
                            onClick={() => {
                                // Force re-fly to user position
                                setUserPos(prev => ({ ...prev }));
                            }}
                            className="absolute bottom-24 right-4 w-12 h-12 rounded-full bg-white border-2 border-outline-variant flex items-center justify-center z-[500] active:scale-95 transition-transform shadow-md"
                            title="Recenter to my location"
                        >
                            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                        </button>
                    )}

                    {/* SOS FAB — replaces the add-location button */}
                    <button
                        onClick={() => navigate('/app/sos')}
                        className="absolute bottom-4 right-4 w-16 h-16 rounded-full flex flex-col items-center justify-center z-[500] active:scale-95 transition-transform"
                        style={{ background: '#E8356D', boxShadow: '0 4px 0 #a10038' }}
                    >
                        <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                        <span className="text-white text-[9px] font-extrabold tracking-widest">SOS</span>
                    </button>
                </div>

                {/* ── Type legend ────────────────────────────────────────────── */}
                <div className="flex gap-4 px-4 pt-3 pb-1 overflow-x-auto bg-white border-t border-outline-variant" style={{ scrollbarWidth: 'none' }}>
                    {[
                        { color: '#E8356D', label: 'Washroom', emoji: '🚻' },
                        { color: '#6C5CE7', label: 'Pharmacy', emoji: '💊' },
                        { color: '#e17055', label: 'Hospital', emoji: '🏥' },
                        { color: '#0984e3', label: 'Hotel', emoji: '🏨' },
                        { color: '#00B894', label: 'Pad Machine', emoji: '🩸' },
                    ].map(t => (
                        <div key={t.label} className="flex items-center gap-1.5 shrink-0">
                            <span className="text-sm">{t.emoji}</span>
                            <span className="text-[11px] text-on-surface-variant font-medium">{t.label}</span>
                        </div>
                    ))}
                    <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                        <span className="text-[10px] text-on-surface-variant">NavHer + OpenStreetMap</span>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
