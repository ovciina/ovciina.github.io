'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highscore = 0;

function wrongGuess(guess) {
    if (score > 1) {
        if (guess === "high") {
            document.querySelector('.message').textContent = '📈 Too High! ';
        } else if (guess === "low") {
            document.querySelector('.message').textContent = '📉 Too Low! ';
        }
        score--
        return document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You lost the game! ';
        return document.querySelector('.score').textContent = 0;
    }
}

// eventlistener for "check" button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    // console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Enter a guess and try again!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess > secretNumber) {
        wrongGuess('high')
    } else if (guess < secretNumber) {
        wrongGuess('low')
    }
})

// eventlistener for "again" button
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
