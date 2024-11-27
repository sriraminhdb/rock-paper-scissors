document.addEventListener("DOMContentLoaded", () => {

    function getHumanChoice() {
        return new Promise((resolve) => {
            const btn1 = document.getElementById("rock");
            btn1.addEventListener("click", () => resolve("ROCK"));

            const btn2 = document.getElementById("paper");
            btn2.addEventListener("click", () => resolve("PAPER"));

            const btn3 = document.getElementById("scissors");
            btn3.addEventListener("click", () => resolve("SCISSORS"));
        });
    }

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let array = ['ROCK', 'PAPER', 'SCISSORS'];
        let result = array[Math.floor(Math.random() * array.length)];
        return result;
    }

    
    function updateInfo(round, humanChoice, computerChoice) {
            document.getElementById("round").textContent = round;
            document.getElementById("user").textContent = humanChoice;
            document.getElementById("computer").textContent = computerChoice;
            document.getElementById("userScore").textContent = humanScore;
            document.getElementById("computerScore").textContent = computerScore;
    }

    async function playRound () {
        for (let i = 1; i < 6; i++) {
            const humanChoice = await getHumanChoice();
            const computerChoice = getComputerChoice();

            if ((humanChoice == 'ROCK' && computerChoice == 'SCISSORS') || 
            (humanChoice == 'PAPER' && computerChoice == 'ROCK') ||
            (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')) humanScore += 1;
    
            else if ((humanChoice == 'ROCK' && computerChoice == 'PAPER') || 
            (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') ||
            (humanChoice == 'SCISSORS' && computerChoice == 'ROCK')) computerScore += 1;
    
            else {
            }
            updateInfo(i, humanChoice, computerChoice);
        }
        if (humanScore > computerScore) document.getElementById("declareWinner").textContent = "You Win!";
        else if (humanScore < computerScore) document.getElementById("declareWinner").textContent = "Computer Wins!";
        else document.getElementById("declareWinner").textContent = "It's a draw!";    
    }

    function newGame() {
        humanScore = 0;
        computerScore = 0;
        updateInfo(0, "", "");
        document.getElementById("declareWinner").textContent = "";
        playRound();
    }

    playRound();

    const newGameBtn = document.getElementById("restart");
    newGameBtn.addEventListener("click", () => newGame());
});
