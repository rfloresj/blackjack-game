let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

// let sumEl = document.querySelector('#sum-el');  // query = ask, question + selector = CSS selector, ask for a selector


function startGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

// CASH OUT!
