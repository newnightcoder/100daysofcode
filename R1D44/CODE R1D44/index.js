// -----------------------------------------------------------------------------
// INTRO / CANVAS
// -----------------------------------------------------------------------------
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
const canvas_height = 500;
const canvas_width = 500;

// -----------------------------------------------------------------------------
// GAME STATES!!!
// -----------------------------------------------------------------------------
let gameState;
function setGameState(state){
  gameState = state;
}
setGameState('play');
let body = document.querySelector('body');
let startMenu = document.querySelector('start');
let pauseMenu = document.querySelector('pause');
let gameOverMenu = document.querySelector('gameover');

function displayMenu(menu){
  if (gameState = state){
  }
}
// -----------------------------------------------------------------------------
// GAMEPLAY / KEYBOARD CONTROL
// -----------------------------------------------------------------------------
let rightArrow = false;
let leftArrow = false;
let spaceBar = false;

document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 39:
      rightArrow = true;
      break;
    case 37:
      leftArrow = true;
      break;
    case 32:
      spaceBar = true;
      setGameState('pause');
      break;
    }
  }
)
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 39:
      rightArrow = false;
      break;
    case 37:
      leftArrow = false;
      break;
    case 32:
      spaceBar = false;
      break;
    }
  }
)

// -----------------------------------------------------------------------------
// RESET / LIVES / GAME OVER /
// -----------------------------------------------------------------------------
let life = 3;
function loseLife() {
  if (ball.y + ball.radius > paddle.y + paddle.height + 2 * ball.radius) {
    ball.ySpeed = ball.xSpeed = 0;
    life--;
    setTimeout(resetBall,1200);
  }
    function resetBall(){
      ball.x = canvas_width/2;
      ball.y =(canvas_height/2)-50;
      ball.xSpeed = 2*(Math.random()*2-1);
      ball.ySpeed = 4;
  }
}

function gameOver(){
  if (life = 0) {
    setGameState('gameover');
  }
}
// if (gameState=='gameover'){
//
// }

// -----------------------------------------------------------------------------
// PADDLE
// -----------------------------------------------------------------------------
const paddle_width = 70;
const paddle_height = 8;
const paddle = {
  width: paddle_width,
  height: paddle_height,
  x: (canvas_width - paddle_width) / 2,
  y: canvas_height - 80,
  speed: 5,
  color: '#0aeb00' //'#999'//
}
function drawPaddle() {
  context.fillStyle = paddle.color;
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}
function movePaddle() {
  if (rightArrow && paddle.x <= (canvas_width - paddle.width) - 8) {
    paddle.x += paddle.speed;
  } else if (leftArrow && paddle.x >= 8) {
    paddle.x -= paddle.speed;
  }
}

// -----------------------------------------------------------------------------
// BALL
// -----------------------------------------------------------------------------
const ball = {
  radius: 6,
  x: canvas_width / 2,
  y: (canvas_height / 2) - 50,
  xSpeed: 4 * (Math.random() * 2 - 1), // for the ball to fall RANDOMLY with -4<xSpeed<4
  ySpeed: 5,
  color: '#777', //'#0aeb00'
  stroke: 'tomato'
}
function drawBall() {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  context.fillStyle = ball.color;
  context.fill();
  context.strokeStyle = ball.stroke;
  context.stroke();
  context.closePath();
}
function moveBall() {
  ball.x += ball.xSpeed; //
  ball.y += ball.ySpeed;
}

// -----------------------------------------------------------------------------
// the BRICKS!!
// -----------------------------------------------------------------------------
const brick_width = 45;
const brick_height = 10;
const brick = {
  x: brick_width + 20,
  y: brick_height + 15,
  width: brick_width,
  height: brick_height,
  columns: 6,
  rows: 3
}
//create the bricks as a TABLE (nested for loop)
let bricks=[];
function createBricks() {
  for (r = 0; r < brick.rows; r++) {
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++) {
        bricks[r][c];
        bricks[r][c]={
          x: c*brick.x + 70,
          y: r*brick.y + 20
      };
    }
  }
}
function drawBricks(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){
      let b1=bricks[0][c];
      if(b1){
        context.fillStyle='#FFD700'; //gold color!
        context.fillRect(b1.x, b1.y, brick_width, brick_height);
      };
      let b2=bricks[1][c];
      if(b2){
        context.fillStyle='pink';
        context.fillRect(b2.x, b2.y, brick_width, brick_height);
      };
      let b3=bricks[2][c];
      if(b3){
        context.fillStyle='lightblue';
        context.fillRect(b3.x, b3.y, brick_width, brick_height);
      };
    }
  }
}

// -----------------------------------------------------------------------------
// COLLISIONS !!!
// -----------------------------------------------------------------------------
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
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){ //nested for loops needed to have access to the bricks[][] again.
      let b=bricks[r][c];
        if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y &&ball.y-ball.radius<b.y+brick.height) {
            ball.ySpeed = -ball.ySpeed;
      }
    }
  }
}
// -----------------------------------------------------------------------------
// GAME LOOP
// -----------------------------------------------------------------------------
// main game functions
//
function draw(){
  drawPaddle();
  drawBall();
  createBricks();
  drawBricks();
}
function move(){
  moveBall();
  movePaddle();
}
function collisions(){
  ballCollisionsPaddle();
  ballCollisionsCanvas();
  ballCollisionsBricks();
}
//------------------------------------------------------------------------------
function game() {
  context.clearRect(0, 0, canvas_width, canvas_height);
  draw();
  //gameOver();
  if (gameState == 'play'){
  move();
  collisions();
  loseLife();
  requestAnimationFrame(game);
  }
}
game();
