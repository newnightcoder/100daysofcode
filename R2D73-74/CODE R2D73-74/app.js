//------------------------------------------------------------------------------
//                                DOM ELEMENTS
//------------------------------------------------------------------------------
let addItemsButton = document.querySelector('svg');
let itemInput = document.querySelector('#addInput');
let title = document.querySelector('.title');
let itemList = document.querySelector('#list');
let addItemDiv = document.querySelector('#add-item');
let userWarningField = document.querySelector('.userWarning');
let userWarning = 'Empty item! Please enter a TO-DO';
let refreshButton = document.querySelector('#refreshButton');
let itemsCounter = document.querySelector('.items-counter');
let trashButton = document.querySelectorAll('.fa-trash-alt');
let item = document.getElementsByClassName('.listItem');
let home = document.querySelector('#home');
let pomodoro = document.querySelector('#pomodoro');
let calculator = document.querySelector('#calculator');
let weather = document.querySelector('#weather');
let homeButton = document.querySelector('.home-btn');
let weatherbutton = document.querySelector('.fa-cloud-sun');


let itemsTotal=0;

//------------------------------------------------------------------------------
//                DARK-MODE TOGGLE & OPTION BUTTONS
//------------------------------------------------------------------------------

document.querySelector('label').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  date.classList.toggle('date2');
  time.classList.toggle('time2');
})

let img1=new Image(100,100);
img1.src='bg/download-1.jpg';
console.log(img1);

document.querySelector('.bg-img-btn').addEventListener('click',()=>{
  document.body.style.background='url(bg/download-10.jpg) no-repeat center/100%';
})

//------------------------------------------------------------------------------
//                                EVENTS
//------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', displayTodos)
addItemsButton.addEventListener('click', plusButton);
refreshButton.addEventListener('click', refresh);
refreshButton.addEventListener('click', rotate);
itemInput.addEventListener('click', removeUserWarning);
homeButton.addEventListener('click', homepage);
weatherbutton.addEventListener('click', geolocationUser);

// KEYBOARD CONTROL (TO ADD TODOS WITH ENTER KEY)
document.addEventListener('keydown',function(event){
  if(event.keyCode == 13){
    plusButton();
    addItemsButton.style.transform='scale(1.5)';
  } else removeUserWarning();
})

document.addEventListener('keyup',function(event){
  if(event.keyCode == 13){
    addItemsButton.style.transform='scale(1)';
  }
})

//------------------------------------------------------------------------------
//                                DATE
//------------------------------------------------------------------------------
let date = document.querySelector('.date');
let today = moment (new Date).format('dddd, MMMM Do YYYY');
date.innerHTML = today;
let time = document.querySelector('.time');
time.innerHTML = moment(new Date).locale('fr').format('LT');
//------------------------------------------------------------------------------
//                                TO-DO APP
//------------------------------------------------------------------------------

//------------------------------  FUNCTIONS ------------------------------------

function counterMessage(){
  if(itemsTotal==0){
    itemsCounter.innerHTML= 'you have <span class="counter">nothing</span> to do !';
}
  else if(itemsTotal==1){
    itemsCounterMessage='you have <span class="counter">1</span> thing to do.';
    itemsCounter.innerHTML= itemsCounterMessage;
}
  else{
     itemsCounterMessage = `you have <span class="counter">${itemsTotal}</span> things to do !`;
     itemsCounter.innerHTML= itemsCounterMessage;
  }
}

function animUserWarning(){
  userWarningField.style.animation='messageAnim 3000ms forwards';
}

function addItem(){
  let newItem = `<li class="listItem ">
                  <i class="far fa-circle"></i>
                  <p class="item">${itemInput.value}</p>
                  <i class="far fa-trash-alt trash"></i>
                </li>`

  if(itemInput.value ==''){
    userWarningField.innerText = userWarning;
    animUserWarning();
  }
  else {
    itemList.insertAdjacentHTML('beforeend', newItem);
    itemsTotal++;
    counterMessage();
  }
}

function emptyInputField(){
  if(itemInput.value!=='')
   itemInput.value='';
}

function plusButton(){
  addItem();
  storeTodos();
  emptyInputField();
}

function removeUserWarning(){
  if(userWarningField.innerText==userWarning){
  userWarningField.classList.toggle('userWarningAnim');
    userWarningField.innerHTML = '';
  }
}

function rotate(){
  refreshButton.classList.toggle('rotate');
};

function refresh(){
  if(itemList.innerHTML==''){
    itemsCounter.innerText='nothing to delete';
    //refreshButton.classList.remove('rotate');
  }
  else {
 itemList.innerHTML='';
 localStorage.clear();
 itemsTotal=0;
 itemsCounter.innerText= 'everything cleared. you have no thing to do...';
  };
};

