import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Testes de componentes (Client Components e Server Components síncronos).
// Server Components assíncronos são cobertos por testes e2e no futuro.
// https://nextjs.org/docs/app/guides/testing/vitest
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
