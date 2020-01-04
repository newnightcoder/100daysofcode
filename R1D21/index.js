//my first js file ever haha!!
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');


//ball/circle
context.beginPath();
context.arc(200, 130, 8, 0, 2*Math.PI, false);
context.strokeStyle ='#0aeb00';
context.stroke();

//movement of the paddle
let xPaddle = 230;
let xSpeed = 2;

function paddleMove() {
  requestAnimationFrame(paddleMove);
  // to clear the canvas from the movement
  context.clearRect(0, 0, innerWidth, innerHeight);
  //paddle/rectangle included in its own movement function
  context.fillStyle='#0aeb00';
  context.fillRect (xPaddle, 330, 60, 10);

  if (xPaddle > 345 || xPaddle < 0){
      xSpeed = -xSpeed;
  }
   xPaddle += xSpeed;
 }
paddleMove()
