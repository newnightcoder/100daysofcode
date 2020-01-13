// ARKANOID MINI: constants + fundamental variables.
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const PADDLE_LENGTH = 70;
const PADDLE_HEIGHT = 12;
let xPaddle = (CANVAS_WIDTH - PADDLE_LENGTH)/2;
let yPaddle = CANVAS_HEIGHT - 60;
let xSpeed = 5;

//draw function for the paddle
function drawPaddle(){
  context.clearRect(0,0, CANVAS_HEIGHT, CANVAS_HEIGHT);
  context.fillStyle='#0aeb00';
  context.fillRect(xPaddle, yPaddle, PADDLE_LENGTH, PADDLE_HEIGHT);
}

// define ARROWKEYS AS BOOLEANS!
let rightPress = false;
let leftPress = false;

// 2 eventlisteners: for keydown but also KEYUP!!! without keyup there is no "gameplay"!
document.addEventListener ('keydown', function(event){
  switch (event.keyCode){
  case 39:
  rightPress=true;
  break;
  case 37:
  leftPress=true;
  break;}
})
document.addEventListener ('keyup', function(event){
  switch (event.keyCode){
  case 39:
  rightPress=false;
  break;
  case 37:
  leftPress=false;
  break;
  }
})

// move the paddle
function movePaddle (){
  if (rightPress && xPaddle<CANVAS_WIDTH-PADDLE_LENGTH-5){
    xPaddle += xSpeed ;
  }
  else if (leftPress && xPaddle>=8) {
    xPaddle -= xSpeed;
  }
}
//
function game () {
  drawPaddle();
  movePaddle();
  requestAnimationFrame(game);
}
game(); //invocation of game WORKS!!!
