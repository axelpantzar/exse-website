# Mer liv via kontrast och scroll-animationer

Behåll färgpaletten (varm off-white + koppar). Ge sidan liv genom starkare kontrast mellan sektioner och scroll-animationer som avslöjar innehållet när det kommer in i vyn. Byt även rubriken på "Om EXSE".

## Rubrikbyte

I `src/routes/index.tsx` byts h2 i About-sektionen från "Om EXSE" tillbaka till **"Erfarenhet som gör skillnad i hela återvinningskedjan"** (SV) / "Experience that makes a difference across the recycling chain" (EN).

## Kontrast mellan sektioner

Idag är nästan varje yta samma off-white med tunn border. Vi växlar visuellt tunga och lätta sektioner så flödet får rytm — utan att införa nya färger:

- Hero — off-white (som nu).
- Stats — invertera: mörk `bg-foreground` med off-white siffror och koppar-accent på enheten. Blir sidans första "punch".
- Om EXSE — off-white (som nu), med den nya rubriken.
- Vad vi gör — service-korten får tydligare djup: tjockare border, större koppar-numrering, `shadow` vid hover, lyft `-translate-y-1`.
- Certifieringar — mörk `bg-foreground` sektion, certifikaten på mörk yta för stark kontrast mitt på sidan.
- Miljö & Excellent Floorball-korten — behåll vita kort, men lägg det ena i mörk variant så duon blir en ljus + en mörk istället för två identiskt ljusa.

Miljö-sidan och sport-sidan får samma behandling: CTA-blocket på miljö är redan mörkt (`bg-primary`), vi lägger till samma mörka behandling på "Analysanläggningen i Arboga"-blocket så att sidan får minst en mörk paus.

## Scroll-animationer

Använd inbyggda Tailwind-keyframes (`animate-fade-in`, `animate-scale-in`) tillsammans med en liten återanvändbar `Reveal`-wrapper baserad på `IntersectionObserver` (samma mönster som `CountUp` redan använder — ingen ny dependency).

`src/components/Reveal.tsx`:
- Props: `as`, `delay` (ms), `className`, `children`.
- Startar med `opacity-0 translate-y-4`.
- När elementet skär vyn (threshold 0.15, `once: true`) togglas `animate-fade-in` på och slut-state blir `opacity-100 translate-y-0`.
- Respekterar `prefers-reduced-motion` genom att direkt sätta slut-state utan animation.

Appliceras på:
- Hero-rubrik, hero-underrubrik, hero-knappar (staggered delays 0, 120, 240 ms).
- Stats-sektionen som helhet (fade+scale-in, CountUp triggas som idag när den blir synlig).
- Varje kort i "Vad vi gör" med stagger 0/120/240 ms.
- Certifikat-raden med stagger 60 ms per logga.
- De två parade korten (Miljö + Floorball) med stagger.
- Alla h2:or och första stycken på miljö-, sport- och kontakt-sidorna.
- Kontakt-personkorten med kort stagger.

## Interaktions-detaljer

- Hover-lyft på alla kort: `transition-transform hover:-translate-y-1 hover:shadow` (inte skala, för premium-känslan).
- Länkar i footer/nav får `story-link` underline-animation.
- Hero-bilden får en långsam zoom-in när den first-time avslöjas (`animate-scale-in` med `duration-700`).

## Filer som ändras/skapas

- **Ny:** `src/components/Reveal.tsx`
- **Ändras:**
  - `src/routes/index.tsx` — rubrikbyte, `Reveal`-wrappers, mörka stats- och certifierings-sektioner, ett mörkt kort i duon.
  - `src/routes/miljo.tsx` — `Reveal`-wrappers, mörk "Analysanläggningen i Arboga"-variant.
  - `src/routes/sport.tsx` — `Reveal`-wrappers.
  - `src/routes/kontakt.tsx` — `Reveal`-wrappers på person-korten.
  - `src/components/Certifications.tsx` — mörk bakgrundsvariant, `Reveal` med stagger.

## Utanför scope

- Ingen ny färgpalett, inga gradients, ingen ny typografi.
- Ingen ny dependency (framer-motion utesluts — vi använder Tailwind + IntersectionObserver).
- Ingen omstuvning av innehåll utöver rubrikbytet.
