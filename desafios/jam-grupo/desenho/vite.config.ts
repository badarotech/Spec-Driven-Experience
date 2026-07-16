import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/desenho/',
  plugins: [react()],
  server: {
    fs: {
      // Permite servir o design-system, que fica na raiz do repositório.
      allow: ['../../..'],
    },
  },
  build: {
    // Saída combinada na raiz do repo: desenho fica em /desenho no deploy da Vercel.
    outDir: '../../../dist/desenho',
    emptyOutDir: true,
  },
});
