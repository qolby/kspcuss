// @ts-nocheck
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static', // explicitly set output to static for Netlify
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
