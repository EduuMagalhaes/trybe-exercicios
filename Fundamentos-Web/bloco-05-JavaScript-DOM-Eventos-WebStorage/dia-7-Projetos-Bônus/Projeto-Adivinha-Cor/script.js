let colorWin = '';
let score = 0;
function generateRandomNumber() {
  const rgb = [];
  for (let i = 0; i < 3; i += 1) {
    rgb[i] = Math.floor(Math.random() * 255) + 1;
  }
  return rgb;
}

function generateColorsGame() {
  const colorsGame = [];
  for (let i = 0; i < 6; i += 1) {
    colorsGame.push(generateRandomNumber());
  }
  return colorsGame;
}

function transformStringRGB(color) {
  const sColors = [];
  for (let i = 0; i < 6; i += 1) {
    sColors.push(`(${color[i][0]}, ${color[i][1]}, ${color[i][2]})`);
  }
  return sColors;
}

function setCorrectColor(colorsGame) {
  colorWin = colorsGame[Math.floor(Math.random() * 5) + 1];
  return colorWin;
}

function applyCorrectColor(string) {
  const elementP = document.querySelector('#rgb-color');
  elementP.innerHTML = string;
}

function createCirclesColors(colorsGame) {
  const elementSection = document.querySelector('#colors');
  for (let i = 0; i < 6; i += 1) {
    const elementSpan = document.createElement('span');
    elementSpan.className = 'ball';
    elementSpan.style.backgroundColor = `rgb${colorsGame[i]}`;
    elementSection.appendChild(elementSpan);
  }
}

function winGame() {
  const elementP = document.querySelector('#answer');
  elementP.innerHTML = 'Acertou!';
  score += 3;
}

function loseGame() {
  const elementP = document.querySelector('#answer');
  elementP.innerHTML = 'Errou! Tente novamente!';
}

function checkCorrector(event) {
  const element = event.target.style.backgroundColor;
  if (element === `rgb${colorWin}`) {
    winGame();
  } else {
    loseGame();
  }
  document.querySelector('#score').innerHTML = score;
}

function listenerColors() {
  const elementsSpans = document.querySelectorAll('span');
  for (let i = 0; i < 6; i += 1) {
    elementsSpans[i].addEventListener('click', checkCorrector);
  }
}

function removeColors() {
  const elementsSpans = document.querySelectorAll('span');
  const elementSection = document.querySelector('#colors');
  for (let i = 0; i < elementsSpans.length; i += 1) {
    elementSection.removeChild(elementsSpans[i]);
  }
}

function newresetGame() {
  const colorsGame = transformStringRGB(generateColorsGame());
  const correctColor = setCorrectColor(colorsGame);
  applyCorrectColor(correctColor);
  createCirclesColors(colorsGame);
  listenerColors();
}

function resetGame() {
  const elementP = document.querySelector('#answer');
  elementP.innerHTML = 'Escolha uma cor';
  removeColors();
  newresetGame();
}

function listenerButton() {
  const elementButton = document.querySelector('#reset-game');
  elementButton.addEventListener('click', resetGame);
}

function newGame() {
  const colorsGame = transformStringRGB(generateColorsGame());
  const correctColor = setCorrectColor(colorsGame);
  applyCorrectColor(correctColor);
  createCirclesColors(colorsGame);
  listenerColors();
  listenerButton();
}

newGame();
