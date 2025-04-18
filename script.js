function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").trim().toLowerCase();
    return choice;
}

// Global score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Final Results:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();
