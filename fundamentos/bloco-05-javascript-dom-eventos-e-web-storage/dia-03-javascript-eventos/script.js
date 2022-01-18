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
    dayOfMonth.style.userSelect = 'none';
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
  button.style.cursor = 'pointer';
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
  event.target.style.transform = 'scale(1.7)';
}
function zoonOut(event) {
  event.target.style.transform = 'scale(1)';
}
const days = month.children;
for (let i = 0; i < days.length; i += 1) {
  days[i].style.cursor = 'pointer';
  days[i].addEventListener('mouseover', zoonIn);
  days[i].addEventListener('mouseleave', zoonOut);
}

// Exercício 7:

function addTask(task) {
  const spanTask = document.createElement('span');
  spanTask.style.display = 'block';
  spanTask.innerText = task;
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  myTasks.appendChild(spanTask);
  return spanTask;
}

// Exercício 8:

function addLabel(task, color) {
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  divTask.style.cursor = 'pointer';
  divTask.style.width = '20px';
  divTask.style.height = '20px';
  divTask.addEventListener('mouseover', zoonIn);
  divTask.addEventListener('mouseleave', zoonOut);
  task.appendChild(divTask);
}
addLabel(addTask('Projetos'), 'green');
addLabel(addTask('Exercícios'), 'red');
addLabel(addTask('Aulas'), 'blue');

// Exercício 9:

const labelShadow = '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)';

function addRemoveSelected(event) {
  const divTask = event.target;
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null && taskSelected !== divTask) {
    taskSelected.classList.remove('selected');
    taskSelected.style.boxShadow = labelShadow;
  }
  if (divTask.classList.contains('selected')) {
    divTask.classList.remove('selected')
    divTask.style.boxShadow = labelShadow;
  } else {
    divTask.classList.add('selected')
    divTask.style.boxShadow = `${labelShadow},0 0 20px 8px black`;
  }
}
const myTasks = document.getElementsByClassName('task');
for (let i = 0; i < myTasks.length; i += 1) {
  myTasks[i].addEventListener('click', addRemoveSelected);
}

// Exercício 10:

function changeColorDay(event) {
  const day = event.target;
  const taskSelected = document.querySelector('.selected');
  if (taskSelected === null) {
    day.style.color = 'rgb(119,119,119)';
  }
  else if (day.style.color === taskSelected.style.backgroundColor) {
    day.style.color = 'rgb(119,119,119)';
  }
  else {
    day.style.color = taskSelected.style.backgroundColor;
  }
}
for (let i = 0; i < days.length; i += 1) {
  days[i].addEventListener('click', changeColorDay);
}

// Bônus:

const taskInput = document.getElementById('task-input');
function addCommitment() {
  const value = taskInput.value;
  if (value === '') {
    window.alert('Informe um compromisso para ser adicionado.');
  } else {
    const li = document.createElement('li');
    li.innerText = value;
    li.style.borderBottom = '1px solid black';
    li.style.marginBottom = '10px';
    const taskList = document.getElementsByClassName('task-list')[0];
    taskList.appendChild(li);
    taskInput.value = '';
  }
}
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addCommitment();
  }
});
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', addCommitment);
btnAdd.style.cursor = 'pointer';

// Alterações no layout

const inputContainer = document.querySelector('.input-container');
const taskListContainer = document.querySelector('.task-list-container');
const hr = document.createElement('hr');
hr.style.margin = '10px 0';

inputContainer.appendChild(hr);
inputContainer.appendChild(taskListContainer);
