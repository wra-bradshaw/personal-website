declare module "*?parts" {
  export const title: string | null;
  export const description: string | null;
  export const body: string;
  const parts: {
    title: string | null;
    description: string | null;
    body: string;
  };
  export default parts;
}

declare module "jsdom" {
  export class JSDOM {
    constructor(html?: string);
    window: Window & typeof globalThis;
  }
}
