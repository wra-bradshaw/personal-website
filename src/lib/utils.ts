import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const siteUrl = import.meta.env.VITE_SITE_URL;

if (!siteUrl) {
  throw new Error("Missing VITE_SITE_URL");
}

export function canonicalUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
