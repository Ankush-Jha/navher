import React from 'react';

/**
 * Status badge pill.
 * type: 'success' | 'danger' | 'warning' | 'info' | 'neutral'
 */
const styles = {
    success: 'pill-green',
    danger: 'pill-red',
    warning: 'pill-yellow',
    info: 'pill-blue',
    neutral: 'bg-slate-100 text-slate-600 text-xs font-extrabold px-3 py-1 rounded-full',
};

export default function Badge({ type = 'neutral', children }) {
    return (
        <span className={styles[type] || styles.neutral}>
            {children}
        </span>
    );
}
