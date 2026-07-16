import { createFileRoute } from "@tanstack/react-router";
import { PillLink } from "../components/ui/PillButton";
import { CountUp } from "../components/CountUp";
import { Certifications } from "../components/Certifications";
import { Reveal } from "../components/Reveal";
import { useT } from "../i18n/LanguageContext";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const t = useT();


  const stats = [
    { value: "25+", label: t({ sv: "År inom elektronikåtervinning", en: "Years in electronics recycling" }) },
    { value: "40+", label: t({ sv: "År inom innebandy", en: "Years in floorball" }) },
    { value: "18+", label: t({ sv: "År av insamlad data", en: "Years of collected data" }) },
  ];

  const services = [
    {
      n: "01",
      title: t({ sv: "Sortering & insamling", en: "Sorting & intake" }),
      body: t({
        sv: "Vi tar emot och sorterar elavfall och metallskrot med precision. Varje fraktion vägs, märks och förbereds för återvinning.",
        en: "We receive and sort electronic waste and metal scrap with precision. Every fraction is weighed, labelled and prepared for recycling.",
      }),
    },
    {
      n: "02",
      title: t({ sv: "Statistik & revision", en: "Statistics & audit" }),
      body: t({
        sv: "Vi kontrollerar, sammanställer och förtydligar data från olika system. Revisionerna bidrar till bättre lagefterlevnad och tydligare återvinningsmål.",
        en: "We control, compile and clarify data from different systems. Our audits contribute to better legal compliance and clearer recycling goals.",
      }),
    },
    {
      n: "03",
      title: t({ sv: "Tester & analyser", en: "Testing & analysis" }),
      body: t({
        sv: "I analysanläggningen i Arboga demonteras och vägs produkter komponent för komponent, så att vi kan se sammansättning och värde i återvinningskedjan.",
        en: "At the Arboga facility products are dismantled and weighed component by component, giving a clear picture of composition and value in the recycling chain.",
      }),
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="pt-6 sm:pt-10 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-8xl lg:text-7xl">
            {t({ sv: "Här blir skrot till statistik", en: "Where scrap becomes statistics" })}
          </Reveal>
          <Reveal delay={120} as="p" className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            {t({
              sv: "EXSE AB förvandlar elavfall till mätbart, hållbart värde. Med decennier av erfarenhet och en modern analysanläggning i Arboga levererar vi spårbarhet i varje led.",
              en: "EXSE AB turns electronic waste into measurable, sustainable value. With decades of experience and a modern analysis facility in Arboga, we deliver traceability at every step.",
            })}
          </Reveal>
          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <PillLink to="/miljo">
              {t({ sv: "Utforska miljöarbetet", en: "Explore our environmental work" })}
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
