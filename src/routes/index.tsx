import { createFileRoute } from "@tanstack/react-router";
import { PillLink } from "../components/ui/PillButton";
import { CountUp } from "../components/CountUp";
import { Certifications } from "../components/Certifications";
import { Reveal } from "../components/Reveal";
import { useT } from "../i18n/LanguageContext";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EXSE AB | Elektronikåtervinning & elavfallshantering i Sverige" },
      {
        name: "description",
        content:
          "EXSE AB erbjuder elektronikåtervinning, sortering och statistik på elavfall med full spårbarhet. Över 25 års erfarenhet av cirkulär återvinning i Sverige.",
      },
      { property: "og:title", content: "EXSE AB | Elektronikåtervinning & elavfallshantering" },
      {
        property: "og:description",
        content:
          "Cirkulär elektronikåtervinning i Sverige. Sortering, analys och statistik på elavfall, med över 25 års erfarenhet.",
      },
      { property: "og:url", content: "https://radiant-rebuild-bot.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://radiant-rebuild-bot.lovable.app/" },
      { rel: "preload", as: "image", href: "/exse-home-hero.jpg", fetchpriority: "high" },
    ],
  }),
});

function Index() {
  const t = useT();


  const stats = [
    { value: "25+", label: t({ sv: "År inom analys av elektronik", en: "Years in electronics analysis" }) },
    { value: "40+", label: t({ sv: "År inom innebandy", en: "Years in floorball" }) },
    { value: "18+", label: t({ sv: "År av insamlad data", en: "Years of collected data" }) },
  ];

  const services = [
    {
      n: "01",
      title: t({ sv: "Registrering & sortering", en: "Registration & sorting" }),
      body: t({
        sv: "Inkommande elektronik vägs in, registreras och klassificeras. Rätt sortering från start är grunden för tillförlitlig statistik och korrekt ersättning i systemet.",
        en: "Incoming electronics are weighed, registered and classified. Correct sorting from the start is the foundation for reliable statistics and correct compensation in the system.",
      }),
    },
    {
      n: "02",
      title: t({ sv: "Analys & demontering", en: "Analysis & dismantling" }),
      body: t({
        sv: "På analysanläggningen i Arboga undersöks och demonteras produkter för att fastställa innehåll, kategori och kritiska komponenter, komponent för komponent.",
        en: "At the Arboga facility, products are examined and dismantled to determine content, category and critical components, piece by piece.",
      }),
    },
    {
      n: "03",
      title: t({ sv: "Statistik, revision & kontroll", en: "Statistics, audit & control" }),
      body: t({
        sv: "Vi kontrollerar, sammanställer och reviderar data genom hela kedjan, från insamling till end of waste. Resultatet är transparent, verifierad statistik för hela Sverige.",
        en: "We control, compile and audit data across the entire chain, from collection to end of waste. The result is transparent, verified statistics for all of Sweden.",
      }),
    },
  ];


  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="pt-6 sm:pt-10 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-8xl lg:text-7xl">
            {t({ sv: "Kontroll och analys av elektronikflöden", en: "Control and analysis of electronics flows" })}
          </Reveal>
          <Reveal delay={120} as="p" className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            {t({
              sv: "EXSE AB säkerställer korrekt sortering, data och kunskap om Sveriges insamlade elektronik. Med decennier av erfarenhet och en modern analysanläggning levererar vi spårbarhet i varje led, från insamling till end of waste.",
              en: "EXSE AB ensures correct sorting, data and knowledge about Sweden's collected electronics. With decades of experience and a modern analysis facility, we deliver traceability at every step, from collection to end of waste.",
            })}
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <PillLink to="/miljo">
              {t({ sv: "Läs mer om vår verksamhet", en: "Learn about what we do" })}
            </PillLink>
            <PillLink to="/kontakt" variant="outline" showArrow={false}>
              {t({ sv: "Kontakta oss", en: "Contact us" })}
            </PillLink>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 overflow-hidden rounded-2xl sm:mt-14 sm:rounded-3xl md:mt-16">
          <img
            src="/exse-home-hero.jpg"
            alt={t({ sv: "Gammal TV med krossad skärm och innebandyboll, symbol för sport och miljö", en: "Old TV with broken screen and a floorball, symbolising sport and environment" })}
            width={1600}
            height={1000}
            fetchPriority="high"
            decoding="async"
            className="h-[260px] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02] sm:h-[380px] md:h-[520px] lg:h-[600px]"
          />
        </Reveal>
      </section>

      {/* Stats */}
      <section className="mt-24 sm:mt-32 md:mt-40">
        <ol className="grid gap-10 sm:grid-cols-3 sm:gap-6 md:gap-10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              as="li"
              delay={i * 120}
              className="flex flex-col items-center text-center"
            >
              <p className="font-display text-7xl leading-none tracking-tight text-copper sm:text-6xl md:text-7xl lg:text-8xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-5 max-w-[14ch] text-lg text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
                {s.label}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>



      {/* About */}
      <section className="mt-28 grid gap-8 sm:mt-36 md:mt-44 md:grid-cols-12 md:gap-10">
        <Reveal as="div" className="md:col-span-5">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            {t({
              sv: "En gedigen historia inom miljö och sport",
              en: "A solid history in environment and sport",
            })}
          </h2>
        </Reveal>
        <div className="space-y-5 text-base text-foreground/80 sm:text-lg md:col-span-7 md:space-y-6 md:pt-2">
          <Reveal as="p" delay={120}>
            {t({
              sv: "EXSE AB är en framstående aktör med en gedigen historia inom miljö och sport. Över 25 år inom elektronikåtervinning och över 40 år inom innebandy har gett oss pålitlighet, kvalitet och långsiktighet.",
              en: "EXSE AB is a leading player with a solid history in both environment and sport. Over 25 years in electronics recycling and more than 40 years in floorball have given us reliability, quality and a long-term perspective.",
            })}
          </Reveal>
          <Reveal as="p" delay={220}>
            {t({
              sv: "Vi arbetar på uppdrag av externa verksamhetsutövare med sortering, analyser, revisioner och statistik för elektriska och elektroniska produkter. I varje del av arbetet står kvalitet och miljömedvetenhet i centrum.",
              en: "We work on behalf of external operators with sorting, analyses, audits and statistics for electrical and electronic products. Quality and environmental awareness stay at the centre of everything we do.",
            })}
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="mt-28 sm:mt-36 md:mt-44">
        <Reveal as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl">
          {t({ sv: "Vad vi gör", en: "What we do" })}
        </Reveal>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              as="article"
              className="group rounded-3xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-lg sm:p-8"
            >
              <p className="font-display text-4xl text-copper transition-colors group-hover:text-copper sm:text-5xl">{s.n}</p>
              <h3 className="mt-5 text-lg sm:mt-6 sm:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Paired cards: Miljö (light) + Excellent Floorball (dark) */}
      <section className="mt-28 grid gap-6 sm:mt-36 sm:gap-8 md:mt-44 md:grid-cols-2">
        <Reveal
          as="article"
          className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 shadow transition-transform duration-300 hover:-translate-y-1 sm:p-10 md:p-12"
        >
          <div className="flex-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
              {t({ sv: "Miljö & återvinning", en: "Environment & recycling" })}
            </h2>
            <p className="mt-5 text-base text-foreground/80 sm:mt-6 sm:text-lg">
              {t({
                sv: "Med över 25 år i elektronikåtervinningsbranschen hanterar, kontrollerar och analyserar vi elektronikskrot på ett ansvarsfullt sätt. Vår långa närvaro är en garant för hög standard inom miljövänlig återvinning.",
                en: "With more than 25 years in the electronics recycling industry, we handle, control and analyse electronic scrap responsibly. Our long standing presence is a guarantee for high standards in sustainable recycling.",
              })}
            </p>
          </div>
          <div className="mt-auto pt-6">
            <PillLink to="/miljo" showArrow={false}>
              {t({ sv: "Läs mer om miljöarbetet →", en: "Read about our environmental work →" })}
            </PillLink>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          as="article"
          className="flex h-full flex-col rounded-3xl bg-foreground p-7 text-background shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:p-10 md:p-12"
        >
          <div className="flex-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Excellent Floorball</h2>
            <p className="mt-5 text-base text-background/80 sm:mt-6 sm:text-lg">
              {t({
                sv: "Vid sidan av återvinningen driver vi en egen sportprofil inom innebandy, med över 40 års engagemang, erfarenhet och passion för sporten.",
                en: "Alongside recycling, we run a dedicated floorball venture, with more than 40 years of commitment, experience and passion for the sport.",
              })}
            </p>
          </div>
          <div className="mt-auto pt-6">
            <PillLink to="/sport" variant="light">
              {t({ sv: "Till sporten", en: "To the sport" })}
            </PillLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
