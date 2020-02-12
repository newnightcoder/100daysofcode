// -----------------------------------------------------------------------------
//                             CANVAS + DOM VARIABLE
// -----------------------------------------------------------------------------

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
const canvas_height = 500;
let canvas_width = 500;
let body = document.querySelector('#body');
let home = document.querySelector('#welcome');
let playButton = document.querySelector('.play-game');
let gamescreen = document.querySelector('#game');
let startButton = document.querySelector('#start');
let pause = document.querySelector('#pause');
let gameOverMenu = document.querySelector('#gameover');
let footer = document.querySelector('footer')
let windows=window.innerHeight;

// -----------------------------------------------------------------------------
//                                GAME STATES AND DISPLAY !!!
// -----------------------------------------------------------------------------
playButton.onclick = displayStartGame;
startButton.onclick = displayGame;

let gameState;

function setGameState(state){
  gameState = state;
}

function displayStartGame(){
  setGameState('level1');
  displayLevel();
}

function displayGame(){
  startButton.style.display='none';
  if(gameState=='level1'){
  setGameState('playL1');
  }
   else if(gameState=='level2'){
  setGameState('playL2');
  }
  else if(gameState=='level3'){
  setGameState('playL3');
  }
  else if(gameState=='level4'){
  setGameState('playL4');
  }
}

function displayPause(){
  if (gameState=='pauseL1'||gameState=='pauseL2'||gameState=='pauseL3'||gameState=='pauseL4'){
    pause.style.display='block';
  }
  if (gameState=='playL1'||gameState=='playL2'||gameState=='playL3'||gameState=='playL4'){
      pause.style.display='none';
  }
}

function displayGameOver(){
  if (gameState=='gameover'){
    gameOverMenu.style.display='block';
  }
}
function background(){
  body.style.backgroundRepeat='no-repeat';
  body.style.backgroundPosition='center';
  body.style.backgroundSize='101%';
}

function displayLevel(){
  home.style.display='none';
  canvas.style.backgroundColor='black';
  if (gameState=='level1'){
    body.style.backgroundImage="url('img/tile008.png')";
    background();
  }
  if (gameState=='level2'){
    body.style.backgroundImage="url('img/tile001.png')";
    canvas.style.borderColor='pink';
    background();
  }
  if (gameState=='level3'){
    body.style.backgroundImage="url('img/tile004.png')";
    canvas.style.borderColor='orange';
    background();
  }
  if (gameState=='level4'){
    canvas.style.removeProperty("background-color");
    body.style.backgroundImage="url('img/home2.png')";
    body.style.backgroundSize='40%';
    body.style.backgroundRepeat='repeat';
    body.style.backgroundPosition='center';
    canvas.style.border='none';
  }
  gamescreen.style.display='flex';
  startButton.style.display='block';
  footer.style.display='none';
}

// -----------------------------------------------------------------------------
//                          GAMEPLAY / KEYBOARD CONTROL
// -----------------------------------------------------------------------------
let rightArrow = false;
let leftArrow = false;
let spaceBar = false;

document.addEventListener('keydown', function(event) {
  if (event.keyCode==39)
      rightArrow = true;

  if (event.keyCode==37)
      leftArrow = true;

  if (event.keyCode==32){ //yeah this is for PAUSE! LOL. i already know i'll have to RE-CODE for this in the future omg! LOL!!!
    if (gameState=='playL1'){
      spaceBar=true;
      setGameState('pauseL1');
      displayPause();
    } else if(gameState=='pauseL1'){
      setGameState('playL1');
      displayPause();
    }
    if (gameState=='playL2'){
      spaceBar=true;
      setGameState('pauseL2');
      displayPause();
    } else if(gameState=='pauseL2'){
      setGameState('playL2');
      displayPause();
    }
    if (gameState=='playL3'){
      spaceBar=true;
      setGameState('pauseL3');
      displayPause();
    } else if(gameState=='pauseL3'){
      setGameState('playL3');
      displayPause();
    }
    if (gameState=='playL4'){
      spaceBar=true;
      setGameState('pauseL4');
      displayPause();
    } else if(gameState=='pauseL4'){
      setGameState('playL4');
      displayPause();
    }
  }
})

