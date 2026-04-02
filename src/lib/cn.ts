import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind CSS classes conditionally.
 * Combines clsx (conditional logic) with tailwind-merge (conflict resolution).
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-brand-orange", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
