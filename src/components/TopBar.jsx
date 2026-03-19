import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Electric Peony TopBar
 * Props:
 *   title       – string shown in primary pink
 *   onBack      – fn, shows arrow_back if provided
 *   rightAction – JSX node placed at the right
 *   shadow      – 'none' | 'primary' (default) | 'sm'
 */
export default function TopBar({ title, onBack, rightAction, shadow = 'sm' }) {
    const navigate = useNavigate();
    const handleBack = onBack || (() => navigate(-1));

    const shadowClass = {
        none: '',
        primary: 'shadow-[0_4px_0_0_#ff4b72]',
        sm: 'shadow-sm border-b-2 border-outline-variant',
    }[shadow] ?? 'shadow-sm border-b-2 border-outline-variant';

    return (
        <header className={`sticky top-0 z-50 flex items-center justify-between px-5 h-16 w-full bg-white ${shadowClass}`}>
            <div className="flex items-center gap-3">
                {onBack !== null && (
                    <button
                        onClick={handleBack}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors active:translate-y-0.5"
                    >
                        <span className="material-symbols-outlined text-primary text-[24px]">arrow_back</span>
                    </button>
                )}
                <h1 className="font-headline font-extrabold text-[26px] leading-[1.1] tracking-tight text-primary">
                    {title}
                </h1>
            </div>
            {rightAction ? (
                <div>{rightAction}</div>
            ) : (
                <div className="w-10" /> /* spacer */
            )}
        </header>
    );
}
