import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    restoreMocks: true,
  }
})