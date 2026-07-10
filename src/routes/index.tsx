import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/hero-scrap-metal.jpg";
import { PillLink } from "../components/ui/PillButton";
import { CountUp } from "../components/CountUp";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "40+", label: "År av branscherfarenhet" },
  { value: "100%", label: "Spårbar materialkedja" },
  { value: "2", label: "Anläggningar i Sverige" },
];

const services = [
  {
    n: "01",
    title: "Sortering & insamling",
    body: "Vi tar emot och sorterar metallskrot med precision. Varje fraktion vägs, märks och förbereds för återvinning.",
  },
  {
    n: "02",
    title: "Statistik & revision",
    body: "Allt material dokumenteras och revideras. Du får tydliga rapporter och full insyn i flöden och kvalitet.",
  },
  {
    n: "03",
    title: "Tester & analys",
    body: "I vår analysanläggning i Arboga genomför vi tester som omvandlar skrot till mätbar, tillförlitlig data.",
  },
];

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Metallåtervinning · Analys · Statistik
          </p>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            Här blir skrot till statistik
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            EXSE AB förvandlar metallavfall till mätbart, hållbart värde. Med
            decennier av erfarenhet och en modern analysanläggning levererar vi
            spårbarhet i varje led.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PillLink to="/miljo">Utforska miljöarbetet</PillLink>
            <PillLink to="/kontakt" variant="outline" showArrow={false}>
              Kontakta oss
            </PillLink>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt="Närbild på sorterat metallskrot i premiumbelysning"
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="mt-20 grid grid-cols-1 gap-10 border-y border-border/60 py-14 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-6xl tracking-tight text-copper md:text-7xl">
              {s.value}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Om EXSE
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Erfarenhet som gör skillnad i hela återvinningskedjan
          </h2>
        </div>
        <div className="space-y-6 text-lg text-foreground/80 md:col-span-7 md:pt-2">
          <p>
            Sedan starten har EXSE byggt en verksamhet kring noggrannhet,
            kvalitet och miljöansvar. Vi vet att värdet i metall ligger i
            detaljerna — i hur den sorteras, dokumenteras och analyseras.
          </p>
          <p>
            Vår analysanläggning i Arboga är hjärtat i arbetet. Där omvandlas
            inkommande material till data som våra kunder kan lita på, hela
            vägen från mottagning till slutrapport.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mt-28">
        <h2 className="font-display text-4xl md:text-5xl">Vad vi gör</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.n}
              className="rounded-3xl border border-border/70 bg-card p-8 transition-colors hover:border-copper/50"
            >
              <p className="font-display text-5xl text-copper/80">{s.n}</p>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Sustainability CTA */}
      <section className="mt-28 overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
        <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
          Kvalitets- & miljöpolicy
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Hållbarhet är inte ett tillägg — det är hela vår affär
        </h2>
        <p className="mt-6 max-w-2xl text-primary-foreground/70">
          Vi arbetar systematiskt med kvalitet och miljö i varje steg. Genom
          spårbarhet, revision och analys säkerställer vi att material återförs
          till kretsloppet på rätt sätt.
        </p>
        <div className="mt-8">
          <a
            href="/miljo"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:gap-3"
          >
            Läs mer om miljöarbetet →
          </a>
        </div>
      </section>

      {/* Floorball teaser */}
      <section className="mt-28 grid gap-10 rounded-3xl border border-border/70 p-10 md:grid-cols-2 md:p-14">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Sekundär verksamhet
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Excellent Floorball
          </h2>
        </div>
        <div className="md:pt-2">
          <p className="text-lg text-foreground/80">
            Vid sidan av återvinningen driver vi även en sportprofil inom
            innebandy, med över 40 års engagemang och erfarenhet av sporten.
          </p>
          <div className="mt-6">
            <PillLink to="/sport" variant="outline" showArrow={false}>
              Till sporten →
            </PillLink>
          </div>
        </div>
      </section>
    </div>
  );
}
