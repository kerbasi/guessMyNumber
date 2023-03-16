'use strict';

const highScoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const guess = document.querySelector('.guess');
const page = document.querySelector('body');
const numberEl = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const messageEl = document.querySelector('.message');
let highScore = localStorage.getItem('highScore') || 0;
let guessNum;
let score = 20;

const setHighScore = (el, score) => {
  if (localStorage.getItem('highScore') <= score) {
    localStorage.setItem('highScore', score);
    el.textContent = score;
  }
};

const getRandomNum = range => {
  return Math.floor(Math.random() * range) + 1;
};

const setScore = (scoreEl, score) => {
  scoreEl.textContent = score;
  return score;
};

setHighScore(highScoreEl, highScore);
guessNum = getRandomNum(20);

checkBtn.addEventListener('click', () => {
  const chosenNumber = Number(guess.value);
  if (chosenNumber) {
    if (chosenNumber === guessNum) {
      messageEl.textContent = 'You WON!!!';
      page.style.backgroundColor = 'green';
      numberEl.style.width = '30rem';
      numberEl.textContent = guessNum;
      setHighScore(highScoreEl, score);
    } else if (chosenNumber > guessNum) {
      messageEl.textContent = 'Too big!';
    } else {
      messageEl.textContent = 'Too small!';
    }
    score = setScore(scoreEl, score - 1);
    if (score === 0) {
      messageEl.textContent = 'You LOOSE!!!';
      page.style.backgroundColor = 'red';
      checkBtn.disabled = 'true';
    }
  } else {
    messageEl.textContent = 'You should choose a number';
  }
});

againBtn.addEventListener('click', () => {
  score = score = setScore(scoreEl, 20);
  page.style.backgroundColor = '#222';
  guessNum = getRandomNum(20);
  messageEl.textContent = 'Start guessing...';
  guess.value = '';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
});
