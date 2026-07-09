# Recreate exse-ab-website-design.vercel.app

A Swedish 4-page website for EXSE AB (metal recycling + floorball side venture). Premium editorial feel with a floating pill-shaped nav, large serif-free display headings, warm neutral background, and dark/copper photography.

## Pages & routes

- `/` — Home: hero "Här blir skrot till statistik" + stats (40+, 100%, 2) + about + "Vad vi gör" 3-step + hållbarhet CTA + Excellent Floorball teaser
- `/miljo` — Environment: hero + 4 services grid + Arboga analysanläggning section + 4-step återvinningskedja + CTA
- `/sport` — Excellent Floorball: hero + text + external link
- `/kontakt` — Contact: 6 team member cards + two address blocks

Shared: floating rounded nav (logo left, links right), footer.

## Design

- Background: warm off-white `#fcfbf8`
- Text: near-black
- Accent: copper/rust from EXSE logo
- Typography: bold sans display (large), regular sans body — distinctive pairing, not Inter
- Buttons: black pill primary with arrow, outlined pill secondary
- Large rounded image cards (rounded-3xl)
- Numbered step blocks with big muted "01/02/03" markers

## Images

Generate 4 hero images via imagegen (fast tier, jpg under src/assets):
1. Close-up sorted copper/steel scrap metal, premium moody lighting (home hero)
2. Industrial metal recycling sorting facility (miljö hero)
3. Analysis laboratory with metal samples (miljö mid-section)
4. Floorball player in action during a match (sport hero)

Logo: recreate "EXSE AB SPORT · MILJÖ" wordmark as inline SVG with copper sphere accent.

## Technical

- TanStack Start route files: `src/routes/index.tsx`, `miljo.tsx`, `sport.tsx`, `kontakt.tsx`
- Update `__root.tsx`: real meta (title "EXSE AB — Här blir skrot till statistik"), add floating nav + footer wrapping `<Outlet />`
- Each leaf route sets its own `head()` with unique title/description/og
- Update `src/styles.css`: warm background token, copper accent token, add display font via `<link>` in root head (e.g. Instrument Serif or Fraunces for warmth + Geist/Manrope for body — pick a non-generic pair)
- All colors via semantic tokens in styles.css, no hardcoded hex in components
- Replace placeholder home content

## Out of scope

- No backend (contact form uses mailto links like the original)
- No CMS
- English translation — content stays in Swedish
