

//------------------------------------------------------------------------------
//                          DATE/TIME
//------------------------------------------------------------------------------
const date = document.querySelector('.date');
const today = moment(new Date()).format('dddd, MMMM Do YYYY');
date.innerHTML = today;

const time = document.querySelector('.time');
// updateTime();
function updateTime() {
  time.innerHTML = moment(new Date()).locale('fr').format('LT');
}
setInterval(updateTime, 1000);

//------------------------------------------------------------------------------
//                          SPA BEHAVIOUR
//------------------------------------------------------------------------------
// window.addEventListener('load', () => {
//   document.location.href('index.html');
//   console.log('yay load event');
//   setTimeout(() => {
//     console.clear();
//   }, 2000);
// });
document.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    document.querySelector('#home').style.display = 'none';
  });
});

function removeLocationHash(event) {
  event.preventDefault();
  // window.location.assign('index.html');
  const noHashURL = window.location.href.replace(/#.*$/ || /#.*$/, '');
  window.history.replaceState('', document.title, noHashURL);
}

window.addEventListener('load', removeLocationHash);
// window.addEventListener('load', home);
//------------------------------------------------------------------------------
//                          DARK MODE
//------------------------------------------------------------------------------
let darkmode = false;
document.querySelector('input').addEventListener('change', () => {
  darkmode = !darkmode;
  localStorage.setItem('darkmode', JSON.stringify(darkmode));
  // if (darkmode) {
  document.body.classList.toggle('dark');
  date.classList.toggle('date-dark');
  time.classList.toggle('time-dark');
  document.querySelector('.city').classList.toggle('city-dark');
  document.querySelectorAll('.todo').classList.toggle('todo-dark');
  // }
});

// function displayMode() {
//   localStorage.getItem('darkmode', JSON.parse(darkmode));
// }
// window.addEventListener('DOMContentLoaded', displayMode);
//------------------------------------------------------------------------------
//                    ACTIVE BUTTONS
//------------------------------------------------------------------------------
function btnSelected() {
  const buttons = document.querySelectorAll('a');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
}
btnSelected();

//------------------------------------------------------------------------------
//                          DOM VARIABLES
//------------------------------------------------------------------------------
const addItemsButton = document.querySelector('svg');
const todoInput = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');
const userWarning = document.querySelector('.userWarning');
const refreshButton = document.querySelector('.refresh');
const todoCount = document.querySelector('.todo-count');
const weatherBtn = document.querySelector('.weather');
const weatherWrapper = document.querySelector('.wrapper');

//------------------------------------------------------------------------------
//                          GLOBAL VARIABLES
//------------------------------------------------------------------------------
let itemsTotal = 0;
let id = 0;
const userWarningMsg = 'Empty item! Please enter a TO-DO';

const uncheck = 'fa-square';
const check = 'fa-check-square';
const done = 'done';
const todoStorage = JSON.parse(localStorage.getItem('todoStorage')) || [];

//------------------------------------------------------------------------------
//                          TODO APP
//------------------------------------------------------------------------------

function counterMsg() {
  if (itemsTotal === 0) {
    todoCount.innerHTML = 'you have <span class="counter">nothing</span> to do !';
  } else if (itemsTotal === 1) {
    const todoCountMessage = 'you have <span class="counter">1</span> thing to do.';
    todoCount.innerHTML = todoCountMessage;
  } else {
    const todoCountMessage = `you have <span class="counter">${itemsTotal}</span> things to do !`;
    todoCount.innerHTML = todoCountMessage;
  }
}

function addItem() {
  const newItem = `<li class="todo dark ${id}">
                   <i class="far ${uncheck}"></i>
                   <p class="item">${todoInput.value}</p>
                   <i class="far fa-trash-alt trash"></i>
                   </li>`;

  document.querySelector('.todo-list').insertAdjacentHTML('beforeend', newItem);
  itemsTotal++;
  counterMsg();
}


// -- ADD TO LOCALSTORAGE --
//   console.log(typeof(Storage));
function storeTodos() {
  const newTodo = {
    task: todoInput.value,
    id,
    done: false,
  };
  todoStorage.push(newTodo);
  id++;
  localStorage.setItem('todoStorage', JSON.stringify(todoStorage));
}

// ---------------------------- MARK ITEM AS DONE -------------------------------
function checkTodo(event) {
  const element = event.target;
  if (element.classList.contains('fa-square') || element.classList.contains('fa-check-square')) {
    todoStorage.forEach((todo) => {
      if (todo.id === (parseInt(element.parentElement.classList[1], 10))) {
        todo.done = !todo.done;
        element.classList.toggle(check);
        element.classList.toggle(uncheck);
        element.parentElement.children[1].classList.toggle(done);
        // element.parentElement.children[1].classList.toggle('');
        // const linethrough = todo.done ?
      }
    });
    localStorage.setItem('todoStorage', JSON.stringify(todoStorage));
  }
}


function displayTodos() {
  // if (todoList.innerHTML === '') todoCount.innerText = 'everything cleared. you have no thing to do...';
  // const todoStorage = JSON.parse(localStorage.getItem('todoStorage')) || [];
  todoStorage.forEach((todo) => {
    const isDone = todo.done ? check : uncheck;
    const linethrough = todo.done ? done : '';
    const newItem = `<li class="todo ${todo.id}">
                     <i class="far ${isDone}"></i>
                     <p class="item ${linethrough}">${todo.task}</p>
                     <i class="far fa-trash-alt trash"></i>
                     </li>`;
    // newItem.innerText = `${todo.task}`;
    document.querySelector('.todo-list').insertAdjacentHTML('beforeend', newItem);
    itemsTotal = todoStorage.length;
    id = todo.id + 1;
    counterMsg(itemsTotal);
  });
}


function warning() {
  userWarning.style.display = 'block';
  userWarning.innerText = userWarningMsg;
  // userWarning.style.animation = 'userWarning 1500ms forwards';
  window.addEventListener('click', () => {
    userWarning.style.display = 'none';
    todoInput.focus();
  });
}

function submitButton() {
  if (todoInput.value === '') warning();
  else {
    addItem();
    storeTodos();
    todoInput.value = '';
  }
}

// function removeUserWarning() {
//   if (userWarning.innerText === userWarningMsg) userWarning.innerHTML = '';
// }

function refresh() {
  if (todoList.innerHTML === '') {
    todoCount.innerText = 'nothing to delete';
    // refreshButton.classList.remove('rotate');
  } else {
    todoList.innerHTML = '';
    localStorage.clear();
    todoStorage.length = 0;
    itemsTotal = 0;
    id = 0;
    todoCount.innerText = 'everything cleared. you have no thing to do...';
  }
}

const rotate = () => {
  refreshButton.style.transform = 'rotate(180deg)';
};

// ------------------------------  REMOVE ITEMS --------------------------------

function removeTodos(event) {
  const element = event.target;
  // const todoStorage = JSON.parse(localStorage.getItem('todoStorage'));
  if (element.classList.contains('trash')) {
    event.preventDefault();
    // console.log(typeof (Number(element.parentElement.classList[1])));
    todoStorage.forEach((todo) => {
      // console.log(typeof (todo.id));
      if (todo.id === (parseInt(element.parentElement.classList[1], 10))) {
        todoStorage.splice(todoStorage.indexOf(todo), 1);
        console.log('yay');
        localStorage.setItem('todoStorage', JSON.stringify(todoStorage));
      }
    });

    // remove onscreen
    element.parentElement.style.animation = 'disappear 1000ms forwards';
    setTimeout(() => {
      element.parentElement.style.display = 'none';
    }, 1000);
    itemsTotal--;
    counterMsg();
  }
}


//------------------------------------------------------------------------------
//                          EVENTS
//------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', displayTodos);
addItemsButton.addEventListener('click', submitButton);
todoList.addEventListener('click', checkTodo);
todoList.addEventListener('click', removeTodos);
refreshButton.addEventListener('click', refresh);
refreshButton.addEventListener('click', rotate);
// todoInput.addEventListener('click', removeUserWarning);
// homeButton.addEventListener('click', homepage);

// KEYBOARD CONTROL (TO ADD TODOS WITH ENTER KEY)
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    submitButton();
    addItemsButton.style.transform = 'scale(1.5)';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addItemsButton.style.transform = 'scale(1)';
  }
});

