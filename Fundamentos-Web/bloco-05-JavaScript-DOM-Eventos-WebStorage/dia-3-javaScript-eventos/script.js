function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercicio 01

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  function holiday(day) {
    const holidays = ['24', '25', '31'];
    for(let index of holidays) {
      if(day.innerText === index) {
        return true;      
      }
    }
    return false;
  }
  
  function friday(day) {
    const fridays = ['4', '11', '18','25'];
    for(let index of fridays) {
      if(day.innerText === index) {
        return true;      
      }
    }
    return false;
  }

  for(let i of dezDaysList) {
    const elementLi = document.createElement('li');
    elementLi.innerText = i.toString();
    elementLi.className = 'day';

    if(holiday(elementLi) === true) {
      elementLi.className += ' holiday';
    }
    if(friday(elementLi) === true) {
      elementLi.className += ' friday';
    }

    monthDaysList.appendChild(elementLi);
  }
}
createDaysOfMonth();

// Exercicio 02

function addButton(buttonName) {
  const div = document.querySelector('.buttons-container')

  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = buttonName;
  buttonHoliday.id = 'btn-holiday';
  div.appendChild(buttonHoliday);
}
addButton('Feriados');

// Exercicio 03

function addEventButton() { 
  let button = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.holiday'); 
  let background = 'rgb(238,238,238)'; 
  let newBackground = 'rgb(211, 211, 211)';

  button.addEventListener('click', function() {   
    for(let index of holiday) {        
      if(index.style.backgroundColor === newBackground) {
        index.style.backgroundColor = background;        
      } else {
        index.style.backgroundColor = newBackground;
      }
    }
  });
}
addEventButton();

// Exercicio 04

function addButtonFriday(buttonName) {
  const div = document.querySelector('.buttons-container')

  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = buttonName;
  buttonHoliday.id = 'btn-friday';
  div.appendChild(buttonHoliday);
}
addButtonFriday('Sexta-feira');

// Exercicio 05

function addEventButtonFriday() { 
  let button = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let colorText = '#777';
  let newColorText = 'red';

  button.addEventListener('click', function() {   
    for(let index of fridays) {        
      if(index.style.color === newColorText) {
        index.style.color = colorText;        
      } else {
        index.style.color = newColorText;
      }
    }
  });
}
addEventButtonFriday();

// Exercicio 06

function zoomDaysUpp(){  
  let days = document.querySelector("#days")
  days.addEventListener('mouseover', function(event) {    
    event.target.style.fontWeight = '600';
    event.target.style.fontSize = '35px';
    
  });
}
function zoomDaysDown(){ 
  let days = document.querySelector("#days")
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  });
}
zoomDaysUpp();
zoomDaysDown();

// Exercicio 07

function addTask(string) {
  const div = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerText = string;
  div.appendChild(span);
}
addTask('Dormir !')