const elementButtonEntrar = document.querySelector('#btn-submit');
const elementButtonEnviar = document.querySelector('#submit-btn');
function listenButton() {
  elementButtonEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayForm = document.querySelector('.trybewarts-login');
    if (arrayForm[0].value === 'tryber@teste.com' && arrayForm[1].value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function disableButton() {
  elementButtonEnviar.disabled = true;
}

function listenCheckbox() {
  const elementInput = document.querySelector('#agreement');
  elementInput.addEventListener('click', () => {
    if (elementInput.checked !== false) {
      elementButtonEnviar.disabled = false;
    } else {
      disableButton();
    }
  });
}

function listenerAddCharacter() {
  const tamanhoTextarea = document.querySelector('textarea');
  tamanhoTextarea.addEventListener('keyup', () => {
    const resultado = tamanhoTextarea.maxLength - tamanhoTextarea.textLength;
    document.querySelector('span').innerText = resultado;
  });
}
function clearForm() {
  const elementsChilds = document.querySelectorAll('form div');
  for (let index = 0; index < elementsChilds.length; index += 1) {
    elementsChilds[index].parentNode.removeChild(elementsChilds[index]);
  }
}

function returnHouse() {
  const options = document.querySelectorAll('#house option');
  for (let index = 0; index < options.length; index += 1) {
    if (options[index].selected === true) {
      return options[index].innerText;
    }
  }
  return '';
}
function returnFamily() {
  const family = document.querySelectorAll('#family-radio input');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
  return '';
}
function returnCheckbox() {
  const checkBoxText = [];
  const checkBox = document.querySelectorAll('#checkbox input');
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked === true) {
      checkBoxText.push(` ${checkBox[index].value}`);
    }
  }
  return checkBoxText;
}
function returnNote() {
  const note = document.querySelectorAll('#note-radio input');
  for (let index = 0; index < note.length; index += 1) {
    if (note[index].checked === true) {
      return note[index].value;
    }
  }
}
function returnData() {
  const data = [];
  data.push(`Nome: ${document.querySelector('#input-name').value} 
                    ${document.querySelector('#input-lastname').value}`);
  data.push(`Email: ${document.querySelector('#input-email').value}`);
  data.push(`Casa: ${returnHouse()}`);
  data.push(`Família: ${returnFamily()}`);
  data.push(`Matérias: ${returnCheckbox()}`);
  data.push(`Avaliação: ${returnNote()}`);
  data.push(`Observações: ${document.querySelector('#textarea').value}`);
  return data;
}
function listenButtonSubmit() {
  elementButtonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    const elementForm = document.querySelector('#evaluation-form');
    const data = returnData();
    clearForm();
    for (let index = 0; index < data.length; index += 1) {
      const elementSpan = document.createElement('span');
      elementSpan.innerText = data[index];
      elementForm.appendChild(elementSpan);
    }
  });
}

window.onload = function loadJS() {
  listenButton();
  disableButton();
  listenCheckbox();
  listenerAddCharacter();
  listenButtonSubmit();
};
