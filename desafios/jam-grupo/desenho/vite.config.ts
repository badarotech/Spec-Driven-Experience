import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Permite servir o design-system, que fica na raiz do repositório.
      allow: ['../../..'],
    },
  },
});
