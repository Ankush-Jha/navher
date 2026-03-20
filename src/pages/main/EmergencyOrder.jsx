import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import TactileButton from '../../components/TactileButton';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAppStore } from '../../store';
import toast from 'react-hot-toast';

const PARTNERS = [
    {
        id: 'blinkit',
        shortName: 'b',
        bg: 'bg-yellow-100 border-yellow-200',
        text: 'text-yellow-700',
        name: 'Blinkit',
        time: '15 min',
        price: '₹85',
        rating: 4.8,
        fastest: true,
        url: 'https://blinkit.com',
        deepLink: 'blinkit://search?q=sanitary+pads',
    },
    {
        id: 'zepto',
        shortName: 'Z',
        bg: 'bg-purple-100 border-purple-200',
        text: 'text-purple-700',
        name: 'Zepto',
        time: '18 min',
        price: '₹89',
        rating: 4.7,
        fastest: false,
        url: 'https://www.zeptonow.com',
        deepLink: 'zepto://search?q=sanitary+pads',
    },
    {
        id: 'instamart',
        shortName: 'SI',
        bg: 'bg-orange-100 border-orange-200',
        text: 'text-orange-600',
        name: 'Instamart',
        time: '20 min',
        price: '₹95',
        rating: 4.6,
        fastest: false,
        url: 'https://www.swiggy.com/instamart',
        deepLink: 'swiggy://instamart/search?q=sanitary+pads',
    },
];


export default function EmergencyOrder() {
    const navigate = useNavigate();
    const { firebaseUser, addFoxPoints } = useAppStore();
    const [picked, setPicked] = useState('blinkit');
    const [trackingStatus, setTrackingStatus] = useState('');

    const handleOrder = async (partnerId = picked) => {
        if (!firebaseUser?.uid) return;
        const partner = PARTNERS.find(p => p.id === partnerId);
        if (!partner) return;
        try {
            setTrackingStatus('Redirecting...');

            // Track click in Firestore (non-blocking)
            Promise.race([
                addDoc(collection(db, "orders"), {
                    userId: firebaseUser.uid,
                    partner: partnerId,
                    status: 'initiated',
                    createdAt: serverTimestamp()
                }),
                new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000)),
            ]).catch(err => console.warn('Order tracking skipped:', err.message));

            addFoxPoints(50);

            // Open the actual delivery app / website
            toast.success(`Opening ${partner.name}… 🚀`);
            window.open(partner.url, '_blank', 'noopener,noreferrer');

            setTimeout(() => setTrackingStatus(''), 1500);
        } catch (e) {
            console.error("Failed to track order:", e);
            toast.error('Something went wrong. Please try again.');
            setTrackingStatus('');
        }
    };


    return (
        <div className="min-h-dvh bg-surface-container-low font-body text-on-surface pb-32">
            <TopBar title="Emergency Pads" onBack={() => navigate(-1)} />

            <main className="max-w-md mx-auto px-5 pt-6 space-y-7">
                {/* Hero */}
                <section>
                    <h2 className="text-[30px] font-extrabold leading-tight text-on-surface">Emergency Pads Needed?</h2>
                    <p className="text-[15px] text-on-surface-variant leading-relaxed mt-1">
                        Delivered in <span className="text-primary font-bold">15–20 mins</span>. Your cycle suggests high need today.
                    </p>
                </section>

                {/* Looie tip */}
                <div className="bg-tertiary-fixed rounded-lg p-4 flex gap-4 items-center border-2 border-tertiary/20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shrink-0 border border-tertiary/20">🦊</div>
                    <div>
                        <p className="section-label mb-1">LOOIE'S TIP</p>
                        <p className="text-[14px] font-medium text-on-tertiary-container">I've calculated the fastest routes for your current location!</p>
                    </div>
                </div>

                {/* Partners */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="section-label">DELIVERY PARTNERS</h3>
                        <span className="text-[12px] font-bold text-secondary flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>FASTEST IN AREA
                        </span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5 pb-3">
                        {PARTNERS.map(p => (
                            <div key={p.id}
                                className={`min-w-[220px] bg-white rounded-lg p-5 border-2 shadow-card space-y-4 shrink-0 relative cursor-pointer transition-all ${picked === p.id ? 'border-primary' : 'border-outline-variant'}`}
                                onClick={() => setPicked(p.id)}>
                                {p.fastest && (
                                    <div className="absolute -top-3 -right-2 bg-secondary text-on-secondary text-[11px] font-extrabold px-3 py-1 rounded-full shadow-card">FASTEST</div>
                                )}
                                {picked === p.id && (
                                    <div className="absolute top-3 left-3 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-start pt-2">
                                    <div className={`w-12 h-12 ${p.bg} rounded-lg flex items-center justify-center border ${p.bg.replace('bg-', 'border-')}`}>
                                        <span className={`font-black ${p.text} text-xl italic`}>{p.shortName}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[20px] font-extrabold text-on-surface">{p.price}</div>
                                        <div className="flex items-center justify-end text-secondary text-[13px] font-bold">
                                            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>{p.rating}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[17px] font-extrabold text-on-surface">{p.name}</div>
                                    <div className={`font-bold text-[14px] ${picked === p.id ? 'text-primary' : 'text-on-surface-variant'}`}>{p.time} delivery</div>
                                </div>
                                <TactileButton color={picked === p.id ? 'primary' : 'surface'} size="sm" full onClick={() => {
                                    if (picked === p.id) {
                                        handleOrder();
                                    } else {
                                        setPicked(p.id);
                                    }
                                }}>
                                    {trackingStatus && picked === p.id ? trackingStatus : (picked === p.id ? 'Order Now' : 'Select')}
                                </TactileButton>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Rewards */}
                <div className="border-2 border-dashed border-secondary/40 bg-secondary-container/20 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
                    </div>
                    <p className="text-[14px] font-semibold text-on-secondary-container">Earn 50 LooPoints for ordering via NavHer</p>
                </div>

                {/* Discreet promise */}
                <div className="flex justify-center gap-6">
                    {[['inventory_2', 'Discreet packaging'], ['location_on', 'Track in their app']].map(([ic, l]) => (
                        <div key={l} className="flex items-center gap-2 text-on-surface-variant text-[13px] font-medium">
                            <span className="material-symbols-outlined text-[18px]">{ic}</span>{l}
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom CTA */}
            <div className="bottom-cta-panel">
                <div className="max-w-md mx-auto space-y-3">
                    <TactileButton color="blue" size="lg" full onClick={() => { setPicked('blinkit'); handleOrder(); }}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        {trackingStatus ? trackingStatus : 'Pick Fastest for Me'}
                    </TactileButton>
                    <button onClick={() => window.open('tel:112')} className="w-full py-2 text-on-surface-variant text-[14px] font-bold flex items-center justify-center gap-2 hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-[18px]">emergency</span>
                        Call Emergency Helpline (112)
                    </button>
                </div>
            </div>
        </div>
    );
}
