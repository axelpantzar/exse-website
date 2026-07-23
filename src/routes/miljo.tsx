import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PillLink, PillAnchor } from "../components/ui/PillButton";
import { Reveal } from "../components/Reveal";
import { useT } from "../i18n/LanguageContext";
import analysisPhone from "../assets/analysis-phone-magnifier.jpg.asset.json";
import miljoHero from "../assets/miljo-hero.jpg.asset.json";



export const Route = createFileRoute("/miljo")({
  head: () => ({
    meta: [
      { title: "Vår verksamhet | Analys av elektronik | EXSE AB" },
      {
        name: "description",
        content:
          "EXSE analyserar, sorterar och reviderar Sveriges insamlade elektronik på uppdrag av El-Kretsen. Från registrering och analys till statistik och end of waste.",
      },
      { property: "og:title", content: "Vår verksamhet | Analys av elektronik | EXSE AB" },
      {
        property: "og:description",
        content:
          "Så arbetar vi med analys, sortering, revision och statistik åt El-Kretsen, från insamlad produkt till end of waste.",
      },

      { property: "og:url", content: "https://radiant-rebuild-bot.lovable.app/miljo" },
    ],
    links: [
      { rel: "canonical", href: "https://radiant-rebuild-bot.lovable.app/miljo" },
    ],
  }),
  component: MiljoPage,
});

