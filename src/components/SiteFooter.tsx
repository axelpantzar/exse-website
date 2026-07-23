import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useT } from "../i18n/LanguageContext";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-32 border-t border-border/60 bg-background sm:mt-44">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t({
              sv: "Analys och kontroll av Sveriges insamlade elektronik på uppdrag av El-Kretsen. Vid sidan av verksamheten: 40 år inom innebandy.",
              en: "Analysis and control of Sweden's collected electronics on behalf of El-Kretsen. Alongside the business: 40 years in floorball.",
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
            <li><Link to="/integritetspolicy" className="hover:text-copper">{t({ sv: "Integritetspolicy", en: "Privacy policy" })}</Link></li>
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
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        <p className="mb-2">© {new Date().getFullYear()} EXSE AB. {t({ sv: "Alla rättigheter förbehållna.", en: "All rights reserved." })}</p>
        <p>
          {t({
            sv: "Vi behandlar personuppgifter med sekretess och största varsamhet.",
            en: "We process personal data with confidentiality and the utmost care.",
          })}{" "}
          {t({
            sv: "Vill du veta mer om GDPR, läs vår",
            en: "Want to know more about GDPR? Read our",
          })}{" "}
          <Link to="/integritetspolicy" className="underline hover:text-copper">
            {t({ sv: "Integritetspolicy", en: "Privacy Policy" })}
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
