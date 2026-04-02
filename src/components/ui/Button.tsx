import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark active:scale-95 shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-brand-charcoal border-2 border-brand-charcoal hover:border-brand-orange hover:text-brand-orange",
  ghost:
    "bg-transparent text-brand-orange hover:bg-brand-orange-light underline-offset-4 hover:underline",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Adaptek Button — supports anchor and button rendering.
 * Always keyboard-accessible. Uses brand-orange as primary color.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
