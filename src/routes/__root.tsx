import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { canonicalUrl } from "#/lib/utils";

import appCss from "../styles.css?url";

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
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "alternate icon",
          href: "/favicon.ico",
          type: "image/x-icon",
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
      ],
    };
  },
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-light-paper bg-bg-light dark:bg-bg-dark bg-left-top bg-repeat bg-[length:200px] dark:bg-dark-paper"
    >
      <head>
        <HeadContent />
      </head>
      <body className="pt-safe-top pl-safe-left pb-safe-bottom pr-safe-right min-h-[110lvh] bg-light-paper bg-bg-light dark:bg-bg-dark bg-left-top bg-repeat bg-[length:200px] dark:bg-dark-paper">
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
