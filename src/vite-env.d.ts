/// <reference types="@typst-wasm/vite-plugin-typst/client" />

declare module "jsdom" {
  export class JSDOM {
    constructor(html?: string);
    window: Window & typeof globalThis;
  }
}
