````text
Mål
---
Skapa en enkel men utförlig integritetspolicy för EXSE AB:s webbplats, på svenska och engelska, och länka till den i sidfoten. Samtidigt ge ett tydligt besked om cookiebanner.

Cookiebanner – bedömning
------------------------
En cookiebanner behövs normalt bara om sidan sätter cookies eller liknande spårning som inte är strikt nödvändig (t.ex. analytics, marknadsföringspixlar, inbäddade sociala medier). Här används endast Google Search Console för verifiering/indexering, vilket inte sätter någon cookie på besökaren. Inga kontaktformulär, analytics eller tredjepartsspårare finns. Därför behövs ingen cookiebanner i nuläget. Integritetspolicyn ska ändå förklara detta tydligt.

Plan
----
1. Skapa ny sida `src/routes/integritetspolicy.tsx`
   - Route: `/integritetspolicy`
   - Innehåll styrs av befintligt `useT()` så att svenska/engelska växlas med språkknappen
   - Sektioner:
     * Intro: vem som ansvarar för sidan
     * Vilka personuppgifter som samlas in (inga via formulär; endast tekniska serverloggar)
     * Cookies och lokal lagring (förklara att nödvändig drift kan kräva minimal teknik, men att ingen spårning sker)
     * Tredjepartstjänster (Google Search Console enbart för verifiering)
     * Syfte och rättslig grund för eventuella loggar
     * Dina rättigheter enligt GDPR (t.ex. rätt till information, rättelse, radering)
     * Kontaktuppgifter för frågor
   - Lägg till `head()` med unik title, description, canonical och og:url

2. Uppdatera `src/components/SiteFooter.tsx`
   - Lägg till en rad under "Sidor" eller en separat rad med länk till `/integritetspolicy`
   - Texten ska vara på båda språken: "Integritetspolicy" / "Privacy policy"

3. Uppdatera `src/routes/sitemap[.]xml.ts`
   - Lägg till `/integritetspolicy` i sitemap-listan

4. Kvalitetskontroll
   - Bygg projektet (`vite build` eller motsvarande) för att säkerställa att den nya routen registreras och att inga importer saknas
   - Kontrollera att footerns länk fungerar och att innehållet växlar språk korrekt

Tekniska detaljer
-----------------
- Följer befintlig TanStack Start-filstruktur (`src/routes/*.tsx`) och `createFileRoute`
- Återanvänder `useT()` från `src/i18n/LanguageContext.tsx` för tvåspråkigt innehåll
- Ingen ny backend eller databas behövs; sidan är statisk innehåll
- Inga nya beroenden

Resultat
--------
- Besökare kan nå `/integritetspolicy` från footern
- Sidan finns på svenska och engelska
- Tydlig information om att ingen personlig data samlas in och att ingen cookiebanner behövs
- Förbättrad SEO/sitemap med den nya sidan
````