document.addEventListener('keyup', function(event) {
  if (event.keyCode==39)
      rightArrow = false;

  if (event.keyCode==37)
      leftArrow = false;

  if (event.keyCode==32)
      spaceBar=false;
  }
)
// -----------------------------------------------------------------------------
//                             LIVES / GAME OVER / LEVELS
// -----------------------------------------------------------------------------

let life = 10;
function loseLife(){
    life--;
    gameOver();
}

function gameOver(){
  if (life == 0){
    setGameState('gameover');
    displayGameOver();
  }
}

let levelWon=true;
//------------------------- THE PROBLEM STARTS OBVIOUSLY HERE?? ----------------------------------------
function levelUp(){
  for (r=0; r<brick.rows; r++){
    for (c=0; c<brick.columns; c++){

        let b=bricks[r][c];

        levelWon=levelWon&&!b.unbroken; //THAT'S WHERE THE PROBLEM HAPPENS! if you try levelWon = !b.unbroken ("seems" logical..), PLAY AND LOOK what happens!!!

        if (levelWon&&gameState=='playL1'){
          setGameState('level2');
          displayLevel();
        }
        if (levelWon&&gameState=='playL2'){
          setGameState('level3');
          displayLevel();
        }
        if (levelWon&&gameState=='playL3'){
          setGameState('level4');
          displayLevel();
        }
        if (levelWon&&gameState=='playL4'){
          setGameState('');
          displayLevel();
        }
      }
    }
  }
// -----------------------------------------------------------------------------
//                                  PADDLE
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
//                                  BALL
// -----------------------------------------------------------------------------

const ball = {
  radius: 6,
  x: canvas_width / 2,
  y: (canvas_height / 2) - 50,
  xSpeed: 4*(Math.random() * 2 - 1), // for the ball to fall RANDOMLY with -4<xSpeed<4
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
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
}

function reset(){
  ball.x= canvas_width / 2;
  ball.y= (canvas_height / 2) - 50;
  ball.xSpeed= 4*(Math.random() * 2 - 1);
  ball.ySpeed= 5;
}

function resetBall(){
  if (ball.y + ball.radius > paddle.y + paddle.height + 2 * ball.radius){
    ball.ySpeed = ball.xSpeed = 0;
    loseLife();
    // setTimeout(3000);
    // if (gameState == 'play' || gameState=='level1' || gameState=='level2'){
      reset();
    // }
  }
}
// -----------------------------------------------------------------------------
//                                 the BRICKS!!
// -----------------------------------------------------------------------------

const brick_width = 45;
const brick_height = 10;
const brick = {
  x: brick_width + 20,
  y: brick_height + 15,
  width: brick_width,
  height: brick_height,
  columns: 6,
  rows: 6,
}

let bricks=[];
//create the bricks as a TABLE (nested for loop)
function createBricksL1() {
  for (r = 0; r < 3; r++) {
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++) {
        bricks[r][c]={
          x: c*brick.x + 70,
          y: r*brick.y + 20,
          unbroken:true
      };
    }
  }
}
createBricksL1();

function drawBricksL1(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){

      let b1=bricks[0][c];
      if(b1.unbroken){
        context.fillStyle='#FFD700'; //gold color!
        context.fillRect(b1.x, b1.y, brick_width, brick_height);
      }
      let b2=bricks[1][c];
      if(b2.unbroken){
        context.fillStyle='pink';
        context.fillRect(b2.x, b2.y, brick_width, brick_height);
      }
      let b3=bricks[2][c];
      if(b3.unbroken){
        context.fillStyle='lightblue';
        context.fillRect(b3.x, b3.y, brick_width, brick_height);
      }
    };
  }
}
//------------------------ BRICKS LEVEL 2 --------------------------------------
function createBricksL2() {
  for (r = 0; r <brick.rows; r++) {
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++) {
        bricks[r][c]={
          x: c*brick.x + 70,
          y: r*brick.y + 20,
          unbroken:true
      };
    }
  }
}
createBricksL2();

