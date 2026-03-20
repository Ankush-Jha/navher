import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        headers: {
            // Disable COOP so Firebase Auth popup can communicate back
            'Cross-Origin-Opener-Policy': 'unsafe-none',
        },
    },
})
