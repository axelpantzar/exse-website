import { createFileRoute } from "@tanstack/react-router";
import { useT } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { Navigation } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | EXSE AB" },
      {
        name: "description",
        content:
          "Kontakta EXSE AB. Frågor om återvinning, analys eller statistik? Hör av dig till rätt person i teamet.",
      },
      { property: "og:title", content: "Kontakt | EXSE AB" },
      {
        property: "og:description",
        content: "Kontakta rätt person i EXSE-teamet.",
      },
      { property: "og:url", content: "https://radiant-rebuild-bot.lovable.app/kontakt" },
    ],
    links: [
      { rel: "canonical", href: "https://radiant-rebuild-bot.lovable.app/kontakt" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EXSE AB",
            telephone: "+46-76-803-44-00",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kyrkvägen 17",
              postalCode: "703 75",
              addressLocality: "Örebro",
              addressCountry: "SE",
            },
            url: "https://radiant-rebuild-bot.lovable.app/kontakt",
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EXSE AB — Arboga",
            telephone: "+46-10-330-00-80",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Strängen 13",
              postalCode: "732 31",
              addressLocality: "Arboga",
              addressCountry: "SE",
            },
            url: "https://radiant-rebuild-bot.lovable.app/kontakt",
          },
        ]),
      },
    ],
  }),

  component: KontaktPage,
});

type Person = {
  name: string;
  roleSv: string;
  roleEn: string;
  mobile?: string;
  tel?: string;
  email: string;
};

const people: Person[] = [
  { name: "Christer Olsson", roleSv: "VD", roleEn: "CEO", mobile: "+46 76 803 44 00", email: "christer@exse.se" },
  { name: "Haidar Ali", roleSv: "Statistiksamordnare, Arboga", roleEn: "Statistics Coordinator, Arboga", mobile: "+46 76 803 57 87", email: "haidar@exse.se" },
  { name: "Mikael Ahlén", roleSv: "Systemcontroller, Arboga", roleEn: "Systems Controller, Arboga", mobile: "+46 70 965 11 40", email: "mikael@exse.se" },
  { name: "Camilla Nordlund", roleSv: "Teknisk Controller, Arboga", roleEn: "Technical Controller, Arboga", tel: "+46 76 803 69 59", email: "camilla@exse.se" },
  { name: "Sebastian Pettersson", roleSv: "Test- & miljösamordningscontroller, Arboga", roleEn: "Test & Environmental Coordination Controller, Arboga", tel: "+46 70 757 52 13", email: "sebastian@exse.se" },
  { name: "Doaa Al-Rahmani", roleSv: "Assistent statistiksamordnare, Arboga", roleEn: "Assistant Statistics Coordinator, Arboga", email: "doaa@exse.se" },
];

function telHref(v: string) {
  return `tel:${v.replace(/\s+/g, "")}`;
}

function directionsHref(address: string) {
  return `geo:0,0?q=${encodeURIComponent(address)}`;
}

function KontaktPage() {
  const t = useT();
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <section className="pt-6 sm:pt-10 md:pt-16">
        <div className="max-w-3xl">
          <Reveal as="h1" className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-8xl lg:text-7xl">
            {t({ sv: "Kontakta oss", en: "Contact us" })}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            {t({
              sv: "Har du frågor om återvinning, analys eller statistik? Hör av dig till rätt person i teamet nedan.",
              en: "Questions about recycling, analysis or statistics? Reach out to the right person on the team below.",
            })}
          </Reveal>
        </div>
      </section>

      <section className="mt-20 grid gap-5 sm:mt-28 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <article
            key={p.email}
            className="rounded-3xl border border-border/70 bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow sm:p-8"
          >
            <h2 className="font-display text-xl sm:text-2xl">{p.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t({ sv: p.roleSv, en: p.roleEn })}
            </p>
            <dl className="mt-5 space-y-2 text-sm sm:mt-6">
              {p.mobile && (
                <div>
                  <dt className="inline text-muted-foreground">
                    {t({ sv: "Mobil: ", en: "Mobile: " })}
                  </dt>
                  <dd className="inline">
                    <a href={telHref(p.mobile)} className="break-all hover:text-copper">
                      {p.mobile}
                    </a>
                  </dd>
                </div>
              )}
              {p.tel && (
                <div>
                  <dt className="inline text-muted-foreground">
                    {t({ sv: "Tel: ", en: "Tel: " })}
                  </dt>
                  <dd className="inline">
                    <a href={telHref(p.tel)} className="break-all hover:text-copper">
                      {p.tel}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="inline text-muted-foreground">
                  {t({ sv: "E-post: ", en: "Email: " })}
                </dt>
                <dd className="inline">
                  <a href={`mailto:${p.email}`} className="break-all hover:text-copper">
                    {p.email}
                  </a>
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </section>


      <section className="mt-28 grid gap-6 sm:mt-36 sm:gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-10">
          <h3 className="font-display text-xl sm:text-2xl">EXSE AB</h3>
          <address className="mt-3 not-italic text-foreground/80">
            Kyrkvägen 17<br />
            703 75 Örebro
          </address>
          <a
            href={directionsHref("Kyrkvägen 17, 703 75 Örebro, Sweden")}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-copper bg-copper px-4 py-2 text-sm font-medium text-white transition hover:bg-copper/90"
          >
            <Navigation className="h-4 w-4" />
            {t({ sv: "Vägbeskrivning", en: "Directions" })}
          </a>
        </div>
        <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-10">
          <h3 className="font-display text-xl sm:text-2xl">Arboga</h3>
          <address className="mt-3 not-italic text-foreground/80">
            Strängen 13<br />
            732 31 Arboga
          </address>
          <p className="mt-4 text-sm">
            <span className="text-muted-foreground">{t({ sv: "Tel: ", en: "Tel: " })}</span>
            <a href="tel:+460103300080" className="hover:text-copper">
              +46 (0)10-330 00 80
            </a>
          </p>
          <a
            href={directionsHref("Strängen 13, 732 31 Arboga, Sweden")}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-copper bg-copper px-4 py-2 text-sm font-medium text-white transition hover:bg-copper/90"
          >
            <Navigation className="h-4 w-4" />
            {t({ sv: "Vägbeskrivning", en: "Directions" })}
          </a>
        </div>
      </section>
    </div>
  );
}
