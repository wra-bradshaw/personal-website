import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { canonicalUrl } from "#/lib/utils";

import "../styles.css";
import junctionUrl from "../assets/Junction-regular.woff2?url";

export const Route = createRootRoute({
  head: ({ matches }) => {
    const leafMatch = matches[matches.length - 1];
    const pathname = leafMatch?.pathname ?? "/";

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "theme-color",
          content: "#f5f5f5",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: "#28282a",
          media: "(prefers-color-scheme: dark)",
        },
        {
          name: "color-scheme",
          content: "light dark",
        },
        {
          title: "William Bradshaw",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "William Bradshaw",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: canonicalUrl(pathname),
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
          sizes: "any",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        {
          rel: "preload",
          href: "/dark.avif",
          as: "image",
          type: "image/avif",
          media: "(prefers-color-scheme: dark)",
          fetchPriority: "high",
        },
        {
          rel: "preload",
          href: "/light.avif",
          as: "image",
          type: "image/avif",
          media: "(prefers-color-scheme: light)",
          fetchPriority: "high",
        },
        {
          rel: "preload",
          href: junctionUrl,
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
      ],
    };
  },
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="pt-safe-top pl-safe-left pb-safe-bottom pr-safe-right min-h-[110lvh] bg-[image:var(--fade-light),var(--background-image-light-paper)] dark:bg-[image:var(--fade-dark),var(--background-image-dark-paper)] bg-bg-light dark:bg-bg-dark bg-left-top bg-repeat bg-[length:200px]">
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
