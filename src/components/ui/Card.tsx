import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  hover?: boolean;
};

/**
 * Adaptek Card — base card component with optional hover lift effect.
 * Use `as="article"` for standalone content, `as="li"` inside lists.
 */
export function Card({ children, className, as: Tag = "div", hover = false }: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-white rounded-2xl p-6 shadow-card",
        hover && "transition-shadow duration-200 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-3", className)}>{children}</div>;
}

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("text-brand-charcoal-light text-sm leading-relaxed", className)}>{children}</div>;
}
