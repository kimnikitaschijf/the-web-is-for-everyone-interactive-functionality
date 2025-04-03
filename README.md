# Interactive Functionality - Oncollaboration

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)

## Inhoudsopgave  

- [Beschrijving](#beschrijving)  
- [Gebruik](#gebruik)  
- [Kenmerken](#kenmerken)  
- [Installatie](#installatie)  
- [Bronnen](#bronnen)  
- [Licentie](#licentie)  

## Beschrijving  
Dit project is een online ongeving waar gebruikers (doktoren) webinars kunnen bekijken en reacties kunnen achterlaten. Het is ontwikkeld voor **Oncollaboration** en bevat een aantal nieuwe verbeteringen!  

**Live website:** [The Web Is for Everyone](https://the-web-is-for-everyone-interactive-eet1.onrender.com/)  

### Wat is er nieuw?  
- **Huisstijl aangepast** – De kleurstelling is veranderd van rood naar blauw, in lijn met de huisstijl van een Indonesisch ziekenhuis op verzoek van de opdrachtgever.  
- **Nieuwe detailpagina** – Elke webinar heeft nu een eigen pagina, met een aparte route.  
- **Comment section** – Gebruikers kunnen reacties achterlaten bij webinars, en elke webinar toont alleen de bijbehorende reacties.  
- **Opslag in database** – Reacties worden opgeslagen, zodat ze behouden blijven.  
- **Loading state** – De "Verstuur" knop geeft nu een laadstatus weer bij het verzenden van een reactie.  

**Nieuwe huisstijl**: overzicht & detail pagina<br>

<img width="479" alt="Scherm­afbeelding 2025-04-03 om 16 46 10" src="https://github.com/user-attachments/assets/0abb9716-e884-4b5e-9f81-d7d40b0543ae" />
<img width="477" alt="Scherm­afbeelding 2025-04-03 om 16 50 42" src="https://github.com/user-attachments/assets/d84999b4-cf5e-405e-bb7c-3715916322d5" />

## Gebruik
Gebruikers kunnen via de website een overzicht van beschikbare webinars bekijken en doorklikken naar een detailpagina. Daar kunnen ze reacties achterlaten, die direct zichtbaar worden en worden opgeslagen in de database.  

### Hoe werkt het?  
1. Bezoek de **[live website](https://the-web-is-for-everyone-interactive-eet1.onrender.com/)**
2. Via de navigatie bovenaan, ga naar webinars.
3. Klik op een webinar om de detailpagina te openen.  
4. Lees de beschrijving en bestaande reacties.  
5. Voeg een reactie toe en druk op "Send".  
6. De reactie wordt direct getoond en opgeslagen in de database.  

**Comment posten**: <br>

https://github.com/user-attachments/assets/61fa832f-6445-4fd5-8ebf-328ab381c2bd

## Kenmerken  
Dit project maakt gebruik van:  

- **HTML & CSS**: Voor de basisstructuur en styling.
- **Server.js**: Voor het aanmaken van routes en de POST functie.
- **JavaScript**: Voor de interactieve functies.  
- **Node.js & Express**: Voor de server-side functionaliteit.  
- **Fetch API**: Voor het versturen en ophalen van reacties via een REST API.  

## Code Voorbeelden  

### 1. Comments POSTEN naar de database  
Deze functie zorgt ervoor dat een gebruiker een reactie kan plaatsen. De reactie wordt via een **POST-request** verstuurd naar de server en opgeslagen in de database.  

https://github.com/kimnikitaschijf/the-web-is-for-everyone-interactive-functionality/blob/55c5eec1b2d83af4187683f9b26f356fc3ed136e/server.js#L96-L113

### 2. Loading state op de submit-knop
Deze functie laat de "Send"-knop een laadstatus tonen terwijl de reactie wordt verzonden. Dit wordt getoond aan de gebruiker via de client-side. 

https://github.com/kimnikitaschijf/the-web-is-for-everyone-interactive-functionality/blob/55c5eec1b2d83af4187683f9b26f356fc3ed136e/views/webinar-detail.liquid#L144-L210

### 3. Comments tonen zonder page refresh nadat data is opgehaald
Deze functie controleert of het plaatsen van een comment succesvol was door de serverresponse te controleren. Als het succesvol is, wordt er een bevestiging in de console weergegeven; anders wordt er een foutmelding getoond. Vervolgens voegt de functie `addCommentToDOM()` de nieuwe opmerking toe aan de pagina door deze als een `<p>`-element bovenaan de lijst van bestaande reacties te plaatsen.

https://github.com/kimnikitaschijf/the-web-is-for-everyone-interactive-functionality/blob/55c5eec1b2d83af4187683f9b26f356fc3ed136e/views/webinar-detail.liquid#L212-L238

## Installatie
1. Download en installeer Node.js.
2. Fork deze repository naar je eigen GitHub-account.
3. Clone de repository naar je laptop.
4. Open de repository in VS code.
5. Open de terminal in de map van je project in VS Code.
6. Installeer de benodigde pakketten door het volgende commando in de terminal uit te voeren: npm install
7. Start de server met het commando: npm start Bekijk je project door de lokale host-link die in de terminal verschijnt te openen in je browser.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
