import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import typst from "@typst-wasm/vite-plugin-typst";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, "");

  if (!siteUrl) {
    throw new Error("Missing VITE_SITE_URL");
  }

  return {
    resolve: { tsconfigPaths: true },
    server: {
      allowedHosts: ["mwcm9linf62e.shares.zrok.io"],
    },
    plugins: [
      cloudflare({ viteEnvironment: { name: "ssr" } }),
      typst(),
      devtools(),
      tailwindcss(),
      tanstackStart({
        server: {
          build: {
            inlineCss: false,
          },
        },
        prerender: {
          enabled: true,
          autoStaticPathsDiscovery: true,
          crawlLinks: true,
          filter: (page) => !page.path.endsWith(".pdf"),
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
