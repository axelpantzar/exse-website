import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — EXSE AB" },
      {
        name: "description",
        content:
          "Kontakta EXSE AB. Frågor om återvinning, analys eller statistik? Hör av dig till rätt person i teamet.",
      },
      { property: "og:title", content: "Kontakt — EXSE AB" },
      {
        property: "og:description",
        content: "Kontakta rätt person i EXSE-teamet.",
      },
    ],
  }),
  component: KontaktPage,
});

type Person = {
  name: string;
  role: string;
  mobile?: string;
  tel?: string;
  email: string;
};

const people: Person[] = [
  { name: "Christer Olsson", role: "VD", mobile: "+46 76 803 44 00", email: "christer@exse.se" },
  { name: "Haidar Ali", role: "Statistiksamordnare, Arboga", mobile: "+46 76 803 57 87", email: "haidar@exse.se" },
  { name: "Mikael Ahlén", role: "Systemcontroller, Arboga", mobile: "+46 70 965 11 40", email: "mikael@exse.se" },
  { name: "Camilla Nordlund", role: "Teknisk Controller, Arboga", tel: "+46 76 803 69 59", email: "camilla@exse.se" },
  { name: "Sebastian Pettersson", role: "Test- & miljösamordningscontroller, Arboga", tel: "+46 70 757 52 13", email: "sebastian@exse.se" },
  { name: "Doaa Al-Rahmani", role: "Assistent statistiksamordnare, Arboga", email: "doaa@exse.se" },
];

function telHref(v: string) {
  return `tel:${v.replace(/\s+/g, "")}`;
}

function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Kontakta oss
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Har du frågor om återvinning, analys eller statistik? Hör av dig
            till rätt person i teamet nedan.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <article
            key={p.email}
            className="rounded-3xl border border-border/70 bg-card p-8"
          >
            <h2 className="font-display text-2xl">{p.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
            <dl className="mt-6 space-y-2 text-sm">
              {p.mobile && (
                <div>
                  <dt className="inline text-muted-foreground">Mobil: </dt>
                  <dd className="inline">
                    <a href={telHref(p.mobile)} className="hover:text-copper">
                      {p.mobile}
                    </a>
                  </dd>
                </div>
              )}
              {p.tel && (
                <div>
                  <dt className="inline text-muted-foreground">Tel: </dt>
                  <dd className="inline">
                    <a href={telHref(p.tel)} className="hover:text-copper">
                      {p.tel}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="inline text-muted-foreground">E-post: </dt>
                <dd className="inline">
                  <a href={`mailto:${p.email}`} className="hover:text-copper">
                    {p.email}
                  </a>
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="mt-24 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-border/70 bg-card p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Besöks- & postadress
          </p>
          <h3 className="mt-4 font-display text-2xl">EXSE AB</h3>
          <address className="mt-3 not-italic text-foreground/80">
            Kyrkvägen 17<br />
            703 75 Örebro
          </address>
        </div>
        <div className="rounded-3xl border border-border/70 bg-card p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            El-Kretsens Analysanläggning
          </p>
          <h3 className="mt-4 font-display text-2xl">Arboga</h3>
          <address className="mt-3 not-italic text-foreground/80">
            Strängen 13<br />
            732 31 Arboga
          </address>
          <p className="mt-4 text-sm">
            <span className="text-muted-foreground">Tel: </span>
            <a href="tel:+460103300080" className="hover:text-copper">
              +46 (0)10-330 00 80
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
