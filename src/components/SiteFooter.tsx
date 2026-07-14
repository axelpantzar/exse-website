import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useT } from "../i18n/LanguageContext";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border/60 bg-background sm:mt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t({
              sv: "Erfarenhet som gör skillnad i hela återvinningskedjan. Över 25 år inom elektronikåtervinning och 40 år inom innebandy.",
              en: "Experience that makes a difference across the recycling chain. More than 25 years in electronics recycling and 40 years in floorball.",
            })}
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t({ sv: "Sidor", en: "Pages" })}
          </p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-copper">{t({ sv: "Start", en: "Home" })}</Link></li>
            <li><Link to="/miljo" className="hover:text-copper">{t({ sv: "Miljö", en: "Environment" })}</Link></li>
            <li><Link to="/sport" className="hover:text-copper">{t({ sv: "Sport", en: "Sport" })}</Link></li>
            <li><Link to="/kontakt" className="hover:text-copper">{t({ sv: "Kontakt", en: "Contact" })}</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t({ sv: "Adress", en: "Address" })}
          </p>
          <address className="not-italic text-foreground/80">
            EXSE AB<br />
            Kyrkvägen 17<br />
            703 75 Örebro
          </address>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EXSE AB. {t({ sv: "Alla rättigheter förbehållna.", en: "All rights reserved." })}
      </div>
    </footer>
  );
}
