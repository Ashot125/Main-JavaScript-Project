alert("Welcome to the ultimate Rock Paper Scissors challenge!\nPrepare yourself, because today you're going down! 😈");

function computerPlay() {
    let a = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return a[randomIndex];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection;

        while (true) {
            playerSelection = prompt(`Round ${i}: Enter Rock, Paper, or Scissors`);
            if (playerSelection === null) {
                alert("Game cancelled.");
                return; 
            }
            playerSelection = playerSelection.trim();
            if (playerSelection === "") {
                alert("You must enter Rock, Paper, or Scissors!");
            } else {
                break; 
            }
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        alert(result);

        if (result.toLowerCase().startsWith("you win")) {
            playerScore++;
        } else if (result.toLowerCase().startsWith("you lose")) {
            computerScore++;
        }
    }

    alert(`Score: Player ${playerScore} — Computer ${computerScore}`);
    if (playerScore > computerScore) {
        alert("🎉 You won the game!");
    } else if (playerScore < computerScore) {
        alert("😞 You lost the game!");
    } else {
        alert("🤝 The game ended in a tie!");
    }
}


do {
  game();
} while (confirm("Do you want to play again?"));
