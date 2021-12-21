const className = 'completed select';

function removeSelect() {
  const elementTasks = document.querySelectorAll('li');
  for (let i = 0; i < elementTasks.length; i += 1) {
    if (elementTasks[i].className === className) {
      elementTasks[i].className = 'completed';
    }
    if (elementTasks[i].className === 'select') {
      elementTasks[i].className = '';
    }
  }
}

function selectTask(event) {
  const evento = event;
  removeSelect();
  if (evento.target.className === 'completed') {
    evento.target.className = className;
  } else {
    evento.target.className = 'select';
  }
}

function completedTask(event) {
  const evento = event;
  switch (evento.target.className) {
  case '':
    evento.target.className = 'completed';
    break;
  case 'select':
    evento.target.className = className;
    break;
  case className:
    evento.target.className = 'select';
    break;
  case 'completed':
    evento.target.className = '';
    break;
  default:
    break;
  }
}

function listenerTasks() {
  const elementTasks = document.querySelectorAll('li');
  for (let i = 0; i < elementTasks.length; i += 1) {
    elementTasks[i].addEventListener('dblclick', completedTask);
    elementTasks[i].addEventListener('click', selectTask);
  }
}

function addTaskList() {
  const list = document.querySelector('ol');
  const elementInput = document.querySelector('#texto-tarefa');
  const elementTask = document.createElement('li');
  elementTask.innerHTML = elementInput.value;
  list.appendChild(elementTask);
  elementInput.value = '';
  listenerTasks();
}

function listenerButton() {
  const elementBtn = document.querySelector('#criar-tarefa');
  elementBtn.addEventListener('click', addTaskList);
}

function checkListLength(list) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].className === 'completed' || list[i].className === className) {
      list[i].parentNode.removeChild(list[i]);
    }
  }
}

function removeCompleted() {
  const list = document.querySelectorAll('li');
  if (list.length > 0) {
    checkListLength(list);
  }
}

function listenerButtonDelCompleted() {
  const elementBtn = document.querySelector('#remover-finalizados');
  elementBtn.addEventListener('click', removeCompleted);
}

function saveAll() {
  const elementList = document.querySelectorAll('li');
  const tasksLists = [];
  for (let i = 0; i < elementList.length; i += 1) {
    const data = `${elementList[i].innerText}$${elementList[i].className}`;
    tasksLists.push(data);
  }
  localStorage.setItem('tasksLists', JSON.stringify(tasksLists));
}

function listenerButtonSave() {
  const elementBtn = document.querySelector('#salvar-tarefas');
  elementBtn.addEventListener('click', saveAll);
}

function dadosLocais() {
  const elementList = document.querySelector('#lista-tarefas');
  const taskList = JSON.parse(localStorage.getItem('tasksLists'));
  const taskName = 0;
  const className1 = 1;
  for (let i = 0; i < taskList.length; i += 1) {
    const task = taskList[i].split('$');
    const elementTask = document.createElement('li');
    elementTask.innerHTML = task[taskName];
    elementTask.className = task[className1];
    elementList.appendChild(elementTask);
  }
  listenerTasks();
}

function checkOr(list, i) {
  if (list[i].className === 'select' || list[i].className === className) {
    return true;
  }
  return false;
}

function moveUp() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    if (checkOr(list, i) && i !== 0) {
      const auxText = list[i].innerText;
      const auxClass = list[i].className;
      list[i].innerText = list[i - 1].innerText;
      list[i].className = list[i - 1].className;
      list[i - 1].innerText = auxText;
      list[i - 1].className = auxClass;
    }
  }
}

function moveDown() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    if (checkOr(list, i) && i !== list.length - 1) {
      const auxText = list[i].innerText;
      const auxClass = list[i].className;
      list[i].innerText = list[i + 1].innerText;
      list[i].className = list[i + 1].className;
      list[i + 1].innerText = auxText;
      list[i + 1].className = auxClass;
      break;
    }
  }
}

function listenerButtonUp() {
  const elementBtn = document.querySelector('#mover-cima');
  elementBtn.addEventListener('click', moveUp);
}

function listenerButtonDown() {
  const elementBtn = document.querySelector('#mover-baixo');
  elementBtn.addEventListener('click', moveDown);
}

function delSelect() {
  const elementTask = document.querySelectorAll('li');
  const elementList = document.querySelector('#lista-tarefas');
  for (let i = 0; i < elementTask.length; i += 1) {
    if (elementTask[i].className === className || elementTask[i].className === 'select') {
      elementList.removeChild(elementTask[i]);
    }
  }
}

function listenerButtonDelSelect() {
  const elementBtn = document.querySelector('#remover-selecionado');
  elementBtn.addEventListener('click', delSelect);
}

listenerButton();
listenerButtonDelCompleted();
listenerButtonSave();
if (localStorage.getItem('tasksLists')) {
  dadosLocais();
}
listenerButtonUp();
listenerButtonDown();
listenerButtonDelSelect();
