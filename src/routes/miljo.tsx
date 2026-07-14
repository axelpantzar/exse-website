import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/recycling-sorting.jpg";
import labImg from "../assets/analysis-lab.jpg";
import { PillLink } from "../components/ui/PillButton";
import { useT } from "../i18n/LanguageContext";

export const Route = createFileRoute("/miljo")({
  head: () => ({
    meta: [
      { title: "Miljö — EXSE AB" },
      {
        name: "description",
        content:
          "Miljöarbetet är kärnan i EXSE. Sortering, statistik & revision, tester och elektronikåtervinning — med full spårbarhet.",
      },
      { property: "og:title", content: "Miljö — EXSE AB" },
      {
        property: "og:description",
        content:
          "Återvinning byggd på data, inte gissningar. Full spårbarhet från mottagning till slutrapport.",
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
        sv: "Inkommande metall delas upp i rena fraktioner. Noggrann sortering är grunden för hög återvinningsgrad och rätt materialvärde.",
        en: "Incoming metal is separated into clean fractions. Careful sorting is the foundation for high recycling rates and correct material value.",
      }),
    },
    {
      title: t({ sv: "Statistik & revision", en: "Statistics & audit" }),
      body: t({
        sv: "Vi dokumenterar och reviderar varje flöde. Rapporterna ger spårbarhet och underlag för både kunder och myndigheter.",
        en: "We document and audit every flow. The reports provide traceability and a basis for both clients and authorities.",
      }),
    },
    {
      title: t({ sv: "Tester & analyser", en: "Testing & analysis" }),
      body: t({
        sv: "I analysanläggningen i Arboga genomför vi materialtester som säkerställer kvalitet och korrekt klassning.",
        en: "In the Arboga analysis facility we run material tests that ensure quality and correct classification.",
      }),
    },
    {
      title: t({ sv: "Elektronikåtervinning", en: "Electronics recycling" }),
      body: t({
        sv: "Uttjänt elektronik demonteras och materialåtervinns säkert, med fokus på att återföra värdefulla metaller till kretsloppet.",
        en: "End-of-life electronics are safely dismantled and recycled, with a focus on returning valuable metals to the loop.",
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
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            {t({ sv: "Återvinning byggd på data, inte gissningar", en: "Recycling built on data, not guesswork" })}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            {t({
              sv: "Miljöarbetet är kärnan i EXSE. Vi förenar effektiv återvinning med mätning, analys och full spårbarhet — så att varje ton metall hanteras ansvarsfullt och redovisas öppet.",
              en: "Environmental work is at the core of EXSE. We combine efficient recycling with measurement, analysis and full traceability — so every ton of metal is handled responsibly and reported transparently.",
            })}
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt={t({ sv: "Sorteringsanläggning för metallåtervinning", en: "Metal recycling sorting facility" })}
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>
      </section>

      <section className="mt-24">
        <h2 className="max-w-2xl font-display text-4xl md:text-5xl">
          {t({ sv: "Tjänster genom hela återvinningskedjan", en: "Services across the recycling chain" })}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="rounded-3xl border border-border/70 bg-card p-8"
            >
              <p className="font-display text-sm text-copper">0{i + 1}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-28 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={labImg}
            alt={t({ sv: "Analyslaboratorium där metallprover undersöks", en: "Analysis laboratory where metal samples are examined" })}
            width={1600}
            height={1000}
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[520px]"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {t({ sv: "Analysanläggningen i Arboga", en: "The Arboga analysis facility" })}
          </h2>
          <div className="mt-6 space-y-5 text-lg text-foreground/80">
            <p>
              {t({
                sv: "Här genomför vi de tester och analyser som omvandlar skrot till statistik. Resultaten ger våra uppdragsgivare trygghet i materialets sammansättning, kvalitet och värde.",
                en: "Here we run the tests and analyses that turn scrap into statistics. The results give our clients confidence in the material's composition, quality and value.",
              })}
            </p>
            <p>
              {t({
                sv: "Genom att kombinera mätdata med revision skapar vi en transparent kedja — från första vägning till slutgiltig rapport.",
                en: "By combining measurement data with audit, we create a transparent chain — from the first weighing to the final report.",
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-28">
        <div className="grid gap-6 md:grid-cols-4">
          {chain.map((step) => (
            <article
              key={step.n}
              className="rounded-3xl border border-border/70 bg-card p-6"
            >
              <p className="font-display text-4xl text-copper/80">{step.n}</p>
              <h3 className="mt-4 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-28 rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          {t({ sv: "Vill du veta hur vi kan hantera ert material?", en: "Want to know how we can handle your material?" })}
        </h2>
        <div className="mt-8">
          <PillLink to="/kontakt">{t({ sv: "Kontakta oss", en: "Contact us" })}</PillLink>
        </div>
      </section>
    </div>
  );
}
