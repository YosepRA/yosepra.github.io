import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@Features': path.resolve(__dirname, './src/features'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
  server: {
    port: 8000,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
