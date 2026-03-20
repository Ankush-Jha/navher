import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import {
    listenToSOSMessages, sendSOSMessage, resolveSOS, cancelSOS, listenToSOSAlert
} from '../../services/sosService';
import { createNotification } from '../../services/notificationService';
import { useAppStore } from '../../store';
import { auth } from '../../lib/firebase';
import toast from 'react-hot-toast';

function openNavigation(lat, lng) {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`, '_blank');
}

function timeAgo(ts) {
    if (!ts) return '';
    const d = ts?.toDate ? ts.toDate() : new Date(ts);
    const diff = Math.floor((Date.now() - d.getTime()) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
}

export default function SOSChat() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // sosId from URL param (refresh-safe) or location.state (first navigation)
    const sosId = searchParams.get('sosId') || location.state?.sosId;

    const { user } = useAppStore();
    const uid = auth.currentUser?.uid;

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [sosData, setSosData] = useState(null);
    const bottomRef = useRef(null);
    const hasNotifiedJoinRef = useRef(false);

    // Is current user the SOS sender?
    const isSender = sosData?.userId === uid;
    const senderName = sosData?.userName || 'Someone';
    const responderCount = sosData?.responderIds?.length || 0;

    // Guard: no sosId → back to SOS page
    useEffect(() => {
        if (!sosId) {
            toast.error('No active SOS session.');
            navigate('/app/sos', { replace: true });
        }
    }, [sosId, navigate]);

    // Real-time SOS alert doc listener (status, responder count)
    useEffect(() => {
        if (!sosId) return;
        const unsub = listenToSOSAlert(sosId, setSosData);
        return () => unsub();
    }, [sosId]);

    // Real-time message listener
    useEffect(() => {
        if (!sosId) return;
        const unsub = listenToSOSMessages(sosId, setMessages);
        return () => unsub();
    }, [sosId]);

    // Auto-scroll on new messages
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // When a helper joins, notify the sender (once per session)
    useEffect(() => {
        if (!sosData || isSender || hasNotifiedJoinRef.current) return;
        if (sosData.userId && uid) {
            hasNotifiedJoinRef.current = true;
            createNotification({
                userId: sosData.userId,
                type: 'sos_nearby',
                title: '🙋 Helper is coming!',
                body: `${user?.name || 'Someone'} has responded to your SOS and joined the chat.`,
                data: { sosId },
            }).catch(() => { });
        }
    }, [sosData, isSender, uid, user?.name, sosId]);

    // Redirect if SOS is resolved/cancelled
    useEffect(() => {
        if (sosData && (sosData.status === 'resolved' || sosData.status === 'cancelled')) {
            toast.success(sosData.status === 'resolved' ? '✅ SOS Resolved — Stay safe!' : 'SOS was cancelled.');
            setTimeout(() => navigate('/app/sos', { replace: true }), 1500);
        }
    }, [sosData?.status, navigate]);

    const handleSend = async () => {
        const text = input.trim();
        if (!text || loading) return;
        setInput('');
        setLoading(true);
        try {
            await sendSOSMessage({
                sosId,
                userId: uid,
                userName: user?.name || (isSender ? 'SOS Sender' : 'Helper'),
                userAvatar: user?.avatar || '🦊',
                text,
            });
        } catch (err) {
            console.error('Send error:', err);
            toast.error('Failed to send');
        } finally {
            setLoading(false);
        }
    };

    const handleResolve = async () => {
        if (!sosId) return;
        await resolveSOS(sosId, uid);
    };

    const handleCancel = async () => {
        if (!sosId) return;
        await cancelSOS(sosId);
    };

    return (
        <div className="flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface">

            {/* ── Header ──────────────────────────────────────────────────── */}
            <header className={`w-full sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b-2 ${isSender ? 'bg-primary/5 border-primary/20' : 'bg-green-50 border-green-200'
                }`}>
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/60">
                        <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
                    </button>
                    <div>
                        <h1 className={`font-headline font-extrabold text-[22px] tracking-tight ${isSender ? 'text-primary' : 'text-green-700'}`}>
                            {isSender ? '🆘 Your SOS is Live' : '🙋 Helping Out'}
                        </h1>
                        <p className="text-[11px] font-bold text-on-surface-variant">
                            {isSender
                                ? `${responderCount} helper${responderCount !== 1 ? 's' : ''} joined`
                                : `Responding to ${senderName}`
                            }
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {/* Navigate to sender (for helpers) */}
                    {!isSender && sosData?.lat && (
                        <button
                            onClick={() => openNavigation(sosData.lat, sosData.lng)}
                            className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border border-green-200"
                            title="Navigate to sender"
                        >
                            <span className="material-symbols-outlined text-green-700 text-lg">navigation</span>
                        </button>
                    )}
                    {/* Resolve / Cancel */}
                    {isSender ? (
                        <button onClick={handleCancel} className="px-3 py-1.5 bg-white text-on-surface-variant font-bold rounded-full text-[12px] border-2 border-outline-variant">
                            Cancel SOS
                        </button>
                    ) : (
                        <button onClick={handleResolve} className="px-3 py-1.5 bg-green-600 text-white font-bold rounded-full text-[12px]">
                            ✓ Safe Now
                        </button>
                    )}
                </div>
            </header>

            {/* ── SOS Context Card ────────────────────────────────────────── */}
            {sosData && (
                <div className={`mx-4 mt-3 p-3 rounded-xl border-2 flex items-center gap-3 ${isSender ? 'bg-primary/5 border-primary/20' : 'bg-green-50 border-green-200'
                    }`}>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl border border-outline-variant shrink-0">
                        {sosData.userAvatar || '🦊'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-extrabold text-[14px] leading-tight text-on-surface truncate">
                            {isSender ? 'Your emergency broadcast' : `${senderName} needs help`}
                        </p>
                        <p className="text-[11px] text-on-surface-variant">
                            📍 Lat {sosData.lat?.toFixed(4)}, Lng {sosData.lng?.toFixed(4)} · {timeAgo(sosData.createdAt)}
                        </p>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-outline-variant shrink-0">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-[10px] font-extrabold text-on-surface-variant uppercase">Live</span>
                    </div>
                </div>
            )}

            {/* ── Messages ────────────────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-5xl mb-3">💬</div>
                        <p className="font-extrabold text-on-surface text-lg">
                            {isSender ? 'Waiting for helpers…' : 'Chat is live'}
                        </p>
                        <p className="text-sm text-on-surface-variant mt-1 max-w-[260px] mx-auto">
                            {isSender
                                ? 'Nearby community members have been alerted. Messages will appear here.'
                                : `Let ${senderName} know you're on your way!`
                            }
                        </p>
                    </div>
                )}

                {messages.map((msg) => {
                    const isMe = msg.userId === uid;
                    const isMsgFromSender = msg.userId === sosData?.userId;

                    return (
                        <div key={msg.id} className={`flex gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Avatar */}
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[16px] shrink-0 border-2 ${isMsgFromSender
                                    ? 'bg-primary/10 border-primary/30'
                                    : 'bg-green-50 border-green-200'
                                }`}>
                                {msg.userAvatar || '🦊'}
                            </div>

                            {/* Bubble */}
                            <div className={`max-w-[75%] flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                                {/* Name + role tag */}
                                <div className={`flex items-center gap-1.5 mb-0.5 ${isMe ? 'flex-row-reverse' : ''}`}>
                                    <span className="text-[11px] font-bold text-on-surface-variant">
                                        {isMe ? 'You' : msg.userName}
                                    </span>
                                    {isMsgFromSender && (
                                        <span className="text-[9px] font-extrabold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full uppercase">
                                            🆘 SOS
                                        </span>
                                    )}
                                    {!isMsgFromSender && (
                                        <span className="text-[9px] font-extrabold bg-green-50 text-green-700 px-1.5 py-0.5 rounded-full uppercase">
                                            🙋 Helper
                                        </span>
                                    )}
                                </div>

                                {/* Message bubble */}
                                <div className={`px-4 py-3 font-medium text-[14px] leading-relaxed ${isMe
                                        ? (isMsgFromSender
                                            ? 'bg-primary text-white rounded-2xl rounded-tr-sm'
                                            : 'bg-green-600 text-white rounded-2xl rounded-tr-sm')
                                        : (isMsgFromSender
                                            ? 'bg-primary/5 text-on-surface border-2 border-primary/20 rounded-2xl rounded-tl-sm'
                                            : 'bg-white text-on-surface border-2 border-outline-variant rounded-2xl rounded-tl-sm')
                                    }`}>
                                    {msg.text}
                                </div>

                                {/* Timestamp */}
                                <span className="text-[10px] text-on-surface-variant mt-0.5 px-1">
                                    {timeAgo(msg.createdAt)}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div ref={bottomRef} />
            </div>

            {/* ── Quick Actions (for helpers) ─────────────────────────────── */}
            {!isSender && messages.length === 0 && (
                <div className="px-4 pb-2 flex gap-2 flex-wrap">
                    {["I'm coming!", "Stay where you are", "Are you okay?", "I'm nearby"].map(q => (
                        <button
                            key={q}
                            onClick={() => { setInput(q); }}
                            className="px-3 py-1.5 bg-white border-2 border-outline-variant rounded-full text-[12px] font-bold text-on-surface-variant active:scale-95"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            )}

            {/* ── Input Bar ───────────────────────────────────────────────── */}
            <div className="sticky bottom-0 bg-white border-t-2 border-outline-variant px-4 py-3 flex items-center gap-3">
                {/* Call 112 shortcut for sender */}
                {isSender && (
                    <a href="tel:112" className="w-12 h-12 bg-red-50 border-2 border-red-200 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-red-600 text-[20px]">call</span>
                    </a>
                )}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={isSender ? "Tell helpers what you need…" : "Send a message…"}
                    className="flex-1 bg-surface-container px-4 py-3 rounded-full text-sm font-medium outline-none border-2 border-transparent focus:border-primary transition-colors"
                />
                <button
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className={`w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-40 transition-colors ${isSender ? 'bg-primary' : 'bg-green-600'
                        }`}
                >
                    <span className="material-symbols-outlined text-white">send</span>
                </button>
            </div>
        </div>
    );
}
