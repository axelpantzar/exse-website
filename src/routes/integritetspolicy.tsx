import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { useT, type Bilingual } from "../i18n/LanguageContext";

export const Route = createFileRoute("/integritetspolicy")({
  head: () => ({
    meta: [
      { title: "Integritetspolicy | EXSE AB" },
      {
        name: "description",
        content:
          "Integritetspolicy för EXSE AB. Läs om hur vi hanterar personuppgifter, cookies och dina rättigheter.",
      },
      { property: "og:title", content: "Integritetspolicy | EXSE AB" },
      {
        property: "og:description",
        content:
          "Integritetspolicy för EXSE AB. Läs om hur vi hanterar personuppgifter, cookies och dina rättigheter.",
      },
      { property: "og:url", content: "https://radiant-rebuild-bot.lovable.app/integritetspolicy" },
    ],
    links: [
      { rel: "canonical", href: "https://radiant-rebuild-bot.lovable.app/integritetspolicy" },
    ],
  }),
  component: IntegritetspolicyPage,
});

function Section({
  title,
  children,
  delay = 0,
}: {
  title: Bilingual;
  children: React.ReactNode;
  delay?: number;
}) {
  const t = useT();
  return (
    <Reveal as="section" delay={delay} className="border-t border-border/60 pt-8 sm:pt-10">
      <h2 className="font-display text-2xl leading-tight sm:text-3xl">{t(title)}</h2>
      <div className="mt-5 space-y-4 text-base text-foreground/80 sm:text-lg">{children}</div>
    </Reveal>
  );
}

