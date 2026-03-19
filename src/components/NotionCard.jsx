import React from 'react';

export default function NotionCard({ children, className = '', onClick }) {
    const clickableClass = onClick ? 'cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-0' : '';

    return (
        <div
            className={`neo-card p-4 ${clickableClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
