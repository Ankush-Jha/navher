import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import DuoButton from '../../components/DuoButton';
import { addLocation } from '../../services/locationService';
import { reverseGeocode } from '../../services/overpassService';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Custom draggable marker for pin refinement
function DraggableMarker({ lat, lng, onMove }) {
    const markerRef = useRef(null);
    const eventHandlers = useMemo(() => ({
        dragend() {
            const marker = markerRef.current;
            if (marker) {
                const pos = marker.getLatLng();
                onMove(pos.lat, pos.lng);
            }
        },
    }), [onMove]);

    const icon = L.divIcon({
        className: '',
        html: '<div style="background:#E8356D;width:28px;height:28px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
    });

    return <Marker draggable position={[lat, lng]} ref={markerRef} eventHandlers={eventHandlers} icon={icon} />;
}

const TYPES = [
    { id: 'washroom', emoji: '🚻', label: 'Washroom', desc: 'Clean restroom' },
    { id: 'machine', emoji: '💧', label: 'Pad Machine', desc: 'Vending dispenser' },
];

export default function AddLocation() {
    const navigate = useNavigate();
    const { firebaseUser, addFoxPoints } = useAppStore();

    const [type, setType] = useState('washroom');
    const [name, setName] = useState('');

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [address, setAddress] = useState('');
    const [hasPads, setHasPads] = useState(false);
    const [isFree, setIsFree] = useState(false);
    const [is24x7, setIs24x7] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Get user location + reverse-geocode to readable address via Nominatim (free)
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setLat(latitude);
                    setLng(longitude);
                    try {
                        const addr = await reverseGeocode(latitude, longitude);
                        // Trim to first 2 parts for brevity
                        setAddress(addr.split(',').slice(0, 3).join(',').trim());
                    } catch {
                        setAddress(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
                    }
                },
                (err) => console.warn("Failed to get location", err)
            );
        }
    }, []);

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (!name.trim() || submitting || !firebaseUser?.uid) return;

        if (!lat || !lng) {
            toast.error('Could not determine your location. Please ensure location services are enabled.');
            return;
        }

        setSubmitting(true);
        try {
            await addLocation({
                type,
                name: name.trim(),
                lat,
                lng,
                address: address || `${lat.toFixed(5)}, ${lng.toFixed(5)}`,
                hasPads,
                isFree,
                is24x7,
                addedBy: firebaseUser.uid
            });
            addFoxPoints(15); // Bonus points for adding location
            toast.success('Location added successfully! (+15 pts)');
            navigate('/app/map');
        } catch (error) {
            console.error("Error adding location:", error);
            toast.error('Failed to add location. Please try again.');
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-dvh bg-white font-display pb-32">
            <TopBar title="Add Location" onBack={() => navigate(-1)} />

            <div className="px-5 pt-4">
                <div className="mb-6">
                    <h2 className="text-[22px] font-extrabold text-slate-900 mb-1">Help the Community</h2>
                    <p className="text-slate-500 font-semibold text-sm">Add a new safe washroom or pad machine.</p>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                            <span className="material-symbols-outlined fill text-white text-[14px]">check</span>
                        </div>
                        <span className="text-xs font-extrabold text-primary">Type</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-200 rounded-full" />
                    <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${type ? 'bg-primary' : 'bg-slate-200'}`}>
                            <span className="material-symbols-outlined fill text-white text-[14px]">location_on</span>
                        </div>
                        <span className={`text-xs font-extrabold ${type ? 'text-primary' : 'text-slate-400'}`}>Location</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-200 rounded-full" />
                    <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${name.trim() ? 'bg-primary' : 'bg-slate-200'}`}>
                            <span className="material-symbols-outlined fill text-white text-[14px]">edit</span>
                        </div>
                        <span className={`text-xs font-extrabold ${name.trim() ? 'text-primary' : 'text-slate-400'}`}>Details</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Type selector */}
                    <div>
                        <p className="section-label mb-3">What are you adding?</p>
                        <div className="grid grid-cols-2 gap-3">
                            {TYPES.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setType(t.id)}
                                    className={`flex flex-col items-center py-5 px-4 rounded-2xl border-2 transition-all ${type === t.id
                                        ? 'border-primary bg-primary/8 shadow-card'
                                        : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                                        }`}
                                >
                                    <span className="text-3xl mb-2">{t.emoji}</span>
                                    <span className={`font-extrabold text-sm ${type === t.id ? 'text-primary' : 'text-slate-700'}`}>{t.label}</span>
                                    <span className="text-xs text-slate-400 font-semibold mt-0.5">{t.desc}</span>
                                    {type === t.id && (
                                        <span className="material-symbols-outlined fill text-primary text-[18px] mt-2">check_circle</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Map */}
                    <div>
                        <p className="section-label mb-3">Pin Location <span className="text-outline font-medium normal-case">(drag to adjust)</span></p>
                        {lat && lng ? (
                            <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-card">
                                <MapContainer
                                    center={[lat, lng]}
                                    zoom={16}
                                    scrollWheelZoom={false}
                                    style={{ height: '100%', width: '100%' }}
                                    zoomControl={false}
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <DraggableMarker lat={lat} lng={lng} onMove={(newLat, newLng) => { setLat(newLat); setLng(newLng); }} />
                                </MapContainer>
                            </div>
                        ) : (
                            <div className="h-44 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50">
                                <div className="text-center">
                                    <span className="material-symbols-outlined text-slate-300 text-3xl">location_searching</span>
                                    <p className="text-xs font-bold text-slate-400 mt-1">Getting your location…</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Name input */}
                    <div>
                        <p className="section-label mb-2">Name or landmark</p>
                        <div className="notion-card p-4 shadow-card">
                            <input
                                type="text"
                                required
                                placeholder={type === 'washroom' ? 'e.g. Metro Station Washroom' : 'e.g. Pink Toilet Dispenser'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full text-[17px] font-extrabold text-slate-800 placeholder:text-slate-300 bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Extra Details */}
                    <div>
                        <p className="section-label mb-3">Additional Details</p>
                        <div className="space-y-3">
                            {[
                                { label: 'Has Pads Available', icon: 'water_drop', state: hasPads, setter: setHasPads },
                                { label: 'Free to Use', icon: 'money_off', state: isFree, setter: setIsFree },
                                { label: 'Open 24×7', icon: 'schedule', state: is24x7, setter: setIs24x7 },
                            ].map(({ label, icon, state, setter }) => (
                                <button
                                    key={label}
                                    type="button"
                                    onClick={() => setter(s => !s)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${state ? 'border-primary bg-primary/5' : 'border-slate-100 bg-slate-50'}`}
                                >
                                    <span className={`material-symbols-outlined text-[20px] ${state ? 'text-primary' : 'text-slate-400'}`} style={{ fontVariationSettings: state ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
                                    <span className={`font-bold text-sm flex-1 text-left ${state ? 'text-primary' : 'text-slate-600'}`}>{label}</span>
                                    <span className={`material-symbols-outlined text-[20px] ${state ? 'text-primary' : 'text-slate-300'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{state ? 'check_circle' : 'circle'}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </form>
            </div>

            <div className="bottom-cta">
                <DuoButton
                    color={name.trim() && !submitting ? 'primary' : 'gray'}
                    disabled={!name.trim() || submitting}
                    type="submit"
                    onClick={handleSubmit}
                >
                    <span className="material-symbols-outlined fill mr-2">{submitting ? 'refresh' : 'send'}</span>
                    {submitting ? 'Submitting...' : 'Submit for Review'}
                </DuoButton>
            </div>
        </div>
    );
}
