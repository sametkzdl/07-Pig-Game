'use strict';

const newGame = document.querySelector('.newgame');
const rollDice = document.querySelector('.rolldice');
const hold = document.querySelector('.hold');
const options = document.querySelector('.options');
const diceImg = document.querySelector('.dice');
//--------------------------------------
const potencialScoreEl1 = document.querySelector('.potancial-score');
const totalScoreEl1 = document.querySelector('.total-score');
//----------------------------------------
const potencialScoreEl2 = document.querySelector('.potancial-score2');
const totalScoreEl2 = document.querySelector('.total-score2');
//------------------------------------
let generateRandomNumber = () => Math.trunc(Math.random() * 6) + 1;

let randomNumber = generateRandomNumber();
// ---------------     roll dice button -------------
let potencialScore = 0;
let totalScore = 0;
let totalscore2 = 0;
let currentPlayer = '1';
let players = [
  { potencialScoreEl: potencialScoreEl1, totalScoreEl: totalScoreEl1 },
  { potencialScoreEl: potencialScoreEl2, totalScoreEl: totalScoreEl2 },
];

rollDice.addEventListener('click', function () {
  diceImg.classList.remove('hidden');
  randomNumber = generateRandomNumber();
  console.log(randomNumber);

  if (randomNumber === 1) {
    randomNumber = potencialScore = 0;
    diceImg.src = 'dice-1.png';
    players[currentPlayer - 1].potencialScoreEl.innerHTML = potencialScore;
    currentPlayer === '1' ? (currentPlayer = '2') : (currentPlayer = '1');
  } else {
    potencialScore = potencialScore + randomNumber;
    players[currentPlayer - 1].potencialScoreEl.innerHTML = potencialScore;
  }

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
  if (currentPlayer === '2') {
    totalScore = totalScore + potencialScore;
    totalScoreEl2.innerHTML = totalScore;
  } else if (currentPlayer === '1') {
    totalscore2 = totalscore2 + potencialScore;
    totalScoreEl1.innerHTML = totalscore2;
  }
  console.log('totalscore', totalScore);
  potencialScore = 0;

  currentPlayer === '1' ? (currentPlayer = '2') : (currentPlayer = '1');
  if (totalScoreEl1.innerHTML >= 100) {
    document.querySelector('.left').style.cssText = `
    background-color: #2f2f2f`;
  } else if (totalScoreEl2.innerHTML >= 100) {
    document.querySelector('.right').style.cssText = `
    background-color: #2f2f2f`;
  }
});

console.log(randomNumber);
