playerScore = 0;
computerScore = 0;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scrsBtn = document.querySelector("#scissors");

let result = document.querySelector("#result");
let updatedScore = document.querySelector("#updatedScore");

rockBtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

scrsBtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

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
        result.textContent = `You ${playerStatus}. ${playerCaps} beats ${computerSelection}.`
        console.log(`You ${playerStatus}. ${playerCaps} beats ${computerSelection}.`)
        playerScore++;
        //return 1;
    } else if (playerStatus == "lose") {
        result.textContent = `You ${playerStatus}. ${computerSelection} beats ${playerCaps}.`
        console.log(`You ${playerStatus}. ${computerSelection} beats ${playerCaps}.`)
        computerScore++;
        //return 0;
    } else {
        result.textContent = `You ${playerStatus}. ${computerSelection} ties with ${playerCaps}.`
        console.log(`You ${playerStatus}. ${computerSelection} ties with ${playerCaps}.`)
        //return -1;
    }

    displayScore();
}

function displayScore() {
    updatedScore.textContent = `You: ${playerScore} - Computer: ${computerScore}`
    if (playerScore == 5 || computerScore == 5) {
        let winner = "";
        playerScore == 5 ? winner = "You" : winner = "Computer";
        let winnerP = document.createElement('p');
        winnerP.textContent = `Winner: ${winner}`;
        let parentDiv = document.querySelector(".score");
        parentDiv.appendChild(winnerP);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scrsBtn.disabled = true;
    }
    

}

function game() {


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

function declareWinner() {
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
