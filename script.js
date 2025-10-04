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

const diceImage = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];
const dice = document.querySelector('.dice');

const diceRoll = () => {
  const randomRoll = Math.trunc(Math.random() * 6) + 1;
  dice.src = diceImage[randomRoll - 1];
  return randomRoll;
};

let playerTurn = false; // false = player 1 & true = player 2

const restart = function () {
  //Happens when the New Game is Pressed
};
