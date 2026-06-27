export type OtherThing = {
  slug: string;
  title?: string;
  description?: string;
  body: string;
};

const typstModules = import.meta.glob<{
  title: string | null;
  description: string | null;
  body: string;
  frontmatter: { slug: string };
}>("./*.typ", { query: "?parts", eager: true });

export const things: OtherThing[] = Object.values(typstModules).map((mod) => ({
  slug: mod.frontmatter.slug,
  title: mod.title ?? undefined,
  description: mod.description ?? undefined,
  body: mod.body,
}));
