import { defineConfig, normalizePath, type Plugin } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import typst, { checkExecResult } from "@myriaddreamin/vite-plugin-typst";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { JSDOM } from "jsdom";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    allowedHosts: ["vz1vejrgtafq.shares.zrok.io"],
  },
  plugins: [
    typst(),
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
      },
    }),
    viteReact(),
  ],
});

export default config;