function drawBricksL2(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){
      let b1=bricks[r][0];
      if(b1.unbroken){
        context.fillStyle='#e40303';
        context.fillRect(b1.x, b1.y, brick_width, brick_height);
      }
      let b2=bricks[r][1];
      if(b2.unbroken){
        context.fillStyle='orange';
        context.fillRect(b2.x, b2.y, brick_width, brick_height);
      }
      let b3=bricks[r][2];
      if(b3.unbroken){
        context.fillStyle='yellow';
        context.fillRect(b3.x, b3.y, brick_width, brick_height);
      }
      let b4=bricks[r][3];
      if(b4.unbroken){
        context.fillStyle='green';
        context.fillRect(b4.x, b4.y, brick_width, brick_height);
      }
      let b5=bricks[r][4];
      if(b5.unbroken){
        context.fillStyle='#004dff';
        context.fillRect(b5.x, b5.y, brick_width, brick_height);
      }
      let b6=bricks[r][5];
      if(b6.unbroken){
        context.fillStyle='#750787';
        context.fillRect(b6.x, b6.y, brick_width, brick_height);
      }
    };
  }
}
//------------------------ BRICKS LEVEL 3 --------------------------------------
function createBricksL3() {
  for (r = 0; r < 4; r++) {
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++) {
        bricks[r][c]={
          x: c*brick.x + 70,
          y: r*brick.y + 20,
          unbroken:true
      };
    }
  }
}
createBricksL3();

function drawBricksL3(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){

      let b1=bricks[r][0];
      if(b1.unbroken){
        context.fillStyle='red';
        context.fillRect(b1.x, b1.y, brick_width, brick_height);
      }
      let b2=bricks[r][1];
      if(b2.unbroken){
        context.fillStyle='red';
        context.fillRect(b2.x, b2.y, brick_width, brick_height);
      }
      let b3=bricks[r][2];
      if(b3.unbroken){
        context.fillStyle='#00d300';
        context.fillRect(b3.x, b3.y, brick_width, brick_height);
      }
      let b4=bricks[r][3];
      if(b4.unbroken){
        context.fillStyle='#00d300';
        context.fillRect(b4.x, b4.y, brick_width, brick_height);
      }
      let b5=bricks[r][4];
      if(b5.unbroken){
        context.fillStyle='blue';
        context.fillRect(b5.x, b5.y, brick_width, brick_height);
      }
      let b6=bricks[r][5];
      if(b6.unbroken){
        context.fillStyle='blue';
        context.fillRect(b6.x, b6.y, brick_width, brick_height);
      }
    };
  }
}
//------------------------ BRICKS LEVEL 4 --------------------------------------
function createBricksL4() {
  for (r = 0; r < 4; r++) {
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++) {
        bricks[r][c]={
          x: c*brick.x + 70,
          y: r*brick.y + 20,
          unbroken:true
      };
    }
  }
}
createBricksL4();

