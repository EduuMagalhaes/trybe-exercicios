let inputsPessoais = [['name', 40], ['email', 50], ['cpf', 11], ['endereço', 200], ['cidade', 28]];
let inputsVagas = [['cargo', 40], ['cargodesc', 500]];
let erroNumber = 0;

function createEstados(estados) {
  const estadoSelect = document.querySelector("#estado-select");
  for (let estado of estados) {
    let elementOption = document.createElement('option');
    elementOption.innerText = estado;
    elementOption.value = estado;
    estadoSelect.appendChild(elementOption);
  }
}

function checkInputs(inputs) {
  let msg ='';
  for (let input of inputs) {
    let elementInput = document.querySelector(`[name=${input[0]}]`)
    if (elementInput.value.length > 0 && elementInput.value.length < input[1] + 1) {
      msg += `${input[0]}: ${elementInput.value}  `;
    } else {
      let elementDiv = document.querySelector('#return-div');
      let elementSpan = document.createElement('span');
      elementSpan.innerText = `Valor de ${input[0]} invalido!  `;
      elementSpan.className = 'span-erro';
      elementDiv.appendChild(elementSpan); 
      erroNumber += 1;    
    }
  }
  return msg;
}
function checkTextarea() {
  let msg ='';  
  let elementText = document.querySelector('#resuno-textarea')
    if (elementText.value.length > 0 && elementText.value.length < 1000) {
      msg += `${elementText.name}: ${elementText.value}  `;
    } else {
      let elementDiv = document.querySelector('#return-div');
      let elementSpan = document.createElement('span');
      elementSpan.innerText = `Valor de ${elementText.name} invalido!  `;
      elementSpan.className = 'span-erro';
      elementDiv.appendChild(elementSpan); 
      erroNumber += 1;     
    }  
  return msg;
}
function checkRadio() {
  let msg ='';
  let elementRadio = document.querySelectorAll('.tipo-input')
  if (elementRadio[0].checked == true || elementRadio[1].checked == true) {
    for (let index of elementRadio) {
      if (index.checked == true) {
        msg += `${index.name}: ${index.value}  `;
      }
    }
  } else {
    let elementDiv = document.querySelector('#return-div');
    let elementSpan = document.createElement('span');
    elementSpan.innerText = `Valor de ${elementRadio[0].name} invalido!  `;
    elementSpan.className = 'span-erro';
    elementDiv.appendChild(elementSpan);
    erroNumber += 1; 
  }
  return msg;
}
function checkSelect() {
  let msg ='';  
  let elemtentSelect = document.querySelector('#estado-select');
  if (elemtentSelect.value !== '') {
    msg += `${elemtentSelect.name}: ${elemtentSelect.value}  `;
  } else {
      let elementDiv = document.querySelector('#return-div');
      let elementSpan = document.createElement('span');
      elementSpan.innerText = `Valor de ${elemtentSelect.name} invalido!  `;
      elementSpan.className = 'span-erro';
      elementDiv.appendChild(elementSpan);
      erroNumber += 1; 
  }  
  return msg;
}
function erroDate() {
  let elementDiv = document.querySelector('#return-div');
  let elementSpan = document.createElement('span');
  elementSpan.innerText = `Data Invalida!`;
  elementSpan.className = 'span-erro';
  elementDiv.appendChild(elementSpan);
  erroNumber += 1; 
}

function checkDate() {
  let msg =''; 
  let elementInputDate = document.querySelector('#data-input');
  if (elementInputDate.value !== '') {
    if (/^\d\d\/\d\d\/\d\d\d\d$/.test(elementInputDate.value)) {
      let date = elementInputDate.value.split('/');
      if (date[0] > 0 && date[0] < 31) {
        if (date[1] > 0 && date[1] < 13) {
          if (date[2] > 2021 ) {
            return `${elementInputDate.name}: ${elementInputDate.value}  `;
          }
        }
      }
    }    
  }
  erroDate();  
}
function funcButtonEnviar(event) {
  event.preventDefault();
  funcClearDiv();
  let dados = '';
  dados += checkInputs(inputsPessoais);
  dados += checkSelect();
  dados += checkRadio();
  dados += checkTextarea();
  dados += checkInputs(inputsVagas);
  dados += checkDate();
  if (erroNumber === 0) {
    let elementDiv = document.querySelector('#return-div');
    let elementSpan = document.createElement('span');
    elementSpan.innerText = dados;
    elementSpan.className = 'span-erro';
    elementDiv.appendChild(elementSpan);
  }  
}

function funcClearDiv() {  
  let elementPenDiv = document.querySelectorAll('#return-div span');
  erroNumber = 0;
  for (let span of elementPenDiv) {
    span.parentNode.removeChild(span);    
  }
}

function funcClear() {
  let elementinputs = document.querySelectorAll('input');
  let elementTextarea = document.querySelector('textarea');   
  let elementOption = document.querySelector('#estado-option');  
  elementTextarea.value = '';   
  elementOption.selected = true;  
  for (let input of elementinputs) {
    input.value = '';
    input.checked = false;    
  }  
}

function funcClearLimpar(event) {
  event.preventDefault();
  funcClear();
  funcClearDiv();
}

function buttonEnviarEventListener() {
  let buttonEnviar = document.querySelector("#button-enviar");
  buttonEnviar.addEventListener('click', funcButtonEnviar);
}
function buttonLimparEventListener() {
  let buttonLimpar = document.querySelector("#button-limpar");
  buttonLimpar.addEventListener('click', funcClearLimpar);
}

window.onload = function() {
createEstados(['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']);
buttonEnviarEventListener();
buttonLimparEventListener();
}
