import type { TypstCompiledModule } from "@typst-wasm/vite-plugin-typst";
import * as z from "zod";

export type OtherThing = {
  slug?: string;
  title?: string;
  description?: string;
  body: string;
};

const typstModules = import.meta.glob<TypstCompiledModule>("./*.typ", {
  eager: true,
});

const Frontmatter = z.object({
  slug: z.string(),
});

export const things: OtherThing[] = Object.values(typstModules).map((mod) => {
  const m = mod;
  const frontmatter = Frontmatter.parse(
    m.metadata?.custom
      .filter((metadata) => metadata.label == "frontmatter")
      .reduce((acc, curr) => {
        return { ...acc, ...curr };
      }).value,
  );

  return {
    slug: frontmatter.slug,
    title: m.metadata?.title,
    description: m.metadata?.description,
    body: m.html,
  };
});
