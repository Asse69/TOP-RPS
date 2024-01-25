playerScore = 0;
computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerCaps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    playerStatus = "";
    switch (playerCaps) {
        case 'Rock':
            if (computerSelection == 'Paper') {
                playerStatus = "lose";
            } else if (computerSelection == 'Scissors') {
                playerStatus = "win";
            } else {
                playerStatus = "tie";
            }
            break;
        case 'Paper':
            if (computerSelection == 'Scissors') {
                playerStatus = "lose";
            } else if (computerSelection == 'Rock') {
                playerStatus = "win";
            } else {
                playerStatus = "tie";
            }
            break;
        case 'Scissors':
            if (computerSelection == 'Paper') {
                playerStatus = "win";
            } else if (computerSelection == 'Rock') {
                playerStatus = "lose";
            } else {
                playerStatus = "tie";
            }
    }
    if (playerStatus == "win") {
        console.log(`You ${playerStatus}. ${playerCaps} beats ${computerSelection}.`)
        return 1;
    } else if (playerStatus == "lose") {
        console.log(`You ${playerStatus}. ${computerSelection} beats ${playerCaps}.`)
        return 0;
    } else {
        console.log(`You ${playerStatus}. ${computerSelection} ties with ${playerCaps}.`)
        return -1;
    }
}

function game() {
    for (i = 0; i <= 4; i++) {
        playerChoice = prompt("Choose your weapon!");
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        if (result == 1) {
            playerScore++;
        } else if (result == 0) {
            computerScore++;
        }
        if (result == -1) i--;
        console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log(`You win ${playerScore}-${computerScore}!`);
    } else {
        console.log(`Computer wins ${computerScore} - ${playerScore}!`);
    }
}

function getComputerChoice() {
    choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Something went wrong';
    }
}

game();
