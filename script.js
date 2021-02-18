'use strict';
//defining the handler number outside so that it remains the same and does not change every click
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //When there is no input or 0
    if(!guess) {
        displayMessage('No Number');
    //When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        
        //When the guess is wrong
        } else if(guess !== secretNumber) {
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff471a';
        }
    }
});

//Again button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});



