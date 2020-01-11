//LET'S GO.

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

const canvasWidth = 400;
const canvasHeight = 400;
const paddleWidth = 80;
const paddleHeight = 10;
let xPaddle = (canvasWidth - paddleWidth)/2;
let yPaddle = canvasHeight - 60;

//draw the paddle
function drawPaddle(){
  context.fillStyle='#0aeb00';
  context.fillRect(xPaddle, yPaddle, paddleWidth, paddleHeight);
}
drawPaddle();

//ARROWS AS BOOLEANS
let rightPress = false;
let leftPress = false;

//the move functions
function movePaddle (){
  requestAnimationFrame();
  context.clearRect (0, 0, canvasWidth, canvasHeight);
  drawPaddle();
}


//the eventlistener
document.addEventListener ('keydown', (movePaddle){
  switch =
  case: event.keyCode==39
  rightPress = true;
  break;
  case: event.keyCode==37
  leftPress = true;
})
