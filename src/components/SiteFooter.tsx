import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Metallåtervinning byggd på mätning, analys och full spårbarhet.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Sidor
          </p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-copper">Start</Link></li>
            <li><Link to="/miljo" className="hover:text-copper">Miljö</Link></li>
            <li><Link to="/sport" className="hover:text-copper">Sport</Link></li>
            <li><Link to="/kontakt" className="hover:text-copper">Kontakt</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Adress
          </p>
          <address className="not-italic text-foreground/80">
            EXSE AB<br />
            Kyrkvägen 17<br />
            703 75 Örebro
          </address>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EXSE AB. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
