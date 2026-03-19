import React from 'react';

/**
 * Duolingo-style primary CTA button with bottom shadow press effect.
 * Usage: <DuoButton color="primary">Go!</DuoButton>
 * Colors: 'primary' (pink), 'green', 'blue', 'yellow', 'gray'
 */
const configs = {
    primary: {
        bg: 'bg-primary',
        text: 'text-white',
        shadow: '#d33c5e',
    },
    green: {
        bg: 'bg-accent-green',
        text: 'text-white',
        shadow: '#46a302',
    },
    blue: {
        bg: 'bg-accent-blue',
        text: 'text-white',
        shadow: '#158ec7',
    },
    yellow: {
        bg: 'bg-accent-yellow',
        text: 'text-slate-900',
        shadow: '#c8a000',
    },
    gray: {
        bg: 'bg-slate-200',
        text: 'text-slate-600',
        shadow: '#94a3b8',
    },
    outline: {
        bg: 'bg-white border-2 border-slate-200',
        text: 'text-slate-700',
        shadow: '#94a3b8',
    },
};

export default function DuoButton({
    children,
    onClick,
    color = 'primary',
    className = '',
    disabled = false,
    type = 'button',
    fullWidth = true,
}) {
    const cfg = configs[color] || configs.primary;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ '--btn-shadow-color': cfg.shadow }}
            className={`duo-btn ${cfg.bg} ${cfg.text} ${fullWidth ? 'w-full' : ''} py-4 px-6 text-[17px] font-extrabold rounded-2xl ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    );
}
