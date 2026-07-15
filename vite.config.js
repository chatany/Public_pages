import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/trade-options': {
        target: 'https://options-theta.vercel.app',
        changeOrigin: true,
      },
      '/trade': {
        target: 'https://bitzup-dev-server.vercel.app',
        changeOrigin: true,
      },
    },
  },
})

