import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/floorball.jpg";
import { PillAnchor } from "../components/ui/PillButton";

export const Route = createFileRoute("/sport")({
  head: () => ({
    meta: [
      { title: "Sport — Excellent Floorball | EXSE AB" },
      {
        name: "description",
        content:
          "Excellent Floorball — EXSE:s sportprofil inom innebandy med över 40 års engagemang.",
      },
      { property: "og:title", content: "Excellent Floorball — EXSE AB" },
      {
        property: "og:description",
        content: "En egen profil, samma engagemang. Över 40 år inom innebandy.",
      },
    ],
  }),
  component: SportPage,
});

function SportPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Excellent Floorball
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Vid sidan av återvinning och analys driver EXSE en egen sportprofil
            inom innebandy. Det är en separat verksamhetsdel, men ett uttryck
            för samma värderingar: laganda, uthållighet och vilja att prestera.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt="Innebandyspelare i aktion under en match"
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            En egen profil, samma engagemang
          </h2>
        </div>
        <div className="space-y-6 text-lg text-foreground/80 md:col-span-7 md:pt-2">
          <p>
            Excellent Floorball står på egna ben som sportverksamhet, men delar
            EXSE:s grundvärderingar. Vi tror på långsiktigt arbete, tydliga mål
            och glädjen i att utvecklas tillsammans.
          </p>
          <p>
            Med en djup förankring inom sporten innebandy, med över 40 år av
            engagemang och erfarenheter. Vår passion för innebandy har inte
            bara gett oss omfattande erfarenhet utan också en djup förståelse
            för sportens krav och behov. Detta gör oss till en pålitlig partner
            för alla som söker högkvalitativa tjänster inom innebandy.
          </p>
          <p>Besök gärna vår separata hemsida för att läsa mer.</p>
          <div className="pt-2">
            <PillAnchor
              href="http://www.excellentfloorball.com/"
              external
            >
              Besök Excellent Floorball
            </PillAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
