import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "../i18n/LanguageContext";

const certImages = {
  iso9001: "/cert-iso9001.png",
  iso14001: "/cert-iso14001.png",
  iso45001: "/cert-iso45001.png",
  en50625: "/cert-en50625.png",
  uc: "/cert-uc.png",
};

export function Certifications() {
  const t = useT();
  const [hovered, setHovered] = useState(false);

  const items = [
    { src: certImages.iso9001, label: t({ sv: "ISO 9001, Kvalitet", en: "ISO 9001, Quality" }) },
    { src: certImages.iso14001, label: t({ sv: "ISO 14001, Miljö", en: "ISO 14001, Environment" }) },
    { src: certImages.iso45001, label: t({ sv: "ISO 45001, Arbetsmiljö", en: "ISO 45001, Occupational H&S" }) },
    { src: certImages.en50625, label: t({ sv: "EN 50625-1, WEEE", en: "EN 50625-1, WEEE" }) },
    { src: certImages.uc, label: t({ sv: "UC Högsta kreditvärdighet", en: "UC Highest credit rating" }) },
  ];

  return (
    <section className="mt-28 sm:mt-36 md:mt-44">
      <div className="grid gap-6 sm:gap-10 md:grid-cols-12 md:items-start">
        <Reveal as="div" className="md:col-span-5">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            {t({ sv: "Certifieringar & kvalitet", en: "Certifications & quality" })}
          </h2>
        </Reveal>
        <Reveal as="div" delay={120} className="text-base text-foreground/80 sm:text-lg md:col-span-7">
          <p>
            {t({
              sv: "Vi arbetar systematiskt med kvalitet, miljö och arbetsmiljö i varje del av verksamheten, från mottagning och sortering till analys och rapportering.",
              en: "We work systematically with quality, environmental and occupational health management across every part of the operation, from intake and sorting to analysis and reporting.",
            })}
          </p>
          <Link
            to="/miljo#policy"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:text-copper hover:underline sm:mt-6"
          >
            {t({ sv: "Läs vår miljö- och kvalitetspolicy", en: "Read our environmental and quality policy" })}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      {/* Infinite marquee */}
      <div
        className="relative mt-8 overflow-hidden md:mt-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ul
          className="flex w-max animate-marquee gap-6 md:gap-10"
          style={{ animationPlayState: hovered ? "paused" : "running" }}
        >
          {[...items, ...items].map((c, i) => (
            <li
              key={`${c.label}-${i}`}
              className="flex shrink-0 flex-col items-center text-center"
              aria-hidden={i >= items.length ? true : undefined}
            >
              <div className="flex h-36 w-36 items-center justify-center p-2 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52">
                <img
                  src={c.src}
                  alt={c.label}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-3 w-36 text-xs leading-snug text-muted-foreground sm:w-44 sm:text-sm md:mt-4 md:w-48 md:text-base lg:w-52">
                {c.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
