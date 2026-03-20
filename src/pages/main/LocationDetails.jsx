import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import { getLocation, getNearbyLocations } from '../../services/locationService';
import { getLocationReviews } from '../../services/reviewService';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

// Fallback pharmacies if pad machine/washroom has no pads available (will be fetched dynamically)
const FALLBACK_PHARMACIES = [
    { id: 'fallback-1', icon: 'local_pharmacy', name: 'Apollo Pharmacy', address: 'Open until 11:00 PM', distance: 0.2 },
    { id: 'fallback-2', icon: 'medical_services', name: 'Wellness Forever', address: 'Open 24 Hours', distance: 0.45 },
    { id: 'fallback-3', icon: 'storefront', name: 'Noble Plus', address: 'Open until 10:00 PM', distance: 0.6 },
];

export default function LocationDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [saved, setSaved] = useState(false);

    const [location, setLocation] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [nearbyPharmacies, setNearbyPharmacies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            if (!id) {
                setError('No location ID provided.');
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const locData = await getLocation(id);
                if (locData) {
                    setLocation(locData);
                    // Fetch reviews
                    const revs = await getLocationReviews(id);
                    setReviews(revs || []);

                    // Fetch nearby pharmacies
                    try {
                        let pharms = await getNearbyLocations({ lat: locData.lat, lng: locData.lng, radiusKm: 3, filters: { type: 'pharmacy' } });
                        // Exclude current location
                        pharms = pharms.filter(p => p.id !== locData.id);
                        if (pharms.length > 0) {
                            setNearbyPharmacies(pharms.slice(0, 3));
                        } else {
                            setNearbyPharmacies(FALLBACK_PHARMACIES); // fallback if none found in db
                        }
                    } catch (err) {
                        console.error("Failed to fetch nearby pharmacies:", err);
                        setNearbyPharmacies(FALLBACK_PHARMACIES);
                    }
                } else {
                    setError('Location not found.');
                }
            } catch (err) {
                console.error("Failed to fetch location:", err);
                setError('Failed to load location details.');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    // Check if user has saved this location
    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if (!uid || !id) return;
        getDoc(doc(db, 'users', uid, 'savedLocations', id))
            .then(snap => { if (snap.exists()) setSaved(true); })
            .catch(() => { });
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col min-h-dvh bg-surface-container-low font-body items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <span className="text-4xl material-symbols-outlined text-primary">location_on</span>
                    <p className="text-secondary font-bold">Loading location details...</p>
                </div>
            </div>
        );
    }

    if (error || !location) {
        return (
            <div className="flex flex-col min-h-dvh bg-surface-container-low font-body items-center justify-center px-4 text-center">
                <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
                <h2 className="text-2xl font-bold mb-2">Oops!</h2>
                <p className="text-on-surface-variant mb-6">{error || 'Something went wrong.'}</p>
                <button onClick={() => navigate(-1)} className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md">
                    Go Back
                </button>
            </div>
        );
    }

    // Dynamic amenities based on location data
    const dynamicAmenities = [
        { icon: 'water_drop', label: 'Pad Machine', ok: location.hasPads },
        { icon: 'schedule', label: '24x7 Open', ok: location.is24x7 },
        { icon: 'payments', label: 'Free to Use', ok: location.isFree },
        { icon: 'wc', label: 'Clean Toilets', ok: location.cleanlinessScore >= 4 },
        { icon: 'door_open', label: 'Private Stall', ok: location.privacyScore >= 4 },
        { icon: 'verified', label: 'Verified', ok: location.verified },
    ];

    // Add extra amenities if present
    if (location.amenities && Array.isArray(location.amenities)) {
        location.amenities.forEach(am => {
            dynamicAmenities.push({ icon: 'check_circle', label: am, ok: true });
        });
    }

    // Time formatter helper
    const formatTimeAgo = (timestamp) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const diffMs = Date.now() - date.getTime();
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        if (diffHrs < 1) return 'Just now';
        if (diffHrs < 24) return `${diffHrs}h ago`;
        return `${Math.floor(diffHrs / 24)}d ago`;
    };

    return (
        <div className="flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-24">
            {/* Sticky Header */}
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-white border-b-2 border-gray-100"
                style={{ boxShadow: '0 4px 0 0 rgba(255,75,114,0.1)' }}>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-gray-50 transition-colors rounded-full active:scale-95"
                    >
                        <span className="material-symbols-outlined text-primary">arrow_back</span>
                    </button>
                    <h1 className="font-headline text-[28px] font-extrabold leading-[1.1] tracking-tight text-on-surface">
                        Location Details
                    </h1>
                </div>
                <button
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({ title: location.name, url: window.location.href });
                        } else {
                            navigator.clipboard?.writeText(window.location.href);
                            toast.success('Link copied to clipboard!');
                        }
                    }}
                    className="p-2 hover:bg-gray-50 transition-colors rounded-full"
                >
                    <span className="material-symbols-outlined text-primary">share</span>
                </button>
            </header>

            <main className="mt-16 max-w-2xl mx-auto w-full">
                {/* Hero Section */}
                <section className="relative h-72 w-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-tertiary-fixed via-primary-fixed to-secondary-fixed flex items-center justify-center">
                        <span className="text-8xl">{location.type === 'pad_machine' ? '💦' : '🏨'}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border-2 border-primary/20">
                            <h2 className="font-bold text-lg text-on-primary-container">{location.name}</h2>
                            <p className="text-xs text-on-surface-variant flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                {location.address || 'Address not available'}
                            </p>
                        </div>
                        <button
                            onClick={() => setSaved(s => !s)}
                            className="bg-white p-3 rounded-full shadow-md text-primary active:scale-90 transition-transform"
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
                            >
                                favorite
                            </span>
                        </button>
                    </div>
                </section>

                {/* Key Status Card */}
                <section className="px-4 -mt-6 relative z-10">
                    <div className="bg-white rounded-lg border-2 border-secondary/30 p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${location.hasPads ? 'bg-secondary/10 border-secondary/20' : 'bg-error/10 border-error/20'}`}>
                                    <span
                                        className={`material-symbols-outlined text-3xl font-bold ${location.hasPads ? 'text-secondary' : 'text-error'}`}
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        {location.hasPads ? 'check_circle' : 'cancel'}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-xl tracking-tight">Has Sanitary Pads?</h3>
                                    <p className={`font-bold text-sm ${location.hasPads ? 'text-secondary' : 'text-error'}`}>
                                        {location.hasPads ? 'In Stock' : 'Out of Stock'} <span className="text-on-surface-variant font-medium">(Updated Recently)</span>
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate(`/app/rate/${id}`, { state: { name: location.name } })}
                                className="bg-surface-container-high px-3 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-on-surface-variant hover:bg-outline-variant transition-colors"
                            >
                                Report Update
                            </button>
                        </div>

                        {/* Emergency dashed trigger */}
                        <div className="bg-primary-container/20 rounded-lg p-4 border-2 border-dashed border-primary flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-2xl">priority_high</span>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary-dim">Running low?</p>
                                    <p className="text-sm font-semibold text-on-primary-container">Get rapid delivery to your stall</p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/app/emergency')}
                                className="bg-primary text-white font-bold py-2 px-4 rounded-full text-sm"
                                style={{ boxShadow: '0 4px 0 0 #d33c5e' }}
                                onMouseDown={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                                onMouseUp={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #d33c5e'; e.currentTarget.style.transform = ''; }}
                                onTouchStart={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                                onTouchEnd={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #d33c5e'; e.currentTarget.style.transform = ''; }}
                            >
                                Order Pads Now
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section className="px-4 py-6 grid grid-cols-1 gap-4">
                    <button
                        onClick={() => {
                            if (location?.lat && location?.lng) {
                                window.open(`https://maps.google.com/?q=${location.lat},${location.lng}`, '_blank');
                            } else if (location?.address) {
                                window.open(`https://maps.google.com/?q=${encodeURIComponent(location.address)}`, '_blank');
                            } else {
                                toast.error('No address available for this location.');
                            }
                        }}
                        className="w-full bg-tertiary text-white py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-2"
                        style={{ boxShadow: '0 4px 0 0 #158bb2' }}
                        onMouseDown={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                        onMouseUp={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #158bb2'; e.currentTarget.style.transform = ''; }}
                        onTouchStart={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(4px)'; }}
                        onTouchEnd={e => { e.currentTarget.style.boxShadow = '0 4px 0 0 #158bb2'; e.currentTarget.style.transform = ''; }}
                    >
                        <span className="material-symbols-outlined">directions</span>
                        Get Directions
                    </button>
                    <div className="grid grid-cols-2 gap-4">
                        <Link to={`/app/rate/${id}`} className="flex items-center justify-center gap-2 py-3 border-2 border-outline rounded-full font-bold text-on-surface-variant bg-white hover:bg-surface-container transition-colors active:scale-95">
                            <span className="material-symbols-outlined">star</span>
                            Rate & Review
                        </Link>
                        <button
                            onClick={async () => {
                                const uid = auth.currentUser?.uid;
                                if (!uid) { toast.error('Please log in to save.'); return; }
                                const ref = doc(db, 'users', uid, 'savedLocations', id);
                                if (saved) {
                                    await deleteDoc(ref).catch(() => { });
                                    setSaved(false);
                                    toast.success('Removed from saved locations');
                                } else {
                                    await setDoc(ref, { locationId: id, name: location?.name || '', savedAt: new Date() }).catch(() => { });
                                    setSaved(true);
                                    toast.success('📍 Location saved!');
                                }
                            }}
                            className="flex items-center justify-center gap-2 py-3 border-2 border-outline rounded-full font-bold text-on-surface-variant bg-white hover:bg-surface-container transition-colors active:scale-95"
                        >
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                            {saved ? 'Saved!' : 'Save Location'}
                        </button>
                    </div>
                </section>

                {/* Amenities Grid */}
                <section className="px-4 py-2">
                    <p className="text-[13px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Amenities & Features</p>
                    <div className="grid grid-cols-3 gap-3">
                        {dynamicAmenities.map((a) => (
                            <div key={a.label} className={`bg-white p-3 rounded-lg border-2 flex flex-col items-center gap-2 text-center ${a.ok ? 'border-secondary/20' : 'border-outline-variant bg-gray-50'}`}>
                                <span
                                    className={`material-symbols-outlined ${a.ok ? 'text-secondary' : 'text-zinc-300'}`}
                                    style={{ fontVariationSettings: a.ok ? "'FILL' 1" : "'FILL' 0" }}
                                >
                                    {a.icon}
                                </span>
                                <span className={`text-[11px] font-bold ${a.ok ? 'text-on-surface' : 'text-zinc-400'}`}>{a.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ratings & Reviews */}
                <section className="px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-extrabold text-2xl tracking-tight">Verified Reviews</h3>
                        <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {location.reviewCount || 0} Reviews
                        </span>
                    </div>

                    {/* Score Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                            { label: 'Cleanliness', val: `${location.cleanlinessScore || 0}/5`, accent: '' },
                            { label: 'Privacy', val: `${location.privacyScore || 0}/5`, accent: '' },
                            { label: 'Safety Score', val: `${location.safetyScore || 0}/5`, accent: 'secondary' },
                            { label: 'Overall', val: `${location.avgRating || 0}/5`, accent: '' },
                        ].map((s) => (
                            <div key={s.label} className={`p-4 rounded-lg border-2 flex flex-col items-center text-center relative overflow-hidden ${s.accent === 'secondary' ? 'bg-secondary/10 border-secondary/30' : 'bg-white border-gray-100'}`}>
                                {s.accent === 'secondary' && (
                                    <span
                                        className="material-symbols-outlined text-secondary absolute -right-2 -top-2 text-4xl opacity-20"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        shield_with_heart
                                    </span>
                                )}
                                <span className={`text-2xl font-black ${s.accent === 'secondary' ? 'text-secondary' : 'text-on-surface'}`}>{s.val}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${s.accent === 'secondary' ? 'text-secondary-dim' : 'text-on-surface-variant'}`}>{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Looie Tip */}
                    <div className="bg-tertiary-container/30 rounded-xl p-4 mb-6 flex gap-4 items-start border-2 border-tertiary/20">
                        <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center border-2 border-tertiary/30 shadow-sm">
                            <span className="text-2xl">🦊</span>
                        </div>
                        <div>
                            <p className="font-bold text-tertiary-dim text-sm">Looie's Tip:</p>
                            <p className="text-sm text-on-tertiary-container italic">
                                "{location.hasPads ? 'Pads are confirmed available here!' : 'Wait, pad stock is unconfirmed. Check alternatives.'}"
                            </p>
                        </div>
                    </div>

                    {/* Review Cards */}
                    <div className="space-y-3">
                        {reviews.length === 0 ? (
                            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-outline text-center">
                                <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">rate_review</span>
                                <p className="font-bold text-on-surface-variant">No reviews yet.</p>
                                <p className="text-sm text-on-surface-variant mb-4">Be the first to share your experience!</p>
                                <Link to={`/app/rate/${id}`} className="text-primary font-bold hover:underline">Write a Review</Link>
                            </div>
                        ) : (
                            reviews.map((r) => (
                                <div key={r.id} className="bg-white p-4 rounded-lg border-2 border-outline-variant">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 bg-primary-fixed rounded-full flex items-center justify-center text-lg">{r.userAvatar || '👤'}</div>
                                        <div className="flex-1">
                                            <p className="font-bold text-sm text-on-surface">{r.userName || 'Anonymous'}</p>
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i} className={`material-symbols-outlined text-sm ${i < r.rating ? 'text-amber-400' : 'text-zinc-200'}`}
                                                        style={{ fontVariationSettings: i < r.rating ? "'FILL' 1" : "'FILL' 0" }}>
                                                        star
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-on-surface-variant">{formatTimeAgo(r.createdAt)}</span>
                                    </div>
                                    <p className="text-sm text-on-surface-variant">{r.comment || r.text}</p>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* Nearby Pharmacy Carousel */}
                {nearbyPharmacies.length > 0 && (
                    <section className="pl-4 py-4 overflow-hidden">
                        <h3 className="font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-4 pr-4">
                            Nearby Pharmacies <span className="text-outline font-medium normal-case">(Example Suggestions)</span>
                        </h3>
                        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {nearbyPharmacies.map((p) => (
                                <div key={p.id || p.name} className="min-w-[200px] bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm flex flex-col gap-3">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">{p.icon || 'local_pharmacy'}</span>
                                        </div>
                                        <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded">{(p.distance * 1000).toFixed(0)}m</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm truncate">{p.name}</h4>
                                        <p className="text-[10px] text-on-surface-variant truncate">{p.address || 'Address not available'}</p>
                                    </div>
                                    <button
                                        onClick={() => p.phone ? window.open(`tel:${p.phone}`) : toast('No phone number available')}
                                        className="w-full bg-secondary/10 text-secondary font-bold py-2 rounded-lg text-xs flex items-center justify-center gap-1 active:bg-secondary/20 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">call</span> {p.phone ? 'Call' : 'Visit'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <BottomNav />
        </div>
    );
}

