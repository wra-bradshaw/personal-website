import { createFileRoute } from "@tanstack/react-router";

import { DashList, DashListItem } from "#/components/DashList";
import { Link } from "#/components/Link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "#/components/ui/card";
import { things } from "#/other-things";
import { Highlight } from "#/components/Highlight";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <article className="max-w-lg mx-auto p-8 lg:mt-12 text-gray-600 dark:text-gray-300 ">
      <div className="inset-text text-xl leading-relaxed">
        <p>
          <Highlight>William Bradshaw</Highlight> is:
        </p>
        <DashList>
          <DashListItem>A software developer.</DashListItem>
          <DashListItem>
            Someone who enjoys fixing and building useful things.
          </DashListItem>
          <DashListItem className="mb-1">Optimistic.</DashListItem>
          <DashListItem>A software developer.</DashListItem>
        </DashList>
        <p>
          You can find <Highlight>Will</Highlight> on:
        </p>
        <DashList>
          <li className="mb-1">
            <Link href="https://www.linkedin.com/in/wra-bradshaw">
              LinkedIn
            </Link>
          </li>
          <li className="mb-1">
            <Link href="https://google.com">My resume</Link>
          </li>
          <li className="mb-1">
            <Link href="mailto:will.bradshaw50@gmail.com">Email</Link>
          </li>
          <li className="mb-1">
            <Link href="https://github.com/wra-bradshaw">GitHub</Link>
          </li>
        </DashList>
        <p className="mb-1">Other things:</p>
      </div>
      <div className="space-y-4">
        {things.map((thing) => (
          <a key={thing.slug} className="" href={`/other-things/${thing.slug}`}>
            <Card>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <CardTitle className="">{thing.title}</CardTitle>
                  {thing.description ? (
                    <CardDescription>{thing.description}</CardDescription>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </article>
  );
}
