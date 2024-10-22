import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@App': path.resolve(__dirname, './src/app'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Features': path.resolve(__dirname, './src/features'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@Lib': path.resolve(__dirname, './src/lib'),
      '@Utils': path.resolve(__dirname, './src/utils'),
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
