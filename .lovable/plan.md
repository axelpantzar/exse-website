## Ändringar

### 1. Kontaktsidan (`src/routes/kontakt.tsx`)
- Lägg till EXSE AB:s växelnummer **019-12 07 20** på Örebro-kortet (mobilnummer visas inte där, bara i personallistan).
- Uppdatera personallistan enligt dokumentet:
  - **Haidar Ali**: titel ändras till "RepTool & Statistiksamordnare, Arboga".
  - Lägg till **Erik Olsson Wennlöf** – Ansvarig Testcontroller, Arboga (endast e-post: erik@exse.se).
  - Lägg till **Conny Lassila** – Anläggningsansvarig och miljösamordnare, Arboga (endast e-post: conny@exse.se).
- Ny sektion "Övriga anställda" under personkorten med namn och roll (inga kontaktuppgifter):
  - Mudher Flaih – Sorteringsförman, Arboga
  - Tewelde Habteab – Svets & reparation, Arboga
  - Saban Karamani – Testtekniker, Arboga
  - Anton Hertze – Testtekniker, Arboga
- Uppdatera JSON-LD `telephone` för Örebro-kontoret till `+46-19-12-07-20`.

### 2. Miljösidan tidslinje (`src/routes/miljo.tsx`)
Ersätt rubrik och steg med kundens exakta struktur:
- Ny rubrik: **"Från insamlad produkt till analyserad data"** (nuvarande: "Från insamling till end of waste").
- Reducera från 5 till 4 steg:
  1. **Registrering & sortering** – "Inkommande elektronik registreras, vägs och klassificeras utifrån produkttyp och innehåll."
  2. **Demontering & analys** – "Utvalda produkter demonteras och delas upp i komponenter för fördjupad analys. Specifika delar undersöks för att fastställa material- och innehållsdata."
  3. **Datainsamling** – "Resultaten dokumenteras systematiskt och används som underlag för nationell statistik och uppföljning."
  4. **Vidare flöde** – "Farligt avfall skickas till godkända mottagare, medan resterande material går vidare till certifierade återvinnare för fortsatt behandling."
- Engelska översättningar uppdateras parallellt.

### 3. CTA-text på miljösidan (`src/routes/miljo.tsx`)
Byt rubriken i den mörka CTA-boxen längst ned från "Vill du veta hur vi kan hantera ert material?" till **"Vill du veta mer om vårt arbete?"** (för att signalera seriositet, inte kundvärvning). Engelska: "Want to know more about our work?"

### 4. Ny sektion: Kvalitets- och miljöpolicy
Lägg till en ny sektion på miljösidan (före CTA:n) med rubrik **"Vår kvalitets- och miljöpolicy"** och exakt den text kunden angav:

> Exse arbetar på uppdrag av externa verksamhetsutövare med statistik, revisioner, sortering, analyser av elektriska & elektroniska produkter, svetsning samt genom utveckling av datasystem.
>
> I all vår verksamhet arbetar vi aktivt med kvalitets- och miljöfrågor. Exse ska tillhandahålla produkter och tjänster som väl motsvarar uppdragsgivarens krav och förväntningar. Vidare ska Exse arbeta med kvalitet och miljömedvetenhet genom kompetens och utbildning i samtliga delar av verksamheten.
>
> **Detta gör vi genom att:**
> - Ständigt arbeta med att uppfylla de legala och andra bindande krav som ställs på vår verksamhet.
> - Utföra våra uppgifter med hög kvalitets- och miljömedvetenhet, vårt arbete präglas av kompetens, vilket medför en trygghet för våra kunder.
> - Påverka våra leverantörer och kunder att aktivt bedriva kvalitets- och miljöarbete.
> - Vår verksamhets kvalitets- och miljöarbete är under ständig förbättring och vår policy och våra mål ska årligen utvärderas.
> - För uppdrag där EXSE verkar inom områden som omfattas av producentansvar för el utrustning ska verksamheten bedrivas i linje med El-Kretsens gällande policyer och riktlinjer, i den utsträckning de är tillämpliga för uppdraget.

Engelsk översättning läggs till parallellt. Sektionen använder samma Reveal-mönster som resten av sidan (rubrik + brödtext + punktlista, ingen kort-container så det smälter in i sidflödet).

### Ej ändrat
- Övriga sidor (start, sport, integritetspolicy) rörs inte.
- Färgpalett, layoutstruktur, animationer och komponentbibliotek bevaras.
