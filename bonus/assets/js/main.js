var nome = prompt("Inserisci il tuo nome e cognome:");
console.log(nome);

document.getElementById('nome-cognome').innerHTML = "Buongiorno " + nome;


//chiedo chilometri e salvo in variabile
var chilometri = prompt("Quanti km vuoi percorrere?");
console.log(chilometri);

//chiedo età e salvo in variabile
var eta = prompt("Quanti anni hai?");
console.log(eta);

//calcolo il prezzo del biglietto intero
var intero = chilometri * 0.21;
console.log(intero);

//calcolo il prezzo del biglietto ridotto
var ridotto = (intero - (intero * 20 / 100)).toFixed(2);
console.log(ridotto);

//calcolo il prezzo del biglietto anziani
var anziani = (intero - (intero * 40 / 100)).toFixed(2);
console.log(anziani);

if ((eta >= 18) && (eta <= 65)) {
  document.getElementById('prezzo').innerHTML = "L'importo da pagare è di: " + intero + '€';
} else if (eta < 18) {
  document.getElementById('prezzo').innerHTML = "L'importo da pagare è di: " + ridotto + '€';
} else {
  document.getElementById('prezzo').innerHTML = "L'importo da pagare è di: " + anziani + '€';
}
