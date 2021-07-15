// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere"));
console.log("numero di chilometri da percorrere " + kmDaPercorrere);

var etaPasseggero = parseInt(prompt("inserisci quanti anni hai"));
console.log("età del passeggero " + etaPasseggero);

// il prezzo del biglietto è definito in base ai km (0.21 € al km).
var euroAlKm = 0.21;

// con queste informazioni calcolare il prezzo totale del viaggio.
var prezzoDelViaggio = kmDaPercorrere * euroAlKm;
console.log("prezzo del biglietto senza sconti applicati: € " + prezzoDelViaggio);

// con massimo due decimali, per indicare centesimi.
prezzoDelViaggio = Math.round(prezzoDelViaggio * 100) / 100;
console.log("prezzo arrotondato a due cifre decimali: € " + prezzoDelViaggio);

// va applicato uno sconto del 20% per i minorenni.
var scontoMinorenni = 20;

// va applicato uno sconto del 40% per gli over 65.
var scontoOver65 = 40;

// output del prezzo finale.
if (etaPasseggero < 18) {

    var prezzoBigliettoMinorenni = prezzoDelViaggio - ((prezzoDelViaggio * scontoMinorenni) / 100);
    console.log("prezzo del biglietto con sconto minorenni applicato: € " + prezzoBigliettoMinorenni)

    // con massimo due decimali, per indicare centesimi.
    prezzoBigliettoMinorenni = Math.round(prezzoBigliettoMinorenni * 100) / 100;
    console.log("prezzo arrotondato a due cifre decimali: € " + prezzoBigliettoMinorenni)

} else if (etaPasseggero > 65) {

    var prezzoBigliettoOver65 = prezzoDelViaggio - ((prezzoDelViaggio * scontoOver65) / 100);
    console.log("prezzo del biglietto con sconto over 65 applicato: € " + prezzoBigliettoOver65)

    // con massimo due decimali, per indicare centesimi.
    prezzoBigliettoOver65 = Math.round(prezzoBigliettoOver65 * 100) / 100;
    console.log("prezzo arrotondato a due cifre decimali: € " + prezzoBigliettoOver65)

}


