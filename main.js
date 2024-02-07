const $buttonStoneMove1 = document.querySelector('.move-stone1');
const $buttonPaperMove1 = document.querySelector('.move-paper1');
const $buttonScissorsMove1 = document.querySelector('.move-scissors1');
const $battlefield1 = document.querySelector('#box-move1');

const $buttonStoneMove2 = document.querySelector('.move-stone2');
const $buttonPaperMove2 = document.querySelector('.move-paper2');
const $buttonScissorsMove2 = document.querySelector('.move-scissors2');
const $battlefield2 = document.querySelector('#box-move2');

const $printScore1 = document.querySelector('#score1');
const $printScore2 = document.querySelector('#score2');

const $printWinnerName = document.querySelector('.winner-title');

const $buttonReset = document.querySelector('#button-reset');
const $buttonStart = document.querySelector('#button-start');

let movePlayer1 = '';
let movePlayer2 = '';
let player1Score = 0;
let player2Score = 0;
let winner = 0;
let gameStart = false;

function setWinner() {
  if (movePlayer1 == '' || movePlayer2 == '') {
    return;
  }

  if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {
    winner = 2;
  } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {
    winner = 1;
  } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {
    winner = 1;
  } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
    winner = 2;
  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone') {
    winner = 2;
  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
    winner = 1;
  } else if (movePlayer1 == movePlayer2) {
    winner = 3;
  }
}

function addWinnerScore() {
  if (winner == 1) {
    player1Score = player1Score + 1;
  } else if (winner == 2) {
    player2Score = player2Score + 1;
  }
}

function printWinnerScore() {
  $printScore1.innerHTML = player1Score.toString().padStart(2, '0');
  $printScore2.innerHTML = player2Score.toString().padStart(2, '0');
}

function printWinnerName() {
  if (winner == 1) {
    $printWinnerName.innerHTML = 'Jogador 1 venceu';
  }
  if (winner == 2) {
    $printWinnerName.innerHTML = 'Jogador 2 venceu';
  }
  if (winner == 3) {
    $printWinnerName.innerHTML = 'Empatou';
  }
  if (winner == 0) {
    $printWinnerName.innerHTML = 'Jogue';
  }
}

function resetBattlefield() {
  $battlefield1.innerHTML = '';
  $battlefield2.innerHTML = '';
}

function resetMoveBattlefield() {
  movePlayer1 = '';
  movePlayer2 = '';
}

function resetPlayerScore() {
  player1Score = 0;
  player2Score = 0;
}

function handleMoveStone1() {
  if (gameStart == false) return;
  $battlefield1.innerHTML =
    '<img src="./img/stone.png" alt="imagem luva pedra" title="imagem luva pedra">';
  movePlayer1 = 'stone';
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1000);
    resetMoveBattlefield();
    winner = 0;
  }
}

function handleMovePaper1() {
  if (gameStart == false) return;
  $battlefield1.innerHTML =
    '<img src="./img/paper.png" alt="imagem luva papel" title="imagem luva papel">';
  movePlayer1 = 'paper';
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1000);
    resetMoveBattlefield();
    winner = 0;
  }
}

function handleMoveScissors1() {
  if (gameStart == false) return;
  $battlefield1.innerHTML =
    '<img src="./img/scissors.png" alt="imagem luva tesoura" title="imagem luva tesoura">';
  movePlayer1 = 'scissors';
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1000);
    resetMoveBattlefield();
    winner = 0;
  }
}

function handleMoveStone2() {
  if (gameStart == false) return;
  $battlefield2.innerHTML =
    '<img src="./img/stone.png" alt="imagem luva pedra" title="imagem luva pedra">';
  movePlayer2 = 'stone';
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1000);
    resetMoveBattlefield();
    winner = 0;
  }
}

function handleMovePaper2() {
  if (gameStart == false) return;
  $battlefield2.innerHTML =
    '<img src="./img/paper.png" alt="imagem luva papel" title="imagem luva papel">';
  movePlayer2 = 'paper';
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1000);
    resetMoveBattlefield();
    winner = 0;
  }
}

function handleMoveScissors2() {
  if (gameStart == false) return;
  $battlefield2.innerHTML =
    '<img src="./img/scissors.png" alt="imagem luva tesoura" title="imagem luva tesoura">';
  movePlayer2 = 'scissors';
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1000);
    resetMoveBattlefield();
    winner = 0;
  }
}

function buttonReset() {
  resetPlayerScore();
  resetBattlefield();
  resetMoveBattlefield();
  printWinnerScore();
  printWinnerName();
  $buttonStart.textContent = 'Iniciar';
  $buttonStart.classList.remove('ativo');
  $printWinnerName.textContent = 'clique em iniciar';
}

function handleToggleGame() {
  if (gameStart == true) {
    gameStart = false;
    $buttonStart.textContent = 'Iniciar';
    $buttonStart.classList.remove('ativo');
    $printWinnerName.textContent = 'clique em iniciar';
  } else {
    gameStart = true;
    $buttonStart.textContent = 'Pausar';
    $buttonStart.classList.add('ativo');
    $printWinnerName.textContent = 'Jogue';
  }
}

$buttonStoneMove1.addEventListener('click', handleMoveStone1);
$buttonPaperMove1.addEventListener('click', handleMovePaper1);
$buttonScissorsMove1.addEventListener('click', handleMoveScissors1);

$buttonStoneMove2.addEventListener('click', handleMoveStone2);
$buttonPaperMove2.addEventListener('click', handleMovePaper2);
$buttonScissorsMove2.addEventListener('click', handleMoveScissors2);

$buttonReset.addEventListener('click', buttonReset);
$buttonStart.addEventListener('click', handleToggleGame);
