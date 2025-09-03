import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";

// Manual merge of existing integrations & new ones
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react(), markdoc(), keystatic()],
  // For SSR, if using admin UI:
  // output: 'server'
});
