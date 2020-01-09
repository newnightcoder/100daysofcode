//the fundamentals, in order for the game to EXIST!
let canvas = document.querySelector ('canvas');
let context = canvas.getContext('2d');
context.clearRect(0,0, 400,400);
const canvasWidth = 400;
const canvasHeight = 400;
const paddleWidth = 60;
const paddleHeight = 10;

//coordinates of the paddle
let xPaddle = canvasWidth/2 - paddleWidth/2;
let yPaddle = canvasHeight-70;
let xRight = xPaddle+10;
let xLeft = xPaddle-10;

//the paddle = draw function to draw it (a rectangle) and not type all its code each time!
function drawPaddle(xPaddle, yPaddle){
  context.fillStyle='#0aeb00';
  context.fillRect (xPaddle, yPaddle, paddleWidth, paddleHeight);
}
// drawPaddle(xPaddle, yPaddle);

function loop (){
  context.clearRect(0,0,canvasWidth, canvasHeight);
  drawPaddle(xPaddle, yPaddle);
  if (xPaddle <= canvasWidth-paddleWidth){
    xPaddle += 2;
  }
  else if (xPaddle >= canvasWidth-paddleWidth){
    xPaddle = -2;}

  requestAnimationFrame (loop);
}
loop (); //INVOCATION OF LOOP!!!

// the ball!!!
 // function drawBall (){
 //   context.beginPath();
 //   context.arc (100, -30, 60, 10, 2*Math.PI);
 //   context.strokeSyle='yellow';
 //   context.fillStyle='yellow';
 //   context.stroke();
 //   context.fill();
 // }
 // drawBall();
//move functions
function moveRight(){
  alert('hey!');
  break;
  requestAnimationFrame (moveRight);
  context.clearRect(0,0, canvasWidth,canvasHeight);
  drawPaddle(xPaddle, yPaddle); //i invoke the function that draws the rectangle haha!
  xPaddle = xRight;
};
function moveLeft(){
  alert('hey!');
  break;
  requestAnimationFrame (moveLeft);
  context.clearRect(0,0, canvasWidth,canvasHeight);
  drawPaddle(xPaddle, yPaddle);
  xPaddle = xLeft;
}
// now do i need an update function for the paddle? or to create a delta?  or create loop function.
document.addEventListener('keydown',(event)=>{
  switch(event.keyCode){
      case 39:
      moveRight();
      break;
      case 37:
      moveLeft();
      break;
  }
})
