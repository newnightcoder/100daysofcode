// GAME VARIABLES + CONSTANTS
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
const canvas_height = 500;
const canvas_width = 500;

//PADDLE object
const paddle_width = 75;
const paddle_height = 10;
const paddle = {
  width: paddle_width,
  height: paddle_height,
  x: (canvas_width - paddle_width)/2,
  y: canvas_height -80,
  speed: 5
}
//BALL object
const ball_radius = 8;
const ball = {
  radius: ball_radius,
  x: canvas_width/2,
  y:(canvas_height/2)-50,
  xSpeed: 4*(Math.random()*2-1), //to generate random numbers between -4 and 4 for the ball to fall RANDOMLY
  ySpeed: 5
}

//drawing the paddle
function drawPaddle(){
  context.fillStyle = '#0aeb00';
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

//drawing THE BALL!!!
function drawBall(){
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);
  context.fillStyle = 'tomato';
  context.fill();
  context.strokeStyle = 'yellow';
  context.stroke();
}

// move the paddle
function movePaddle(){
  if(rightArrow && paddle.x <= (canvas_width-paddle.width)-8){
    paddle.x += paddle.speed;
  }else if(leftArrow && paddle.x >= 8){
    paddle.x -= paddle.speed;
  }
}

//move the ball
function moveBall(){
    ball.x += ball.xSpeed; //very basic and easy
    ball.y += ball.ySpeed;
  }

//ball COLLISIONS!! to NOT put in moveBall() = dedicated functions for collisions detection
function ballCollisionsCanvas(){
  if(ball.y + ball.radius > canvas_height){
    ball.ySpeed = -ball.ySpeed;
  }else if(ball.y - ball.radius < 0){
    ball.ySpeed = -ball.ySpeed;
  }
  if(ball.x + ball.radius >= canvas_width){
    ball.xSpeed = -ball.xSpeed;
  }else if(ball.x - ball.radius < 0)
    ball.xSpeed = -ball.xSpeed;
}
function ballCollisionsPaddle(){
  if(ball.y+3 > paddle.y && ball.x > paddle.x && ball.x < paddle.x + paddle.width){
    ball.ySpeed = -ball.ySpeed;
  }
}
//RESET
function resetBall(){
   if(ball.y + ball.radius > paddle.y + paddle.height + 2*ball.radius){
     ball.ySpeed = ball.xSpeed = 0;
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
   resetBall();
   requestAnimationFrame(game);
 }
game();
