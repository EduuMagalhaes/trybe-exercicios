const elementHeader = document.querySelector('header');
const elementMain = document.querySelector('main');

function createSection(idSection) {
  const elementSection = document.createElement('section');
  elementSection.id = idSection;
  elementMain.appendChild(elementSection);
  return elementSection;
}
function createTitle() {
  const elementH1 = document.createElement('h1');
  elementH1.innerText = 'Minha Lista de Tarefas';
  elementHeader.appendChild(elementH1);
}
function createOperationTitle() {
  const elementSection = createSection('section-title');
  const elementP = document.createElement('p');
  elementP.id = 'funcionamento';
  elementP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  elementSection.appendChild(elementP);
}
function createInput() {
  const elementSection = createSection('section-input');
  const elementInput = document.createElement('input');
  elementInput.id = 'texto-tarefa';
  elementInput.type = 'string';
  elementSection.appendChild(elementInput);
}
function createList() {
  const elementSection = document.querySelector('#section-task-lists');
  const elementList = document.createElement('ol');
  elementList.id = 'lista-tarefas';
  elementSection.appendChild(elementList);
}
function creatButton() {
  const elementSection = document.querySelector('#section-input');
  const elementBtn = document.createElement('button');
  elementBtn.id = 'criar-tarefa';
  elementBtn.innerText = 'Adicionar';
  elementSection.appendChild(elementBtn);
}
function creatButtonDel() {
  const elementSection = createSection('section-buttons');
  const elementBtn = document.createElement('button');
  elementBtn.id = 'apaga-tudo';
  elementBtn.innerText = 'Limpar Lista';
  elementSection.appendChild(elementBtn);
}
function creatButtonDelCompleted(elementSection) {
  const elementBtn = document.createElement('button');
  elementBtn.id = 'remover-finalizados';
  elementBtn.innerText = 'Limpar Completos';
  elementSection.appendChild(elementBtn);
}
function creatButtonSave(elementSection) {
  const elementBtn = document.createElement('button');
  elementBtn.id = 'salvar-tarefas';
  elementBtn.innerText = 'Salvar';
  elementSection.appendChild(elementBtn);
}
function createButtonsMove(elementSection) {
  const elementBtnUp = document.createElement('button');
  elementBtnUp.id = 'mover-cima';
  elementBtnUp.innerText = '/\\';
  elementSection.appendChild(elementBtnUp);
  const elementBtnDown = document.createElement('button');
  elementBtnDown.id = 'mover-baixo';
  elementBtnDown.innerText = '\\/';
  elementSection.appendChild(elementBtnDown);
}
function createButtonDelSelect(elementSection) {
  const elementBtn = document.createElement('button');
  elementBtn.id = 'remover-selecionado';
  elementBtn.innerText = 'Apagar';
  elementSection.appendChild(elementBtn);
}
function removeList() {
  const sectionTasks = document.querySelector('#section-task-lists');
  const elementList = document.querySelector('ol');
  sectionTasks.removeChild(elementList);
  createList();
}

function listenerButtonDel() {
  const elementBtn = document.querySelector('#apaga-tudo');
  elementBtn.addEventListener('click', removeList);
}

createTitle();
createOperationTitle();
createInput();
createSection('section-task-lists');
createList();
creatButton();
creatButtonDel();
const elementSection = document.querySelector('#section-buttons');
createButtonDelSelect(elementSection);
creatButtonDelCompleted(elementSection);
creatButtonSave(elementSection);
createButtonsMove(elementSection);
listenerButtonDel();
