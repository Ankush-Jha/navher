import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import DuoButton from '../../components/DuoButton';
import Badge from '../../components/Badge';
import { getLocation, updateLocationStatus, getLocationActivity } from '../../services/locationService';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

const STATUSES = [
    { id: 'working', label: 'Working ✅', sub: 'Stock available', badge: 'success' },
    { id: 'low', label: 'Low Stock ⚠️', sub: 'Almost empty', badge: 'warning' },
    { id: 'empty', label: 'Empty 🚫', sub: 'Needs refill', badge: 'danger' },
    { id: 'broken', label: 'Broken 🔧', sub: 'Out of service', badge: 'danger' },
];

export default function PadMachineDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { firebaseUser, addFoxPoints } = useAppStore();

    const [location, setLocation] = useState(null);
    const [activity, setActivity] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [picked, setPicked] = useState('working');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (!id) {
                setError('No machine ID provided.');
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const locData = await getLocation(id);
                if (locData) {
                    setLocation(locData);
                    // Fetch activity
                    const acts = await getLocationActivity(id);
                    setActivity(acts || []);
                    if (locData.status) {
                        setPicked(locData.status);
                    }
                } else {
                    setError('Machine not found.');
                }
            } catch (err) {
                console.error("Failed to fetch machine details:", err);
                setError('Failed to load machine details.');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    const handleSubmitUpdate = async () => {
        if (!firebaseUser?.uid || submitting) return;

        // Flood control — 30 second cooldown between updates
        const now = Date.now();
        if (lastUpdateTime && (now - lastUpdateTime) < 30000) {
            const remaining = Math.ceil((30000 - (now - lastUpdateTime)) / 1000);
            toast.error(`Please wait ${remaining}s before updating again.`);
            return;
        }

        setSubmitting(true);
        try {
            await updateLocationStatus(id, picked, firebaseUser.uid);
            setSubmitted(true);
            setLastUpdateTime(Date.now());
            addFoxPoints(5);
            toast.success('Machine status updated successfully!');

            // Re-fetch location and activity after successful update
            const loc = await getLocation(id);
            setLocation(loc);
            const acts = await getLocationActivity(id);
            setActivity(acts || []);
        } catch (err) {
            console.error("Failed to update status:", err);
            toast.error('Failed to update status. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // Helper for time ago
    const formatTimeAgo = (timestamp) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const diffMs = Date.now() - date.getTime();
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        if (diffHrs < 1) return 'Just now';
        if (diffHrs < 24) return `${diffHrs}h ago`;
        return `${Math.floor(diffHrs / 24)}d ago`;
    };

    if (loading) {
        return (
            <div className="flex flex-col min-h-dvh bg-white font-display pb-32">
                <TopBar title="Pad Machine Details" onBack={() => navigate(-1)} />
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="animate-pulse flex flex-col items-center gap-4 text-center">
                        <span className="text-4xl text-primary">💧</span>
                        <p className="text-slate-500 font-bold">Loading machine details...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !location) {
        return (
            <div className="flex flex-col min-h-dvh bg-white font-display pb-32">
                <TopBar title="Pad Machine Details" onBack={() => navigate(-1)} />
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <span className="material-symbols-outlined text-5xl text-red-500 mb-2">error</span>
                    <p className="text-slate-700 font-bold">{error || 'Failed to load details'}</p>
                </div>
            </div>
        );
    }

    const currentStatusObj = STATUSES.find(s => s.id === location.status) || STATUSES[0];

    return (
        <div className="flex flex-col min-h-dvh bg-white font-display pb-32">
            <TopBar title="Pad Machine Details" onBack={() => navigate(-1)} />

            <div className="px-5 pt-3 space-y-5">
                {/* Header card */}
                <div className="notion-card p-5 shadow-card flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-3xl">💧</div>
                    <div>
                        <h2 className="text-lg font-extrabold text-slate-800">{location.name}</h2>
                        <p className="text-sm text-slate-500 font-semibold">{location.address || 'Address not available'}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <Badge type={currentStatusObj.badge}>{currentStatusObj.label.split(' ')[0]}</Badge>
                            <span className="text-xs text-slate-400 font-bold">{location.isFree ? 'Free' : '₹10 / pad'}</span>
                        </div>
                    </div>
                </div>

                {/* Crowdsource update */}
                <div>
                    <p className="section-label mb-3">Update Current Status</p>
                    <div className="grid grid-cols-2 gap-2">
                        {STATUSES.map((s) => (
                            <button
                                key={s.id}
                                disabled={submitting}
                                onClick={() => { setPicked(s.id); setSubmitted(false); }}
                                className={`p-4 rounded-2xl border-2 text-left transition-all ${picked === s.id
                                    ? 'border-primary bg-primary/10'
                                    : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                                    } ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <p className={`font-extrabold text-sm mb-0.5 ${picked === s.id ? 'text-primary' : 'text-slate-700'}`}>{s.label}</p>
                                <p className="text-xs text-slate-400 font-semibold">{s.sub}</p>
                            </button>
                        ))}
                    </div>

                    {submitted ? (
                        <div className="mt-3 bg-accent-green/10 border border-accent-green/20 rounded-2xl p-4 flex items-center gap-3">
                            <span className="material-symbols-outlined fill text-accent-green text-[24px]">check_circle</span>
                            <div>
                                <p className="font-extrabold text-accent-green text-sm">Status Updated!</p>
                                <p className="text-xs text-slate-500 font-semibold">+5 pts added to your rewards</p>
                            </div>
                        </div>
                    ) : (
                        <button
                            disabled={submitting}
                            onClick={handleSubmitUpdate}
                            className={`duo-btn w-full font-extrabold py-3.5 rounded-2xl mt-3 flex items-center justify-center gap-2 ${submitting ? 'bg-slate-200 text-slate-400' : 'bg-primary/5 text-primary hover:bg-primary/20'}`}
                            style={{ '--btn-shadow-color': submitting ? 'rgba(0,0,0,0)' : 'rgba(255,75,114,0.2)' }}
                        >
                            {submitting ? (
                                <span className="material-symbols-outlined animate-spin">refresh</span>
                            ) : (
                                <span className="material-symbols-outlined fill text-[20px]">send</span>
                            )}
                            {submitting ? 'Submitting...' : 'Submit Update (+5 pts)'}
                        </button>
                    )}
                </div>

                {/* Activity log */}
                <div>
                    <p className="section-label mb-3">Community Activity</p>
                    <div className="space-y-2">
                        {activity.length === 0 ? (
                            <div className="p-4 border-2 border-dashed border-slate-200 rounded-2xl text-center">
                                <p className="text-sm font-bold text-slate-500">No activity yet.</p>
                                <p className="text-xs text-slate-400">Be the first to update this machine!</p>
                            </div>
                        ) : (
                            activity.map((a) => (
                                <div key={a.id} className="notion-card p-4 flex items-center gap-4 shadow-card">
                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xl">🦊</div>
                                    <div className="flex-1">
                                        <p className="font-extrabold text-slate-700 text-sm">Community Member</p>
                                        <p className="text-xs text-slate-500 font-semibold">{a.action || 'Updated status'}</p>
                                    </div>
                                    <span className="text-xs text-slate-400 font-bold">{formatTimeAgo(a.createdAt)}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className="bottom-cta">
                <DuoButton color="primary" onClick={() => {
                    if (machine?.lat && machine?.lng) {
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${machine.lat},${machine.lng}&travelmode=walking`, '_blank');
                    } else {
                        import('react-hot-toast').then(m => m.default.error('Location not available for this machine.'));
                    }
                }}>
                    <span className="material-symbols-outlined fill mr-2">navigation</span>
                    Navigate to Machine
                </DuoButton>
            </div>
        </div>
    );
}
