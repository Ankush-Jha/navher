import React, { useEffect, useState } from 'react';

export default function BottomSheet({ isOpen, onClose, title, children }) {
    const [isRendered, setIsRendered] = useState(isOpen);

    useEffect(() => {
        if (isOpen) setIsRendered(true);
    }, [isOpen]);

    const handleAnimationEnd = () => {
        if (!isOpen) setIsRendered(false);
    };

    if (!isRendered) return null;

    return (
        <div className="fixed inset-x-0 bottom-[60px] z-40 flex justify-center pointer-events-none">
            {/* Sheet / Panel */}
            <div
                onAnimationEnd={handleAnimationEnd}
                className={`relative w-full max-w-[480px] pointer-events-auto bg-navher-gray rounded-t-3xl border-t-4 border-x-4 border-navher-dark shadow-[0_-8px_0_0_rgba(0,0,0,0.1)] overflow-hidden flex flex-col max-h-[50vh] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
                {/* Drag handle */}
                <div className="w-full flex justify-center py-3 bg-white">
                    <div className="w-12 h-1.5 bg-navher-dark/20 rounded-full" />
                </div>

                {/* Header */}
                <div className="px-6 pb-4 pt-2 bg-white flex items-center justify-between border-b-4 border-navher-dark">
                    <h2 className="text-xl font-black text-navher-dark">{title}</h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-navher-dark/5 hover:bg-navher-dark/10 text-navher-dark font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Content - Scrollable */}
                <div className="p-4 overflow-y-auto no-scrollbar flex-1 bg-navher-gray">
                    {children}
                </div>
            </div>
        </div>
    );
}
