import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { DashList, DashListItem } from "#/components/DashList";
import { FocusLink } from "#/components/FocusLink";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "#/components/ui/card";
import { things } from "#/other-things";
import { Highlight } from "#/components/Highlight";
import { Container } from "#/components/Container";
import { FocusRing } from "#/components/FocusRing";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <Container role="main">
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
        </DashList>
        <p>
          You can find <Highlight>Will</Highlight> on:
        </p>
        <DashList>
          <li className="mb-1">
            <FocusLink to="https://www.linkedin.com/in/wra-bradshaw">
              LinkedIn
            </FocusLink>
          </li>
          <li className="mb-1">
            <FocusLink as="a" href="/resume.pdf">
              My resume
            </FocusLink>
          </li>
          <li className="mb-1">
            <FocusLink to="mailto:will@bradshaw.page">Email</FocusLink>
          </li>
          <li className="mb-1">
            <FocusLink to="https://github.com/wra-bradshaw">GitHub</FocusLink>
          </li>
        </DashList>
        <p className="mb-1">Other things:</p>
      </div>
      <div className="space-y-4">
        {things.map((thing) => (
          <FocusRing
            as={Link}
            key={thing.slug}
            className="block rounded-xl"
            to={`/other-things/${thing.slug}`}
          >
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
          </FocusRing>
        ))}
      </div>
    </Container>
  );
}
