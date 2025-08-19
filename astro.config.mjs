import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";
import AutoImport from "astro-auto-import";
import config from "./src/config/config.json";

export default defineConfig({
  // output: "static", // opcional; static es el valor por defecto
  site: config.site?.base_url ?? "https://javiergarciaserrano.com",
  base: config.site?.base_path ?? "/",
  trailingSlash: config.site?.trailing_slash ? "always" : "never",
  vite: { css: { preprocessorOptions: { scss: { api: "modern-compiler" } } } },
  image: { service: sharpImageService() },
  integrations: [
    react(),
    sitemap(),
    tailwind(),
    AutoImport({
      imports: [
        "@/components/react/FeatherIcon.tsx",
        "@/components/CounterComponent.astro",
        "@/components/core/Section.astro",
        "@/components/react/Changelog.tsx",
        "@/components/Badge.astro",
      ],
    }),
    mdx(),
  ],
  markdown: { shikiConfig: { theme: "one-dark-pro", wrap: true } }
});
