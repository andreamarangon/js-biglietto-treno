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
var ridotto = intero - (intero * 20 / 100)
console.log(ridotto);

//calcolo il prezzo del biglietto anziani
var anziani = intero - (intero * 40 / 100)
console.log(anziani);

if ((eta >= 18) && (eta <= 65)) {
  console.log(intero);
} else if (eta < 18) {
  console.log(ridotto);
} else {
  console.log(anziani);
}
