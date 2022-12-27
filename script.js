'use strict';
let rand = Math.trunc(Math.random() * 20) + 1;

//for dev
//document.querySelector('.number').textContent = rand

//for tracking score
let score = 20
let highscore = 0

//display message function
function displayMessage(val) {
    document.querySelector('.message').textContent = val
}

document.querySelector('.check').addEventListener('click', function () {
    const guessInput = Number(document.querySelector('.guess').value)
    if (!guessInput) displayMessage(`Please enter a guess`)
    else if (guessInput === rand) {
        displayMessage(`congratulations you won the game🎊`)
        document.querySelector('body').style.backgroundColor = '#00e600'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').style.borderRadius = '46px'
        document.querySelector('.number').textContent = rand

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

    }

    else if (guessInput !== rand) {
        if (score > 1) {
            displayMessage(guessInput > rand ? 'Your guess is too high👠' : 'your guess is too low🪫')
            score--
            document.querySelector('.score').textContent = score

        }
        else {
            displayMessage('you lost the game')
            document.querySelector('.score').textContent = 0
        }
    }

})

document.querySelector('.again').addEventListener('click', function () {
    displayMessage(`Start guessing...`)
    rand = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    //for dev


    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
})

