'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function display(message) {document.querySelector('.message').textContent = message;}

function check() {
  const guess = Number(document.querySelector('.guess').value);

//!When there is no input
  if (!guess) {
    display('⛔️ No number!');

    
//! When guess is right
  } else if (guess === secretNumber) {
    display('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

//!When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      display(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  display('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
