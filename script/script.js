function getComputerChoice() {
    let array = ['ROCK', 'PAPER', 'SCISSORS'];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}

function getHumanChoice() {
    let humanChoice = "";
    while(true) {
        humanChoice = prompt("Rock, Paper or Scissors");
        humanChoice = humanChoice.toUpperCase();
        if(humanChoice == 'ROCK' || humanChoice == 'PAPER' || humanChoice == 'SCISSORS') break;
        else alert("Invalid Input! Please enter Rock, Paper or Scissors");
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if ((humanChoice == 'ROCK' && computerChoice == 'SCISSORS') || 
            (humanChoice == 'PAPER' && computerChoice == 'ROCK') ||
            (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')) humanScore += 1;
    
        else if ((humanChoice == 'ROCK' && computerChoice == 'PAPER') || 
            (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') ||
            (humanChoice == 'SCISSORS' && computerChoice == 'ROCK')) computerScore += 1;
    
        else {
        }    
    }

    if (humanScore > computerScore) alert("You win!");
    else if (humanScore < computerScore) alert("Computer wins!");
    else alert("It's a draw!");
}

playRound();