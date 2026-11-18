import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Vitest não suporta Server Components assíncronos: https://nextjs.org/docs/app/guides/testing/vitest
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
