import React from 'react';

/**
 * Smart avatar — renders an <img> if the value is a URL, otherwise renders as emoji text.
 * Handles Google profile photos vs emoji avatars seamlessly.
 */
export default function Avatar({ value, size = 'w-10 h-10', textSize = 'text-lg', className = '' }) {
    const isUrl = value?.startsWith?.('http');

    if (isUrl) {
        return (
            <img
                src={value}
                alt="avatar"
                referrerPolicy="no-referrer"
                className={`${size} rounded-full object-cover ${className}`}
            />
        );
    }

    return <span className={`${textSize} ${className}`}>{value || '🦊'}</span>;
}
