import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    // Optimize bundle size and performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
        passes: 2 // Multiple passes for better compression
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false // Remove all comments
      }
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    // Disable source maps in production for smaller bundles
    sourcemap: false,
    // Rollup options for better tree shaking and code splitting
    rollupOptions: {
      output: {
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      // Tree shaking optimization (conservative settings to avoid removing needed code)
      treeshake: {
        moduleSideEffects: 'no-external',
        propertyReadSideEffects: true,
        tryCatchDeoptimization: true
      }
    },
    // Preload critical assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb as base64
    reportCompressedSize: true,
    // Enable modern browser optimizations
    target: 'es2015'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: []
  }
})

