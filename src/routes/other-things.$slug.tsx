import { createFileRoute, notFound } from "@tanstack/react-router";

import { Link } from "#/components/Link";
import { things } from "#/other-things";

export const Route = createFileRoute("/other-things/$slug")({
  component: OtherThingPage,
  loader: ({ params }) => {
    const thing = things.find((item) => item.slug === params.slug);

    if (!thing) {
      throw notFound();
    }

    return { thing };
  },
});

function OtherThingPage() {
  const { thing } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-lg p-8 lg:mt-12">
      <p className="mb-8">
        <Link href="/">Back</Link>
      </p>
      <div
        className="prose prose-inset prose-headings:inset-text-highlight max-w-none prose-pre:w-max prose-pre:min-w-full prose-pre:max-w-[40vw] prose-pre:left-1/2 prose-pre:relative prose-pre:-translate-x-1/2 prose-pre:rounded-none prose-img:w-[40vw] prose-img:min-w-full prose-img:max-h-[70vh] prose-img:max-w-none prose-img:left-1/2 prose-img:object-contain prose-img:relative prose-img:-translate-x-1/2 prose-headings:font-normal prose-warm"
        dangerouslySetInnerHTML={{ __html: thing.body }}
      />
    </article>
  );
}
