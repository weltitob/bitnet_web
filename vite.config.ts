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
  server: {
    allowedHosts: [
      'd4053f76-1225-4330-b6bb-78dfe25c9053-00-2nvw6ckq8g991.kirk.replit.dev',
      '.replit.dev'  // This will allow all replit.dev subdomains
    ]
  },
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