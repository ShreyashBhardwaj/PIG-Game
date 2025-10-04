'use strict';

/* 
> So the game starts with Player 1
> Player 1 triggers the dice roll
> What ever comes is added to the current score 
> The player can continue to trigger the dice Roll
  and increase the current score but if it hits 1 then Current Score is 0 and Turn goes to Player 2
> Or the Player can just press the HOLD button so what ever the player has in its current score is stored in the actual score
  and the turn changes to other person. 
*/

const diceImagePath = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const diceImage = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

// Player 1
const player1 = document.querySelector('.player--0'); // Section
const player1Score = document.getElementById('score--0'); // Score to be saved when Hold Button is pressed
const player1CurrentScore = document.getElementById('current--0'); // Score when Dice Roll Button is pressed

// Player 2
const player2 = document.querySelector('.player--1'); // Section
const player2Score = document.getElementById('score--1'); // Score to be saved when Hold Button is pressed
const player2CurrentScore = document.getElementById('current--1'); // Score when Dice Roll Button is pressed
let playerTurn = false; // false = player 1 & true = player 2

const diceRoll = () => {
  const randomRoll = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = diceImagePath[randomRoll - 1];
  diceImage.style.opacity = '1';
  return randomRoll;
};

const restart = function () {
  diceImage.style.opacity = '0';
  player1Score.innerHTML = 0;
  player1CurrentScore.innerHTML = 0;
  player2Score.innerHTML = 0;
  player2CurrentScore.innerHTML = 0;
};

restart();

newGame.addEventListener('click', restart);
