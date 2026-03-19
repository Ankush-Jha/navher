import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TactileButton from '../../components/TactileButton';
import { verifyPhoneOTP } from '../../lib/authService';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

export default function Verify() {
    const navigate = useNavigate();
    const location = useLocation();
    const phone = location.state?.phone ?? '';

    const [digits, setDigits] = useState(['', '', '', '', '', '']);
    const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const [loading, setLoading] = useState(false);
    const setAuth = useAppStore((s) => s.setAuth);

    const complete = digits.every(d => d !== '');

    const handleKey = (e, i) => {
        if (e.key === 'Backspace' && !digits[i] && i > 0) refs[i - 1].current?.focus();
    };
    const handleChange = (val, i) => {
        const d = val.replace(/\D/, '').slice(0, 1);
        const next = [...digits]; next[i] = d; setDigits(next);
        if (d && i < 5) refs[i + 1].current?.focus();
    };

    useEffect(() => { refs[0].current?.focus(); }, []);

    // Guard: if confirmationResult is lost (e.g. on page reload), redirect back to login
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.confirmationResult) {
            toast.error('Session expired. Please request a new OTP.');
            navigate('/auth/login', { replace: true });
        }
    }, []);

    const handleVerify = async () => {
        if (!complete || loading) return;
        setLoading(true);

        try {
            const otp = digits.join('');
            const { isNewUser, user } = await verifyPhoneOTP(otp);
            setAuth(user);
            navigate(isNewUser ? '/auth/setup' : '/app/map');
        } catch (err) {
            console.error('OTP verify error:', err);
            toast.error('Invalid OTP. Please check and try again.');
            setDigits(['', '', '', '', '', '']);
            refs[0].current?.focus();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden">
            <div className="fixed top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="fixed bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-card">
                <header className="flex items-center justify-between px-6 py-4">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors">
                        <span className="material-symbols-outlined text-primary">arrow_back</span>
                    </button>
                    <h1 className="font-headline font-extrabold text-[28px] tracking-tight text-primary">NavHer</h1>
                    <div className="w-10" />
                </header>

                <main className="px-8 pt-6 pb-12 flex flex-col items-center">
                    <div className="relative w-36 h-36 mb-8">
                        <div className="absolute inset-0 bg-secondary-fixed rounded-full rotate-3 scale-110" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center text-7xl select-none">🔐</div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-2">Check Your Phone</h2>
                        <p className="text-on-surface-variant font-medium text-[15px]">
                            Enter the 6-digit OTP sent to <span className="font-bold text-primary">{phone}</span>
                        </p>
                    </div>

                    {/* OTP inputs — 6 digits (Firebase sends 6-digit OTP) */}
                    <div className="flex gap-3 mb-8">
                        {digits.map((d, i) => (
                            <input
                                key={i}
                                ref={refs[i]}
                                type="tel"
                                maxLength={1}
                                value={d}
                                onChange={(e) => handleChange(e.target.value, i)}
                                onKeyDown={(e) => handleKey(e, i)}
                                className={`w-12 h-14 text-center text-2xl font-extrabold rounded-[1.25rem] border-2 outline-none transition-all ${d ? 'border-primary bg-primary-fixed text-primary' : 'border-outline-variant bg-surface-container'} focus:border-primary focus:ring-0`}
                            />
                        ))}
                    </div>

                    <div className="w-full space-y-4">
                        <TactileButton
                            color={complete && !loading ? 'green' : 'surface'}
                            size="lg"
                            full
                            disabled={!complete || loading}
                            onClick={handleVerify}
                        >
                            {loading ? 'Verifying...' : complete ? '✓ Verify & Continue' : 'Enter OTP to continue'}
                        </TactileButton>

                        <button className="w-full text-center text-on-surface-variant text-[15px] font-semibold py-3 hover:text-primary transition-colors">
                            Didn't receive it? <span className="text-primary font-bold">Resend OTP</span>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
