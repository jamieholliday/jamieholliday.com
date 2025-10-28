// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Silkscreen",
        cssVariable: "--font-silkscreen",
      },
    ],
  },
});
