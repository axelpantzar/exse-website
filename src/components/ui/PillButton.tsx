import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all";
const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 hover:gap-3",
  outline:
    "border border-border bg-background text-foreground hover:bg-accent",
  light:
    "bg-white text-foreground hover:bg-white/90 hover:gap-3",
};

type InternalProps = {
  to: ComponentProps<typeof Link>["to"];
  variant?: Variant;
  children: ReactNode;
  showArrow?: boolean;
};

export function PillLink({ to, variant = "primary", children, showArrow = true }: InternalProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]}`}>
      {children}
      {showArrow && (variant === "primary" || variant === "light") && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

export function PillAnchor({
  href,
  variant = "primary",
  children,
  showArrow = true,
  external = false,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  showArrow?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
      {showArrow && (variant === "primary" || variant === "light") && <ArrowRight className="h-4 w-4" />}
    </a>
  );
}
