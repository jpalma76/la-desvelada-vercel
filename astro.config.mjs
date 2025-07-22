// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  build: {
    inlineStylesheets: 'always'
  },

  adapter: vercel(),
  site: "https://la-desvelada-vercel.vercel.app/",  

});
