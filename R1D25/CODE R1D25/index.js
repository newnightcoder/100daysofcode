//the fundamentals, in order for the game to EXIST!
let canvas = document.querySelector ('canvas');
let context = canvas.getContext('2d');
context.clearRect(0,0, 400,400);
const canvasWidth = 400;
const canvasHeight = 400;
const paddleWidth = 60;
const paddleHeight = 10;


//drawing the paddle on the canvas + his coordinates as variables.
let xPaddle = canvasWidth/2 - paddleWidth/2;
let yPaddle = canvasHeight-70;
let xSpeed = xPaddle+5;

//let xSpeedMax = 5;
context.fillStyle='#0aeb00';
context.fillRect (xPaddle, yPaddle, paddleWidth, paddleHeight);


function moveRight(){
    xPaddle = xSpeed;
    requestAnimationFrame (moveRight) ;
};
function moveLeft(){
  alert("left key!")
}


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
