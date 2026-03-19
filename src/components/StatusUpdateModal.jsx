import React, { useState } from 'react';
import { X, Droplet, AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';
import DuoButton from './DuoButton';

export default function StatusUpdateModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [status, setStatus] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!status) return;
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setStatus(null);
        }, 2000);
    };

    const options = [
        { id: 'working', label: 'Working & Stocked', icon: Droplet, color: 'text-green-500', bg: 'bg-green-50' },
        { id: 'low', label: 'Low Stock', icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50' },
        { id: 'empty', label: 'Empty (No Pads)', icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
        { id: 'broken', label: 'Machine Broken', icon: AlertTriangle, color: 'text-gray-500', bg: 'bg-gray-100' }
    ];

    return (
        <div className="absolute inset-0 z-[1000] bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white w-full rounded-2xl border-3 border-navher-dark shadow-neo p-6 relative animate-scale-up">

                {!submitted ? (
                    <>
                        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100">
                            <X size={24} className="text-navher-dark" />
                        </button>
                        <h2 className="text-2xl font-black mb-2">Update Status</h2>
                        <p className="text-gray-600 font-bold mb-6">Earn +5 Fox Points for helping the community.</p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {options.map((opt) => {
                                const Icon = opt.icon;
                                const isSelected = status === opt.id;
                                return (
                                    <div
                                        key={opt.id}
                                        onClick={() => setStatus(opt.id)}
                                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-3 transition-transform cursor-pointer ${isSelected ? 'border-navher-dark ' + opt.bg + ' translate-y-1 translate-x-1' : 'border-gray-200 hover:border-navher-dark shadow-neo-sm'}`}
                                    >
                                        <Icon size={32} className={opt.color} />
                                        <span className="font-bold text-center text-sm">{opt.label}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <DuoButton
                            type="primary"
                            onClick={handleSubmit}
                            className={`w-full py-4 text-xl ${!status && 'opacity-50 cursor-not-allowed'}`}
                        >
                            Submit Update
                        </DuoButton>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                        <CheckCircle2 size={64} className="text-green-500 mb-4 animate-bounce" />
                        <h2 className="text-2xl font-black mb-2">Status Updated!</h2>
                        <p className="text-navher-pink font-bold text-lg">+5 Fox Points earned</p>
                    </div>
                )}

            </div>
        </div>
    );
}
