import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages üzerinde projenin yayına gireceği adres
  site: 'https://c0mblasterR.github.io',
  
  // Repo adın 'efesos-web' olduğu için bu yolu eklemelisin
  base: '/efesos-web',
  
  vite: {
    plugins: [tailwindcss()],
    // Raspberry Pi 4 üzerinde build alırken RAM'i optimize etmek için
    build: {
      cssMinify: true,
      sourcemap: false
    }
  }
});
