import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  serve: {
    proxy: {
      '/api': "https://localhost:7144"
    }
  },
  plugins: [
      react(),
      tailwindcss(),
  ],
})
