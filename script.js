'use strict';
const resetButton = document.querySelector('.again')
const userInput = document.querySelector('.guess')
const checkButton = document.querySelector('.check')
const scoreResult = document.querySelector('.score')
const highScoreDisplay = document.querySelector('.highscore')
const msgDisplay = document.querySelector('.message')
const scoreDisplay = document.querySelector('.number')
const h1 = document.querySelector('h1')


let secreteNumber = Math.trunc(Math.random() * 20) + 1
let userScore = 10;
let highScore = 0;


const displayMessage = function (message) {
    msgDisplay.textContent = message;
}



checkButton.addEventListener('click', function () {
    //when there is no input=================================

    if (!userInput.value) {
        // msgDisplay.textContent = '⛔ No mumber'
        displayMessage('⛔ No mumber')
    }
    //when a player wins ==========================================

    else if (Number(userInput.value) === secreteNumber) {
        // msgDisplay.textContent = ' Welldone!!! you got the correct number 👍'
        displayMessage('🎉 Welldone!!! you got the correct number 👍')
        scoreDisplay.textContent = secreteNumber;
        document.body.style.backgroundColor = '#60b347'
        scoreDisplay.style.width = '30rem'
        scoreDisplay.style.fontSize = '10rem'
        h1.textContent = '🎉CONGRATULATIONS!!!👍'
        if (scoreResult.textContent > highScore) {
            highScore = scoreResult.textContent;
            highScoreDisplay.textContent = highScore;
        }

        //======================REFACTORING========================
        //when input is wrong i.e different from secrete number==========================
    } else if (Number(userInput.value) !== secreteNumber) {
        if (scoreResult.textContent > 1) {
            // msgDisplay.textContent = Number(userInput.value) > secreteNumber ? '📈 Too high' : '📉Too low'
            displayMessage(Number(userInput.value) > secreteNumber ? '📈 Too high' : '📉Too low')
            userScore--;
            scoreResult.textContent = userScore;

        } else {
            // msgDisplay.textContent = '👎Sorry, you lose the game 😣'
            displayMessage('👎Sorry, you lose the game 😣')
            scoreResult.textContent = 0
            document.body.style.backgroundColor = 'red'
            h1.textContent = 'YOU LOSE👎'
        }
    }

    //when a player doesnt win cuz input is higher ===================================

    // else if (Number(userInput.value) > secreteNumber) {
    //     if (scoreResult.textContent > 1) {
    //         msgDisplay.textContent = '📈 Too high'
    //         userScore--;
    //         scoreResult.textContent = userScore;

    //     } else {
    //         msgDisplay.textContent = '👎Sorry, you lose the game 😣'
    //         scoreResult.textContent = 0
    //         document.body.style.backgroundColor = 'red'
    //     }

    //     //when a player doesnt win cuz input is lower ===========================================

    // } else if (Number(userInput.value < secreteNumber)) {
    //     if (scoreResult.textContent > 1) {
    //         msgDisplay.textContent = '📉Too low'
    //         userScore--;
    //         scoreResult.textContent = userScore;
    //     } else {
    //         msgDisplay.textContent = '👎Sorry, you lose the game 😣'
    //         scoreResult.textContent = 0
    //         document.body.style.backgroundColor = 'red'
    //     }
    // }
})

resetButton.addEventListener('click', function () {
    secreteNumber = Math.trunc(Math.random() * 20) + 1
    userScore = 10;
    h1.textContent = 'Guess My Number!';
    userInput.value = '';
    // msgDisplay.textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    scoreResult.textContent = 10;
    document.body.style.backgroundColor = '#222'
    scoreDisplay.textContent = '?'
    scoreDisplay.style.width = '15rem'
    scoreDisplay.style.fontSize = '6rem'

    // if (highScore > scoreResult.textContent) {
    //     highScore = scoreResult.textContent;
    // } else {
    //     highScore = highScore;
    // }
})