//------------------------------------------------------------------------------
//                                WEATHER APP
//------------------------------------------------------------------------------
function loading() {
  document.querySelector('.loader').style.display = 'block';
}

function displayErrorWeather() {
  weatherWrapper.style.background = 'url("https://media.giphy.com/media/26BGDQxDCZDFHW5Ne/giphy.gif") no-repeat center/contain';
  weatherWrapper.style.backgroundColor = 'black';
  document.querySelector('header').style.borderBottom = 'black';
  document.querySelector('.weather-title').style.backgroundColor = 'black';
  document.querySelector('.weather-title').innerHTML = '';
  document.querySelector('.weather-title').style.animation = 'none';
  document.querySelector('.wrapper').style.borderTop = 'black';
  weatherWrapper.innerHTML = '<p><span class="oops">ooops&excl;&excl;&excl;</span> <br>Looks like something went wrong&excl;<br> Please try to refresh the page&period;</p>';
}

function displayErrorLocation(error) {
  console.log('nononono');
  console.log(error);
  displayErrorWeather();
  weatherWrapper.innerHTML = '<p><span class="oops">ooops&excl;&excl;&excl;</span><br>Looks like you denied access to your location&excl;<br>Don&apos;t worry, we do not store any of your data&period;<br>To check the weather now, please refresh and allow.</p>';
}

