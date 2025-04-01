import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Yeh ensure karega ki server aapke local network se accessible ho
    port: 5173,        // Port 5173 rakhein ya agar aapko custom port chahiye ho, to usko change kar sakte hain
  },
})
