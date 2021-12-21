const colors = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'yellow',
  5: 'pink',
  6: 'gray',
  7: 'purple',
  8: 'brown',
  9: 'orange',
  10: 'black',
};
const classColorSelected = 'color selected';

// Requisito 01
function createTitle(string, idName) {
  const headerElement = document.querySelector('header');
  const elementH1 = document.createElement('h1');
  elementH1.id = idName;
  elementH1.innerText = string;
  headerElement.appendChild(elementH1);
}

// Requisito 04/05
function createPixelSquad(range) {
  const sectionElement = document.querySelector('section');
  const elementDiv = document.createElement('div');
  elementDiv.id = 'pixel-board';
  sectionElement.appendChild(elementDiv);
  for (let index = 0; index < range; index += 1) {
    const elementDivLine = document.createElement('div');
    elementDivLine.className = 'line';
    for (let i = 0; i < range; i += 1) {
      const elementDivSquad = document.createElement('div');
      elementDivSquad.className = 'pixel';
      elementDivLine.appendChild(elementDivSquad);
    }
    elementDiv.appendChild(elementDivLine);
  }
}

// Requisito 06
function setColorInitialSelect(colorInitial) {
  const elementsColor1 = document.querySelectorAll('.color');
  for (let i = 0; i < elementsColor1.length; i += 1) {
    if (elementsColor1[i].style.background === colorInitial) {
      elementsColor1[i].className = classColorSelected;
    }
  }
}

// Requisito 07
function resetSelect() {
  const elementsColor = document.querySelectorAll('.color');
  for (let i = 0; i < elementsColor.length; i += 1) {
    if (elementsColor[i].className === classColorSelected) {
      elementsColor[i].className = 'color';
    }
  }
}

function selectColor(event) {
  const elementsColor = event.target;
  resetSelect();
  elementsColor.className = classColorSelected;
}

function listenerColors() {
  const elementsColor = document.querySelectorAll('.color');
  for (let i = 0; i < elementsColor.length; i += 1) {
    elementsColor[i].addEventListener('click', selectColor);
  }
}

// Requisito 08
function printPixel(event) {
  const elementPixel = event.target;
  const elementColorSelected = document.querySelector('.selected');
  elementPixel.style.background = elementColorSelected.style.background;
}

function listenerPixels() {
  const elementspixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < elementspixels.length; i += 1) {
    elementspixels[i].addEventListener('click', printPixel);
  }
}

// Requisito 09
function clearSquads() {
  const elementspixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < elementspixels.length; i += 1) {
    elementspixels[i].style.background = 'white';
  }
}

function btnClear() {
  const sectionElement = document.querySelector('section');
  const elementDiv = document.createElement('div');
  const elementBtn = document.createElement('button');
  elementDiv.className = 'divBtn';
  elementBtn.innerText = 'Limpar';
  elementBtn.id = 'clear-board';
  elementBtn.addEventListener('click', clearSquads);
  sectionElement.appendChild(elementDiv);
  elementDiv.appendChild(elementBtn);
}

// Requisito 10/11
function removeDivSquad() {
  const divSquad = document.querySelector('#pixel-board');
  const sectionElement = document.querySelector('section');
  sectionElement.removeChild(divSquad);
}

function updateDivSquad(numberPixels) {
  removeDivSquad();
  const numberSquads = numberPixels;
  createPixelSquad(numberSquads);
  listenerPixels();
}
function checkParameters(numberSquads) {
  if (numberSquads <= 5) {
    return '<= 5';
  }
  if (numberSquads >= 50) {
    return '>= 50';
  }
}

function changeSquads(input) {
  const numberSquads = parseInt(input.value, 10);
  const parameters = checkParameters(numberSquads);
  switch (parameters) {
  case '<= 5':
    updateDivSquad(5);
    break;
  case '>= 50':
    updateDivSquad(50);
    break;
  default:
    updateDivSquad(numberSquads);
    break;
  }
}

function buttonfunction() {
  const input = document.querySelector('input');
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    changeSquads(input);
  }
}

function elementBtnListener(elementBtn) {
  elementBtn.addEventListener('click', buttonfunction);
}

function creatImput() {
  const sectionElement = document.querySelector('section');
  const elementDiv = document.createElement('div');
  sectionElement.appendChild(elementDiv);
  const elementImput = document.createElement('input');
  elementImput.id = 'board-size';
  elementImput.type = 'number';
  elementImput.min = '1';
  const elementBtn = document.createElement('button');
  elementBtn.id = 'generate-board';
  elementBtn.innerText = 'VQV';
  elementBtnListener(elementBtn);
  elementDiv.appendChild(elementImput);
  elementDiv.appendChild(elementBtn);
}

// Requisito 12
function generationColor(arrayColors, number) {
  let compare = false;
  for (let indexArray = 0; indexArray <= arrayColors.length; indexArray += 1) {
    if (number === arrayColors[indexArray]) {
      compare = true;
    }
  }
  return compare;
}

function randomColor() {
  const arrayColors = [];
  let compare;
  for (let index = 0; index < 3; index += 1) {
    const number = Math.floor(Math.random() * 9) + 1;
    compare = generationColor(arrayColors, number);
    if (compare === false) {
      arrayColors.push(number);
    } else {
      index -= 1;
    }
  }
  return arrayColors;
}

// Requisito 02/03
function createColors(colorsObjetct) {
  const n = 10;
  const sectionElement = document.querySelector('section');
  const elementDiv = document.createElement('div');
  elementDiv.id = 'color-palette';
  sectionElement.appendChild(elementDiv);
  const elementColor = document.createElement('div');
  elementColor.className = 'color';
  elementColor.style.background = colorsObjetct[n];
  elementDiv.appendChild(elementColor);
  const colorList = randomColor();
  for (let index = 0; index < 3; index += 1) {
    const elementColor1 = document.createElement('div');
    elementColor1.className = 'color';
    elementColor1.style.background = colorsObjetct[colorList[index]];
    elementDiv.appendChild(elementColor1);
  }
}

window.onload = function loadJS() {
  createTitle('Paleta de Cores', 'title');
  createColors(colors);
  creatImput();
  btnClear();
  createPixelSquad(5);
  setColorInitialSelect('black');
  listenerColors();
  listenerPixels();
};
