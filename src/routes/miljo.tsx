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
    <div className="mx-auto max-w-6xl px-6">
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            {t({ sv: "En transparent återvinningskedja", en: "A transparent recycling chain" })}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-8 max-w-xl text-lg text-muted-foreground">
            {t({
              sv: "På vår anläggning analyseras avfallet för att effektivisera insamlingssystemet. Ser du statistik på elavfall i Sverige är chansen stor att den kommer från analysanläggningen i Arboga, byggd på över 18 års insamlad data.",
              en: "At our facility, waste is analysed to make the collection system more efficient. If you see statistics on e waste in Sweden, chances are they come from the analysis facility in Arboga, built on more than 18 years of collected data.",
            })}
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-16 overflow-hidden rounded-3xl">
          <img
            src="/exse-miljo-hero.jpg"
            alt={t({ sv: "Sorteringsanläggning för metallåtervinning", en: "Metal recycling sorting facility" })}
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal as="h2" className="max-w-2xl font-display text-4xl md:text-5xl">
          {t({ sv: "Tjänster genom hela återvinningskedjan", en: "Services across the recycling chain" })}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 100}
              className="rounded-3xl border border-border/70 bg-card p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow"
            >
              <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Arboga facility */}
      <section className="mt-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <img
              src="/exse-analysis-lab.jpg"
              alt={t({ sv: "Analyslaboratorium där metallprover undersöks", en: "Analysis laboratory where metal samples are examined" })}
              width={1600}
              height={1000}
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover md:h-[520px]"
            />
          </Reveal>
          <div>
            <Reveal as="h2" className="font-display text-4xl leading-tight md:text-5xl">
              {t({ sv: "Analysanläggningen i Arboga", en: "The Arboga analysis facility" })}
            </Reveal>
            <div className="mt-6 space-y-5 text-lg text-foreground/80">
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
      <section className="mt-28">
        <Reveal as="h2" className="max-w-2xl font-display text-4xl md:text-5xl">
          {t({ sv: "Så fungerar återvinningskedjan", en: "How the recycling chain works" })}
        </Reveal>

        <ol className="relative mt-14 border-l border-copper/30 pl-8 md:pl-12">
          {chain.map((step, i) => (
            <Reveal
              key={step.n}
              as="li"
              delay={i * 120}
              className="relative pb-14 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[52px] md:-left-[68px] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-copper/40 bg-background font-display text-sm text-copper"
              >
                {step.n}
              </span>
              <h3 className="font-display text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mt-28 rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
        <Reveal as="h2" className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          {t({ sv: "Vill du veta hur vi kan hantera ert material?", en: "Want to know how we can handle your material?" })}
        </Reveal>
        <Reveal delay={120} className="mt-8">
          <PillLink to="/kontakt" variant="light">{t({ sv: "Kontakta oss", en: "Contact us" })}</PillLink>
        </Reveal>
      </section>
    </div>
  );
}
