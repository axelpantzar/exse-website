import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/recycling-sorting.jpg";
import labImg from "../assets/analysis-lab.jpg";
import { PillLink } from "../components/ui/PillButton";

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

const services = [
  {
    title: "Sortering",
    body: "Inkommande metall delas upp i rena fraktioner. Noggrann sortering är grunden för hög återvinningsgrad och rätt materialvärde.",
  },
  {
    title: "Statistik & revision",
    body: "Vi dokumenterar och reviderar varje flöde. Rapporterna ger spårbarhet och underlag för både kunder och myndigheter.",
  },
  {
    title: "Tester & analyser",
    body: "I analysanläggningen i Arboga genomför vi materialtester som säkerställer kvalitet och korrekt klassning.",
  },
  {
    title: "Elektronikåtervinning",
    body: "Uttjänt elektronik demonteras och materialåtervinns säkert, med fokus på att återföra värdefulla metaller till kretsloppet.",
  },
];

const chain = [
  { n: "01", title: "Mottagning", body: "Material tas emot, vägs och registreras." },
  { n: "02", title: "Sortering", body: "Fraktioner separeras och märks upp." },
  { n: "03", title: "Analys", body: "Tester och statistik genomförs i Arboga." },
  { n: "04", title: "Återföring", body: "Materialet återförs till kretsloppet." },
];

function MiljoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Återvinning byggd på data, inte gissningar
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Miljöarbetet är kärnan i EXSE. Vi förenar effektiv återvinning med
            mätning, analys och full spårbarhet — så att varje ton metall
            hanteras ansvarsfullt och redovisas öppet.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt="Sorteringsanläggning för metallåtervinning"
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>
      </section>

      {/* Services */}
      <section className="mt-24">
        <h2 className="max-w-2xl font-display text-4xl md:text-5xl">
          Tjänster genom hela återvinningskedjan
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="rounded-3xl border border-border/70 bg-card p-8"
            >
              <p className="font-display text-sm text-copper">
                0{i + 1}
              </p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Arboga */}
      <section className="mt-28 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={labImg}
            alt="Analyslaboratorium där metallprover undersöks"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[520px]"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Data & analysanläggning
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Analysanläggningen i Arboga
          </h2>
          <div className="mt-6 space-y-5 text-lg text-foreground/80">
            <p>
              Här genomför vi de tester och analyser som omvandlar skrot till
              statistik. Resultaten ger våra kunder trygghet i materialets
              sammansättning, kvalitet och värde.
            </p>
            <p>
              Genom att kombinera mätdata med revision skapar vi en transparent
              kedja — från första vägning till slutgiltig rapport.
            </p>
          </div>
        </div>
      </section>

      {/* Chain */}
      <section className="mt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Återvinningskedjan
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
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

      {/* CTA */}
      <section className="mt-28 rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Vill du veta hur vi kan hantera ert material?
        </h2>
        <div className="mt-8">
          <PillLink to="/kontakt">Kontakta oss</PillLink>
        </div>
      </section>
    </div>
  );
}
