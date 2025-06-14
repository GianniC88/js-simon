/*


Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/

//selezione del DOM ( documenti HTML per modificare il contenuto dell'elemento selezionato (number-list linea 29 file index)
const numberList = document.getElementById("numbers-list");
const countdownEl = document.getElementById("countdown");
const answersFormEl = document.getElementById("answers-form");
//Descrizione: Visualizzare in pagina 5 numeri casuali

//Da lì parte un timer di 30 secondi

//Dopo 30 secondi i numeri scompaiono e appaiono

// invece appaiono 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

/*function generateNumbersList() [funzione per generare una lista di numeri]*/
let numbers = []; //0
while (numbers.length < 5) {
  console.log("hi");
  const numb = Math.ceil(Math.random() * 10);
  if (!numbers.includes(numb)) {
    numbers.push(numb);
  }
}

console.log(numbers);
numberList.innerHTML = numbers;

//timer
let seconds = 3;
const limit = 0;

const timer = setInterval(() => {
  countdownEl.innerText = seconds;
  seconds--;
  console.log(seconds);
  console.log(seconds === 0);

  if (seconds < limit) {
    // stop countdown
    clearInterval(timer);
    // togli la lista di numeri
    numberList.innerText = "";
    // form answers (linea 32 html)
    answersFormEl.classList.remove("d-none");
  }
}, 1000);

const inputsEL = document.querySelectorAll("input");
console.log(inputsEL);

answersFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputsEL);

  //array che salva i valori

  const userGuesses = [];
  for (let i = 0; i < inputsEL.length; i++) {
    const userAnswer = Number(inputsEL[i].value);
  }

  //pubblica quello che c'è nel array

  if (numbers.includes(userAnswer)) {
    userGuesses.push(userAnswer);
  }
  //controllo dei numeri inseriti combaciano con quelli generati

  console.log(userGuesses);
  instructionsEL.innerText = "hai vinto";
  answersFormEl.classList.add("d-none");
});
