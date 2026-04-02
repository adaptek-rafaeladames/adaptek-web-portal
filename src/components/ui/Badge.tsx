import { cn } from "@/lib/cn";

type BadgeVariant = "orange" | "green" | "charcoal";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  orange: "bg-brand-orange-light text-brand-orange",
  green: "bg-brand-green-light text-brand-green-dark",
  charcoal: "bg-gray-100 text-brand-charcoal",
};

/**
 * Adaptek Badge — small pill label for section tags, service categories, etc.
 */
export function Badge({ children, variant = "orange", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
