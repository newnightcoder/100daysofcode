// GAME VARIABLES + CONSTANTS
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
const canvas_height = 500;
const canvas_width = 500;

// GAME STATES!!!
let gameState;
function setGameState(state){
  gameState = state;
}
setGameState('stop');

//PADDLE object
let paddle_width = 75;
let paddle_height = 10;
const paddle = {
  width: paddle_width,
  height: paddle_height,
  x: (canvas_width - paddle_width) / 2,
  y: canvas_height - 80,
  speed: 5,
  color: '#0aeb00' //'#999'//
}
//BALL object
const ball = {
  radius: 8,
  x: canvas_width / 2,
  y: (canvas_height / 2) - 50,
  xSpeed: 4 * (Math.random() * 2 - 1), //to generate random numbers between -4 and 4 for the ball to fall RANDOMLY
  ySpeed: 5,
  color: '#777', //'#0aeb00'
  stroke: 'tomato'
}
//BRICK object
let brick_width = 45;
let brick_height = 10;
let brick = {
  x: brick_width + 20,
  y: brick_height + 10,
  width: brick_width,
  height: brick_height,
  columns: 6,
  rows: 3
}

//drawing the paddle
function drawPaddle() {
  context.fillStyle = paddle.color;
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

//drawing THE BALL!!!
function drawBall() {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  context.fillStyle = ball.color;
  context.fill();
  context.strokeStyle = ball.stroke;
  context.stroke();
}

//drawing the bricks as a TABLE (nested for loop)
function drawBricks() {
  for (r = 0; r < brick.rows; r++) {
    for (c = 0; c < brick.columns; c++) {
      if (r = 1) {
        context.fillStyle = 'pink';
        context.fillRect(c * brick.x + 70, r * brick.y + 20, brick.width, brick.height);
      }
      if (r = 2) {
        context.fillStyle = 'lightblue';
        context.fillRect(c * brick.x + 70, r * brick.y + 20, brick.width, brick.height);
      }
      if (r = 3) {
        context.fillStyle = 'yellow';
        context.fillRect(c * brick.x + 70, r * brick.y + 20, brick.width, brick.height);
      }
    }
  }
}
// move the paddle
function movePaddle() {
  if (rightArrow && paddle.x <= (canvas_width - paddle.width) - 8) {
    paddle.x += paddle.speed;
  } else if (leftArrow && paddle.x >= 8) {
    paddle.x -= paddle.speed;
  }
}

//move the ball
function moveBall() {
  ball.x += ball.xSpeed; //very basic and easy
  ball.y += ball.ySpeed;
}

//ball COLLISIONS!! to NOT put in moveBall() = dedicated functions for collisions detection
function ballCollisionsCanvas() {
  if (ball.y + ball.radius > canvas_height) {
    ball.ySpeed = -ball.ySpeed;
  } else if (ball.y - ball.radius < 0) {
    ball.ySpeed = -ball.ySpeed;
  }
  if (ball.x + ball.radius >= canvas_width) {
    ball.xSpeed = -ball.xSpeed;
  } else if (ball.x - ball.radius < 0)
    ball.xSpeed = -ball.xSpeed;
}

function ballCollisionsPaddle() {
  if (ball.y + 3 > paddle.y && ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
    ball.ySpeed = -ball.ySpeed;
  }
}

function ballCollisionsBricks() {
  if (ball.x + ball.radius > brick.x && ball.x - ball.radius < brick.x + brick.width && ball.y + ball.radius > brick.y &&ball.y-ball.radius<brick.y+brick.height) {
    ball.ySpeed = -ball.ySpeed;
  }
}

//RESET

let life = 3;
function loseLife() {
  if (ball.y + ball.radius > paddle.y + paddle.height + 2 * ball.radius) {
    ball.ySpeed = ball.xSpeed = 0;
    life--;
    setTimeout(resetBall,1200);
    function resetBall(){
      ball.x = canvas_width/2;
      ball.y =(canvas_height/2)-50;
      ball.xSpeed = 2*(Math.random()*2-1);
      ball.ySpeed = 4;
      }
  }
}
function gameOver(){
  if (life == 0) {
    setGameState('gameover');
  }
}
// if (gameState=='gameover'){
//
// }

//ARROWKEYS AS BOOLEANS
let rightArrow = false;
let leftArrow = false;

//eventlisteners for keydown + keyup
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 39:
      rightArrow = true;
      break;
    case 37:
      leftArrow = true;
      break;
  }
})
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 39:
      rightArrow = false;
      break;
    case 37:
      leftArrow = false;
      break;
  }
})

// the game!
function game() {
  context.clearRect(0, 0, canvas_width, canvas_height);
  drawPaddle();
  drawBall();
  drawBricks();
  movePaddle();
  moveBall();
  ballCollisionsCanvas();
  ballCollisionsPaddle();
  ballCollisionsBricks();
  loseLife();
  //gameOver();
  if (gameState == 'play'){
  requestAnimationFrame(game);
  }
}
game();
