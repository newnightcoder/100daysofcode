//------------------------------------------------------------------------------
//                                DATE
//------------------------------------------------------------------------------
let date = document.querySelector('.date');
let today = moment (new Date).format('dddd, MMMM Do YYYY');
date.innerHTML = today;

//------------------------------------------------------------------------------
//                                ADD ITEMS
//------------------------------------------------------------------------------

let addItemsButton = document.querySelector('.fa-plus-circle');
let itemInput = document.querySelector('input');
let itemList = document.querySelector('.list');
let addItemDiv = document.querySelector('.add-item');
let userWarningField = document.querySelector('.userWarning');

function addItem(){
  let newItem = `<li>
                  <i class="far fa-circle"></i>
                  <p>${itemInput.value}</p>
                  <i class="far fa-trash-alt"></i>
                </li>`

  let userWarning = 'Empty item! Please enter a TO-DO'

  if(itemInput.value ==''){
    return userWarningField.innerHTML = userWarning;
  }
  else return itemList.insertAdjacentHTML('beforeend', newItem);
}

function removeUserWarning(){
    return userWarningField.innerHTML = '';
}
function emptyInputField(){
  return itemInput.value='';

}
addItemsButton.addEventListener('click', addItem);
addItemsButton.addEventListener('click', emptyInputField);

itemInput.addEventListener('click', removeUserWarning);

//------------------------------------------------------------------------------
//                                REMOVE ITEMS
//------------------------------------------------------------------------------









































































//
