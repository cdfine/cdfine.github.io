import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    // Listen on all container interfaces so Docker's published port reaches it
    host: true,
    // Fail instead of moving to another port that Docker doesn't publish
    strictPort: true,
    watch: { usePolling: true },
  },
})
