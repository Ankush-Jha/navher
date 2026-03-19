import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { listenToSOSMessages, sendSOSMessage, resolveSOS } from '../../services/sosService';
import { useAppStore } from '../../store';
import { auth } from '../../lib/firebase';

export default function SOSChat() {
    const navigate = useNavigate();
    const location = useLocation();
    const sosId = location.state?.sosId;
    const { user } = useAppStore();

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    // Real-time message listener
    useEffect(() => {
        if (!sosId) return;
        const unsub = listenToSOSMessages(sosId, setMessages);
        return () => unsub();
    }, [sosId]);

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        const text = input.trim();
        if (!text || loading) return;
        setInput('');
        setLoading(true);
        try {
            const uid = auth.currentUser?.uid;
            await sendSOSMessage({
                sosId,
                userId: uid,
                userName: user?.name || 'Helper',
                userAvatar: user?.avatar || '🦊',
                text,
            });
        } catch (err) {
            console.error('Send message error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleResolve = async () => {
        if (!sosId) return;
        await resolveSOS(sosId, auth.currentUser?.uid);
        navigate(-1);
    };

    const uid = auth.currentUser?.uid;

    return (
        <div className="flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface">
            {/* Header */}
            <header className="w-full sticky top-0 z-50 bg-white flex items-center justify-between px-4 h-16 border-b-2 border-zinc-100">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100">
                        <span className="material-symbols-outlined text-zinc-500">arrow_back</span>
                    </button>
                    <div>
                        <h1 className="font-headline font-extrabold text-[22px] tracking-tight text-primary">SOS Chat</h1>
                        <p className="text-xs text-on-surface-variant font-bold">🔴 Live — end-to-end encrypted</p>
                    </div>
                </div>
                <button
                    onClick={handleResolve}
                    className="px-4 py-2 bg-secondary text-white font-bold rounded-full text-sm"
                >
                    ✓ Resolved
                </button>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.length === 0 && (
                    <div className="text-center py-12 text-on-surface-variant">
                        <div className="text-4xl mb-2">💬</div>
                        <p className="font-bold">Chat is live. Helpers will join shortly.</p>
                    </div>
                )}
                {messages.map((msg) => {
                    const isMe = msg.userId === uid;
                    return (
                        <div key={msg.id} className={`flex gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-sm shrink-0">
                                {msg.userAvatar}
                            </div>
                            <div className={`max-w-[75%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                                <p className={`text-xs font-bold text-on-surface-variant mb-0.5 ${isMe ? 'text-right' : ''}`}>
                                    {isMe ? 'You' : msg.userName}
                                </p>
                                <div className={`px-4 py-3 rounded-2xl font-medium ${isMe ? 'bg-primary text-white rounded-tr-sm' : 'bg-white text-on-surface border-2 border-outline-variant rounded-tl-sm'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="sticky bottom-0 bg-white border-t-2 border-zinc-100 px-4 py-3 flex items-center gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message…"
                    className="flex-1 bg-surface-container px-4 py-3 rounded-full text-sm font-medium outline-none border-2 border-transparent focus:border-primary"
                />
                <button
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center disabled:opacity-40"
                >
                    <span className="material-symbols-outlined text-white">send</span>
                </button>
            </div>
        </div>
    );
}
