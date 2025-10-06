import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add the base property
export default defineConfig({
  plugins: [react()],
  base: '/Orisun--Project/', // must match your repo name exactly (case-sensitive)
});