import { createFileRoute, notFound } from "@tanstack/react-router";
import type { AnyRouteMatch } from "@tanstack/react-router";

import { FocusLink } from "#/components/FocusLink";
import { things } from "#/other-things";
import { Container } from "#/components/Container";
import { canonicalUrl } from "#/lib/utils";

type HeadResult = {
  links?: AnyRouteMatch["links"];
  scripts?: AnyRouteMatch["headScripts"];
  meta?: AnyRouteMatch["meta"];
  styles?: AnyRouteMatch["styles"];
};

export const Route = createFileRoute("/other-things/$slug")({
  component: OtherThingPage,
  loader: ({ params }) => {
    const thing = things.find((item) => item.slug === params.slug);

    if (!thing) {
      throw notFound();
    }

    return { thing };
  },
  head: ({ params, loaderData }) => {
    const obj: HeadResult = {};

    if (loaderData) {
      obj.meta = [
        {
          title: `${loaderData.thing.title} | Posts | William Bradshaw`,
        },
        {
          name: "description",
          content: loaderData.thing.description,
        },
        { property: "og:title", content: loaderData.thing.title },
        { property: "og:description", content: loaderData.thing.description },
      ];
    }

    return obj;
  },
});

function OtherThingPage() {
  const { thing } = Route.useLoaderData();

  return (
    <Container role="main">
      <p className="mb-8">
        <FocusLink href="/">Back</FocusLink>
      </p>
      <div
        className="prose prose-neutral prose-inset prose-headings:inset-text-highlight max-w-none prose-pre:w-max prose-pre:backdrop-blur-[1px] prose-pre:backdrop-brightness-[99%] prose-pre:bg-transparent dark:prose-pre:backdrop-brightness-95 prose-pre:rounded-xl prose-pre:inset-shadow-sm prose-pre:min-w-full prose-a:rounded-sm prose-a:transition-all prose-a:inset-text prose-a:inset-underline prose-a:inline-block prose-a:hover:text-black prose-a:hover:dark:text-white prose-a:focus:outline prose-a:focus:outline-2 prose-a:outline-offset-8 prose-a:focus:outline-offset-2 prose-a:focus-visible:outline-current prose-pre:text-dark dark:prose-pre:text-light prose-pre:max-w-[60vw] prose-pre:left-1/2 prose-pre:relative prose-pre:-translate-x-1/2 prose-img:rounded-xl prose-img:shadow prose-img:w-[40vw] prose-img:min-w-full prose-img:max-h-[70vh] prose-img:max-w-none prose-img:left-1/2 prose-img:object-contain prose-img:relative prose-img:-translate-x-1/2 prose-headings:font-normal"
        dangerouslySetInnerHTML={{ __html: thing.body }}
      />
    </Container>
  );
}
