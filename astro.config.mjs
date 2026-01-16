// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Vic-Zmw.github.io',
  
  base: '/V1c_myweb/',
  
  trailingSlash: 'always',
  
  vite: {
      plugins: [tailwindcss()],
  },
  
  integrations: [react()]
});