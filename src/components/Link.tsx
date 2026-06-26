import type { ComponentProps } from "react";

import { cn } from "#/lib/utils";

export function Link({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "inset-text inset-underline transition-colors hover:text-black hover:dark:text-white",
        className,
      )}
      {...props}
    />
  );
}
