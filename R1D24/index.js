//the fundamentals, in order for the game to EXIST!
let canvas = document.querySelector ('canvas'); // i know getDocumentByID as well, don't worry. 
let context = canvas.getContext('2d');
context.clearRect(0,0, 400,400);

//drawing the rectangle + his coordinates on the canvas as variables.
let x= 170;
let y=340;
context.fillStyle='#0aeb00';
context.fillRect (x, y, 60, 10);

// the move left and right functions: i wrote them at the END OF THE PROCESS but the console needs them IN ADVANCE! LOGICAL!
function moveRight(){
  alert("right key!!!") // let's see if that works, i have no idea haha ;)
};
function moveLeft(){
  alert("left key!")
}
//i had to add the eventListener to the WHOLE DOCUMENT not only the canvas!
//or i can add it to the canvas but then i need a tabindex tag in the html + to tab the canvas in the browser! MINDBLOWING.
//but not sexy at all, so no way. hence:
document.addEventListener('keydown',(event)=>{ //now begins the (event)function launched when 'keydown'!

//the switch statement! yes! = exactly what i want the (event)function to do!
  switch(event.keyCode){
      case 39:
      moveRight(); //IT'S WORKING HAHAHA!!! my functions are recognized!!! WHAT??? (thank you console!!! <3)
      break;
      case 37:
      moveLeft(); //now i have to write the actual MOVE functions! but i do UNDERSTAND!!! LEARNING BY DOING!!! SO COOL!!
      break;
  }
})
