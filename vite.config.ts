import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        entreprises: resolve(__dirname, 'entreprises/index.html'),
        associations: resolve(__dirname, 'associations/index.html'),
      },
    },
  },
});