function drawBricksL4(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){

      let b1=bricks[r][0];
      if(b1.unbroken){
        context.fillStyle='black';
        context.fillRect(b1.x, b1.y, brick_width, brick_height);
      }
      let b2=bricks[r][1];
      if(b2.unbroken){
        context.fillStyle='black';
        context.fillRect(b2.x, b2.y, brick_width, brick_height);
      }
      let b3=bricks[r][2];
      if(b3.unbroken){
        context.fillStyle='black';
        context.fillRect(b3.x, b3.y, brick_width, brick_height);
      }
      let b4=bricks[r][3];
      if(b4.unbroken){
        context.fillStyle='black';
        context.fillRect(b4.x, b4.y, brick_width, brick_height);
      }
      let b5=bricks[r][4];
      if(b5.unbroken){
        context.fillStyle='black';
        context.fillRect(b5.x, b5.y, brick_width, brick_height);
      }
      let b6=bricks[r][5];
      if(b6.unbroken){
        context.fillStyle='black';
        context.fillRect(b6.x, b6.y, brick_width, brick_height);
      }
    };
  }
}
// -----------------------------------------------------------------------------
//                                 COLLISIONS !!!
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
  if (ball.y + 3 > paddle.y && ball.x > paddle.x && ball.x < paddle.x + paddle.width){
    ball.ySpeed = -ball.ySpeed;
  }
}
function ballCollisionsBricks() {
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){ //nested for loops needed to have access to the bricks[][] again.

      let b1=bricks[0][c];
      if (b1.unbroken){
        if(ball.x + ball.radius > b1.x && ball.x - ball.radius < b1.x + brick.width && ball.y + ball.radius > b1.y &&ball.y-ball.radius<b1.y+brick.height){
          b1.unbroken=false;
          ball.ySpeed = -ball.ySpeed;
        }
      }

      let b2=bricks[1][c];
      if (b2.unbroken){
        if(ball.x + ball.radius > b2.x && ball.x - ball.radius < b2.x + brick.width && ball.y + ball.radius > b2.y &&ball.y-ball.radius<b2.y+brick.height){
          b2.unbroken=false;
          ball.ySpeed = -ball.ySpeed;
        }
      }
      let b3=bricks[2][c];
      if (b3.unbroken){
        if(ball.x + ball.radius > b3.x && ball.x - ball.radius < b3.x + brick.width && ball.y + ball.radius > b3.y &&ball.y-ball.radius<b3.y+brick.height){
          b3.unbroken=false;
          ball.ySpeed = -ball.ySpeed;
        }
      }
        let b4=bricks[3][c];
        if (gameState=='playL2'&& b4.unbroken||gameState=='playL3'&& b4.unbroken||gameState=='playL4'&& b4.unbroken){
          if(ball.x + ball.radius > b4.x && ball.x - ball.radius < b4.x + brick.width && ball.y + ball.radius > b4.y &&ball.y-ball.radius<b4.y+brick.height){
            b4.unbroken=false;
            ball.ySpeed = -ball.ySpeed;
          }
        }
        let b5=bricks[4][c];
        if (gameState=='playL2'&& b5.unbroken||gameState=='playL3'&& b5.unbroken||gameState=='playL4'&& b5.unbroken){
          if(ball.x + ball.radius > b5.x && ball.x - ball.radius < b5.x + brick.width && ball.y + ball.radius > b5.y &&ball.y-ball.radius<b5.y+brick.height){
            b5.unbroken=false;
            ball.ySpeed = -ball.ySpeed;
          }
        }
          let b6=bricks[5][c];
          if (gameState=='playL2'&& b6.unbroken||gameState=='playL3'&& b6.unbroken||gameState=='playL4'&& b6.unbroken){
            if(ball.x + ball.radius > b6.x && ball.x - ball.radius < b6.x + brick.width && ball.y + ball.radius > b6.y &&ball.y-ball.radius<b6.y+brick.height){
              b6.unbroken=false;
              ball.ySpeed = -ball.ySpeed;
        }
      }
    }
  }
}

// -----------------------------------------------------------------------------
//                                  GAME LOOP FUNCTIONS
// -----------------------------------------------------------------------------

function draw(){
  drawPaddle();
  drawBall();
  if (gameState=='level1'||gameState=='playL1'||gameState=='pauseL1'){
  drawBricksL1();
  }
  if (gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'){
    drawBricksL2();
  }
  if (gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'){
    drawBricksL3();
  }
  if (gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'){
    drawBricksL4();
  }
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
//--------------------------
function game() {
  context.clearRect(0, 0, canvas_width, canvas_height);
  draw();
 if (gameState=='play'||gameState=='playL1'||gameState=='playL2'||gameState=='playL3'||gameState=='playL4')
    move();
    collisions();
    resetBall();
    levelUp();
    requestAnimationFrame(game);
}
game();
