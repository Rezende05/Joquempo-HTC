const $buttonStoneMove1 = document.querySelector('.move-stone1');
const $buttonPaperMove1 = document.querySelector('.move-paper1');
const $buttonScissorsMove1 = document.querySelector('.move-scissors1');
const $battlefield1 = document.querySelector('#box-move1');

const $buttonStoneMove2 = document.querySelector('.move-stone2');
const $buttonPaperMove2 = document.querySelector('.move-paper2');
const $buttonScissorsMove2 = document.querySelector('.move-scissors2');
const $battlefield2 = document.querySelector('#box-move2');

function handleMoveStone1() {
  $battlefield1.innerHTML =
    '<img src="./img/stone.png" alt="imagem luva pedra" title="imagem luva pedra">';
}

function handleMovePaper1() {
  $battlefield1.innerHTML =
    '<img src="./img/paper.png" alt="imagem luva papel" title="imagem luva papel">';
}

function handleMoveScissors1() {
  $battlefield1.innerHTML =
    '<img src="./img/scissors.png" alt="imagem luva tesoura" title="imagem luva tesoura">';
}

function handleMoveStone2() {
  $battlefield2.innerHTML =
    '<img src="./img/stone.png" alt="imagem luva pedra" title="imagem luva pedra">';
}

function handleMovePaper2() {
  $battlefield2.innerHTML =
    '<img src="./img/paper.png" alt="imagem luva papel" title="imagem luva papel">';
}

function handleMoveScissors2() {
  $battlefield2.innerHTML =
    '<img src="./img/scissors.png" alt="imagem luva tesoura" title="imagem luva tesoura">';
}

$buttonStoneMove1.addEventListener('click', handleMoveStone1);
$buttonPaperMove1.addEventListener('click', handleMovePaper1);
$buttonScissorsMove1.addEventListener('click', handleMoveScissors1);

$buttonStoneMove2.addEventListener('click', handleMoveStone2);
$buttonPaperMove2.addEventListener('click', handleMovePaper2);
$buttonScissorsMove2.addEventListener('click', handleMoveScissors2);
