const roundCounterText = document.querySelector('#round-counter')

const statsContainer = document.querySelector('.game-stats')
const statsHeader = document.createElement('h3');
const statsPara = document.createElement('p');

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnSciss = document.querySelector('#btn-scis');

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

function updateStats() {
  roundCounterText.textContent = roundCounter;
}

updateStats();

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3)
  return (random === 0) ? 'rock' 
    : (random === 1) ? 'paper' 
    : (random === 2) ? 'scissors'
    : 'ERROR';
}

function winner(playerChoice, computerChoice) {
  return playerChoice == 'rock' && computerChoice == 'scissors' ? 'player win'
    : playerChoice == 'paper' && computerChoice == 'rock' ? 'player win'
    : playerChoice == 'scissors' && computerChoice == 'paper' ? 'player win'

    : playerChoice == 'rock' && computerChoice == 'rock' ? 'draw'
    : playerChoice == 'paper' && computerChoice == 'paper' ? 'draw'
    : playerChoice == 'scissors' && computerChoice == 'scissors' ? 'draw'

    : playerChoice == 'rock' && computerChoice == 'paper' ? 'computer win'
    : playerChoice == 'paper' && computerChoice == 'scissors' ? 'computer win'
    : playerChoice == 'scissors' && computerChoice == 'rock' ? 'computer win'
    : "ERROR";
}

function playRound(playerChoice){
  let computerChoice = getComputerChoice();
  let roundWinner = winner(playerChoice, computerChoice);

  if (roundWinner === 'player win') {
    statsHeader.textContent = 'Round won!';
    statsPara.textContent = `Computer choice: ${computerChoice}.`;
    playerScore++;
    roundCounter++;
    updateStats();
  } else if (roundWinner === 'computer win') {
    statsHeader.textContent = 'Round lost!';
    statsPara.textContent = `Computer choice: ${computerChoice}.`;
    computerScore++;
    roundCounter++;
    updateStats();
  } else {
    statsHeader.textContent = 'Draw!'
    statsPara.textContent = `Computer choice: ${computerChoice}.`;
    roundCounter++;
    updateStats();
  }
  statsContainer.appendChild(statsHeader);
  statsContainer.appendChild(statsPara);
}

btnRock.addEventListener("click", () => {playRound('rock');});
btnPaper.addEventListener("click", () => {playRound('paper')});
btnSciss.addEventListener("click", () => {playRound('scissors')});