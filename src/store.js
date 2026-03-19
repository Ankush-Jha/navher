import { create } from 'zustand';

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
        user: { name: '', phone: '', foxPoints: 0, language: 'English', avatar: '🦊' },
    }),
    setLoading: (isLoading) => set({ isLoading }),

    // ── User Profile (fetched from Firestore after auth) ────────────────────
    user: {
        name: '',
        phone: '',
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

    addFoxPoints: (points) => set((state) => ({
        user: { ...state.user, foxPoints: state.user.foxPoints + points }
    })),

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

