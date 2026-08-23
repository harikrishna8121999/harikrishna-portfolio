import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // echarts is ~520 kB on its own. It lives in a lazily-imported chunk that is
    // only fetched once the analytics dashboard has data to draw, so the default
    // 500 kB warning is noise rather than a signal here.
    chunkSizeWarningLimit: 600,
  },
});
