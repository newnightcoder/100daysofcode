// GAME VARIABLES + CONSTANTS
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
const canvas_height = 500;
const canvas_width = 500;

//PADDLE object
let paddle_width = 75;
let paddle_height = 10;
let paddle_color ='#0aeb00';
const paddle = {
  width: paddle_width,
  height: paddle_height,
  x: (canvas_width - paddle_width)/2,
  y: canvas_height -80,
  speed: 5
}
//BALL object
let ball_radius = 8;
let ball_color = '#777';
let ball_stroke = 'tomato'
const ball = {
  radius: ball_radius,
  x: canvas_width/2,
  y:(canvas_height/2)-50,
  xSpeed: 4*(Math.random()*2-1), //to generate random numbers between -4 and 4 for the ball to fall RANDOMLY
  ySpeed: 5
}
//BRICKS
let singleBrick_width = 45;
let singleBrick_height = 10;
let columns = 10;
let rows = 3;
let gap = 2;

const singleBrick = {
  x: singleBrick_width*columns+5, //find the GENERAL FORMULA for x and y of the bricks!
  y: singleBrick_height*rows+10,
  width:singleBrick_width,
  height:singleBrick_height,
}
//the BRICK "ceiling"
const brickCeiling = [singleBrick, columns, rows, gap]

//drawing the bricks
function drawBricks(){
    for(singleBrick.x=10; singleBrick.x<canvas_width-60; singleBrick.x++){
    context.fillStyle = 'yellow';
    context.fillRect(singleBrick.x, singleBrick.y, singleBrick.width, singleBrick.height);
  }

}


//drawing the paddle
function drawPaddle(){
  context.fillStyle = paddle_color;
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

//drawing THE BALL!!!
function drawBall(){
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);
  context.fillStyle = ball_color;
  context.fill();
  context.strokeStyle = ball_stroke;
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
   drawBricks();
   movePaddle();
   moveBall();
   ballCollisionsCanvas();
   ballCollisionsPaddle();
   resetBall();
   requestAnimationFrame(game);
 }
game();
