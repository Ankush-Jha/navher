import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import DuoButton from '../../components/DuoButton';
import { submitReview } from '../../services/reviewService';
import { auth } from '../../lib/firebase';
import { db } from '../../lib/firebase';
import { doc, increment, updateDoc } from 'firebase/firestore';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

const TAGS = ['Super Clean', 'Well Lit', 'Safe', 'No Water', 'Foul Smell', 'Has Dustbins'];

export default function RateReview() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id: locationId } = useParams();
    const locationName = location.state?.name || 'This Location';
    const { user } = useAppStore();

    const [rating, setRating] = useState(0);
    const [safe, setSafe] = useState(null);
    const [tags, setTags] = useState([]);
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const toggleTag = (t) =>
        setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

    const canSubmit = rating > 0 && !submitting;

    const handleSubmit = async () => {
        if (!canSubmit) return;
        setSubmitting(true);
        try {
            const uid = auth.currentUser?.uid;
            if (!uid) throw new Error('Not logged in');

            await submitReview({
                locationId: locationId || 'unknown',
                locationName,
                userId: uid,
                userName: user?.name || 'NavHer User',
                userAvatar: user?.avatar || '🦊',
                rating,
                safetyRating: safe === true ? 5 : safe === false ? 1 : null,
                tags,
                comment: comment.trim(),
            });

            // Award +25 foxPoints in Firestore
            try {
                await updateDoc(doc(db, 'users', uid), { 'rewards.totalPoints': increment(25) });
            } catch (pointsErr) {
                console.warn('Points update failed (non-critical):', pointsErr);
            }

            setSuccessMsg('Review submitted! +25 points earned 🎉');
            setTimeout(() => navigate(-1), 1800);
        } catch (err) {
            console.error('Review error:', err);
            toast.error('Could not submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-dvh bg-white font-display pb-32">
            <TopBar title="Rate & Review" onBack={() => navigate(-1)} />

            <div className="px-5 pt-4 space-y-6">
                {/* Location name */}
                <div>
                    <h2 className="text-xl font-extrabold text-slate-900">{locationName}</h2>
                    <p className="text-slate-400 font-semibold text-sm mt-0.5">Your review helps women find safe spaces</p>
                </div>

                {/* Success message */}
                {successMsg && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center">
                        <p className="font-extrabold text-green-700">{successMsg}</p>
                    </div>
                )}
                {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-center">
                        <p className="font-bold text-red-600">{error}</p>
                    </div>
                )}

                {/* Star rating */}
                <div>
                    <p className="section-label mb-3">Overall Experience</p>
                    <div className="flex gap-2 justify-center">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button
                                key={s}
                                onClick={() => setRating(s)}
                                className="transition-transform active:scale-90"
                            >
                                <span className={`material-symbols-outlined text-5xl ${s <= rating ? 'fill text-accent-yellow' : 'text-slate-200'}`}>
                                    star
                                </span>
                            </button>
                        ))}
                    </div>
                    {rating > 0 && (
                        <p className="text-center text-sm font-extrabold text-accent-yellow mt-2">
                            {['', 'Very Bad', 'Bad', 'OK', 'Good', 'Excellent!'][rating]}
                        </p>
                    )}
                </div>

                {/* Did you feel safe? */}
                <div>
                    <p className="section-label mb-3">Did you feel safe?</p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setSafe(true)}
                            className={`flex-1 py-4 rounded-2xl border-2 font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${safe === true ? 'border-accent-green bg-accent-green/10 text-accent-green' : 'border-slate-200 text-slate-600'}`}
                        >
                            <span className="material-symbols-outlined fill text-[20px]">thumb_up</span> Yes, safe
                        </button>
                        <button
                            onClick={() => setSafe(false)}
                            className={`flex-1 py-4 rounded-2xl border-2 font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${safe === false ? 'border-red-400 bg-red-50 text-red-500' : 'border-slate-200 text-slate-600'}`}
                        >
                            <span className="material-symbols-outlined fill text-[20px]">thumb_down</span> No
                        </button>
                    </div>
                </div>

                {/* Quick tags */}
                <div>
                    <p className="section-label mb-3">Quick Tags (optional)</p>
                    <div className="flex flex-wrap gap-2">
                        {TAGS.map((t) => (
                            <button
                                key={t}
                                onClick={() => toggleTag(t)}
                                className={`px-4 py-2 rounded-full border font-extrabold text-sm transition-all ${tags.includes(t)
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white text-slate-600 border-slate-200'
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comment */}
                <div>
                    <p className="section-label mb-3">Additional Comments</p>
                    <div className="notion-card p-4 shadow-card">
                        <textarea
                            rows={4}
                            placeholder="Tell others what to expect…"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full text-sm font-semibold text-slate-800 placeholder:text-slate-300 bg-transparent focus:outline-none resize-none"
                        />
                    </div>
                </div>
            </div>

            <div className="bottom-cta">
                {/* XP reward hint */}
                <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="material-symbols-outlined fill text-accent-yellow text-[18px]">stars</span>
                    <span className="text-xs font-extrabold text-slate-500">Earn <span className="text-accent-yellow">+25 Points</span> for reviewing!</span>
                </div>
                <DuoButton
                    color={canSubmit ? 'primary' : 'gray'}
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                >
                    {submitting ? (
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Submitting…</span>
                    ) : (
                        <><span className="material-symbols-outlined fill mr-2">check_circle</span>Submit Review</>
                    )}
                </DuoButton>
            </div>
        </div>
    );
}
