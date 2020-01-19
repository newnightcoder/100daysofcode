// GAME VARIABLES + CONSTANTS
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
//CANVAS
const canvas_height = 500;
const canvas_width = 500;
//PADDLE constants
const paddle_width = 75 ;
const paddle_height = 10 ;
let xPaddle = (canvas_width - paddle_width)/2 ;
let yPaddle = canvas_height - 80;
let xSpeed = 5;
//BALL constants
let xBall = canvas_width/2;
let yBall = (canvas_height/2)-50;
let ballRadius = 8;
let xBallSpeed = 4*(Math.random()*2-1); //to generate random numbers between -4 and 4! for the ball to fall RANDOMLY!!! YEAH!!
let yBallSpeed = 3;

//drawing the paddle
function drawPaddle(){
  context.fillStyle = '#0aeb00';
  context.fillRect(xPaddle, yPaddle, paddle_width, paddle_height);
}

//drawing THE BALL!!!
function drawBall(){
  context.beginPath();
  context.arc(xBall, yBall, ballRadius, 0, 2*Math.PI);
  context.fillStyle = 'tomato';
  context.fill();
  context.strokeStyle = 'yellow';
  context.stroke();
}

// move the paddle
function movePaddle(){
  if (rightArrow && xPaddle <= (canvas_width - paddle_width) - 8){
    xPaddle += xSpeed;
  }else if (leftArrow && xPaddle>=8){
    xPaddle -= xSpeed;
  }
}

//move the ball
function moveBall(){
    xBall += xBallSpeed; //very basic and easy
    yBall += yBallSpeed;
  }

//ball COLLISIONS!! to NOT put in moveBall() = dedicated functions for collisions detection
function ballCollisionsCanvas(){
  if(yBall+ballRadius > canvas_height){
    yBallSpeed = -yBallSpeed;
  }else if(yBall-ballRadius < 0){
    yBallSpeed = -yBallSpeed;
  }
  if(xBall+ballRadius >= canvas_width){
    xBallSpeed = -xBallSpeed;
  }else if(xBall-ballRadius <0)
    xBallSpeed = -xBallSpeed;
}
function ballCollisionsPaddle(){
  if(yBall+ballRadius == xPaddle){
    yBallSpeed = -yBallSpeed;
  }
}
//ARROWKEYS AS BOOLEANS
let rightArrow = false;
let leftArrow = false;

//eventlisteners for keydown + keyup
document.addEventListener('keydown', function (event){
  switch (event.keyCode){
    case 39: rightArrow = true;
    break;
    case 37: leftArrow = true;
    break;
  }
} )
document.addEventListener('keyup', function (event){
  switch (event.keyCode){
    case 39: rightArrow = false;
    break;
    case 37: leftArrow = false;
    break;
  }
})

 // the game!
 function game(){
   context.clearRect(0, 0, canvas_width, canvas_height);
   drawPaddle();
   drawBall();
   movePaddle();
   moveBall();
   ballCollisionsCanvas();
   ballCollisionsPaddle();

   requestAnimationFrame(game);
 }
game();
