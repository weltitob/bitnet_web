import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['styled-jsx/babel'],
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
    exclude: ['@emotion/react/jsx-dev-runtime', '@emotion/react/jsx-runtime']
  },
  resolve: {
    alias: {
      'three': 'three'
    }
  }
})