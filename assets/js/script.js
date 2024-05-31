const gameFrame = document.querySelector('.game-frame');

const roundCounterText = document.querySelector('#round-counter');
let roundCounter = 1;

const roundContainer = document.querySelector('.round-winner');
const roundHeader = document.createElement('h3');
const roundPara = document.createElement('p');

const gameScoreContainer = document.querySelector('.game-score');
const playerScoreText = document.querySelector('#player-score-text');
const computerScoreText = document.querySelector('#computer-score-text');

let playerScore = 0;
let computerScore = 0;

function updateStats() {
  roundCounterText.textContent = roundCounter;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
} updateStats();

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3)
  return (random === 0) ? 'rock' 
  : (random === 1) ? 'paper' 
  : (random === 2) ? 'scissors'
  : 'ERROR';
}

function getRoundWinner(playerChoice, computerChoice) {
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
  let roundWinner = getRoundWinner(playerChoice, computerChoice);

  if (roundWinner === 'player win') {
    roundHeader.textContent = 'Round won!';
    roundPara.textContent = `Computer choice: ${computerChoice}.`;
    playerScore++;
    roundCounter++;
    updateStats();
    checkGameStats();
  } else if (roundWinner === 'computer win') {
    roundHeader.textContent = 'Round lost!';
    roundPara.textContent = `Computer choice: ${computerChoice}.`;
    computerScore++;
    roundCounter++;
    updateStats();
    checkGameStats();
  } else {
    roundHeader.textContent = 'Draw!'
    roundPara.textContent = `Computer choice: ${computerChoice}.`;
    updateStats();
  }
  roundContainer.appendChild(roundHeader);
  roundContainer.appendChild(roundPara);
}

const btnContainer = document.querySelector('.buttons')
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnSciss = document.querySelector('#btn-scis');

btnRock.addEventListener("click", () => {playRound('rock');});
btnPaper.addEventListener("click", () => {playRound('paper')});
btnSciss.addEventListener("click", () => {playRound('scissors')});

// Verify every round if anyone has won the game (5 points)
function checkGameStats() {
  if (playerScore === 5) {
    removeUI();
    showWinner('Player');
  } else if (computerScore === 5) {
    removeUI();
    showWinner('Computer');
  }
}

function removeUI() {
  gameScoreContainer.remove();
  roundContainer.remove();
  btnContainer.remove();
}

function showWinner(winner) {
  const gameWinnerContainer = document.createElement('div');
  gameWinnerContainer.setAttribute('class', 'game-winner');
  const gameWinnerHeader = document.createElement('h2');
  gameWinnerHeader.textContent = `${winner} won!`;

  const finalScoreContainer = document.createElement('div');
  finalScoreContainer.setAttribute('class', 'final-score');

  const finalScorePlayerDiv = document.createElement('div');
  const finalScorePlayerHeader = document.createElement('h3');
  const finalScorePlayer = document.createElement('p');
  finalScorePlayerDiv.setAttribute('class', 'final-score-player');
  finalScorePlayerHeader.textContent = 'Player';
  finalScorePlayer.textContent = playerScore;

  const finalScoreTextDiv = document.createElement('div');
  const finalScoreText = document.createElement('p');
  finalScoreTextDiv.setAttribute('class', 'final-score-text');
  finalScoreText.textContent = `Final score`;

  const finalScoreComputerDiv = document.createElement('div');
  const finalScoreComputerHeader = document.createElement('h3');
  const finalScoreComputer = document.createElement('p');
  finalScoreComputerDiv.setAttribute('class', 'final-score-computer');
  finalScoreComputerHeader.textContent = `Computer`;
  finalScoreComputer.textContent = computerScore;

  const playAgainButton = document.createElement('button');
  playAgainButton.textContent = `Play again`;
  playAgainButton.addEventListener('click', () => {location.reload()});

  finalScorePlayerDiv.appendChild(finalScorePlayerHeader);
  finalScorePlayerDiv.appendChild(finalScorePlayer);
  finalScoreTextDiv.appendChild(finalScoreText);
  finalScoreComputerDiv.appendChild(finalScoreComputerHeader);
  finalScoreComputerDiv.appendChild(finalScoreComputer);

  finalScoreContainer.appendChild(finalScorePlayerDiv);
  finalScoreContainer.appendChild(finalScoreTextDiv);
  finalScoreContainer.appendChild(finalScoreComputerDiv);

  gameWinnerContainer.appendChild(gameWinnerHeader);
  gameWinnerContainer.appendChild(finalScoreContainer);
  gameWinnerContainer.appendChild(playAgainButton);

  gameFrame.appendChild(gameWinnerContainer);
}