function selectItem(){
}


function homepage(){
  home.style.display='block';
  weather.style.display='none';
  calculator.style.display='none';
  pomodoro.style.display='none';
  addItemDiv.style.display='flex';  // document.querySelector('.hide-add-item').style.display='none';
}

//------------------------------  SELECT ITEMS ---------------------------------
document.addEventListener('click', function(event){
  let element = event.target;
  if(element.classList.contains('listItem')){
    element.style.borderTop='2px solid blue';
    element.style.borderBottom='2px solid blue';
  }
})
//---------------------------  ADD TO LOCALSTORAGE -----------------------------

//console.log(typeof(Storage));

function storeTodos(){
  //to "fetch" eventual items already in the array. if nothing: create empty array.
  let listOfTodos = JSON.parse(localStorage.getItem('listOfTodos')) || [];
  listOfTodos.push(itemInput.value);
  //to physically store the items in the localStorage!
  localStorage.setItem('listOfTodos', JSON.stringify(listOfTodos));
}

function displayTodos(){
  let listOfTodos = JSON.parse(localStorage.getItem('listOfTodos')) || [];
  listOfTodos.forEach(todo =>{
    let newItem = `<li class="listItem ">
                    <i class="far fa-circle"></i>
                    <p class="item">${todo}</p>
                    <i class="far fa-trash-alt trash"></i>
                  </li>`
      newItem.innerText=`${todo}`;
      itemList.insertAdjacentHTML('beforeend', newItem);
      itemsTotal = listOfTodos.length;
  })
}

//------------------------------  REMOVE ITEMS ---------------------------------

itemList.addEventListener('click', function(event){
  //remove onscreen
  let listOfTodos = JSON.parse(localStorage.getItem('listOfTodos'));
  let element = event.target;
  if(event.target.classList.contains('trash')){
    event.preventDefault();
    element.parentElement.style.animation='disappear 1000ms forwards';
    setTimeout(function deleteItem(){
      element.parentElement.style.display='none';
    }, 500);
    itemsTotal--;
    counterMessage();
  }
  //remove from localStorage
  if(listOfTodos){
    for (let i=0; i<listOfTodos.length; i++){
      if (listOfTodos[i] === element.parentElement.innerText||listOfTodos[i] === element.parentElement.innerText+' '){
        //console.log(listOfTodos[i]);
        listOfTodos.splice(i, 1);
        //console.log(listOfTodos.length);
        localStorage.setItem('listOfTodos', JSON.stringify(listOfTodos));
        if (listOfTodos.length===0)
        localStorage.clear();
        //listOfTodos.splice(indexOf(todo),1);
      }
    }
  }
})
    //window.localStorage.items = itemList.innerText;

//------------------------------------------------------------------------------
//                                WEATHER APP
//------------------------------------------------------------------------------

function styleWeather(){
  home.style.display='none';
  addItemDiv.style.display='none';
  weather.style.display='flex';
}

function displayError(){
  document.querySelector('#weather').innerHTML='oops! something went wrong baby! refresh the browser or click on home button.'
}

  function geolocationUser(){

    let url = 'http://api.openweathermap.org/data/2.5/weather?',
        units = '&units=metric&lang=en',
        key = '&appid=37695d01c1a018da687a522209afe145';

    // if(navigator.gelocation){
    navigator.geolocation.getCurrentPosition(position => {
    let lat = `&lat=${position.coords.latitude}`
    let lon = `&lon=${position.coords.longitude}`;

    fetch(url+lat+lon+units+key)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        styleWeather();
        document.querySelector('.weatherIcon').innerHTML = `<i class="owf owf-${data.weather[0].id}">`;
        //document.querySelector('.description').innerText = data.weather[0].description;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp)+`<span class="weatherUnit">°C</span>`;
        document.querySelector('.location').innerHTML = `${data.weather[0].description} in&nbsp;<span class="city">${data.name}</span> &excl;`;
        //console.log(`${data.name} ${data.weather[0].description} ${data.main.temp} ${data.weather[0].id}`);
      })
      .catch(error=>{
        document.querySelector('.weather').style.background = 'url("https://media.giphy.com/media/26BGDQxDCZDFHW5Ne/giphy.gif") no-repeat center/contain';
        document.querySelector('.weather').style.backgroundColor = 'black';
        document.querySelector('.weather').innerHTML='<p><span class="oops">ooops!!!</span> <br>Looks like something went wrong!<br> Please try to refresh the page.</p>';
      })
    })
  };
  //document.addEventListener('load', geolocationUser);

// }































































//