function weatherResults(data) {
  console.log(data);
  console.log(data.weather[0].id);
  let icon;
  switch (data.weather[0].id) {
    case 800:
      icon = 'day';
      break;
    case 801:
      icon = 'cloudy-day-2';
      break;
    case 802:
    case 803:
    case 804:
      icon = 'cloudy';
      break;
    case 500:
    case 520:
    case 300:
    case 310:
      icon = 'rainy-4';
      break;
    case 501:
    case 521:
    case 301:
    case 311:
    case 313:
    case 321:
      icon = 'rainy-5';
      break;
    case 502:
    case 522:
    case 302:
    case 312:
    case 314:
      icon = 'rainy-6';
      break;
    case 503:
    case 504:
    case 531:
      icon = 'rainy-7';
      break;
    case 600:
    case 611:
    case 612:
    case 615:
    case 620:
      icon = 'snowy-4';
      break;
    case 601:
    case 613:
    case 616:
    case 621:
      icon = 'snowy-5';
      break;
    case 602:
    case 622:
      icon = 'snowy-6';
      break;
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      icon = 'thunder';
      break;
  }
  console.log(icon);
  const weatherResult = `<img src='weather_icons/animated/${icon}.svg'>
                          <div class="location">${data.weather[0].description} in&nbsp;<span class="city">${data.name}</span> &excl;</div>
                          <div class="temp">${Math.floor(data.main.temp)}<span class="weatherUnit">°C</span></div>`;
  weatherWrapper.innerHTML = weatherResult;
}

// lat & lon are "saved" from getUserLocation and can be reused here to fetch!!!
function fetchWeather(lat, lon) {
  const url = 'http://api.openweathermap.org/data/2.5/weather?';
  const units = '&units=metric&lang=en';
  const key = '&appid=37695d01c1a018da687a522209afe145';
  fetch(url + lat + lon + units + key)
    .then((response) => response.json())
    .then((data) => {
      weatherResults(data);
    })
    .catch(() => {
      displayErrorWeather();
    });
}

function getUserLocation(position) {
  console.log('yay');
  const lat = `&lat=${position.coords.latitude}`;
  const lon = `&lon=${position.coords.longitude}`;
  // to "save" the lat & lon variables, in order to use them in the fetch function!!!
  fetchWeather(lat, lon);
}

function displayWeather() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(getUserLocation, displayErrorLocation);
  } else {
    console.log('oh no!');
    displayErrorLocation();
  }
}

function weatherApp() {
  loading();
  setTimeout(displayWeather, 500);
}

weatherBtn.addEventListener('click', weatherApp);



//------------------------------------------------------------------------------
//                                CALCULATOR
//------------------------------------------------------------------------------

const numbers = document.querySelectorAll('.number');
const output = document.querySelector('.output');
const calcOutput = [];



function Calculator() {
  this.display = () => {
    numbers.forEach((number) => {
      number.addEventListener('click', () => {
        output.style.backgroundColor = '#121521';
        output.style.alignItems = 'flex-end';
        output.style.height = '100%';
        output.style.fontSize = '1.5rem';
        output.style.paddingRight = '1em';
        output.style.color = 'white';
        calcOutput.push(number.innerHTML);
        output.innerHTML = calcOutput.join('');
      });
    });
  };
  this.operation = () => {

  };
}

const calculator = new Calculator();
calculator.display();














//





















//
