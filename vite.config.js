/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://uvgenios.online/21780/Proyecto_1/',
  test: {
    setupFiles: './src/setupTests.js',
    globals: true,
    environment: 'jsdom',
  },
})
