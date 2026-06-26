import type { ComponentProps } from "react";

import { cn } from "#/lib/utils";

export function Container({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "max-w-lg mx-auto md:p-8 px-6 pt-3 md:mt-12 text-dark dark:text-light",
        className,
      )}
      {...props}
    />
  );
}
