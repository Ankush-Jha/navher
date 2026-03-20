import { create } from 'zustand';

function getLevelInfo(points) {
    if (points < 100) return { level: 1, title: 'Newcomer', next: 100 };
    if (points < 300) return { level: 2, title: 'Explorer', next: 300 };
    if (points < 600) return { level: 3, title: 'Pad Finder', next: 600 };
    if (points < 1000) return { level: 4, title: 'Safe Scout', next: 1000 };
    if (points < 1500) return { level: 5, title: 'Loo Guardian', next: 1500 };
    if (points < 2200) return { level: 6, title: 'Pad Guardian', next: 2200 };
    if (points < 3000) return { level: 7, title: 'Safety Hero', next: 3000 };
    return { level: 8, title: 'NavHer Legend', next: points + 1 };
}

export const useAppStore = create((set) => ({
    // ── Auth State ──────────────────────────────────────────────────────────
    firebaseUser: null,       // Firebase user object (from onAuthStateChanged)
    isAuthenticated: false,
    isLoading: true,          // true while checking auth state on app load

    setAuth: (firebaseUser) => set({
        firebaseUser,
        isAuthenticated: !!firebaseUser,
        isLoading: false,
    }),
    clearAuth: () => set({
        firebaseUser: null,
        isAuthenticated: false,
        isLoading: false,
        user: { name: '', foxPoints: 0, language: 'English', avatar: '🦊' },
    }),
    setLoading: (isLoading) => set({ isLoading }),

    // ── User Profile (fetched from Firestore after auth) ────────────────────
    user: {
        name: '',
        foxPoints: 0,
        language: 'English',
        avatar: '🦊',
        level: 1,
        levelName: 'Navigator',
        xp: 0,
        xpNext: 100,
    },
    setUser: (userData) => set((state) => ({
        user: { ...state.user, ...userData },
    })),

    addFoxPoints: (points) => set((state) => {
        const newPts = (state.user.foxPoints || 0) + points;
        const li = getLevelInfo(newPts);
        return { user: { ...state.user, foxPoints: newPts, level: li.level, levelName: li.title, xp: newPts, xpNext: li.next } };
    }),

    // ── Notification Badge Count ────────────────────────────────────────────
    notificationCount: 0,
    setNotificationCount: (count) => set({ notificationCount: count }),

    // ── SOS State ───────────────────────────────────────────────────────────
    activeSOS: null,
    triggerSOS: (location) => set({ activeSOS: { location, time: new Date().toISOString() } }),
    clearSOS: () => set({ activeSOS: null }),

    // ── Map Filter State ────────────────────────────────────────────────────
    activeFilters: [],
    toggleFilter: (filterId) => set((state) => ({
        activeFilters: state.activeFilters.includes(filterId)
            ? state.activeFilters.filter(f => f !== filterId)
            : [...state.activeFilters, filterId]
    }))
}));

