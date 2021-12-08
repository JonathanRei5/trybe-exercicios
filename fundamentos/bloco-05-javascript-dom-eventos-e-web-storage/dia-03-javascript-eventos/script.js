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

// Escreva seu código abaixo.

// Exercício 1:

function addDayOfMonth(days, month, holidays, fridays) {
  for (let i = 0; i < days.length; i += 1) {
    const day = days[i];
    const dayOfMonth = document.createElement('li');
    dayOfMonth.innerText = day;
    dayOfMonth.classList.add('day');
    if (holidays.indexOf(day) > -1) {
      dayOfMonth.classList.add('holiday');
    }
    if (fridays.indexOf(day) > -1) {
      dayOfMonth.classList.add('friday');
    }
    month.appendChild(dayOfMonth);
  }
}
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];
const month = document.getElementById('days');
addDayOfMonth(dezDaysList, month, holidays, fridays);

// Exercício 2:

function createButton(name) {
  let button = document.createElement('button');
  button.innerText = name;
  return button;
}
const btnHoliday = createButton('Feriados');
btnHoliday.id = 'btn-holiday';
const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
buttonsContainer.appendChild(btnHoliday);

// Exercício 3:

function changeBGColor() {
  const liHolidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < liHolidays.length; i += 1) {
    if (liHolidays[i].style.backgroundColor !== 'rgb(170, 255, 170)') {
      liHolidays[i].style.backgroundColor = 'rgb(170, 255, 170)';
    } else {
      liHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}
btnHoliday.addEventListener('click', changeBGColor);

// Exercício 4:

const btnFriday = createButton('Sexta-feira');
btnFriday.id = 'btn-friday';
buttonsContainer.appendChild(btnFriday);

// Exercício 5:

function changeText() {
  const liFriday = document.getElementsByClassName('friday');
  for (let i = 0; i < liFriday.length; i += 1) {
    if (liFriday[i].innerText !== 'Sexta-feira') {
      liFriday[i].innerText = 'Sexta-feira';
    } else {
      liFriday[i].innerText = fridays[i];
    }
  }
}
btnFriday.addEventListener('click', changeText);

// Exercício 6:

function zoonIn(event) {
  event.target.style.fontSize = '25px';
}
function zoonOut(event) {
  event.target.style.fontSize = '20px';
}
const days = month.children;
for (let i = 0; i < days.length; i += 1) {
  days[i].addEventListener('mouseover', zoonIn);
  days[i].addEventListener('mouseleave', zoonOut);
}

// Exercício 7:

function addTask(task) {
  const spamTask = document.createElement('spam');
  spamTask.innerText = task;
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  myTasks.appendChild(spamTask);
}
addTask('Teste');

// Exercício 8:

function addSubtitle(color) {
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  myTasks.appendChild(divTask);
}
addSubtitle('green');
