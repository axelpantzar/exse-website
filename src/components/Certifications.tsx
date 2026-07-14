import ucAsset from "../assets/cert-uc.png.asset.json";
import iso9001Asset from "../assets/cert-iso9001.png.asset.json";
import iso14001Asset from "../assets/cert-iso14001.png.asset.json";
import iso45001Asset from "../assets/cert-iso45001.png.asset.json";
import weeeAsset from "../assets/cert-weee.png.asset.json";
import { Reveal } from "./Reveal";
import { useT } from "../i18n/LanguageContext";

export function Certifications() {
  const t = useT();

  const items = [
    { src: iso9001Asset.url, label: t({ sv: "ISO 9001, Kvalitet", en: "ISO 9001, Quality" }) },
    { src: iso14001Asset.url, label: t({ sv: "ISO 14001, Miljö", en: "ISO 14001, Environment" }) },
    { src: iso45001Asset.url, label: t({ sv: "ISO 45001, Arbetsmiljö", en: "ISO 45001, Occupational H&S" }) },
    { src: weeeAsset.url, label: t({ sv: "EN 50625-1, WEEE", en: "EN 50625-1, WEEE" }) },
    { src: ucAsset.url, label: t({ sv: "UC Högsta kreditvärdighet", en: "UC Highest credit rating" }) },
  ];

  return (
    <section className="mt-28">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <Reveal as="div" className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {t({ sv: "Certifieringar & kvalitet", en: "Certifications & quality" })}
          </h2>
        </Reveal>
        <Reveal as="p" delay={120} className="text-lg text-foreground/80 md:col-span-7">
          {t({
            sv: "Vi arbetar systematiskt med kvalitet, miljö och arbetsmiljö i varje del av verksamheten, från mottagning och sortering till analys och rapportering.",
            en: "We work systematically with quality, environmental and occupational health management across every part of the operation, from intake and sorting to analysis and reporting.",
          })}
        </Reveal>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {items.map((c, i) => (
          <Reveal
            key={c.label}
            as="li"
            delay={i * 80}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-muted/40 p-3 md:h-28 md:w-28">
              <img
                src={c.src}
                alt={c.label}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
            <p className="mt-4 text-xs leading-snug text-muted-foreground">{c.label}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
