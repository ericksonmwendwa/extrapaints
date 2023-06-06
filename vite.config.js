import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  server: {},
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        products: resolve(root, 'products.html'),
        gallery: resolve(root, 'gallery.html'),
        covercoat: resolve(root, 'covercoat.html'),
        silk: resolve(root, 'silk.html'),
        matt: resolve(root, 'matt.html'),
        gloss: resolve(root, 'gloss.html'),
        plastic_emulsion: resolve(root, 'plastic_emulsion.html'),
        wallrock: resolve(root, 'wallrock.html'),
        weathercoat: resolve(root, 'weathercoat.html'),
      },
    },
  },
});
