import type { ComponentProps } from "react";

import { cn } from "#/lib/utils";
import { FocusRing } from "./FocusRing";

export function Link({ className, ...props }: ComponentProps<"a">) {
  return (
    <FocusRing
      as="a"
      className={cn(
        "inset-text inset-underline transition-all hover:text-black hover:dark:text-white",
        className,
      )}
      {...props}
    />
  );
}
