//------------------------------------------------------------------------------
//                                DATE
//------------------------------------------------------------------------------
let date = document.querySelector('.date');
let today = moment (new Date).format('dddd, MMMM Do YYYY');
date.innerText = today;
let time = document.querySelector('.time');
time.innerText = moment(new Date).locale('fr').format('LT');
//moment.locale();
//------------------------------------------------------------------------------
//                                DOM ELEMENTS
//------------------------------------------------------------------------------

let addItemsButton = document.querySelector('svg');
let itemInput = document.querySelector('#input');
let itemList = document.querySelector('.list');
let addItemDiv = document.querySelector('.add-item');
let userWarningField = document.querySelector('.userWarning');
let userWarning = 'Empty item! Please enter a TO-DO';
let refreshButton = document.querySelector('#refreshButton');
let itemsCounter = document.querySelector('.items-counter');
let trashButton = document.querySelectorAll('.fa-trash-alt');
let item = document.getElementsByClassName('.listItem');
let inputFieldEmpty = true;
let itemsTotal=0;
//itemsCounter.innerHTML='you have no thing to do...';

//------------------------------------------------------------------------------
//                                FUNCTIONS
//------------------------------------------------------------------------------

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
    newItem.innerText=`${itemInput.value}`;
    itemList.insertAdjacentHTML('beforeend', newItem);
    itemsTotal++;
    counterMessage();
  }
}

function animUserWarning(){
  userWarningField.style.animation='messageAnim 3000ms forwards';
}

function selectItem(){
}


function emptyInputField(){
  if(itemInput.value!=='')
   itemInput.value='';
}


function plusButton(){
  addItem();
  emptyInputField();
}

function removeUserWarning(){
  if(userWarningField.innerText==userWarning)
  userWarningField.classList.toggle('userWarningAnim');
    userWarningField.innerHTML = '';
}

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

function rotate(){
    refreshButton.classList.toggle('rotate');

};

function refresh(){
  if(itemList.innerHTML==''){
    itemsCounter.innerText='nothing to delete';
    //refreshButton.style.
  }
  else {
 itemList.innerHTML='';
 itemsTotal=0;
 itemsCounter.innerText= 'everything cleared. you have no thing to do...';
  };
};

//------------------------------------------------------------------------------
//                                EVENTS
//------------------------------------------------------------------------------

addItemsButton.addEventListener('click', plusButton);
refreshButton.addEventListener('click', refresh);
refreshButton.addEventListener('click', rotate);
itemInput.addEventListener('click', removeUserWarning);

// --- KEYBOARD -----//

document.addEventListener('keydown',function(event){
  if(event.keyCode == 13){
    plusButton();
    addItemsButton.style.transform='scale(1.3)';
  }
})

document.addEventListener('keydown',function(event){
  if(event.keyCode !== 13){
    removeUserWarning();
  }
})
document.addEventListener('keyup',function(event){
  if(event.keyCode == 13){
    addItemsButton.style.transform='scale(1)';
  }
})



//------------------------------------------------------------------------------
//                                REMOVE ITEMS
//------------------------------------------------------------------------------

itemList.addEventListener('click', function(event){
  let element = event.target;
  console.log(element);
  console.log(element.parentElement);
  if(event.target.classList.contains('trash')){
    event.preventDefault();
    element.parentElement.style.animation='disappear 1000ms forwards'

    setTimeout(function deleteItem(){
      element.parentElement.style.display='none';
    }, 500);
    itemsTotal--;
    counterMessage();
    //element.parentElement.style.display='none';

  }
})


//------------------------------------------------------------------------------
//                                SELECT ITEMS
//------------------------------------------------------------------------------

document.addEventListener('click', function(event){
  let element = event.target;
  console.log(element);
  console.log(element.parentElement);
  if(element.classList.contains('listItem')){
    element.style.borderTop='2px solid blue';
    element.style.borderBottom='2px solid blue';
    }
})




































































//
