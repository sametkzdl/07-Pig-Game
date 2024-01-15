'use strict';

const newGame = document.querySelector('.newgame');
const rollDice = document.querySelector('.rolldice');
const hold = document.querySelector('.hold');
const options = document.querySelector('.options');
const diceImg = document.querySelector('.dice');
//--------------------------------------
const potencialScoreEl = document.querySelector('.potancial-score');
const totalScoreEl = document.querySelector('.total-score');
//----------------------------------------
const potencialScoreEl2 = document.querySelector('.potancial-score2');
const totalScoreEl2 = document.querySelector('.total-score2');
//------------------------------------
let generateRandomNumber = () => Math.trunc(Math.random() * 6) + 1;

let randomNumber = generateRandomNumber();
// ---------------     roll dice button -------------
let potencialScore = 0;
let totalScore = 0;
let totalScore2 = 0;

function (player1,player2) {
    if (randomNumber === 1) {
        
    }
}

rollDice.addEventListener('click', function () {
  diceImg.classList.remove('hidden');
  randomNumber = generateRandomNumber();
  console.log(randomNumber);

  if (randomNumber === 1) {
    randomNumber = potencialScore = 0;
    diceImg.src = 'dice-1.png';
  } else {
    potencialScore = potencialScore + randomNumber;
  }

  potencialScoreEl.innerHTML = potencialScore;

  if (randomNumber === 2) {
    diceImg.src = 'dice-2.png';
  } else if (randomNumber === 3) {
    diceImg.src = 'dice-3.png';
  } else if (randomNumber === 4) {
    diceImg.src = 'dice-4.png';
  } else if (randomNumber === 5) {
    diceImg.src = 'dice-5.png';
  } else if (randomNumber === 6) {
    diceImg.src = 'dice-6.png';
  }

  console.log('potencialScore', potencialScore);
});

// ----------- hold button ------------

hold.addEventListener('click', function () {
  totalScore = totalScore + potencialScore;
  totalScoreEl.innerHTML = totalScore;
  potencialScoreEl.innerHTML = 0;
  potencialScore = 0;

  if (totalScore >= 100) {
    document.querySelector('.side').style.cssText = `
  background-color: #2f2f2f`;
  }
});

console.log(randomNumber);
