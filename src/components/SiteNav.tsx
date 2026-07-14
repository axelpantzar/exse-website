import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useT } from "../i18n/LanguageContext";

export function SiteNav() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { to: "/miljo", label: t({ sv: "Miljö", en: "Environment" }) },
    { to: "/sport", label: t({ sv: "Sport", en: "Sport" }) },
    { to: "/kontakt", label: t({ sv: "Kontakt", en: "Contact" }) },
  ] as const;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-border/70 bg-background/80 py-2.5 pl-4 pr-3 shadow-[0_2px_20px_-8px_oklch(0.2_0.02_60/0.15)] backdrop-blur-md sm:pl-5">
        <Link to="/" className="flex shrink-0 items-center">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 md:flex">
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
          <LanguageToggle className="ml-1" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t({ sv: "Stäng meny", en: "Close menu" }) : t({ sv: "Öppna meny", en: "Open menu" })}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-accent md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 rounded-3xl border border-border/70 bg-background/95 p-3 shadow-[0_10px_40px_-12px_oklch(0.2_0.02_60/0.25)] backdrop-blur-md md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-2xl px-5 py-3 text-base text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-accent" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-center border-t border-border/50 pt-3">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}
