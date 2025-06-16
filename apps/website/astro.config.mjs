import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  prefetch: true,
  trailingSlash: 'ignore',
  site: 'https://lucassodresa.com',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
