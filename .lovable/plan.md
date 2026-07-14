# Plan: Certifikat, parade kort och språkväxling

## 1. Certifikat på startsidan

Ladda upp de 5 certifikat-bilderna som Lovable-assets (UC Högsta Kreditvärdighet, ISO 9001, ISO 14001, ISO 45001, WEEE/EN 50625-1) och rendera dem i en ny sektion på `/` under "Vad vi gör" och före CTA-sektionen.

- Rubrik: "Certifieringar & kvalitet" (EN: "Certifications & quality")
- Kort textrad som förklarar att EXSE arbetar systematiskt med kvalitet, miljö och arbetsmiljö — omskriven från exse.se:s kvalitets- och miljöpolicy (inte direkt kopierad)
- Layout: 5 logotyper i en luftig rad (grid-cols-2 mobil → grid-cols-5 desktop) på varm off-white bakgrund, `rounded-2xl` container, gråskala + hover→färg, med bildtext under (t.ex. "ISO 9001 — Kvalitet")

## 2. Parade kort: Miljö + Excellent Floorball

Ersätt dagens ensamma "Excellent Floorball"-kort på `/` med två sida-vid-sida-kort med identisk struktur (rubrik → text → pill-knapp):

- **Miljö & återvinning** — kort omskriven text baserad på exse.se ("över 25 år inom elektronikåtervinning, sortering, analys, statistik") → knapp "Läs mer om miljöarbetet" → `/miljo`
- **Excellent Floorball** — nuvarande text → knapp "Till sporten" → `/sport`

Grid: `md:grid-cols-2`, samma `rounded-3xl border bg-card shadow p-10` som floorball-kortet har idag. Den befintliga stora mörka "Hållbarhet är inte ett tillägg"-CTA:n tas bort så vi inte har två miljö-CTA:er efter varandra.

## 3. Språkväxling sv/en

Lättviktig lösning utan router-omskrivning:

- Ny `LanguageContext` (`src/i18n/LanguageContext.tsx`) med `lang: "sv" | "en"`, persist i `localStorage` (läses i `useEffect` för att undvika hydration-mismatch — default `sv` vid SSR)
- Ordbok `src/i18n/dict.ts` med alla strängar för alla 4 rutter + nav/footer, nycklade per sektion. Engelsk text skrivs om fritt utifrån exse.se/en/home (om oss, floorball, miljö) — ingen ordagrann kopia
- `useT()`-hook returnerar `t("home.hero.title")`
- `LanguageToggle`-komponent (SV | EN pill) placeras i `SiteNav` (desktop höger om länkarna, mobil i hamburger-menyn)
- Alla hårdkodade svenska strängar i `index.tsx`, `miljo.tsx`, `sport.tsx`, `kontakt.tsx`, `SiteNav.tsx`, `SiteFooter.tsx` byts mot `t()`-anrop
- `<html lang>` uppdateras via effekt i root-layouten

## Filer som ändras/skapas

- **Nya:** `src/i18n/LanguageContext.tsx`, `src/i18n/dict.ts`, `src/i18n/useT.ts`, `src/components/LanguageToggle.tsx`, `src/components/Certifications.tsx`, 5 asset-JSON:er för certifikaten
- **Ändras:** `src/routes/__root.tsx` (Provider + `<html lang>`), `src/routes/index.tsx` (parade kort + Certifications), `src/routes/miljo.tsx`, `src/routes/sport.tsx`, `src/routes/kontakt.tsx`, `src/components/SiteNav.tsx`, `src/components/SiteFooter.tsx`

## Utanför scope

- Ingen URL-baserad språkroute (`/en/...`) — språkval hanteras i klient-state. Kan läggas till senare om SEO på engelska behövs.
- Ingen ny översättning av bloggposter eller innehåll som inte redan finns på sajten.
