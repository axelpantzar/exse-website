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
    <section className="mt-20 sm:mt-24 md:mt-28">
      <div className="grid gap-6 sm:gap-10 md:grid-cols-12 md:items-end">
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

      <ul className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6 md:grid-cols-5">
        {items.map((c, i) => (
          <Reveal
            key={c.label}
            as="li"
            delay={i * 80}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/40 p-3 sm:h-24 sm:w-24 md:h-28 md:w-28">
              <img
                src={c.src}
                alt={c.label}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
            <p className="mt-3 text-xs leading-snug text-muted-foreground sm:mt-4">{c.label}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

