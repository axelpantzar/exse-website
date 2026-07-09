import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { to: "/miljo", label: "Miljö" },
  { to: "/sport", label: "Sport" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-border/70 bg-background/80 py-2.5 pl-5 pr-3 shadow-[0_2px_20px_-8px_oklch(0.2_0.02_60/0.15)] backdrop-blur-md">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-4 py-2 text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
