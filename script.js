let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('result-display').innerText = result;
}
