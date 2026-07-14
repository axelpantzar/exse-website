import { createFileRoute } from "@tanstack/react-router";
import floorballHero from "../assets/floorball-hero.webp.asset.json";
const heroImg = floorballHero.url;
import { PillAnchor } from "../components/ui/PillButton";
import { Reveal } from "../components/Reveal";
import { useT } from "../i18n/LanguageContext";

export const Route = createFileRoute("/sport")({
  head: () => ({
    meta: [
      { title: "Sport | Excellent Floorball | EXSE AB" },
      {
        name: "description",
        content:
          "Excellent Floorball | EXSE:s sportprofil inom innebandy med över 40 års engagemang.",
      },
      { property: "og:title", content: "Excellent Floorball | EXSE AB" },
      {
        property: "og:description",
        content: "En egen profil, samma engagemang. Över 40 år inom innebandy.",
      },
    ],
  }),
  component: SportPage,
});

function SportPage() {
  const t = useT();
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Excellent Floorball
          </Reveal>
          <Reveal as="p" delay={120} className="mt-8 max-w-xl text-lg text-muted-foreground">
            {t({
              sv: "Vid sidan av återvinning och analys driver EXSE en egen sportprofil inom innebandy. Det är en separat verksamhetsdel, men ett uttryck för samma värderingar: laganda, uthållighet och vilja att prestera.",
              en: "Alongside recycling and analysis, EXSE runs its own floorball venture. It's a separate part of the business, but an expression of the same values: teamwork, endurance and the will to perform.",
            })}
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-16 overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt={t({ sv: "Innebandyspelare i aktion under en match", en: "Floorball player in action during a match" })}
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </Reveal>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-12">
        <Reveal as="div" className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {t({ sv: "En egen profil, samma engagemang", en: "A separate profile, the same commitment" })}
          </h2>
        </Reveal>
        <div className="space-y-6 text-lg text-foreground/80 md:col-span-7 md:pt-2">
          <Reveal as="p" delay={120}>
            {t({
              sv: "Excellent Floorball står på egna ben som sportverksamhet, men delar EXSE:s grundvärderingar. Vi tror på långsiktigt arbete, tydliga mål och glädjen i att utvecklas tillsammans.",
              en: "Excellent Floorball stands on its own as a sports venture, but shares EXSE's core values. We believe in long-term work, clear goals and the joy of growing together.",
            })}
          </Reveal>
          <Reveal as="p" delay={200}>
            {t({
              sv: "Med en djup förankring inom innebandy och över 40 år av engagemang har vi byggt både omfattande erfarenhet och en djup förståelse för sportens krav, vilket gör oss till en pålitlig partner för den som söker kvalitet inom innebandy.",
              en: "With deep roots in floorball and more than 40 years of dedication, we've built both extensive experience and a deep understanding of the sport's demands, making us a reliable partner for anyone seeking quality within floorball.",
            })}
          </Reveal>
          <Reveal as="p" delay={280}>{t({ sv: "Besök gärna vår separata hemsida för att läsa mer.", en: "Visit our dedicated website to read more." })}</Reveal>
          <Reveal delay={360} className="pt-2">
            <PillAnchor href="http://www.excellentfloorball.com/" external>
              {t({ sv: "Besök Excellent Floorball", en: "Visit Excellent Floorball" })}
            </PillAnchor>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
