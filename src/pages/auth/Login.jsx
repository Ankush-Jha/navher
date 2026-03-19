import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TactileButton from '../../components/TactileButton';
import { sendPhoneOTP, signInWithGoogle } from '../../lib/authService';
import toast from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef(null);

    const valid = phone.replace(/\D/g, '').length === 10;

    const handleGetOTP = async () => {
        if (!valid || loading) return;
        setLoading(true);

        try {
            const fullPhone = `+91${phone.replace(/\D/g, '')}`;
            await sendPhoneOTP(fullPhone, recaptchaRef.current);
            navigate('/auth/verify', { state: { phone: fullPhone } });
        } catch (err) {
            console.error('OTP error:', err);
            toast.error('Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const { isNewUser } = await signInWithGoogle();
            navigate(isNewUser ? '/auth/setup' : '/app/map');
        } catch (err) {
            console.error('Google sign-in error:', err);
            toast.error('Google sign-in failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden">
            {/* Background blobs */}
            <div className="fixed top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="fixed bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="fixed top-1/2 -left-12 w-48 h-48 border-4 border-dashed border-tertiary/20 rounded-full -z-10 opacity-50" />

            {/* Invisible reCAPTCHA container (required by Firebase phone auth) */}
            <div ref={recaptchaRef} id="recaptcha-container" />

            <div className="w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-card">
                {/* App bar */}
                <header className="flex items-center justify-between px-6 py-4 w-full">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors active:translate-y-0.5">
                        <span className="material-symbols-outlined text-primary">arrow_back</span>
                    </button>
                    <h1 className="font-headline font-extrabold text-[28px] tracking-tight text-primary">NavHer</h1>
                    <div className="w-10" />
                </header>

                <main className="px-8 pt-6 pb-12 flex flex-col items-center">
                    {/* Mascot */}
                    <div className="relative w-36 h-36 mb-8">
                        <div className="absolute inset-0 bg-primary-fixed rounded-full rotate-3 scale-110" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center text-7xl select-none">🦊</div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-2">Welcome Back!</h2>
                        <p className="text-on-surface-variant font-medium text-[15px]">Looie is happy to see you again.</p>
                    </div>

                    <div className="w-full space-y-6">
                        {/* Phone input */}
                        <div className="space-y-2">
                            <label className="section-label px-1">Phone Number</label>
                            <div className={`flex items-center bg-surface-container rounded-full border-2 transition-all p-2 ${valid ? 'border-secondary' : 'border-outline-variant focus-within:border-primary'}`}>
                                <div className="flex items-center px-4 py-2 bg-white rounded-full font-bold text-primary shadow-card text-sm">
                                    <span>+91</span>
                                    <span className="material-symbols-outlined text-[18px] ml-1">expand_more</span>
                                </div>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="98765 43210"
                                    maxLength={12}
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-xl font-bold px-4 py-2 placeholder:text-outline outline-none"
                                />
                                {valid && (
                                    <span className="material-symbols-outlined fill text-secondary text-[22px] mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                )}
                            </div>
                        </div>

                        <TactileButton
                            color={valid && !loading ? 'primary' : 'surface'}
                            size="lg"
                            full
                            disabled={!valid || loading}
                            onClick={handleGetOTP}
                        >
                            {loading ? 'Sending...' : 'Get OTP'}
                            {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
                        </TactileButton>

                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] flex-1 bg-outline-variant" />
                            <span className="text-xs font-bold text-outline tracking-widest uppercase">Or connect with</span>
                            <div className="h-[2px] flex-1 bg-outline-variant" />
                        </div>

                        {/* Social */}
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="w-full bg-white border-2 border-outline-variant rounded-full py-4 flex items-center justify-center gap-2 font-bold text-on-surface active:translate-y-1 transition-all disabled:opacity-50"
                            style={{ boxShadow: '0 4px 0 0 #e2e8f0' }}
                        >
                            <span>🌐</span> Continue with Google
                        </button>
                    </div>

                    <p className="mt-10 text-center text-on-surface-variant text-[15px] font-medium">
                        New to NavHer?{' '}
                        <a className="text-primary font-bold hover:underline" href="#">Create account</a>
                    </p>
                </main>
            </div>
        </div>
    );
}
