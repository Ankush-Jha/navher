import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { listenToAuthState } from './lib/authService';
import { getFullUserData, createUserProfile, updateFCMToken } from './services/userService';
import { requestNotificationPermission } from './services/notificationService';
import { useAppStore } from './store';
import toast from 'react-hot-toast';

// Auth Pages
import Onboarding from './pages/auth/Onboarding';
import Login from './pages/auth/Login';
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

// ─── Smart root: sends authenticated users to map, guests to onboarding ───────
function SmartRoot() {
    const { isAuthenticated, isLoading } = useAppStore();
    if (isLoading) return (
        <div className="min-h-dvh flex items-center justify-center bg-surface-container-low">
            <div className="flex flex-col items-center gap-4">
                <div className="text-6xl animate-bounce">🦊</div>
                <p className="font-bold text-primary text-lg">NavHer is loading…</p>
            </div>
        </div>
    );
    return <Navigate to={isAuthenticated ? '/app/map' : '/auth/onboarding'} replace />;
}

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

// ─── Auth route guard — redirects logged-in users away from auth pages ────────
function AuthRoute({ children }) {
    const { isAuthenticated, isLoading } = useAppStore();
    if (isLoading) return null;
    if (isAuthenticated) return <Navigate to="/app/map" replace />;
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

                // Immediately set user from Firebase Auth data (instant, no Firestore needed)
                setUser({
                    name: firebaseUser.displayName ?? '',
                    avatar: firebaseUser.photoURL ?? '🦊',
                    // Do NOT preset foxPoints / level here — wait for Firestore
                    // to avoid showing wrong (0) points that flash before real data loads
                });

                // Then try to enrich from Firestore in background (non-blocking)
                getFullUserData(firebaseUser.uid)
                    .then(async (userData) => {
                        if (userData) {
                            // Auto-init rewards subcollection if missing (fixes points = 0 bug)
                            if (!userData.rewards) {
                                await createUserProfile(firebaseUser.uid, {
                                    name: firebaseUser.displayName ?? '',
                                    email: firebaseUser.email ?? '',
                                    avatar: firebaseUser.photoURL ?? '🦊',
                                }).catch(() => { });
                                const fresh = await getFullUserData(firebaseUser.uid);
                                if (fresh) {
                                    setUser({
                                        name: fresh.name || firebaseUser.displayName || '',
                                        avatar: fresh.avatar ?? '🦊',
                                        foxPoints: fresh.rewards?.totalPoints ?? 0,
                                        level: fresh.rewards?.currentLevel ?? 1,
                                        levelName: fresh.rewards?.levelName ?? 'Navigator',
                                        xp: fresh.rewards?.xpCurrent ?? 0,
                                        xpNext: fresh.rewards?.xpNextLevel ?? 100,
                                    });
                                }
                            } else {
                                setUser({
                                    name: userData.name || firebaseUser.displayName || '',
                                    avatar: userData.avatar ?? '🦊',
                                    foxPoints: userData.rewards?.totalPoints ?? 0,
                                    level: userData.rewards?.currentLevel ?? 1,
                                    levelName: userData.rewards?.levelName ?? 'Navigator',
                                    xp: userData.rewards?.xpCurrent ?? 0,
                                    xpNext: userData.rewards?.xpNextLevel ?? 100,
                                });
                            }
                        }

                        // Register FCM token for push notifications (fire-and-forget)
                        requestNotificationPermission()
                            .then((token) => {
                                if (token) updateFCMToken(firebaseUser.uid, token);
                            })
                            .catch(() => { }); // silently fail if notifications denied
                    })
                    .catch((err) => console.warn('Firestore profile sync deferred:', err.message));
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
                {/* Root route: smart redirect based on auth state */}
                <Route path="/" element={<SmartRoot />} />

                {/* Auth routes — redirect to app if already logged in */}
                <Route path="/auth/onboarding" element={<AuthRoute><Onboarding /></AuthRoute>} />
                <Route path="/auth/login" element={<AuthRoute><Login /></AuthRoute>} />
                <Route path="/auth/setup" element={<Setup />} />

                {/* Protected app routes */}
                <Route path="/app/map" element={<ProtectedRoute><HomeMap /></ProtectedRoute>} />
                <Route path="/app/list" element={<ProtectedRoute><SearchList /></ProtectedRoute>} />
                <Route path="/app/details/:id" element={<ProtectedRoute><LocationDetails /></ProtectedRoute>} />
                <Route path="/app/details" element={<ProtectedRoute><LocationDetails /></ProtectedRoute>} />
                <Route path="/app/sos" element={<ProtectedRoute><CommunitySOS /></ProtectedRoute>} />
                <Route path="/app/add" element={<ProtectedRoute><AddLocation /></ProtectedRoute>} />
                <Route path="/app/add-location" element={<ProtectedRoute><AddLocation /></ProtectedRoute>} />
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
