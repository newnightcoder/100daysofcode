//------------------------------------------------------------------------------
//                                DATE
//------------------------------------------------------------------------------
let date = document.querySelector('.date');
let today = moment (new Date).format('dddd, MMMM Do YYYY');
date.innerHTML = today;
let time = document.querySelector('.time');
time.innerHTML = moment(new Date).locale('fr').format('LT');
//moment.locale();
//------------------------------------------------------------------------------
//                                ADD ITEMS
//------------------------------------------------------------------------------

let addItemsButton = document.querySelector('svg');
let itemInput = document.querySelector('input');
let itemList = document.querySelector('.list');
let addItemDiv = document.querySelector('.add-item');
let userWarningField = document.querySelector('.userWarning');
let userWarning = 'Empty item! Please enter a TO-DO';
let refreshButton = document.querySelector('.fa-sync-alt');
let itemsCounter = document.querySelector('.items-counter');
let trashButton = document.getElementsByClassName('.fa-trash-alt');
let item = document.querySelectorAll('.listItem');
let inputFieldEmpty = true;

let itemsTotal=0;
let itemsCounterMessage ='you have nothing to do';
itemsCounter.innerHTML=itemsCounterMessage;

function addItem(){
  let newItem = `<li class="listItem">
                  <i class="far fa-circle"></i>
                  <p class="item">${itemInput.value}</p>
                  <i class="far fa-trash-alt"></i>
                </li>`
  if(itemInput.value ==''){
//    inputFieldEmpty = true
    userWarningField.style.animation='messageAnim 500ms forwards';
    userWarningField.innerHTML = userWarning;
  }
  else {
  //  inputFieldEmpty = false;
    itemList.insertAdjacentHTML('beforeend', newItem);
    itemsTotal++;
    counterMessage();
  }
}

function deleteItem(){
  newItem.innerHTML='';
}

trashButton.onclick=deleteItem;

function plusButton(){
  addItem();
  emptyInputField();
}

function removeUserWarning(){
  if(userWarningField.innerHTML==userWarning)
    userWarningField.style.animation = 'disappear 500ms forwards';;
}

function emptyInputField(){
  if(itemInput.value!=='')
   itemInput.value='';
}

function counterMessage(){
  if(itemsTotal==0){
    itemsCounter.innerHTML= 'you have nothing to do!';
}
  if(itemsTotal==1){
    itemsCounterMessage='you have <span class="counter">1</span> thing to do';
    itemsCounter.innerHTML= itemsCounterMessage;
}
  else{
     itemsCounterMessage = `you have <span class="counter">${itemsTotal}</span> things to do!`;
     itemsCounter.innerHTML= itemsCounterMessage;
  }
}

function refresh(){
 refreshButton.style.transform = 'rotate(180deg)';
 itemList.innerHTML='';
 itemsTotal=0;
 itemsCounter.innerHTML= 'everything cleared. you have nothing to do';
};

addItemsButton.onclick= plusButton;
refreshButton.onclick=refresh;

//addItemsButton.addEventListener('click', addItem);
//addItemsButton.addEventListener('click', launchMessageAnim);
//addItemsButton.addEventListener('click', emptyInputField);
itemInput.addEventListener('focus', removeUserWarning);




//------------------------------------------------------------------------------
//                                REMOVE ITEMS
//------------------------------------------------------------------------------









































































//
