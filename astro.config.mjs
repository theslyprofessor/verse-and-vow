// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,  // Bind to 0.0.0.0 for Docker/Traefik access
    port: 4321,  // Astro default, registered in localhost skill
  },
});
