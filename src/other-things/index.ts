import {
  title,
  description,
  body,
} from "src/other-things/containerisation_on_macos.typ?parts";

export type OtherThing = {
  slug: string;
  title?: string;
  description?: string;
  body: string;
};

export const things: OtherThing[] = [
  {
    slug: "containerisation-on-macos",
    title: title ?? undefined,
    description: description ?? undefined,
    body: body,
  },
  {
    slug: "containerisation-on-macos",
    title: title ?? undefined,
    description: description ?? undefined,
    body: body,
  },
  {
    slug: "containerisation-on-macos",
    title: title ?? undefined,
    description: description ?? undefined,
    body: body,
  },
];
