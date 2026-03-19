import React from 'react';

/**
 * Electric Peony TactileButton
 * Props:
 *   color   – 'primary' | 'green' | 'blue' | 'outline' | 'surface'
 *   size    – 'sm' | 'md' (default) | 'lg'
 *   full    – boolean (w-full)
 *   onClick – fn
 *   disabled – boolean
 *   children – JSX
 *   className – extra classes
 */
const COLORS = {
    primary: {
        bg: 'bg-primary text-on-primary',
        shadow: '0 4px 0 0 #d33c5e',
    },
    green: {
        bg: 'bg-secondary text-on-secondary',
        shadow: '0 4px 0 0 #3ea500',
    },
    blue: {
        bg: 'bg-tertiary text-on-tertiary',
        shadow: '0 4px 0 0 #158bb2',
    },
    outline: {
        bg: 'bg-white text-on-surface border-2 border-outline-variant',
        shadow: '0 4px 0 0 #e2e8f0',
    },
    surface: {
        bg: 'bg-surface-container text-on-surface',
        shadow: '0 4px 0 0 #d1d5db',
    },
};

const SIZES = {
    sm: 'px-5 py-3 text-[14px]',
    md: 'px-6 py-4 text-[16px]',
    lg: 'px-8 py-5 text-[18px]',
};

export default function TactileButton({
    color = 'primary',
    size = 'md',
    full = false,
    onClick,
    disabled = false,
    children,
    className = '',
}) {
    const { bg, shadow } = COLORS[color] ?? COLORS.primary;
    const sz = SIZES[size] ?? SIZES.md;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{ boxShadow: disabled ? 'none' : shadow, transition: 'all 0.1s ease' }}
            onMouseDown={(e) => {
                if (disabled) return;
                e.currentTarget.style.transform = 'translateY(4px)';
                e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseUp={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = disabled ? 'none' : shadow;
            }}
            onTouchStart={(e) => {
                if (disabled) return;
                e.currentTarget.style.transform = 'translateY(4px)';
                e.currentTarget.style.boxShadow = 'none';
            }}
            onTouchEnd={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = disabled ? 'none' : shadow;
            }}
            className={[
                'relative overflow-hidden rounded-full font-extrabold flex items-center justify-center gap-2 select-none',
                bg, sz,
                full ? 'w-full' : '',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                className,
            ].join(' ')}
        >
            {/* Glass glare shimmer */}
            <span className="absolute top-0 left-0 w-full pointer-events-none" style={{
                height: '40%',
                background: 'linear-gradient(180deg,rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%)',
                borderRadius: 'inherit',
            }} />
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
}
