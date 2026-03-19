/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            // ─── Electric Peony Color System ───────────────────────────────
            colors: {
                // Brand
                'primary': '#ff4b72',
                'primary-dim': '#a10038',
                'primary-fixed': '#ffe4e9',
                'primary-fixed-dim': '#ffb2c1',
                'primary-container': '#ff8fa7',
                'on-primary': '#ffffff',
                'on-primary-fixed': '#31000b',
                'on-primary-fixed-variant': '#8a0028',
                'on-primary-container': '#4a0014',
                'inverse-primary': '#ffb2c1',
                'surface-tint': '#ff4b72',

                // Secondary (green)
                'secondary': '#58cc02',
                'secondary-dim': '#8c2958',
                'secondary-fixed': '#dcfce7',
                'secondary-fixed-dim': '#86efac',
                'secondary-container': '#d7f7c2',
                'on-secondary': '#ffffff',
                'on-secondary-fixed': '#052e16',
                'on-secondary-fixed-variant': '#15803d',
                'on-secondary-container': '#1a3d00',

                // Tertiary (blue)
                'tertiary': '#1cb0f6',
                'tertiary-dim': '#593ba4',
                'tertiary-fixed': '#e0f2fe',
                'tertiary-fixed-dim': '#7dd3fc',
                'tertiary-container': '#b3e5fc',
                'on-tertiary': '#ffffff',
                'on-tertiary-fixed': '#082f49',
                'on-tertiary-fixed-variant': '#0369a1',
                'on-tertiary-container': '#00354d',

                // Surface hierarchy
                'background': '#ffffff',
                'on-background': '#0f172a',
                'surface': '#ffffff',
                'surface-bright': '#ffffff',
                'surface-dim': '#f7f7f7',
                'surface-variant': '#f1f5f9',
                'surface-container-lowest': '#ffffff',
                'surface-container-low': '#f9fafb',
                'surface-container': '#f3f4f6',
                'surface-container-high': '#e5e7eb',
                'surface-container-highest': '#d1d5db',
                'on-surface': '#0f172a',
                'on-surface-variant': '#475569',
                'inverse-surface': '#1e293b',
                'inverse-on-surface': '#f8fafc',

                // Outline
                'outline': '#cbd5e1',
                'outline-variant': '#e2e8f0',

                // Error
                'error': '#ef4444',
                'error-dim': '#9f0519',
                'error-container': '#fee2e2',
                'on-error': '#ffffff',
                'on-error-container': '#7f1d1d',
            },

            // ─── Typography ───────────────────────────────────────────────
            fontFamily: {
                headline: ['"Plus Jakarta Sans"', 'sans-serif'],
                body: ['"Plus Jakarta Sans"', 'sans-serif'],
                label: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'sans-serif'],
            },

            // ─── Border Radius (Electric Peony pill geometry) ────────────
            borderRadius: {
                DEFAULT: '1rem',
                sm: '0.75rem',
                md: '1rem',
                lg: '2rem',
                xl: '3rem',
                full: '9999px',
            },

            // ─── Box shadows ──────────────────────────────────────────────
            boxShadow: {
                'tactile': '0 4px 0 0 #d33c5e',
                'tactile-green': '0 4px 0 0 #3ea500',
                'tactile-blue': '0 4px 0 0 #158bb2',
                'tactile-teal': '0 4px 0 0 #008f83',
                'tactile-outline': '0 4px 0 0 #e2e8f0',
                'card': '0 2px 8px rgba(0,0,0,0.05)',
                'top': '0 -4px 12px rgba(0,0,0,0.05)',
                'header': '0 4px 0 0 rgba(255,75,114,0.1)',
                'header-primary': '0 4px 0 0 #d33c5e',
            },
        },
    },
    plugins: [],
};
