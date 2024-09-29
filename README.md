# Movie-Quiz-Daniel
Ved å bruke youtube videoen til GreatStack (https://youtu.be/PBcqGxrr9g8?si=CYHMnyklQQtNOe6S) satte jeg opp quizen på samme måte som han gjorde i videoen sin. 
Quizen består av 10 spørsmål og 4 svaralternativer fra Marvel filmene som jeg har skrevet selv. 
Spørsmålene er tatt fra en array, der jeg kan skrive spørsmålteksten og svaralternativene. Alternativene var satt opp som true - false.
Måten quizen fungerer på: 
En variabel som holder telling på hvilket spørsmål bruker er på. Arrayen har alle spørsmålene lagret og man bruker arrayen til å gi brukeren riktig spørsmål. 
Når brukeren klikker på et av svaralternativene sjekker programmet om svaret er rett eller feil. Hvis feil: vises rett svar ved å markere riktig svar grønt. Feil svar markeres rødt. Er svaret riktig markeres det med grønt. 
For å komme til neste spørsmål må brukeren svare på det aktuelle spørsmålet, dertter kommer det opp en neste - knapp
Når brukeren trykker neste - knapp:
Det forrige spørsmålet og alternativene blir fjernet
Nytt spørsmål og nye svaralternativ kommer opp. 
Dette fortsettes til det ikke er flere spørsmål igjen i arrayen
Da kommer poengsummen opp med en egen array som viser kommentar til poengsummen fra 0 - 10.

I videoen var det vist en del CSS, for å gjøre nettsiden pen. 
Jeg brukte border-radius mye for å få runde hjørner
Jeg ville ha bilder og gif ved spørsmålteksten. Det ble ikke brukt bilder og gif i videoen, så dette fant jeg ut av selv. Jeg syns at quizen virket kjedelig uten bilder. 
Jeg laga en egen array for bilder: questionImg et bilde/gif for hver spørsmål.
Samme variabel som spørsmålarrayen for å gi riktig spørsmål til brukeren. 
Jeg ville ha samme høyde på bildene/gif, for unngå å skrolle på nettsiden, og det ser ryddigere ut med samme størrelse på bilder/gif
Bredden på bildene/gif var autmatisk justert etter høuden
Jeg prøvde meg frem til jeg fant riktig størrelse som passet på nettsiden min på laptopen.
Jeg fant ikke ut helt hvordan jeg skulle fjerne det siste0 bildet når poengsummen ble vist. Det siste bildet på spørsmål 10 ble ikke borte
Ved søking fant jeg ikke noe som fungerte. 
Jeg laga et 1x1 pixel gjennomsiktig bilde i PS (photoshop) og endret bilde på spørsmål 10 til pixelbildet når poengsummen dukket opp.

Neste gang jeg skal lage en quiz vil jeg legge bildene i samme array som spørsmålene. 