const elementParagraph = document.querySelector('#carta-gerada');

function counter(elementInput) {
  const elementParagraph1 = document.querySelector('#carta-contador');
  const textElement = elementInput.value.split(' ');
  const a1 = textElement.length;
  elementParagraph1.innerHTML = a1;
}

function applyStyle() {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const number = Math.floor(Math.random() * 3) + 1;
  return style[number - 1];
}

function applySize() {
  const size = [' medium', ' big', ' reallybig'];
  const number = Math.floor(Math.random() * 3) + 1;
  return size[number - 1];
}

function applyRotation() {
  const rotation = [' rotateleft', ' rotateright'];
  const number = Math.floor(Math.random() * 2) + 1;
  return rotation[number - 1];
}

function applySlope() {
  const slope = [' skewleft', ' skewright'];
  const number = Math.floor(Math.random() * 2) + 1;
  return slope[number - 1];
}

function applyClass() {
  return applyStyle() + applySize() + applyRotation() + applySlope();
}

function clearParagraaph() {
  const elementsSpans = document.querySelectorAll('span');
  if (elementsSpans.length !== 0) {
    for (let i = 0; i < elementsSpans.length; i += 1) {
      elementParagraph.removeChild(elementsSpans[i]);
    }
  }
}

function checkParameter(elementInput) {
  const textContent = elementInput.value.split(' ');
  let cont = 0;
  for (let i = 0; i < textContent.length; i += 1) {
    if (textContent[i] === '') {
      cont += 1;
    }
  }
  if (elementInput.value === '' || cont === textContent.length) {
    return false;
  }
  return true;
}

function compareArray(arrayNewClass, arrayClassEvent) {
  let n = 0;
  for (let i = 0; i < arrayNewClass.length; i += 1) {
    if (arrayNewClass[i] === arrayClassEvent[i]) {
      n += 1;
    }
  }
  return n;
}

function changeStyle(event) {
  const elementEvent = event;
  const classEvent = elementEvent.target.className;
  let booleanclass = true;
  while (booleanclass) {
    const newClass = applyClass();
    const arrayNewClass = newClass.split(' ');
    const arrayClassEvent = classEvent.split(' ');
    const n = compareArray(arrayNewClass, arrayClassEvent);
    if (n > 0) {
      elementEvent.target.className = newClass;
      booleanclass = false;
    }
  }
}

function listenerSpans() {
  const elementSpans = document.querySelectorAll('span');
  for (let i = 0; i < elementSpans.length; i += 1) {
    elementSpans[i].addEventListener('click', changeStyle);
  }
}

function fillSpans(elementInput) {
  const textContent = elementInput.value.split(' ');
  for (let i = 0; i < textContent.length; i += 1) {
    const elementSpan = document.createElement('span');
    elementSpan.innerText = textContent[i];
    elementSpan.className = applyClass();
    elementParagraph.appendChild(elementSpan);
  }
  counter(elementInput);
  listenerSpans();
}

function createMisteryLetter() {
  const elementInput = document.querySelector('#carta-texto');
  if (checkParameter(elementInput)) {
    clearParagraaph();
    fillSpans(elementInput);
  } else {
    elementParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function listenerButtonCreatLetter() {
  const elementButton = document.querySelector('#criar-carta');
  elementButton.addEventListener('click', createMisteryLetter);
}

window.onload = function loadJs() {
  listenerButtonCreatLetter();
};
