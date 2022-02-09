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

function RPSround(player, computer) {
    let playerSelection = String(player[0].toUpperCase() + player.slice(1));
    let computerSelection = String(computer[0].toUpperCase() + computer.slice(1));
    
    if (((playerSelection == "Rock") && (computerSelection == "Scissors"))
       || ((playerSelection == "Paper") && (computerSelection == "Rock"))
       || ((playerSelection == "Scissors") && (computerSelection == "Paper"))) 
       {
            let message = `You win! ${playerSelection} beats ${computerSelection}`
            console.log(message);
            return 1;
       }
    else if (((playerSelection == "Rock") && (computerSelection == "Paper"))
            || ((playerSelection == "Paper") && (computerSelection == "Scissors"))
            || ((playerSelection == "Scissors") && (computerSelection == "Rock"))) 
            {
                let message = `You lose! ${computerSelection} beats ${playerSelection}`
                console.log(message);
                return 2;
            }
    else if (playerSelection == computerSelection) {
        let message = "It's a draw!";
        console.log(message);
        return 3;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let playerPlay = prompt("What's your play?");
        let result = RPSround(playerPlay, computerPlay());
        if (result === 1) {
            playerScore += 1;
        }
        else if (result === 2) {
            computerScore += 1;
        }
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a draw!")
    }
}

game();