function MiljoPage() {
  const t = useT();

  const services = [
    {
      title: t({ sv: "Sortering & klassificering", en: "Sorting & classification" }),
      body: t({
        sv: "Omkring två procent av all insamlad småelektronik tar omvägen via vår anläggning för att bli statistik och kunskap. Här klassificeras materialet korrekt, så att förbehandlare får rätt ersättning och elavfallets utveckling kan följas över tid.",
        en: "Around two percent of all collected small electronics takes the detour through our facility to become statistics and knowledge. Here the material is correctly classified so pre-treatment partners get the right compensation and the development of e-waste can be tracked over time.",
      }),
    },
    {
      title: t({ sv: "Statistik & revision", en: "Statistics & audit" }),
      body: t({
        sv: "Statistiksamordnaren kontrollerar, sammanställer och förtydligar data från olika system. Våra revisioner av återvinnare bidrar till förbättrad lagefterlevnad och tydligare återvinningsmål i Sverige.",
        en: "Our statistics coordinator controls, compiles and clarifies data from different systems. Our audits of recyclers contribute to improved legal compliance and clearer recycling goals in Sweden.",
      }),
    },
    {
      title: t({ sv: "Tester & analyser", en: "Testing & analysis" }),
      body: t({
        sv: "På anläggningen gör vi djupare studier av enskilda produkter och produktgrupper. Vi utför tester, analyser och demontering för att fastställa innehåll, farligt avfall och kritiska komponenter.",
        en: "At the facility we make deeper studies of single products and product groups. We run tests, analyses and dismantling to determine content, hazardous waste and critical components.",
      }),
    },
    {
      title: t({ sv: "Kontroll & end of waste", en: "Control & end of waste" }),
      body: t({
        sv: "Genom oberoende granskning verifierar vi att material klassificeras och hanteras enligt gällande regelverk, att flöden är spårbara och att rapporterad data överensstämmer med faktiskt utfall.",
        en: "Through independent review we verify that material is classified and handled according to current regulations, that flows are traceable, and that reported data matches actual outcomes.",
      }),
    },
  ];

  const chain = [
    {
      n: "01",
      title: t({ sv: "Registrering & sortering", en: "Registration & sorting" }),
      body: t({
        sv: "Inkommande elektronik registreras, vägs och klassificeras utifrån produkttyp och innehåll.",
        en: "Incoming electronics are registered, weighed and classified by product type and content.",
      }),
    },
    {
      n: "02",
      title: t({ sv: "Demontering & analys", en: "Dismantling & analysis" }),
      body: t({
        sv: "Utvalda produkter demonteras och delas upp i komponenter för fördjupad analys. Specifika delar undersöks för att fastställa material- och innehållsdata.",
        en: "Selected products are dismantled and separated into components for deeper analysis. Specific parts are examined to determine material and content data.",
      }),
    },
    {
      n: "03",
      title: t({ sv: "Datainsamling", en: "Data collection" }),
      body: t({
        sv: "Resultaten dokumenteras systematiskt och används som underlag för nationell statistik och uppföljning.",
        en: "Results are systematically documented and used as the basis for national statistics and follow-up.",
      }),
    },
    {
      n: "04",
      title: t({ sv: "Vidare flöde", en: "Onward flow" }),
      body: t({
        sv: "Farligt avfall skickas till godkända mottagare, medan resterande material går vidare till certifierade återvinnare för fortsatt behandling.",
        en: "Hazardous waste is sent to approved recipients, while remaining material moves on to certified recyclers for further treatment.",
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
            {t({ sv: "Precision genom hela elektronikkedjan", en: "Precision across the electronics chain" })}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            {t({
              sv: "EXSE är analys- och kontrollpartner till El-Kretsen. Vi återvinner inte själva, vi säkerställer att Sveriges insamlade elektronik klassificeras rätt, dokumenteras korrekt och att statistiken bakom systemet är att lita på.",
              en: "EXSE is analysis and control partner to El-Kretsen. We don't recycle ourselves; we make sure Sweden's collected electronics is correctly classified, properly documented and that the statistics behind the system can be trusted.",
            })}
          </Reveal>

        </div>

        <Reveal delay={200} className="mt-10 overflow-hidden rounded-2xl sm:mt-14 sm:rounded-3xl md:mt-16">
          <img
            src={miljoHero.url}
            alt={t({ sv: "Testtekniker demonterar och analyserar mobiltelefon", en: "Test technician dismantling and analysing a mobile phone" })}
            width={1600}
            height={1000}
            className="h-[260px] w-full object-cover sm:h-[380px] md:h-[520px] lg:h-[600px]"
          />
        </Reveal>
      </section>

      <section className="mt-28 sm:mt-36 md:mt-44">
        <Reveal as="h2" className="max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl">
          {t({ sv: "Så arbetar vi med elektronikflöden", en: "How we work with electronics flows" })}
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
              src={analysisPhone.url}
              alt={t({ sv: "Testtekniker undersöker demonterad mobiltelefon under förstoringslampa", en: "Test technician examining a dismantled mobile phone under a magnifying lamp" })}
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
                  sv: "På anläggningen genomför vi de tester, demonteringar och analyser som omvandlar insamlad elektronik till kunskap. Resultaten ligger till grund för nationell statistik, ersättning till producenter och identifiering av farligt avfall.",
                  en: "At the facility we run the tests, dismantling and analyses that turn collected electronics into knowledge. The results underpin national statistics, compensation to producers and identification of hazardous waste.",
                })}
              </Reveal>
              <Reveal as="p" delay={220}>
                {t({
                  sv: "Ser du statistik på elavfall i Sverige är chansen stor att den kommer härifrån, byggd på över 18 års insamlad data.",
                  en: "If you see statistics on e-waste in Sweden, chances are they come from here, built on more than 18 years of collected data.",
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
          {t({ sv: "Från insamlad produkt till analyserad data", en: "From collected product to analysed data" })}
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

      {/* Quality & environmental policy */}
      <section id="policy" className="mt-28 scroll-mt-24 sm:mt-36 md:mt-44">
        <Reveal as="h2" className="max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl">
          {t({ sv: "Vår kvalitets- och miljöpolicy", en: "Our quality and environmental policy" })}
        </Reveal>
        <div className="mt-8 max-w-3xl space-y-5 text-base text-foreground/80 sm:mt-10 sm:text-lg">
          <Reveal as="p" delay={100}>
            {t({
              sv: "Exse arbetar på uppdrag av externa verksamhetsutövare med statistik, revisioner, sortering, analyser av elektriska & elektroniska produkter, svetsning samt genom utveckling av datasystem.",
              en: "Exse works on behalf of external operators with statistics, audits, sorting, analyses of electrical & electronic products, welding and through development of data systems.",
            })}
          </Reveal>
          <Reveal as="p" delay={160}>
            {t({
              sv: "I all vår verksamhet arbetar vi aktivt med kvalitets- och miljöfrågor. Exse ska tillhandahålla produkter och tjänster som väl motsvarar uppdragsgivarens krav och förväntningar. Vidare ska Exse arbeta med kvalitet och miljömedvetenhet genom kompetens och utbildning i samtliga delar av verksamheten.",
              en: "In all our operations we work actively with quality and environmental matters. Exse shall provide products and services that well meet the client's requirements and expectations. Furthermore, Exse shall work with quality and environmental awareness through competence and training in all parts of the business.",
            })}
          </Reveal>
          <Reveal as="p" delay={220} className="pt-2 font-medium text-foreground">
            {t({ sv: "Detta gör vi genom att:", en: "We achieve this by:" })}
          </Reveal>
          <Reveal as="ul" delay={280} className="list-disc space-y-3 pl-5 marker:text-copper">
            <li>
              {t({
                sv: "Ständigt arbeta med att uppfylla de legala och andra bindande krav som ställs på vår verksamhet.",
                en: "Continuously working to meet the legal and other binding requirements placed on our operations.",
              })}
            </li>
            <li>
              {t({
                sv: "Utföra våra uppgifter med hög kvalitets- och miljömedvetenhet, vårt arbete präglas av kompetens, vilket medför en trygghet för våra kunder.",
                en: "Performing our tasks with high quality and environmental awareness; our work is characterised by competence, which gives our clients confidence.",
              })}
            </li>
            <li>
              {t({
                sv: "Påverka våra leverantörer och kunder att aktivt bedriva kvalitets- och miljöarbete.",
                en: "Encouraging our suppliers and clients to actively pursue quality and environmental work.",
              })}
            </li>
            <li>
              {t({
                sv: "Vår verksamhets kvalitets- och miljöarbete är under ständig förbättring och vår policy och våra mål ska årligen utvärderas.",
                en: "Our quality and environmental work is under continuous improvement, and our policy and goals are evaluated annually.",
              })}
            </li>
            <li>
              {t({
                sv: "För uppdrag där EXSE verkar inom områden som omfattas av producentansvar för el utrustning ska verksamheten bedrivas i linje med El-Kretsens gällande policyer och riktlinjer, i den utsträckning de är tillämpliga för uppdraget.",
                en: "For assignments where EXSE operates within areas covered by producer responsibility for electrical equipment, activities shall be conducted in line with El-Kretsen's applicable policies and guidelines, to the extent they apply to the assignment.",
              })}
            </li>
          </Reveal>
        </div>
      </section>

      <section className="mt-28 rounded-3xl bg-primary p-7 text-primary-foreground sm:mt-36 sm:p-10 md:mt-44 md:p-16">
        <Reveal as="h2" className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          {t({ sv: "Vill du veta mer om vårt arbete?", en: "Want to know more about our work?" })}
        </Reveal>
        <Reveal delay={120} className="mt-6 sm:mt-8">
          <PillLink to="/kontakt" variant="light">{t({ sv: "Kontakta oss", en: "Contact us" })}</PillLink>
        </Reveal>
      </section>
    </div>
  );
}
