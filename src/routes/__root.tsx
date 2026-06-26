import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#f5f5f5",
        media: 'media="(prefers-color-scheme: light)"',
      },
      {
        name: "theme-color",
        content: "#28282a",
        media: 'media="(prefers-color-scheme: dark)"',
      },
      {
        name: "color-scheme",
        content: "light dark",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-light bg-bg-light dark:bg-bg-dark bg-left-top bg-repeat bg-[length:200px] dark:bg-dark"
    >
      <head>
        <HeadContent />
      </head>
      <body className="min-h-[110lvh] bg-light bg-bg-light dark:bg-bg-dark bg-left-top bg-repeat bg-[length:200px] dark:bg-dark">
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
