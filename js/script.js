////////////////////// definizione delle costanti ////////////////////////

const countdownEl = document.getElementById("countdown");
const numbersListEl = document.getElementById("numbers-list");

///// elementi del form

const formEl = document.getElementById("answers-form");
const formControlEl = document.querySelectorAll("form-control");
const btnEl = document.querySelector("btn");
const messageEl = document.getElementById("message");

////////////////////////////////////////////////////////////////////////////
//                         verifica log
console.log(countdownEl, numbersListEl, formEl, btnEl, messageEl);
////////////////////////////////////////////////////////////////////////////

/* 
- inserimento di numeri in un form
- verifica delle risposte
*/

// - generare 5 numeri casuali

function numGenerator() {
  const randomNumber = [];
  for (let i = 0; i < 5; i++) {
    const thisNumber = Math.floor(Math.random() * 50) + 1;
    randomNumber.push(thisNumber);
  }
  return randomNumber;
}

const gameNumbers = numGenerator();

console.log(gameNumbers);

// - far comparire una lista di numeri in sequenza e farli scomparire

setTimeout(showNumbers, 3000);
function showNumbers() {
  numbersListEl.innerText = gameNumbers;
}

setTimeout(hideNumbers, 18000);
function hideNumbers() {
  numbersListEl.classList.add("d-none");
  formEl.classList.remove("d-none");
}

// - inserimento di numeri in un form

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  function getAnswers() {
    const answers = [];
    for (i = 0; i < 5; i++) {
      thisAnswer = formControlEl[i].value;
      answers.push(thisAnswer);
    }
    return answers;
  }

  const playerAnswers = getAnswers();
  console.log(playerAnswers);
});
