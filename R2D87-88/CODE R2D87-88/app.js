

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
setInterval(() => {
  updateTime();
}, 1000);

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
//                          DOM VARIABLES
//------------------------------------------------------------------------------
const addItemsButton = document.querySelector('svg');
const todoInput = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');
const userWarning = document.querySelector('.userWarning');
const refreshButton = document.querySelector('.refresh');
const todoCount = document.querySelector('.todo-count');

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
  const newItem = `<li class="todo ${id}">
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
// ---------------------------- MARK ITEM AS DONE -------------------------------

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
// function loading() {
//   home.style.display = 'none';
//   form.style.display = 'none';
//   weather.style.display = 'flex';
//   // document.querySelector('.lds-spinner').style.display = 'block';
// }
//
// function weatherApp() {
//   loading();
//   const url = 'http://api.openweathermap.org/data/2.5/weather?';
//   const units = '&units=metric&lang=en';
//   const key = '&appid=37695d01c1a018da687a522209afe145';
//
//   // if(navigator.gelocation){
//   navigator.geolocation.getCurrentPosition((position) => {
//     const lat = `&lat=${position.coords.latitude}`;
//     const lon = `&lon=${position.coords.longitude}`;
//
//     fetch(url + lat + lon + units + key)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//
//         const weatherResult = `<div class="weatherIcon"><i class="owf owf-${data.weather[0].id}"></i></div>
//                           <div class="temp">${Math.floor(data.main.temp)}<span class="weatherUnit">°C</span></div>
//                           <div class="location">${data.weather[0].description} in&nbsp;<span class="city">${data.name}</span> &excl;</div>`;
//         // document.querySelector('.weatherIcon').innerHTML = '<i class="owf owf-${data.weather[0].id}">';
//         // document.querySelector('.description').innerText = data.weather[0].description;
//         // document.querySelector('.temp').innerHTML = `${Math.floor(data.main.temp)}<span class="weatherUnit">°C</span>`;
//         // document.querySelector('.location').innerHTML = `${data.weather[0].description} in&nbsp;<span class="city">${data.name}</span> &excl;`;
//         // console.log(`${data.name} ${data.weather[0].description} ${data.main.temp} ${data.weather[0].id}`);
//         document.querySelector('.weather').innerHTML = weatherResult;
//       })
//       .catch(() => {
//         document.querySelector('.weather').style.background = 'url("https://media.giphy.com/media/26BGDQxDCZDFHW5Ne/giphy.gif") no-repeat center/contain';
//         document.querySelector('.weather').style.backgroundColor = 'black';
//         document.querySelector('.weather').innerHTML = '<p><span class="oops">ooops!!!</span> <br>Looks like something went wrong!<br> Please try to refresh the page.</p>';
//       });
//   });
// }
//
// weatherbutton.addEventListener('click', weatherApp);
//
//
//
//
//
//
//
//
//
//
//
//
//




















//





















//
