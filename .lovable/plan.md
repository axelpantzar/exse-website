
## Bakgrund

Kundens text gör en viktig korrigering: **EXSE återvinner inte själva**. De analyserar, sorterar, dokumenterar och reviderar uttjänt elektronik på uppdrag av **El-Kretsen** – från insamling till "end of waste". Nuvarande sida beskriver EXSE som en återvinnare, vilket behöver skrivas om. Struktur, design, färger, typsnitt, animationer och sidor behålls som de är.

## Vad som ändras (endast text/innehåll)

### 1. Startsidan (`src/routes/index.tsx`)
- **Hero-rubrik** → "Kontroll och analys av elektronikflöden – från insamling till end of waste"
- **Hero-ingress** → omskrivning som betonar sortering, data och kunskap om Sveriges insamlade elektronik (kundens text).
- **About-sektionen** ("En gedigen historia…") → ny rubrik och text som förklarar rollen: analys, inte återvinning. Behåller ändå kort nämnande av 25+ års erfarenhet och sportspåret.
- **Services (01/02/03)** → skrivs om till:
  1. Registrering & sortering
  2. Analys & demontering
  3. Statistik, revision & kontroll
- **Parade kort längst ner**: "Miljö & återvinning"-kortet döps om till "Analys & miljöarbete" med text om deras faktiska roll. Excellent Floorball-kortet behålls oförändrat.

### 2. Miljösidan (`src/routes/miljo.tsx`)
- **Hero-rubrik** → "På uppdrag av El-Kretsen" eller "Analys, inte återvinning" (väljs slutgiltigt vid implementation, håller tonen från kundens text).
- **Ingress** och brödtext skrivs om så det står tydligt att EXSE analyserar och kvalitetssäkrar material för El-Kretsen.
- **Arboga-sektionen** → beskrivs som analysanläggning där produkter registreras, undersöks och demonteras (utan att låta som återvinningsverk).
- **Tidslinjen** uppdateras till kundens fem steg:
  1. Registrering & sortering
  2. Analys
  3. Demontering
  4. Datainsamling
  5. Vidare flöde till godkända återvinnare
- Lägger till kort/sektion om **revision & kontroll** ("från in till end of waste") med kundens fyra punkter.

### 3. Sportsidan (`src/routes/sport.tsx`)
- Ingen förändring i sak. Ev. mindre justering i intro så det inte krockar med den nya positioneringen ("vid sidan av analysverksamheten" istället för "vid sidan av återvinningen").

### 4. Kontaktsidan (`src/routes/kontakt.tsx`)
- **Hero-ingress** → "Vill du veta mer om vårt uppdrag eller hur vi arbetar inom analys av elektronik?" (kundens ton).
- Behåller personer, adresser och vägbeskrivningsknappar.

### 5. Global copy
- **Footer** (`SiteFooter.tsx`) → tagline uppdateras från "återvinningskedjan" till formulering om analys och kontroll av elektronikflöden.
- **`llms.txt`** → uppdateras med samma positionering (analys på uppdrag av El-Kretsen).
- **Meta/OG-taggar** per route: title och description skrivs om så nyckelord speglar analys, kontroll, statistik, El-Kretsen, end of waste – inte "elektronikåtervinning" som huvudsak. Sitemap oförändrad.
- **i18n**: alla ändringar görs både på svenska och engelska via befintliga `t({ sv, en })`-strängar.

## Vad som INTE ändras

- Layout, komponenter, färger, typsnitt, animationer, spacing.
- Sidstruktur och routing.
- Bilder, certifikat-loop, kontaktkort, integritetspolicy, statistiksiffror.
- Excellent Floorball-innehåll (utöver ev. mikrojustering av övergångstext).

## Öppna frågor jag löser vid implementation

- Exakta rubriker där kundens text ger flera alternativ (t.ex. miljösidans hero) väljs så de matchar befintlig visuell hierarki.
- Statistiksiffrorna (25+, 40+, 18+) behålls men "År inom elektronikåtervinning" byts till t.ex. "År inom analys av elektronik".
