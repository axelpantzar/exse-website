import { createFileRoute } from "@tanstack/react-router";
import { PillLink } from "../components/ui/PillButton";
import { Reveal } from "../components/Reveal";
import { useT } from "../i18n/LanguageContext";


export const Route = createFileRoute("/miljo")({
  head: () => ({
    meta: [
      { title: "Miljö | EXSE AB" },
      {
        name: "description",
        content:
          "På analysanläggningen i Arboga blir elavfall till statistik. Sortering, revision, tester och full spårbarhet.",
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
    { n: "01", title: t({ sv: "Mottagning", en: "Intake" }), body: t({ sv: "Material tas emot, vägs och registreras.", en: "Material is received, weighed and registered." }) },
    { n: "02", title: t({ sv: "Sortering", en: "Sorting" }), body: t({ sv: "Fraktioner separeras och märks upp.", en: "Fractions are separated and labelled." }) },
    { n: "03", title: t({ sv: "Analys", en: "Analysis" }), body: t({ sv: "Tester och statistik genomförs i Arboga.", en: "Tests and statistics are performed in Arboga." }) },
    { n: "04", title: t({ sv: "Återföring", en: "Return to loop" }), body: t({ sv: "Materialet återförs till kretsloppet.", en: "The material is returned to the loop." }) },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <section className="pt-6 sm:pt-10 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            {t({ sv: "En transparent återvinningskedja", en: "A transparent recycling chain" })}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            {t({
              sv: "På vår anläggning analyseras avfallet för att effektivisera insamlingssystemet. Ser du statistik på elavfall i Sverige är chansen stor att den kommer från analysanläggningen i Arboga, byggd på över 18 års insamlad data.",
              en: "At our facility, waste is analysed to make the collection system more efficient. If you see statistics on e waste in Sweden, chances are they come from the analysis facility in Arboga, built on more than 18 years of collected data.",
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

      <section className="mt-20 sm:mt-24 md:mt-28">
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
      <section className="mt-20 sm:mt-24 md:mt-28">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
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
              {t({ sv: "Analysanläggningen i Arboga", en: "The Arboga analysis facility" })}
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
          </div>
        </div>
      </section>

      {/* Recycling chain timeline */}
      <section className="mt-20 sm:mt-24 md:mt-28">
        <Reveal as="h2" className="max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl">
          {t({ sv: "Så fungerar återvinningskedjan", en: "How the recycling chain works" })}
        </Reveal>

        <ol className="relative mt-10 border-l border-copper/30 pl-6 sm:mt-14 sm:pl-8 md:pl-12">
          {chain.map((step, i) => (
            <Reveal
              key={step.n}
              as="li"
              delay={i * 120}
              className="relative pb-10 last:pb-0 sm:pb-14"
            >
              <span
                aria-hidden
                className="absolute -left-6 top-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-copper/40 bg-background font-display text-xs text-copper sm:-left-8 sm:h-10 sm:w-10 sm:text-sm md:-left-12"
              >
                {step.n}
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mt-20 rounded-3xl bg-primary p-7 text-primary-foreground sm:mt-24 sm:p-10 md:mt-28 md:p-16">
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
