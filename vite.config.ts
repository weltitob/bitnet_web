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
    sourcemap: false, // Disable sourcemaps in production for smaller files
    minify: 'terser', // Use Terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug', 'console.info']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code for better caching
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    },
    // Enable chunk size reporting
    chunkSizeWarningLimit: 1000
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