

//read other's code 


const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreDiv.textContent = `Player score: ${humanScore} — Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    const resultDiv = document.querySelector("#result");

    if (humanScore > computerScore) {
        resultDiv.textContent += ` 🎉 Final Result: You won the game!`;
    } else {
        resultDiv.textContent += ` 😢 Final Result: You lost the game. Better luck next time!`;
    }

    // Disable buttons
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}

// Event Listeners
document.querySelector('#rock').addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

document.querySelector('#paper').addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

document.querySelector('#scissors').addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});
