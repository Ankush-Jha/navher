import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import DuoButton from '../../components/DuoButton';
import { addLocation } from '../../services/locationService';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

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
    const [submitting, setSubmitting] = useState(false);

    // Get user location so we can tag the pin
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLat(pos.coords.latitude);
                    setLng(pos.coords.longitude);
                },
                (err) => console.warn("Failed to get location for add pin", err)
            );
        }
    }, []);

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (!name.trim() || submitting || !firebaseUser?.uid) return;

        // Fallback fake location if user denied permissions for demo purposes
        const targetLat = lat || 28.6139;
        const targetLng = lng || 77.2090;

        setSubmitting(true);
        try {
            await addLocation({
                type,
                name: name.trim(),
                lat: targetLat,
                lng: targetLng,
                address: 'Added by user coordinates',
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

                    {/* Map pin */}
                    <div>
                        <p className="section-label mb-3">Pin Location</p>
                        <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-card">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                                alt="Map"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white w-12 h-12 rounded-full shadow-card flex items-center justify-center">
                                    <span className="material-symbols-outlined fill text-primary text-[26px]">location_on</span>
                                </div>
                            </div>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full whitespace-nowrap">
                                <p className="text-xs font-extrabold text-slate-700">Tap to refine location</p>
                            </div>
                        </div>
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
