import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import DuoButton from './DuoButton';

export default function FilterModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [activeFilters, setActiveFilters] = useState([]);

    const toggleFilter = (filter) => {
        setActiveFilters(prev =>
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
    };

    const filterOptions = [
        { id: 'free', label: 'Free Access' },
        { id: 'verified', label: 'Verified by NavHer' },
        { id: 'pads', label: 'Has Pad Machine' },
        { id: 'clean', label: 'High Cleanliness (4+ ⭐)' },
        { id: 'women', label: 'Women-Only Facility' },
        { id: 'accessible', label: 'Wheelchair Accessible' }
    ];

    return (
        <div className="absolute inset-0 z-[1000] bg-black/60 flex flex-col justify-end">
            <div className="bg-white rounded-t-3xl border-t-3 border-x-3 border-navher-dark shadow-neo min-h-[50vh] p-6 animate-slide-up">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-black">Filters</h2>
                    <button
                        onClick={onClose}
                        className="p-2 border-2 border-navher-dark rounded-full shadow-neo-sm hover:translate-y-[2px] hover:translate-x-[2px] transition-transform bg-gray-100"
                    >
                        <X size={20} className="text-navher-dark" />
                    </button>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    {filterOptions.map((opt) => (
                        <label key={opt.id} className="flex items-center justify-between p-4 border-2 border-navher-dark rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                            <span className="font-bold text-lg">{opt.label}</span>
                            <div
                                className={`w-6 h-6 border-2 border-navher-dark rounded-md flex items-center justify-center ${activeFilters.includes(opt.id) ? 'bg-navher-pink' : 'bg-white'}`}
                                onClick={() => toggleFilter(opt.id)}
                            >
                                {activeFilters.includes(opt.id) && <Check size={16} className="text-white stroke-[3]" />}
                            </div>
                        </label>
                    ))}
                </div>

                <DuoButton
                    type="primary"
                    onClick={onClose}
                    className="w-full py-4 text-xl"
                >
                    Apply Filters ({activeFilters.length})
                </DuoButton>
            </div>
        </div>
    );
}
