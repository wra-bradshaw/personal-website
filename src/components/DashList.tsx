import type { ComponentProps } from "react";

import { cn } from "#/lib/utils";

export function DashList({ className, ...props }: ComponentProps<"ul">) {
  return <ul className={cn('list-["–_"] ml-4 mb-4', className)} {...props} />;
}

export function DashListItem({
  className,
  children,
  ...props
}: ComponentProps<"li">) {
  return (
    <li className={cn("mb-1", className)} {...props}>
      {children}
    </li>
  );
}
