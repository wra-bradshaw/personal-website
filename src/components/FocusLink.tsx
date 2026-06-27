import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Link } from "@tanstack/react-router";

import { cn } from "#/lib/utils";
import { FocusRing } from "./FocusRing";

type FocusLinkProps<T extends ElementType = typeof Link> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function FocusLink<T extends ElementType = typeof Link>({
  as,
  className,
  ...props
}: FocusLinkProps<T>) {
  const Component = as ?? Link;

  return (
    <FocusRing
      as={Component}
      className={cn(
        "inset-text inset-underline transition-all hover:text-black hover:dark:text-white",
        className,
      )}
      {...props}
    />
  );
}
