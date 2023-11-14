
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    looses: 0,
    ties: 0
};
updateScoreElement();

function pickComputerMove() {

    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 0 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 0 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;

}
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Your score is: \n
     wins : ${score.wins}    Losses : ${score.looses}    Ties : ${score.ties}`;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You loose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You loose';
        }
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You loose';
        } else if (computerMove === 'scissors') {
            result = 'Yosu win';
        }
    }
    if (result === 'You win') {
        score.wins=score.wins+1;
    } else if (result === 'You loose') {
        score.looses++;
    } else if (result === 'Tie') {
        score.ties++;
    }
    
    localStorage.setItem(score, JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-compSelection').innerHTML=`You <img src="emojies/${playerMove}.png"></img>`;
    document.querySelector('.js-yourSelection').innerHTML=`<img src="emojies/${computerMove}.png"></img> Computer`;
    document.querySelector('.js-result').innerHTML =`Round result: `+ result ;
    
}

var tooltipVisible = false;

    function toggleTooltip() {
        var tooltip = document.getElementById('myTooltip');
        tooltip.style.visibility = tooltipVisible ? 'hidden' : 'visible';
        tooltipVisible = !tooltipVisible;
    }



