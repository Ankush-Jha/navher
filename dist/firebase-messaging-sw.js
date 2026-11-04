importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Real Firebase config for NavHer — kept in sync with .env
const firebaseConfig = {
    apiKey: "AIzaSyCNQVipQkG_FJbhmya9LxyaHe5lbbDO_Eg",
    authDomain: "navher-app-wiscon.firebaseapp.com",
    projectId: "navher-app-wiscon",
    storageBucket: "navher-app-wiscon.firebasestorage.app",
    messagingSenderId: "353829022034",
    appId: "1:353829022034:web:c94774ae1fe7396e58f28b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Background message received:', payload);

    const { title = 'NavHer', body = 'You have a new update.' } = payload.notification ?? {};
    const { type = '' } = payload.data ?? {};

    const iconMap = {
        sos_nearby: '/sos-icon.png',
        pad_update: '/pad-icon.png',
        cycle_reminder: '/cycle-icon.png',
        points_earned: '/points-icon.png',
    };

    self.registration.showNotification(title, {
        body,
        icon: iconMap[type] ?? '/icon-192x192.png',
        badge: '/badge-72x72.png',
        tag: type || 'navher-notification',
        vibrate: type === 'sos_nearby' ? [200, 100, 200, 100, 600] : [200, 100, 200],
        data: payload.data,
        actions: type === 'sos_nearby'
            ? [{ action: 'open_sos', title: 'Open SOS' }]
            : [],
    });
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const type = event.notification.data?.type;
    const url = type === 'sos_nearby' ? '/app/sos' : '/app/notifications';
    event.waitUntil(clients.openWindow(url));
});
