import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TactileButton from '../../components/TactileButton';
import { updateUserDisplayName } from '../../lib/authService';
import { updateUserProfile, getUserProfile } from '../../services/userService';
import { useAppStore } from '../../store';
import { auth } from '../../lib/firebase';
import toast from 'react-hot-toast';

const AVATARS = ['🦊', '🌸', '🌺', '🦋', '🌻', '🐝', '🌈', '🦄', '🐬', '💎', '🌙', '⭐'];

export default function Setup() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('🦊');
    const [loading, setLoading] = useState(false);
    const setUser = useAppStore((s) => s.setUser);

    // If user already has a profile (returning user who landed here by mistake),
    // skip setup and go straight to the app
    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        getUserProfile(uid).then((profile) => {
            if (profile?.name) {
                navigate('/app/map', { replace: true });
            }
        }).catch(() => { }); // fail silently — just show the setup form
    }, [navigate]);

    const handleFinish = async () => {
        setLoading(true);
        // Update store immediately so the UI reflects changes
        setUser(prev => ({ ...(prev || {}), name, avatar }));

        const uid = auth.currentUser?.uid;
        if (uid) {
            // Fire-and-forget — save to Firestore in background (3s timeout)
            Promise.race([
                Promise.all([
                    updateUserProfile(uid, { name, avatar }),
                    updateUserDisplayName(name),
                ]),
                new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000)),
            ]).catch(err => console.warn('Profile save deferred:', err.message));
        }

        // Navigate instantly — don't wait for Firestore
        navigate('/app/map');
    };

    return (
        <div className="min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden">
            <div className="fixed top-10 right-10 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl -z-10" />
            <div className="fixed bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-card">
                <header className="flex items-center justify-between px-6 py-4">
                    {step > 0 ? (
                        <button onClick={() => setStep(0)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50">
                            <span className="material-symbols-outlined text-primary">arrow_back</span>
                        </button>
                    ) : <div className="w-10" />}
                    <h1 className="font-headline font-extrabold text-[26px] tracking-tight text-primary">NavHer</h1>
                    <div className="w-10" />
                </header>

                {/* Progress */}
                <div className="px-6 pb-2">
                    <div className="ep-progress-track">
                        <div className="ep-progress-fill transition-all duration-500" style={{ width: step === 0 ? '50%' : '100%' }} />
                    </div>
                    <p className="text-xs text-on-surface-variant font-bold text-right mt-1">{step + 1}/2</p>
                </div>

                <main className="px-8 pt-6 pb-12">
                    {step === 0 ? (
                        <>
                            <h2 className="text-3xl font-extrabold text-on-surface mb-2">What's your name?</h2>
                            <p className="text-on-surface-variant text-[15px] mb-8">So Looie knows what to call you! 🦊</p>
                            <label className="section-label px-1 mb-2 block">Your Name</label>
                            <div className={`flex items-center bg-surface-container rounded-xl border-2 transition-all p-4 mb-6 ${name ? 'border-primary' : 'border-outline-variant focus-within:border-primary'}`}>
                                <span className="material-symbols-outlined text-on-surface-variant mr-3">person</span>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Ananya Sharma"
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-bold outline-none placeholder:text-outline"
                                />
                            </div>
                            <TactileButton color={name.trim() ? 'primary' : 'surface'} size="lg" full disabled={!name.trim()} onClick={() => setStep(1)}>
                                Continue <span className="material-symbols-outlined">arrow_forward</span>
                            </TactileButton>
                        </>
                    ) : (
                        <>
                            <h2 className="text-3xl font-extrabold text-on-surface mb-2">Pick your avatar</h2>
                            <p className="text-on-surface-variant text-[15px] mb-8">This is how the community will see you 💗</p>
                            <div className="grid grid-cols-4 gap-3 mb-8">
                                {AVATARS.map((a) => (
                                    <button
                                        key={a}
                                        onClick={() => setAvatar(a)}
                                        className={`w-full aspect-square rounded-2xl text-3xl flex items-center justify-center border-2 transition-all active:scale-95 ${avatar === a ? 'border-primary bg-primary-fixed shadow-tactile scale-105' : 'border-outline-variant bg-surface-container hover:border-primary'}`}
                                    >
                                        {a}
                                    </button>
                                ))}
                            </div>
                            {/* Preview */}
                            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border-2 border-outline-variant mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary-fixed border-2 border-primary flex items-center justify-center text-2xl">{avatar}</div>
                                <div>
                                    <p className="font-extrabold text-on-surface">{name}</p>
                                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Member · Level 1</p>
                                </div>
                            </div>
                            <TactileButton color="primary" size="lg" full disabled={loading} onClick={handleFinish}>
                                {loading ? 'Saving...' : <>Start Exploring <span className="material-symbols-outlined">explore</span></>}
                            </TactileButton>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}
