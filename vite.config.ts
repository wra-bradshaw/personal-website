import { defineConfig, loadEnv } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import typst from "@myriaddreamin/vite-plugin-typst";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, "");

  if (!siteUrl) {
    throw new Error("Missing VITE_SITE_URL");
  }

  return {
    resolve: { tsconfigPaths: true },
    plugins: [
      typst(),
      devtools(),
      nitro({ rollupConfig: { external: [/^@sentry\//] } }),
      tailwindcss(),
      tanstackStart({
        prerender: {
          enabled: true,
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
