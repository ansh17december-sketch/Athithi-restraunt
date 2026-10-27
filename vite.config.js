import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const previewHost = process.env.PREVIEW_HOSTNAME;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: previewHost ? [previewHost] : undefined
  }
});
