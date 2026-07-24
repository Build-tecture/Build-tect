import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  // manualChunks conflicts with the SSR/prerender build, so only apply it
  // to the client bundle.
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom'],
              animations: ['framer-motion'],
            },
          },
        },
      },
}))
