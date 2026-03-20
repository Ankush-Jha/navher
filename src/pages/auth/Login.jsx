import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TactileButton from '../../components/TactileButton';
import { loginWithEmail, registerWithEmail, signInWithGoogle } from '../../lib/authService';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const setAuth = useAppStore((s) => s.setAuth);

    const valid = email.includes('@') && password.length >= 6;

    const handleSubmit = async () => {
        if (!valid || loading) return;
        setLoading(true);

        try {
            let result;
            if (isRegister) {
                result = await registerWithEmail(email, password);
            } else {
                result = await loginWithEmail(email, password);
            }
            setAuth(result.user);
            navigate(result.isNewUser ? '/auth/setup' : '/app/map');
        } catch (err) {
            console.error('Auth error:', err);
            if (err.code === 'auth/user-not-found') {
                toast.error('No account found. Try signing up!');
            } else if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                toast.error('Wrong password. Please try again.');
            } else if (err.code === 'auth/email-already-in-use') {
                toast.error('Email already used. Try logging in instead.');
            } else {
                toast.error(isRegister ? 'Sign-up failed. Please try again.' : 'Login failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const { isNewUser, user } = await signInWithGoogle();
            setAuth(user);
            navigate(isNewUser ? '/auth/setup' : '/app/map');
        } catch (err) {
            console.error('Google sign-in error:', err);
            toast.error('Google sign-in failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email.includes('@')) { toast.error('Enter your email first.'); return; }
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset link sent! Check your inbox.');
        } catch (err) {
            toast.error('Could not send reset email. Check your address.');
        }
    };

    return (
        <div className="min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden">
            {/* Background blobs */}
            <div className="fixed top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="fixed bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="fixed top-1/2 -left-12 w-48 h-48 border-4 border-dashed border-tertiary/20 rounded-full -z-10 opacity-50" />

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
                        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-2">
                            {isRegister ? 'Create Account' : 'Welcome Back!'}
                        </h2>
                        <p className="text-on-surface-variant font-medium text-[15px]">
                            {isRegister ? 'Join the NavHer community 🌸' : 'Looie is happy to see you again.'}
                        </p>
                    </div>

                    <div className="w-full space-y-5">
                        {/* Email input */}
                        <div className="space-y-2">
                            <label className="section-label px-1">Email</label>
                            <div className={`flex items-center bg-surface-container rounded-full border-2 transition-all p-2 ${email.includes('@') ? 'border-secondary' : 'border-outline-variant focus-within:border-primary'}`}>
                                <span className="material-symbols-outlined text-on-surface-variant ml-4 mr-2">mail</span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-bold px-2 py-2 placeholder:text-outline outline-none"
                                />
                            </div>
                        </div>

                        {/* Password input */}
                        <div className="space-y-2">
                            <label className="section-label px-1">Password</label>
                            <div className={`flex items-center bg-surface-container rounded-full border-2 transition-all p-2 ${password.length >= 6 ? 'border-secondary' : 'border-outline-variant focus-within:border-primary'}`}>
                                <span className="material-symbols-outlined text-on-surface-variant ml-4 mr-2">lock</span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Min 6 characters"
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-bold px-2 py-2 placeholder:text-outline outline-none"
                                />
                                {password.length >= 6 && (
                                    <span className="material-symbols-outlined fill text-secondary text-[22px] mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                )}
                            </div>
                        </div>

                        {!isRegister && (
                            <div className="text-right px-1 -mt-2">
                                <button onClick={handleForgotPassword} className="text-xs font-bold text-primary hover:underline">Forgot Password?</button>
                            </div>
                        )}

                        <TactileButton
                            color={valid && !loading ? 'primary' : 'surface'}
                            size="lg"
                            full
                            disabled={!valid || loading}
                            onClick={handleSubmit}
                        >
                            {loading ? (isRegister ? 'Creating...' : 'Signing in...') : (isRegister ? 'Sign Up' : 'Log In')}
                            {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
                        </TactileButton>

                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] flex-1 bg-outline-variant" />
                            <span className="text-xs font-bold text-outline tracking-widest uppercase">Or connect with</span>
                            <div className="h-[2px] flex-1 bg-outline-variant" />
                        </div>

                        {/* Google */}
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="w-full bg-white border-2 border-outline-variant rounded-full py-4 flex items-center justify-center gap-2 font-bold text-on-surface active:translate-y-1 transition-all disabled:opacity-50"
                            style={{ boxShadow: '0 4px 0 0 #e2e8f0' }}
                        >
                            {loading ? (
                                <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.2 26.7 36 24 36c-5.2 0-9.6-3.5-11.2-8.2l-6.5 5C9.5 39.6 16.2 44 24 44z" /><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z" /></svg>
                            )}
                            {loading ? 'Connecting...' : 'Continue with Google'}
                        </button>
                    </div>

                    <p className="mt-10 text-center text-on-surface-variant text-[15px] font-medium">
                        {isRegister ? (
                            <>Already have an account?{' '}<button className="text-primary font-bold hover:underline" onClick={() => setIsRegister(false)}>Log In</button></>
                        ) : (
                            <>New to NavHer?{' '}<button className="text-primary font-bold hover:underline" onClick={() => setIsRegister(true)}>Create account</button></>
                        )}
                    </p>
                </main>
            </div>
        </div>
    );
}
