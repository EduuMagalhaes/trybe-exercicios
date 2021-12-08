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

function addButton() {
  const div = document.querySelector('.buttons-container')

  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = 'Feriados';
  div.appendChild(buttonHoliday);
}
addButton();
