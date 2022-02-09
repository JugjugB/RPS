function random(max, min) {
    return Math.floor(Math.random() * (max-min+1) + min);
}
function computerPlay(){
    let randnum = random(3, 1);
    if (randnum === 1) {
        return "Rock";
    }
    else if (randnum === 2) {
        return "Paper";
    }
    else if (randnum === 3) {
        return "Scissors";
    }
}
function playRound(player, computer) {
    let playerSelection = String(player[0].toUpperCase() + player.slice(1));
    let computerSelection = String(computer[0].toUpperCase() + computer.slice(1));
    
    if (((playerSelection == "Rock") && (computerSelection == "Scissors"))
       || ((playerSelection == "Paper") && (computerSelection == "Rock"))
       || ((playerSelection == "Scissors") && (computerSelection == "Paper"))) 
       {
            let message = `You win! ${playerSelection} beats ${computerSelection}`
            result.textContent = message;
            return 1;
       }
    else if (((playerSelection == "Rock") && (computerSelection == "Paper"))
            || ((playerSelection == "Paper") && (computerSelection == "Scissors"))
            || ((playerSelection == "Scissors") && (computerSelection == "Rock"))) 
            {
                let message = `You lose! ${computerSelection} beats ${playerSelection}`
                result.textContent = message;
                return 2;
            }
    else if (playerSelection == computerSelection) {
        let message = "It's a draw!";
        result.textContent = message;
        return 3;
    }

}

const resultdiv = document.querySelector('.results');
const result = document.querySelector('a');

const scorecard = document.querySelector('.scorecard');

const compscorecard = document.querySelector('.compscorecard');
const playerscorecard = document.querySelector('.playerscorecard');
let playerscore = 0;
let computerscore = 0;

const winnerdiv = document.querySelector(".winner");

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let roundscore = playRound(button.id, computerPlay());
        if (roundscore === 1) {
            playerscore += 1;
            if (playerscore === 5) {
                let winnermessage = "You win!"
                winnerdiv.textContent = winnermessage;
                computerscore = 0;
                playerscore = 0;
            }          
            playerscorecard.textContent = playerscore; 
            compscorecard.textContent = computerscore; 
        }
        else if (roundscore === 2) {
            computerscore += 1;
            if (computerscore === 5) {
                let winnermessage = "You lose :(";
                winnerdiv.textContent = winnermessage;
                computerscore = 0;
                playerscore = 0;
            }
            compscorecard.textContent = computerscore;
            playerscorecard.textContent = playerscore
        }
        
    })
    
    
})













