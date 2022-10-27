'use strict';

let score = 20;
let highscore = 0;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let realNumber = Math.trunc(Math.random() * 20 + 1);
console.log(realNumber);

//CHECK BUTTON - WHAT TO DO ON CLICK
btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.lelseog(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫NO NUMBER ENTERED';
  }
  //guess matches with yours
  else if (guess === realNumber) {
    document.querySelector('.message').textContent = 'YAYY YOU WIN!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.realNumber').style.width = '30rem';
    document.querySelector('.realNumber').textContent = realNumber;
    //checking for high score
    if (score > highscore) {
      highscore = score;
      // console.log(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess is too high
  else if (guess > realNumber) {
    document.querySelector('body').style.backgroundColor = 'red';
    if (score > 1) {
      document.querySelector('.message').textContent = 'NUMBER IS TOO BIG';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      score = 0;
    }
  }
  //guess is to low
  else if (guess < realNumber) {
    document.querySelector('body').style.backgroundColor = 'red';
    if (score > 1) {
      document.querySelector('.message').textContent = 'NUMBER IS TOO SMALL';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      score = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  document.querySelector('.realNumber').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  realNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(realNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.realNumber').style.width = '15rem';
});
