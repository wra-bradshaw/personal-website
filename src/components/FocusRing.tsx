import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "#/lib/utils";

type FocusRingProps<T extends ElementType = "a"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function FocusRing<T extends ElementType = "a">({
  as,
  className,
  ...props
}: FocusRingProps<T>) {
  const Comp = as ?? "a";

  return (
    <Comp
      className={cn(
        "transition-[outline-offset] focus:outline-offset-4 focus:outline focus:outline-2 outline-offset-8 rounded-sm focus-visible:outline-current",
        className,
      )}
      {...props}
    />
  );
}
