import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TactileButton from '../../components/TactileButton';

const SLIDES = [
    {
        bg: 'bg-primary-fixed',
        accent: 'text-primary',
        badge: { icon: '📍', text: 'Nearby Now', extra: '✨ Hygiene First' },
        title: <>Never worry about <span className="text-primary">periods</span> or <span className="text-tertiary">washrooms</span> again</>,
        body: 'Your companion for safety and hygiene, anywhere in the city. Find vetted spaces in seconds.',
        progress: '1/4',
        pct: 25,
    },
    {
        bg: 'bg-tertiary-fixed',
        accent: 'text-tertiary',
        badge: { icon: '💧', text: 'Pads Available', extra: '🆓 Free Dispenser' },
        title: <>Find <span className="text-tertiary">pad dispensers</span> and safe <span className="text-primary">washrooms</span> near you</>,
        body: 'Community-verified locations updated in real time. Filter by free pads, cleanliness, and 24×7 access.',
        progress: '2/4',
        pct: 50,
    },
    {
        bg: 'bg-secondary-fixed',
        accent: 'text-secondary',
        badge: { icon: '⚡', text: '15 min delivery', extra: '📦 Discreet pack' },
        title: <>Emergency pads delivered in <span className="text-secondary">under 15 minutes</span></>,
        body: 'Order through Blinkit, Zepto or Instamart directly from the app. Your cycle data helps us predict your need.',
        progress: '3/4',
        pct: 75,
    },
    {
        bg: 'bg-primary-fixed',
        accent: 'text-primary',
        badge: { icon: '🛡️', text: 'SOS in seconds', extra: '🏆 Earn rewards' },
        title: <>Community safety & <span className="text-primary">gamified rewards</span> for every contribution</>,
        body: 'Broadcast an SOS to nearby women, earn LooPoints for adding locations, and unlock real-world vouchers.',
        progress: '4/4',
        pct: 100,
    },
];

export default function Onboarding() {
    const navigate = useNavigate();
    const [slide, setSlide] = useState(0);
    const s = SLIDES[slide];
    const isLast = slide === SLIDES.length - 1;

    return (
        <div className={`min-h-dvh flex flex-col font-body text-on-surface ${s.bg} transition-colors duration-500`}>
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-6 w-full max-w-md mx-auto">
                <span className="font-headline font-extrabold text-[28px] tracking-tight text-primary">NavHer</span>
                <button
                    onClick={() => navigate('/auth/login')}
                    className="text-on-surface-variant font-bold text-[13px] uppercase tracking-widest hover:text-primary transition-all"
                >
                    Skip
                </button>
            </header>

            {/* Progress */}
            <div className="px-6 w-full max-w-md mx-auto mb-8">
                <div className="ep-progress-track">
                    <div className="ep-progress-fill transition-all duration-500" style={{ width: `${s.pct}%` }} />
                </div>
            </div>

            {/* Content */}
            <main className="flex-grow flex flex-col items-center px-8 w-full max-w-md mx-auto text-center">
                {/* Illustration card */}
                <div className="relative w-full aspect-square mb-10">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-[3rem] rotate-3" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="text-9xl select-none">{slide === 0 ? '🗺️' : slide === 1 ? '💧' : slide === 2 ? '⚡' : '🏆'}</div>
                    </div>
                    {/* Floating pills */}
                    <div className="absolute top-6 -left-3 bg-primary text-white px-4 py-2 rounded-full shadow-sm font-bold text-sm -rotate-12 border-2 border-white text-[12px]">
                        {s.badge.extra}
                    </div>
                    <div className="absolute bottom-10 -right-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full shadow-sm font-bold text-sm rotate-6 border-2 border-white text-[12px]">
                        {s.badge.icon} {s.badge.text}
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-4 mb-12">
                    <h1 className="font-headline font-extrabold text-[26px] leading-[1.1] text-on-surface tracking-tight">{s.title}</h1>
                    <p className="text-on-surface-variant text-[15px] leading-relaxed font-medium px-4">{s.body}</p>
                </div>

                {/* CTA */}
                <div className="w-full space-y-4">
                    <TactileButton
                        color="primary"
                        size="lg"
                        full
                        onClick={() => isLast ? navigate('/auth/login') : setSlide(slide + 1)}
                    >
                        {isLast ? 'Get Started' : 'Next'}
                        <span className="material-symbols-outlined">{isLast ? 'check_circle' : 'arrow_forward'}</span>
                    </TactileButton>
                    {/* Social proof */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="flex -space-x-2">
                            {['🌸', '🌺', '🦋'].map((e, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm shadow-card">{e}</div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-tertiary-fixed border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-card">+2k</div>
                        </div>
                        <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">Joined the community</p>
                    </div>
                </div>
            </main>
            <footer className="h-12" />
        </div>
    );
}