function IntegritetspolicyPage() {
  const t = useT();

  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <section className="pt-6 sm:pt-10 md:pt-16">
        <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          {t({ sv: "Integritetspolicy", en: "Privacy policy" })}
        </Reveal>
        <Reveal delay={120} as="p" className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
          {t({
            sv: "Här beskriver vi hur EXSE AB hanterar information på den här webbplatsen och vilka rättigheter du har.",
            en: "Here we describe how EXSE AB handles information on this website and what rights you have.",
          })}
        </Reveal>
      </section>

      <div className="mt-16 space-y-10 sm:mt-20 sm:space-y-14">
        <Section
          title={{
            sv: "Vem ansvarar för sidan?",
            en: "Who is responsible for this site?",
          }}
        >
          <p>
            {t({
              sv: "EXSE AB, org.nr 556682-9734, är ansvarig för den här webbplatsen. Adress: Kyrkvägen 17, 703 75 Örebro.",
              en: "EXSE AB, org.no 556682-9734, is responsible for this website. Address: Kyrkvägen 17, 703 75 Örebro, Sweden.",
            })}
          </p>
          <p>
            {t({
              sv: "Om du har frågor om hur vi hanterar personuppgifter är du välkommen att ",
              en: "If you have questions about how we handle personal data, you are welcome to ",
            })}
            <Link to="/kontakt" className="text-copper underline underline-offset-4 hover:no-underline">
              {t({ sv: "kontakta oss", en: "contact us" })}
            </Link>
            {t({
              sv: " via e-post eller telefon som anges på kontaktsidan.",
              en: " by email or phone as shown on the contact page.",
            })}
          </p>
        </Section>

        <Section
          title={{
            sv: "Vilka personuppgifter samlar vi in?",
            en: "What personal data do we collect?",
          }}
          delay={80}
        >
          <p>
            {t({
              sv: "Vi samlar inte aktivt in personuppgifter via webbplatsen. Det finns inga kontaktformulär, nyhetsbrev eller inloggningar som lagrar uppgifter hos oss.",
              en: "We do not actively collect personal data through the website. There are no contact forms, newsletters or logins that store information with us.",
            })}
          </p>
          <p>
            {t({
              sv: "Vid vanligt besök kan vår webbserver dock registrera tekniska uppgifter såsom IP-adress, webbläsartyp, tidpunkt och vilken sida som besökts. Dessa loggar används enbart för drift, säkerhet och felsökning.",
              en: "During a normal visit, however, our web server may record technical information such as IP address, browser type, time and which page was visited. These logs are used solely for operation, security and troubleshooting.",
            })}
          </p>
        </Section>

        <Section
          title={{
            sv: "Cookies och lokal lagring",
            en: "Cookies and local storage",
          }}
          delay={160}
        >
          <p>
            {t({
              sv: "Webbsidan använder ingen spårning från tredje part och inga analyscookies. Den enda lokala lagringen är ett val av språk (svenska eller engelska) som sparas i din webbläsare när du byter språk. Detta är en rent funktionell inställning och kan när som helst ändras eller tas bort av dig.",
              en: "The website does not use any third-party tracking or analytics cookies. The only local storage is a language choice (Swedish or English) saved in your browser when you switch language. This is a purely functional setting and can be changed or removed by you at any time.",
            })}
          </p>
          <p>
            {t({
              sv: "Eftersom vi inte använder marknadsföringscookies eller analyscookies behövs ingen separat cookiebanner i nuläget.",
              en: "Since we do not use marketing or analytics cookies, no separate cookie banner is needed at this time.",
            })}
          </p>
        </Section>

        <Section
          title={{
            sv: "Tredjepartstjänster",
            en: "Third-party services",
          }}
          delay={240}
        >
          <p>
            {t({
              sv: "Vi använder Google Search Console för att verifiera och följa upp hur webbplatsen indexeras av Google. Tjänsten ger oss aggregerad information om söktrafik och eventuella tekniska fel, men den sätter inte några cookies på besökare av den här sidan.",
              en: "We use Google Search Console to verify and monitor how the website is indexed by Google. The service gives us aggregated information about search traffic and any technical issues, but it does not set any cookies on visitors to this site.",
            })}
          </p>
          <p>
            {t({
              sv: "Webbplatsen hostas via Vercel. Det innebär att teknisk trafikdata, såsom IP-adress och information om webbläsare och enhet, kan behandlas av Vercel för att kunna leverera och skydda sidan. Denna behandning sker inom ramen för Vercels egna villkor och säkerhetsrutiner.",
              en: "The website is hosted via Vercel. This means that technical traffic data, such as IP address and information about the browser and device, may be processed by Vercel in order to deliver and protect the site. This processing takes place under Vercel's own terms and security routines.",
            })}
          </p>
        </Section>

        <Section
          title={{
            sv: "Syfte och rättslig grund",
            en: "Purpose and legal basis",
          }}
          delay={320}
        >
          <p>
            {t({
              sv: "Behandlingen av tekniska serverloggar sker på grundval av vårt berättigade intresse av att hålla webbplatsen säker, tillgänglig och fri från fel. Uppgifterna används inte för att identifiera enskilda personer eller för marknadsföring.",
              en: "Processing of technical server logs is based on our legitimate interest in keeping the website secure, available and free from errors. The data is not used to identify individuals or for marketing.",
            })}
          </p>
        </Section>

        <Section
          title={{
            sv: "Dina rättigheter",
            en: "Your rights",
          }}
          delay={400}
        >
          <p>
            {t({
              sv: "Enligt dataskyddsförordningen (GDPR) har du rätt att kostnadsfritt begära information om vilka personuppgifter vi hanterar om dig, få felaktiga uppgifter rättade, begära radering under vissa förutsättningar, invända mot behandling och lämna klagomål till Integritetsskyddsmyndigheten.",
              en: "Under the General Data Protection Regulation (GDPR) you have the right to request information free of charge about what personal data we process about you, have incorrect data rectified, request erasure under certain conditions, object to processing and lodge a complaint with the Swedish Authority for Privacy Protection.",
            })}
          </p>
          <p>
            {t({
              sv: "Vill du utöva dina rättigheter, ",
              en: "To exercise your rights, please ",
            })}
            <Link to="/kontakt" className="text-copper underline underline-offset-4 hover:no-underline">
              {t({ sv: "kontakta oss", en: "contact us" })}
            </Link>
            {t({
              sv: " på kontaktuppgifterna ovan.",
              en: " using the details above.",
            })}
          </p>
        </Section>

        <Section
          title={{
            sv: "Uppdateringar av policyn",
            en: "Updates to this policy",
          }}
          delay={480}
        >
          <p>
            {t({
              sv: "Denna integritetspolicy kan komma att uppdateras vid behov. Senaste ändringen gjordes 14 juli 2026.",
              en: "This privacy policy may be updated when necessary. Last updated 14 July 2026.",
            })}
          </p>
        </Section>
      </div>
    </div>
  );
}
