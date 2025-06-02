// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
});