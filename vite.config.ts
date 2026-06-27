import { defineConfig, loadEnv } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import typst from "@myriaddreamin/vite-plugin-typst";
import { cloudflare } from "@cloudflare/vite-plugin";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, "");

  if (!siteUrl) {
    throw new Error("Missing VITE_SITE_URL");
  }

  return {
    resolve: { tsconfigPaths: true },
    plugins: [
      cloudflare({ viteEnvironment: { name: "ssr" } }),
      typst(),
      devtools(),
      tailwindcss(),
      tanstackStart({
        prerender: {
          enabled: true,
          autoStaticPathsDiscovery: true,
          crawlLinks: true,
        },
        sitemap: {
          enabled: true,
          host: siteUrl,
        },
      }),
      viteReact(),
    ],
  };
});

export default config;
