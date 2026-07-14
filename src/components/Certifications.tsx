import { Reveal } from "./Reveal";
import { useT } from "../i18n/LanguageContext";

export function Certifications() {
  const t = useT();

  const items = [
    { src: "/cert-iso9001.png", label: t({ sv: "ISO 9001, Kvalitet", en: "ISO 9001, Quality" }) },
    { src: "/cert-iso14001.png", label: t({ sv: "ISO 14001, Miljö", en: "ISO 14001, Environment" }) },
    { src: "/cert-iso45001.png", label: t({ sv: "ISO 45001, Arbetsmiljö", en: "ISO 45001, Occupational H&S" }) },
    { src: "/cert-en50625.png", label: t({ sv: "EN 50625-1, WEEE", en: "EN 50625-1, WEEE" }) },
    { src: "/cert-uc.png", label: t({ sv: "UC Högsta kreditvärdighet", en: "UC Highest credit rating" }) },
  ];

  return (
    <section className="mt-28 sm:mt-36 md:mt-44">
      <div className="grid gap-6 sm:gap-10 md:grid-cols-12 md:items-start">
        <Reveal as="div" className="md:col-span-5">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            {t({ sv: "Certifieringar & kvalitet", en: "Certifications & quality" })}
          </h2>
        </Reveal>
        <Reveal as="p" delay={120} className="text-base text-foreground/80 sm:text-lg md:col-span-7">
          {t({
            sv: "Vi arbetar systematiskt med kvalitet, miljö och arbetsmiljö i varje del av verksamheten, från mottagning och sortering till analys och rapportering.",
            en: "We work systematically with quality, environmental and occupational health management across every part of the operation, from intake and sorting to analysis and reporting.",
          })}
        </Reveal>
      </div>

      {/* Infinite marquee on all screen sizes */}
      <div
        className="relative mt-10 overflow-hidden md:mt-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee gap-8 md:gap-14">
          {[...items, ...items].map((c, i) => (
            <li
              key={`${c.label}-${i}`}
              className="flex shrink-0 flex-col items-center text-center"
              aria-hidden={i >= items.length ? true : undefined}
            >
              <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-muted/40 p-5 md:h-80 md:w-80 lg:h-96 lg:w-96">
                <img
                  src={c.src}
                  alt={c.label}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
              <p className="mt-4 w-56 text-sm leading-snug text-muted-foreground md:mt-5 md:w-80 md:text-base lg:w-96">
                {c.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

