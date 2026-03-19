import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { listenToAuthState } from './lib/authService';
import { getFullUserData } from './services/userService';
import { useAppStore } from './store';

// Auth Pages
import Onboarding from './pages/auth/Onboarding';
import Login from './pages/auth/Login';
import Verify from './pages/auth/Verify';
import Setup from './pages/auth/Setup';

// Main App Pages
import HomeMap from './pages/main/HomeMap';
import SearchList from './pages/main/SearchList';
import LocationDetails from './pages/main/LocationDetails';
import CommunitySOS from './pages/main/CommunitySOS';
import AddLocation from './pages/main/AddLocation';
import RateReview from './pages/main/RateReview';
import CycleTracker from './pages/main/CycleTracker';
import EmergencyOrder from './pages/main/EmergencyOrder';
import Profile from './pages/main/Profile';
import SOSChat from './pages/main/SOSChat';
import Rewards from './pages/main/Rewards';
import LogSymptoms from './pages/main/LogSymptoms';
import PadMachineDetails from './pages/main/PadMachineDetails';
import Notifications from './pages/main/Notifications';
import Settings from './pages/main/Settings';

import { Toaster } from 'react-hot-toast';

// ─── Protected Route wrapper ──────────────────────────────────────────────────
function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAppStore();

    if (isLoading) {
        return (
            <div className="min-h-dvh flex items-center justify-center bg-surface-container-low">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl animate-bounce">🦊</div>
                    <p className="font-bold text-primary text-lg">NavHer is loading…</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/onboarding" replace />;
    }

    return children;
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
    const { setAuth, clearAuth, setUser, setLoading } = useAppStore();

    // Listen to Firebase auth state on app boot
    useEffect(() => {
        const unsubscribe = listenToAuthState(async (firebaseUser) => {
            if (firebaseUser) {
                setAuth(firebaseUser);
                // Fetch full profile from Firestore and hydrate store
                try {
                    const userData = await getFullUserData(firebaseUser.uid);
                    if (userData) {
                        setUser({
                            name: userData.name ?? '',
                            phone: userData.phone ?? '',
                            avatar: userData.avatar ?? '🦊',
                            foxPoints: userData.rewards?.totalPoints ?? 0,
                            level: userData.rewards?.currentLevel ?? 1,
                            levelName: userData.rewards?.levelName ?? 'Navigator',
                            xp: userData.rewards?.xpCurrent ?? 0,
                            xpNext: userData.rewards?.xpNextLevel ?? 100,
                        });
                    }
                } catch (err) {
                    console.error('Failed to load user profile:', err);
                    toast.error('Could not sync full user profile. Some features may be limited.');
                }
            } else {
                clearAuth();
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <Toaster position="top-center" reverseOrder={false} />
            <Routes>
                {/* Root → onboarding for guests, map for authenticated */}
                <Route path="/" element={<Navigate to="/auth/onboarding" replace />} />

                {/* Auth routes (always accessible) */}
                <Route path="/auth/onboarding" element={<Onboarding />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/verify" element={<Verify />} />
                <Route path="/auth/setup" element={<Setup />} />

                {/* Protected app routes */}
                <Route path="/app/map" element={<ProtectedRoute><HomeMap /></ProtectedRoute>} />
                <Route path="/app/list" element={<ProtectedRoute><SearchList /></ProtectedRoute>} />
                <Route path="/app/details/:id" element={<ProtectedRoute><LocationDetails /></ProtectedRoute>} />
                <Route path="/app/details" element={<ProtectedRoute><LocationDetails /></ProtectedRoute>} />
                <Route path="/app/sos" element={<ProtectedRoute><CommunitySOS /></ProtectedRoute>} />
                <Route path="/app/add" element={<ProtectedRoute><AddLocation /></ProtectedRoute>} />
                <Route path="/app/rate/:id" element={<ProtectedRoute><RateReview /></ProtectedRoute>} />
                <Route path="/app/rate" element={<ProtectedRoute><RateReview /></ProtectedRoute>} />
                <Route path="/app/tracker" element={<ProtectedRoute><CycleTracker /></ProtectedRoute>} />
                <Route path="/app/emergency" element={<ProtectedRoute><EmergencyOrder /></ProtectedRoute>} />
                <Route path="/app/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/app/sos-chat" element={<ProtectedRoute><SOSChat /></ProtectedRoute>} />
                <Route path="/app/rewards" element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
                <Route path="/app/log-symptoms" element={<ProtectedRoute><LogSymptoms /></ProtectedRoute>} />
                <Route path="/app/pad-machine/:id" element={<ProtectedRoute><PadMachineDetails /></ProtectedRoute>} />
                <Route path="/app/pad-machine" element={<ProtectedRoute><PadMachineDetails /></ProtectedRoute>} />
                <Route path="/app/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
                <Route path="/app/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/auth/onboarding" replace />} />
            </Routes>
        </Router>
    );
}
