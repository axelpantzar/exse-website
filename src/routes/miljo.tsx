import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PillLink, PillAnchor } from "../components/ui/PillButton";
import { Reveal } from "../components/Reveal";
import { useT } from "../i18n/LanguageContext";



export const Route = createFileRoute("/miljo")({
  head: () => ({
    meta: [
      { title: "Miljö | EXSE AB" },
      {
        name: "description",
        content:
          "På El-Kretsens analysanläggning i Arboga blir elavfall till statistik. Sortering, revision, tester och full spårbarhet.",
      },
      { property: "og:title", content: "Miljö | EXSE AB" },
      {
        property: "og:description",
        content:
          "Här blir skrot till statistik. Kunskap från över 18 års insamlad data om elavfall i Sverige.",
      },
    ],
  }),
  component: MiljoPage,
});

function MiljoPage() {
  const t = useT();

  const services = [
    {
      title: t({ sv: "Sortering", en: "Sorting" }),
      body: t({
        sv: "Omkring två procent av all insamlad småelektronik tar omvägen via vår anläggning för att bli statistik och kunskap. Kunskapen används för att förbehandlare ska få rätt ersättning för sitt arbete och för att se hur elavfallet förändras över tid.",
        en: "Around two percent of all collected small electronics takes the detour through our facility to become statistics and knowledge. The insight is used to give pre treatment partners the right compensation for their work and to see how e waste changes over time.",
      }),
    },
    {
      title: t({ sv: "Statistik & revision", en: "Statistics & audit" }),
      body: t({
        sv: "Statistiksamordnarens uppdrag är att kontrollera, sammanställa och förtydliga den data som uppstår i olika datasystem. Våra revisioner av återvinnare bidrar till förbättrad lagefterlevnad och tydligare återvinningsmål i Sverige.",
        en: "Our statistics coordinator controls, compiles and clarifies the data that emerges from different systems. Our audits of recyclers contribute to improved legal compliance and clearer recycling goals in Sweden.",
      }),
    },
    {
      title: t({ sv: "Tester & analyser", en: "Testing & analysis" }),
      body: t({
        sv: "På anläggningen gör vi djupare studier av enskilda produkter och produktgrupper. Vi utför tester, analyser och demontering av elavfall för att förstå produkternas sammansättning och värde i återvinningskedjan.",
        en: "At the facility we make deeper studies of single products and product groups. We run tests, analyses and dismantling of e waste to understand product composition and value in the recycling chain.",
      }),
    },
    {
      title: t({ sv: "Elektronikåtervinning", en: "Electronics recycling" }),
      body: t({
        sv: "Uttjänt elektronik demonteras och materialåtervinns säkert, med fokus på att återföra värdefulla metaller till kretsloppet.",
        en: "End of life electronics are safely dismantled and recycled, with a focus on returning valuable metals to the loop.",
      }),
    },
  ];

  const chain = [
    {
      n: "01",
      title: t({ sv: "Mottagning", en: "Intake" }),
      body: t({
        sv: "Material tas emot, vägs in och registreras i vårt system. Varje leverans får ett spårbart ID så att ursprung, vikt och fraktion kan följas hela vägen genom kedjan.",
        en: "Material is received, weighed in and registered in our system. Every delivery gets a traceable ID so origin, weight and fraction can be followed all the way through the chain.",
      }),
    },
    {
      n: "02",
      title: t({ sv: "Sortering", en: "Sorting" }),
      body: t({
        sv: "Fraktioner separeras manuellt och maskinellt utifrån materialtyp och kvalitet. Rätt sortering är grunden för att så mycket som möjligt ska kunna materialåtervinnas.",
        en: "Fractions are separated manually and mechanically based on material type and quality. Correct sorting is the foundation for recovering as much material as possible.",
      }),
    },
    {
      n: "03",
      title: t({ sv: "Analys", en: "Analysis" }),
      body: t({
        sv: "På anläggningen i Arboga genomförs tester, demontering och statistiska analyser. Data omvandlas till kunskap om sammansättning, värde och utveckling över tid.",
        en: "At our Arboga facility we run tests, dismantling and statistical analyses. Data is turned into knowledge about composition, value and how the flow changes over time.",
      }),
    },
    {
      n: "04",
      title: t({ sv: "Återföring", en: "Return to loop" }),
      body: t({
        sv: "Materialet återförs till kretsloppet som råvara till nya produkter. Rapporter och spårbarhet ger uppdragsgivarna trygghet i att avfallet hanteras korrekt.",
        en: "The material is returned to the loop as raw material for new products. Reports and traceability give clients confidence that the waste is handled correctly.",
      }),
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start filling when the top of the timeline reaches ~70% down the viewport,
      // finish when the bottom reaches ~30% up.
      const start = vh * 0.7;
      const end = vh * 0.3;
      const total = rect.height + (start - end);
      const scrolled = start - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);


  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <section className="pt-6 sm:pt-10 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-8xl lg:text-7xl">
            {t({ sv: "Återvinning med full spårbarhet", en: "Recycling with full traceability" })}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            {t({
              sv: "På vår anläggning analyseras avfallet för att effektivisera insamlingssystemet. Ser du statistik på elavfall i Sverige är chansen stor att den kommer från El-Kretsens analysanläggning i Arboga, byggd på över 18 års insamlad data.",
              en: "At our facility, waste is analysed to make the collection system more efficient. If you see statistics on e waste in Sweden, chances are they come from El-Kretsen's analysis facility in Arboga, built on more than 18 years of collected data.",
            })}
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 overflow-hidden rounded-2xl sm:mt-14 sm:rounded-3xl md:mt-16">
          <img
            src="/exse-miljo-hero.jpg"
            alt={t({ sv: "Sorteringsanläggning för metallåtervinning", en: "Metal recycling sorting facility" })}
            width={1600}
            height={1000}
            className="h-[260px] w-full object-cover sm:h-[380px] md:h-[520px] lg:h-[600px]"
          />
        </Reveal>
      </section>

      <section className="mt-28 sm:mt-36 md:mt-44">
        <Reveal as="h2" className="max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl">
          {t({ sv: "Tjänster genom hela återvinningskedjan", en: "Services across the recycling chain" })}
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 100}
              className="rounded-3xl border border-border/70 bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow sm:p-8"
            >
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Arboga facility */}
      <section className="mt-28 sm:mt-36 md:mt-44">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          <Reveal>
            <img
              src="/exse-analysis-lab.jpg"
              alt={t({ sv: "Analyslaboratorium där metallprover undersöks", en: "Analysis laboratory where metal samples are examined" })}
              width={1600}
              height={1000}
              loading="lazy"
              className="h-[260px] w-full rounded-2xl object-cover sm:h-[380px] sm:rounded-3xl md:h-[520px]"
            />
          </Reveal>
          <div>
            <Reveal as="h2" className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              {t({ sv: "El-Kretsens Analysanläggning i Arboga", en: "El-Kretsen's Analysis Facility in Arboga" })}
            </Reveal>
            <div className="mt-5 space-y-4 text-base text-foreground/80 sm:mt-6 sm:space-y-5 sm:text-lg">
              <Reveal as="p" delay={120}>
                {t({
                  sv: "Här genomför vi de tester och analyser som omvandlar skrot till statistik. Resultaten ger våra uppdragsgivare trygghet i materialets sammansättning, kvalitet och värde.",
                  en: "Here we run the tests and analyses that turn scrap into statistics. The results give our clients confidence in the material's composition, quality and value.",
                })}
              </Reveal>
              <Reveal as="p" delay={220}>
                {t({
                  sv: "Genom att kombinera mätdata med revision skapar vi en transparent kedja, från första vägning till slutgiltig rapport.",
                  en: "By combining measurement data with audit, we create a transparent chain, from the first weighing to the final report.",
                })}
              </Reveal>
            </div>
            <Reveal delay={320} className="mt-6 sm:mt-8">
              <PillAnchor href="https://www.el-kretsen.se" external>
                {t({ sv: "Läs mer om El-Kretsen", en: "Read more about El-Kretsen" })}
              </PillAnchor>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recycling chain timeline */}
      <section className="mt-28 sm:mt-36 md:mt-44">
        <Reveal as="h2" className="max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl">
          {t({ sv: "Så fungerar återvinningskedjan", en: "How the recycling chain works" })}
        </Reveal>

        <div ref={timelineRef} className="relative mt-14 sm:mt-20 md:mt-24">
          {/* Base vertical line */}
          <div
            aria-hidden
            className="absolute left-8 top-0 bottom-0 w-px bg-copper/20 sm:left-10 md:left-14"
          />
          {/* Filled progress line, follows scroll */}
          <div
            aria-hidden
            className="absolute left-8 top-0 w-px bg-copper transition-[height] duration-150 ease-out sm:left-10 md:left-14"
            style={{ height: `${progress * 100}%` }}
          />

          <ol className="relative">
            {chain.map((step, i) => (
              <Reveal
                key={step.n}
                as="li"
                delay={i * 80}
                className="relative py-10 sm:py-14 md:py-16"
              >
                {/* Step number circle */}
                <span
                  aria-hidden
                  className="absolute left-8 top-10 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-copper/40 bg-background font-display text-base text-copper shadow-sm sm:left-10 sm:top-14 sm:h-16 sm:w-16 sm:text-lg md:left-14 md:top-16 md:h-20 md:w-20 md:text-xl"
                >
                  {step.n}
                </span>

                {/* Content */}
                <div className="pl-20 sm:pl-28 md:pl-40">
                  <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

      </section>

      <section className="mt-28 rounded-3xl bg-primary p-7 text-primary-foreground sm:mt-36 sm:p-10 md:mt-44 md:p-16">
        <Reveal as="h2" className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          {t({ sv: "Vill du veta hur vi kan hantera ert material?", en: "Want to know how we can handle your material?" })}
        </Reveal>
        <Reveal delay={120} className="mt-6 sm:mt-8">
          <PillLink to="/kontakt" variant="light">{t({ sv: "Kontakta oss", en: "Contact us" })}</PillLink>
        </Reveal>
      </section>
    </div>
  );
}
