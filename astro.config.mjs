// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],

    build: {
      cssCodeSplit: false // para evitar que el CSS se divida en muchos archivos
    },
  },

  adapter: vercel(),

});
