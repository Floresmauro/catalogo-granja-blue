import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Este base es esencial para GitHub Pages
export default defineConfig({
  base: '/catalogo-granja-blue/',
  plugins: [react()]
})
