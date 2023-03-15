'use strict';

const highScoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const guess = document.querySelector('.guess');
const page = document.querySelector('body');
const checkBtn = document.querySelector('.check');
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

setHighScore(highScoreEl, highScore);
guessNum = getRandomNum(20);

checkBtn.addEventListener('click', () => {
  if (guess.value) {
    if (Number(guess.value) === guessNum) {
      messageEl.textContent = 'You WON!!!';
      page.style.backgroundColor = 'green';
    } else if (Number(guess.value) > guessNum) {
      messageEl.textContent = 'Too big!';
    } else {
      messageEl.textContent = 'Too small!';
    }
    score -= 1;
    scoreEl.textContent = score;
    if (score === 0) {
      messageEl.textContent = 'You LOOSE!!!';
      page.style.backgroundColor = 'red';
      checkBtn.disabled = 'true';
    }
  } else {
    messageEl.textContent = 'You should choose a number';
  }
});
