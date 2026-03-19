import React, { useEffect, useState } from 'react';
import { ShieldAlert, X, Heart } from 'lucide-react';
import DuoButton from './DuoButton';
import { useNavigate } from 'react-router-dom';

export default function IncomingSOSAlert() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    // Simulate receiving an SOS 5 seconds after component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-x-4 top-4 z-[9999] animate-slide-down">
            <div className="bg-white border-3 border-navher-pink rounded-2xl shadow-[0_8px_30px_rgba(255,75,114,0.3)] p-4 flex flex-col gap-4">

                <div className="flex items-start justify-between">
                    <div className="flex gap-3 items-center">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center animate-pulse border-2 border-navher-pink">
                            <ShieldAlert className="text-navher-pink" size={24} />
                        </div>
                        <div>
                            <h3 className="font-black text-lg text-navher-dark animate-pulse">SOS Request Nearby!</h3>
                            <p className="text-sm font-bold text-gray-500">Priya • 200m away</p>
                        </div>
                    </div>
                    <button onClick={() => setIsVisible(false)} className="p-1">
                        <X size={20} className="text-gray-400 font-bold" />
                    </button>
                </div>

                <p className="text-sm font-bold text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-200 italic">
                    "I urgently need a pad at the metro station exit."
                </p>

                <div className="flex gap-3">
                    <DuoButton
                        type="primary"
                        className="flex-1 py-2 text-sm flex items-center justify-center gap-2 bg-navher-pink"
                        onClick={() => {
                            setIsVisible(false);
                            navigate('/app/sos-chat'); // Assuming we have a chat route in the future
                        }}
                    >
                        <Heart size={16} /> I Can Help
                    </DuoButton>
                </div>

            </div>
        </div>
    );
}
