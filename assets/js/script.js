// Init vars
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
const ROUND_COUNTER = document.querySelector("#round-counter");
const PLAYER_SCORE_TEXT = document.querySelector('#player-score');
const COMPUTER_SCORE_TEXT = document.querySelector('#computer-score');

// Init HTML round counter
ROUND_COUNTER.innerHTML = currentRound;

// Random based computer choice between rock, paper and scissors
function getComputerChoice(){
  let randomizer = Math.floor(Math.random() * 3);
  return randomizer == 0 ? "rock"
    : randomizer == 1 ? "paper"
    : "scissors";
}

// Prompt based player choice
function getPlayerChoice(){
  let input = prompt("Choose your weapon (rock, paper or scissors)");
  if (input == null){
    while (input == null){
      input = prompt("Choose your weapon (rock, paper or scissors)");
    }
  } else {input.toLowerCase}
  return input == 'rock' || input == 'paper' || input == 'scissors' ? input
    : "Input error! Try again."
}

// Winner determinant algorithm (yea, hardcoded, what did you expect? It's freakin rock paper scissors.)
function playRound(playerChoice, computerChoice){
  return playerChoice == 'rock' && computerChoice == 'scissors' ? 'player win'
    : playerChoice == 'paper' && computerChoice == 'rock' ? 'player win'
    : playerChoice == 'scissors' && computerChoice == 'paper' ? 'player win'
    : playerChoice == 'rock' && computerChoice == 'rock' ? 'draw'
    : playerChoice == 'paper' && computerChoice == 'paper' ? 'draw'
    : playerChoice == 'scissors' && computerChoice == 'scissors' ? 'draw'
    : playerChoice == 'rock' && computerChoice == 'paper' ? 'computer win'
    : playerChoice == 'paper' && computerChoice == 'scissors' ? 'computer win'
    : playerChoice == 'scissors' && computerChoice == 'rock' ? 'computer win'
    : "Error. Try reloading the page.";
}

// Game loop function, looping 5 "rounds"
function playGame(){
  for(let i = 0; i < 5; i++){
    let winner = playRound(getPlayerChoice(), getComputerChoice());
    if (winner == 'player win'){
      playerScore++;
      console.log(`Player won! Score: player - ${playerScore}, computer - ${computerScore}`);
    } else if (winner == 'computer win') {
      computerScore++;
      console.log(`Computer won! Score: player - ${playerScore}, computer - ${computerScore}`);
    } else {console.log('Draw!')}
    currentRound++;
    ROUND_COUNTER.innerHTML = currentRound;
  }
}