import type { ComponentProps } from "react";
import { Link } from "@tanstack/react-router";

import { cn } from "#/lib/utils";
import { FocusRing } from "./FocusRing";

export function FocusLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <FocusRing
      as={Link}
      className={cn(
        "inset-text inset-underline transition-all hover:text-black hover:dark:text-white",
        className,
      )}
      {...props}
    />
  );
}
