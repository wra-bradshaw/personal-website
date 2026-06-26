import type { ComponentProps } from "react";
import { cn } from "#/lib/utils";

export function Highlight({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("text-black dark:text-white")} {...props} />;
}
