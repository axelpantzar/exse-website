## Loading-animation: "Demontering till kopparsfär"

En kreativ intro-loader som spelas första gången en besökare kommer till sidan (per session). En stiliserad gammal enhet (TV/telefon) plockas isär i sina komponenter (skärm, kretskort, kablar, chip, batteri) som flyger ut åt sidorna, kollapsar mot mitten och formas till den kopparfärgade EXSE-sfären från logotypen. Efter ca 1,8s fadar loadern ut och sidan visas.

### Vad byggs

1. **Ny komponent** `src/components/IntroLoader.tsx`
   - Full-screen overlay med sidans warm-off-white bakgrund (`bg-background`), fixed, `z-[100]`.
   - SVG-baserad animation i mitten:
     - **0–600 ms**: Kontur av en gammal TV/enhet ritas upp med kopparfärgad stroke (stroke-dashoffset animation).
     - **600–1200 ms**: Enheten "spricker" — 6–8 delar (skärm-rektangel, kretskortslinjer, kabel-kurva, chip-fyrkanter, batteri-pill) flyger ut åt sidorna med rotation och fade.
     - **1200–1600 ms**: Delarna dras tillbaka mot mitten som partiklar (translate + scale ner) och kollapsar till en punkt.
     - **1600–1800 ms**: EXSE-kopparsfären (`/exse-logo.png`) skalas upp från 0 med en subtil glow/shadow, ordet "EXSE" fadar in under.
   - Overlayen fadar ut (opacity 0, `pointer-events-none`) och avmonteras efter ca 2000 ms totalt.
   - Rörelse-respekt: `prefers-reduced-motion` → hoppa direkt till slutbilden och fada ut på 300 ms.

2. **Sessionslogik**
   - Läs `sessionStorage.getItem('exse-intro-seen')` i en `useEffect` (inte i `useState`-initializer, för att undvika SSR-hydration-mismatch — följer projektets execution-model-regler).
   - Om inget värde: visa loadern, sätt nyckeln när animationen börjar.
   - Om värde finns: rendera inget.
   - Initialt state renderar `null` → matchar SSR-outputen, ingen hydration-mismatch.

3. **Montering**
   - Lägg till `<IntroLoader />` i `src/routes/__root.tsx` innanför `RootComponent`, ovanför `<SiteNav />` och `<Outlet />`.
   - Ingen påverkan på övriga sidor eller routing.

### Teknisk sektion

- Ren React + Tailwind + CSS keyframes (inga nya paket). Animationerna definieras inline via `style={{ animation: '...' }}` eller nya keyframes tillagda i `src/styles.css` (`intro-draw`, `intro-shatter-1..n`, `intro-collapse`, `intro-sphere-in`, `intro-fade-out`).
- SVG:n är handkodad, ~120 rader, använder befintliga design tokens (`--copper`, `--foreground`).
- Ingen bildgenerering behövs — allt är vektor + befintlig `/exse-logo.png`.
- Sessions-flaggan sätts endast client-side, så SSR-outputen är alltid tom overlay-container.
- Overlayen har `aria-hidden="true"` och `role="status"` med visually-hidden text "Laddar EXSE" för skärmläsare.

### Vad ändras inte

- Ingen ändring av route-struktur, i18n, SEO-metadata, eller befintliga komponenter utöver att `__root.tsx` importerar och renderar loadern.
