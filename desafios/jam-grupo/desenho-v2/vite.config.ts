import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/desenho-v2/',
  plugins: [react()],
  server: {
    fs: {
      // Permite servir o design-system, que fica na raiz do repositório.
      allow: ['../../..'],
    },
  },
  build: {
    // Saída combinada na raiz do repo: desenho-v2 fica em /desenho-v2 no deploy da Vercel.
    outDir: '../../../dist/desenho-v2',
    emptyOutDir: true,
  },
});
