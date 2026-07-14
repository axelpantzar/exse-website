import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "../i18n/LanguageContext";

export function Certifications() {
  const t = useT();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const items = [
    { src: "/cert-iso9001.png", label: t({ sv: "ISO 9001, Kvalitet", en: "ISO 9001, Quality" }) },
    { src: "/cert-iso14001.png", label: t({ sv: "ISO 14001, Miljö", en: "ISO 14001, Environment" }) },
    { src: "/cert-iso45001.png", label: t({ sv: "ISO 45001, Arbetsmiljö", en: "ISO 45001, Occupational H&S" }) },
    { src: "/cert-en50625.png", label: t({ sv: "EN 50625-1, WEEE", en: "EN 50625-1, WEEE" }) },
    { src: "/cert-uc.png", label: t({ sv: "UC Högsta kreditvärdighet", en: "UC Highest credit rating" }) },
  ];

  const isRunning = !paused && !hovered;

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

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-4 md:mt-10">
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <span
            className={`inline-block h-2.5 w-2.5 rounded-full transition-colors ${
              isRunning ? "bg-primary animate-pulse" : "bg-foreground/30"
            }`}
            aria-hidden
          />
          <span>
            {isRunning
              ? t({ sv: "Loop aktiv", en: "Loop active" })
              : t({ sv: "Pausad", en: "Paused" })}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={
            paused
              ? t({ sv: "Starta loop", en: "Start loop" })
              : t({ sv: "Pausa loop", en: "Pause loop" })
          }
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          <span>
            {paused
              ? t({ sv: "Starta", en: "Start" })
              : t({ sv: "Pausa", en: "Pause" })}
          </span>
        </button>
      </div>

      {/* Infinite marquee */}
      <div
        className="relative mt-6 overflow-hidden md:mt-8"
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
          style={{ animationPlayState: isRunning ? "running" : "paused" }}
        >
          {[...items, ...items].map((c, i) => (
            <li
              key={`${c.label}-${i}`}
              className="flex shrink-0 flex-col items-center text-center"
              aria-hidden={i >= items.length ? true : undefined}
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-muted/40 p-4 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
                <img
                  src={c.src}
                  alt={c.label}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
              <p className="mt-3 w-40 text-xs leading-snug text-muted-foreground sm:w-48 sm:text-sm md:mt-4 md:w-56 md:text-base lg:w-64">
                {c.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
