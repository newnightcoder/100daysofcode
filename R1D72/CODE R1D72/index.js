//
// 1- DOM variables
// 2- game states + display styling
// 3- game play/keyboard control
// 4- sounds
// 5- game stats/lives/gameover
// 6- levels
// 7- paddle
// 8- ball
// 9- bricks
// 10- collisions
// ---> game loop functions

// -----------------------------------------------------------------------------
//                            1- DOM VARIABLES
// -----------------------------------------------------------------------------

let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
const canvas_height = 550;
const canvas_width = 550;
let body = document.querySelector('#body');
let home = document.querySelector('#welcome');
let intro = document.querySelector('#intro');
let skipButton = document.querySelector('.skip');
let introButton = document.querySelector('.toLevel1');
let gameRules = document.querySelector('.gameRules');
let playButton = document.querySelector('.playGame');
let restartButton = document.querySelector('#restart')
let gamescreen = document.querySelector('#game');
let startButton = document.querySelector('#start');
let pause = document.querySelector('#pause');
let gameOverMenu = document.querySelector('#gameover');
let windows=window.innerHeight;

// -----------------------------------------------------------------------------
//                          2- GAME STATES + DISPLAY STYLING
// -----------------------------------------------------------------------------


let gameState='level3';
function setGameState(state){
  gameState = state;
}

playButton.onclick =  displayLevel;
skipButton.onclick = displayLevel;
introButton.onclick = displayLevel;

function displayGame(){
  startButton.style.display='none';
  if(gameState=='level1'){
  setGameState('playL1');
  soundLevel1.play();
  } else if(gameState=='level2'){
  setGameState('playL2');
  soundLevel2.play();
  } else if(gameState=='level3'){
  setGameState('playL3');
  soundLevel3.play();
  } else if(gameState=='level4'){
  setGameState('playL4');
  soundLevel4.play();
  } else if(gameState=='level5'){
  setGameState('playL5');
  soundLevel5.play();
  }
}

function displayPause(){
  if (gameState=='pauseL1'||gameState=='pauseL2'||gameState=='pauseL3'||gameState=='pauseL4'||gameState=='pauseL5'){
    pause.style.display='block';
  }
  if (gameState=='playL1'||gameState=='playL2'||gameState=='playL3'||gameState=='playL4'||gameState=='playL5'){
      pause.style.display='none';
  }
}

function displayGameOver(){
  if (gameState=='gameover'){
    gameOverMenu.style.display='flex';
    setTimeout(displayRestartGame, 8500);
  }
}

function displayRestartGame(){
  restartButton.style.display='block';
}

let levelName=document.querySelector('.levelName');
function displayLevelName(){

  if (gameState=='level1'||gameState=='playL1'||gameState=='pauseL1'){
    levelName.innerHTML='ROUND 1 <br> Once in a while';
  } else if (gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'){
      levelName.innerHTML='ROUND 2 <br> Blame it on the goose !';
  } else if (gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'){
      levelName.innerHTML='ROUND 3 <br> Proof in the puddin';
  } else if (gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'){
      levelName.innerHTML='ROUND 4 <br> D O H&apos;s Mount';
  } else if (gameState=='level5'||gameState=='playL5'||gameState=='pauseL5'){
      levelName.innerHTML='DEFEAT D O H !!!';
  } else if(gameState=='ending'){
      levelName.innerHTML='THE END<br> "Thats all folks! "';
  }
}

function backgroundCanvas(){
  canvas.style.backgroundRepeat='no-repeat';
  canvas.style.backgroundPosition='top';
  canvas.style.backgroundSize='cover';
}

function backgroundBody(){
  body.style.backgroundRepeat='no-repeat';
  body.style.backgroundPosition='center';
  body.style.backgroundSize='120%'; //50%
}

function displayLevel(){
  home.style.display='none';
  gamescreen.style.display='flex';
  startButton.style.display='block';


  if (gameState=='home'){
    setGameState('intro');
    soundIntro.play();
  } else if (gameState=='intro'){
      setGameState('level1');
      soundIntro.pause();
    }
  if (gameState=='intro'){
    intro.style.display='block';
    startButton.style.display='none';
    restartButton.style.display='none';
    canvas.style.display='none';
  }
  if (gameState=='level1'){
    intro.style.display='none';
    gameRules.style.visibility='visible';
    canvas.style.display='block';
    canvas.style.backgroundImage="url('img/tilelevel5.png')";
    body.style.backgroundImage= 'radial-gradient(blue, pink)';
    displayLevelName();
    backgroundCanvas();
  }
   if (gameState=='level2'){
    canvas.style.backgroundImage="url('img/tilelevel2.png')";
    body.style.backgroundImage= 'radial-gradient(red,orange)';
    displayLevelName();
    backgroundCanvas();
  }
  if (gameState=='level3'){
    canvas.style.backgroundImage="url('img/tilelevel6.png')";
    body.style.backgroundImage= 'radial-gradient(green,lightblue)';
    displayLevelName();
    backgroundCanvas();
  }
  if (gameState=='level4'){
    canvas.style.backgroundImage="url('img/tilepreboss.png')";
    body.style.backgroundImage= 'radial-gradient(black,white)';
    displayLevelName();
    backgroundCanvas();
  }
  if (gameState=='level5'){
    canvas.style.backgroundImage='none';
    canvas.style.borderBottom='none';
    body.style.backgroundImage="url('img/home2.png')";
    body.style.backgroundSize='40%';
    body.style.backgroundRepeat='repeat';
    body.style.backgroundPosition='center';
    displayLevelName();
  }
  if (gameState=='ending'){
    body.style.removeProperty('background-image');
    startButton.style.display='none';
    canvas.style.backgroundImage="url('img/arkanoid-cartridge.png')";
    body.style.backgroundColor='lightblue';
    backgroundCanvas();
    displayLevelName();
    soundEnding.play();
  }
}
// -----------------------------------------------------------------------------
//                        3- GAMEPLAY / KEYBOARD CONTROL
// -----------------------------------------------------------------------------
let rightArrow = false;
let leftArrow = false;
let spaceBar = false;

document.addEventListener('keydown', function(event){
  if (event.keyCode==39)
      rightArrow = true;

  if (event.keyCode==37)
      leftArrow = true;

  if (event.keyCode==32){
    if(gameState==='level1'||gameState=='level2'||gameState=='level3'||gameState=='level4'||gameState=='level5'){
      displayGame();
    } else if (gameState==='playL1'){
      spaceBar=true;
      setGameState('pauseL1');
      displayPause();
      soundLevel1.pause();
    } else if(gameState==='pauseL1'){
      setGameState('playL1');
      displayPause();
      soundLevel1.play();
    } else if (gameState=='playL2'){
      spaceBar=true;
      setGameState('pauseL2');
      displayPause();
      soundLevel2.pause();
    } else if(gameState=='pauseL2'){
      setGameState('playL2');
      displayPause();
      soundLevel2.play();
    } else if (gameState=='playL3'){
      spaceBar=true;
      setGameState('pauseL3');
      displayPause();
      soundLevel3.pause();
    } else if(gameState=='pauseL3'){
      setGameState('playL3');
      displayPause();
      soundLevel3.play();
    } else if (gameState=='playL4'){
      spaceBar=true;
      setGameState('pauseL4');
      displayPause();
      soundLevel4.pause();
    } else if(gameState=='pauseL4'){
      setGameState('playL4');
      displayPause();
      soundLevel4.play();
    } else if (gameState=='playL5'){
      spaceBar=true;
      setGameState('pauseL5');
      displayPause();
      soundLevel5.pause();
    } else if(gameState=='pauseL5'){
      setGameState('playL5');
      displayPause();
      soundLevel5.play();
    }
  }
})

document.addEventListener('keyup', function(event){
  if (event.keyCode==39)
      rightArrow = false;

  if (event.keyCode==37)
      leftArrow = false;

  if (event.keyCode==32)
      spaceBar=false;
  }
)
//------------------------------------------------------------------------------
//                              4- SOUNDS
//------------------------------------------------------------------------------
let soundPaddle = new Audio();
let soundBricks = new Audio();
let soundBricksGold = new Audio();
let soundBricksFinalBoss;
let soundWalls = new Audio();
let soundLost = new Audio();
let soundLevelWon = new Audio();
let soundGameOver = new Audio();
let soundIntro = new Audio();
let soundLevel1 = new Audio();
let soundLevel2 = new Audio();
let soundLevel3 = new Audio();
let soundLevel4= new Audio();
let soundLevel5 = new Audio();
let soundEnding = new Audio();

soundPaddle.src='sounds/paddle.wav';
soundBricks.src='sounds/bricks.wav';
soundBricksGold.src='sounds/goldbricks.wav';
soundWalls.src ='sounds/walls.wav';
soundLost.src ='sounds/lost.wav';
soundLevelWon.src='sounds/levelwon.wav';
soundGameOver.src='sounds/gameover.mp3';
soundIntro.src='sounds/intro.mp3';
soundLevel1.src ='sounds/level1.mp3';
soundLevel2.src='sounds/level2.mp3';
soundLevel3.src='sounds/level3.mp3';
//soundLevel4.src='sounds/level4.mp3'
soundLevel5.src='sounds/level5.mp3';
soundEnding.src='sounds/ending.mp3';

// -----------------------------------------------------------------------------
//                      5- GAME STATS / LIVES / GAMEOVER
// -----------------------------------------------------------------------------
// function displayGameStats (text, textX, textY){
//   context.fillStyle='white';
//   context.fillText(text, textX, textY);
//   context.font = '16px pixel';
// }

let life = 10;
function loseLife(){
  if (ball.y + ball.radius > paddle.y + paddle.height + 2 * ball.radius){
    ball.ySpeed = ball.xSpeed = 0;
    decrementLives();
    if(gameState!=='gameover'){
    soundLost.play();
    resetBall();
    }
  }
}

function resetBall(){
  ball.x= canvas_width / 2;
  ball.y= (canvas_height / 2)- 50;
  if(gameState=='level4'||gameState=='playL4'){
    ball.y = canvas_height - 180;
  }
  dropBall();
}
//setTimeout(dropBall, 1000);

function dropBall(){
  ball.xSpeed= 4*(Math.random() * 2 - 1); //for the ball to fall RANDOMLY with -4<xSpeed<4 -- i'll implement ball bounce angle from the paddle later.
  ball.ySpeed= 5;
}

function decrementLives(){
  if(life!==0){
    life--;
    gameOver();
  }
}

function gameOver(){
  if (life == 0){
    if (gameState=='playL1'||gameState=='playL2'||gameState=='playL3'||gameState=='playL4'){
      soundLevel1.pause();
      soundLevel2.pause();
      soundLevel3.pause();
      soundLevel4.pause();
    }
    soundGameOver.play();
    setGameState('gameover');
    displayGameOver();
  }
}

// -----------------------------------------------------------------------------
//                                6- LEVELS
// -----------------------------------------------------------------------------

let levelWon;

function resetLevel(){
  // if(gameState=='level4'||gameState=='playL4'){
  //   ball.y = canvas_height;
  // }
  ball.x= canvas_width / 2;
  ball.y= (canvas_height / 2);
  paddle.x = (canvas_width - paddle_width) / 2;
  dropBall();
}

function levelUp(){
  let levelWon = false;
  let totalBricks = brick.rows * brick.columns;
  for (r=0; r<brick.rows; r++){
    for (c=0; c<brick.columns; c++){

      let b=bricks[r][c];
      if (!b.unbroken){
          totalBricks = totalBricks -1;
      }
    }
  }
  if (totalBricks === 0){
    if (gameState=='playL1'||gameState=='playL2'||gameState=='playL3'||gameState=='playL4'||gameState=='playL5'){
      soundLevel1.pause();
      soundLevel2.pause();
      soundLevel3.pause();
      soundLevel4.pause();
      soundLevel5.pause();
    }
      levelWon = true;
  }                                                  //console.log(totalBricks);
  if (levelWon&&gameState=='playL1'){
    soundLevelWon.play();
    setGameState('winL1');
    setTimeout(switchLevel,2000);
  }
  if (levelWon&&gameState=='playL2'){
    soundLevelWon.play();
    setGameState('winL2');
    setTimeout(switchLevel,2000);
  }
  if (levelWon&&gameState=='playL3'){
    soundLevelWon.play();
    setGameState('winL3');
    setTimeout(switchLevel,2000);
  }
  if (levelWon&&gameState=='playL4'){
    soundLevelWon.play();
    setGameState('winL4');
    setTimeout(switchLevel,1500);
  }
  if (levelWon&&gameState=='playL5'){
    soundLevelWon.play();
    setGameState('winL5');
    setTimeout(switchLevel,1500);
  }
}

function switchLevel(){
  if (gameState=='winL1'){
    setGameState('level2');
    displayLevel();
    createBricks();
    resetLevel();
  }
  if (gameState=='winL2'){
    setGameState('level3');
    displayLevel();
    createBricks();
    resetLevel();
  }
  if (gameState=='winL3'){
    setGameState('level4');
    displayLevel();
    createBricks();
    resetLevel();
  }
  if (gameState=='winL4'){
    setGameState('level5');
    displayLevel();
    createBricks();
    resetLevel();
  }
  if (gameState=='winL5'){
    setGameState('ending');
    displayLevel();
  }
}

// -----------------------------------------------------------------------------
//                                7- PADDLE
// -----------------------------------------------------------------------------

let paddle_width = 70;

const paddle_height = 12;
const paddle = {
  width: paddle_width,
  height: paddle_height,
  x: (canvas_width - paddle_width) / 2,
  y: canvas_height - 80,
  speed: 5,
  //color:'#0aeb00' //'#999'//
}
function drawPaddle(){
  if (gameState=='level1'||gameState=='playL1'||gameState=='pauseL1'||gameState=='level5'||gameState=='playL5'||gameState=='pauseL5'){
    context.fillStyle ='#0aeb00';
    context.strokeStyle='black';
  }
  if (gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'){
      context.fillStyle ='yellow';
      context.strokeStyle='black';
  }
  if (gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'){
      context.fillStyle ='gray';
      context.strokeStyle='black';
  }
  if (gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'){
    context.fillStyle ='#888';
    context.strokeStyle='black';
  }
  if (gameState=='winL1'||gameState=='winL2'||gameState=='winL3'||gameState=='winL4'||gameState=='winL5'){
    context.fillStyle ='orange';
    context.strokeStyle='lightblue';
  }
  if (gameState=='gameover'){
    context.fillStyle ='white';
    context.strokeStyle='white';
  }

  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  context.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function movePaddle(){
  if (rightArrow && paddle.x <= (canvas_width - paddle.width) - 21) {
    paddle.x += paddle.speed;
  } else if (leftArrow && paddle.x >= 21) {
    paddle.x -= paddle.speed;
  }
}

function resizePaddle(){
  if (gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'||gameState=='gameover'){
    paddle.width=60
  }
  if (gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'||gameState=='gameover'){
    paddle.width=50
  }
  if (gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'||gameState=='gameover'){
    paddle.width=40
  }
  if (gameState=='level5'||gameState=='playL5'||gameState=='pauseL5'||gameState=='gameover'){
    paddle.width=35
  }
}

// -----------------------------------------------------------------------------
//                                8- BALL
// -----------------------------------------------------------------------------

const ball = {
  radius: 7,
  x: canvas_width / 2,
  y: canvas_height / 2,
  xSpeed: 4*(Math.random() * 2 - 1), //for the ball to fall RANDOMLY with -4<xSpeed<4 -- i'll implement ball bounce angle from the paddle later.
  ySpeed: 5,
}

function drawBall(){
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  if(gameState=='level1'||gameState=='playL1'||gameState=='pauseL1'||gameState=='gameover'){
    context.fillStyle = '#777';
  }
  if(gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'){
    context.fillStyle = 'black';
  }
  if(gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'){
    context.fillStyle = '#67cbfa';
  }
  if(gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'){
    context.fillStyle = 'yellow';
  }
  if(gameState=='level5'||gameState=='playL5'||gameState=='pauseL5'){
    context.fillStyle = 'green';
  }
  if(gameState=='gameover'){
    context.fillStyle = 'white';
  }
  context.fill();
  if(gameState=='level1'||gameState=='playL1'||gameState=='pauseL1'||gameState=='gameover'){
    context.strokeStyle = 'black';
  }
  if(gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'||gameState=='gameover'){
    context.strokeStyle = 'pink';
  }
  if(gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'||gameState=='gameover'){
    context.strokeStyle = 'blue';
  }
  if(gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'||gameState=='gameover'){
    context.strokeStyle = 'gray';
  }
  if(gameState=='level5'||gameState=='playL5'||gameState=='pauseL5'||gameState=='gameover'){
    context.strokeStyle = '#0aeb00';
  }
  if(gameState=='gameover'){
    context.strokeStyle = 'white';
  }
  context.stroke();
  context.closePath();
}

function moveBall(){
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
}

// -----------------------------------------------------------------------------
//                               9- the BRICKS!!
// -----------------------------------------------------------------------------

const brick_width = 45;
const brick_height = 10;
const brick = {
  x: brick_width + 10,
  y: brick_height + 10,
  width: brick_width,
  height: brick_height,
  columns: 0,
  rows: 0,
}

let bricks=[];
//create the bricks as a TABLE (nested for loop)
function createBricksL1(){
  brick.rows = 3;
  brick.columns = 9;
  for (r = 0; r < brick.rows; r++){
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++){
      bricks[r][c]={
        x: c*brick.x + 35,
        y: r*brick.y + 80,
        unbroken:true
      };
    }
  }
}

//------------------------ BRICKS LEVEL 2 --------------------------------------
function createBricksL2(){
  brick.rows = 6;
  brick.columns = 8;
  for (r = 0; r <brick.rows; r++){
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++){
        bricks[r][c]={
          x: c*(brick.x+5) + 44,
          y: r*(brick.y+5) + 80,
          unbroken:true
      };
    }
  }
}

//------------------------ BRICKS LEVEL 3 --------------------------------------
function createBricksL3(){
  brick.rows = 9;
  brick.columns = 9
  for (r = 0; r < brick.rows; r++){
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++){
      bricks[r][c]={
        x: c*brick.x + 35,
        y: r*brick.y + 80,
        unbroken:true
      };
    }
  }
}

//------------------------ BRICKS LEVEL 4 --------------------------------------
function createBricksL4(){
  brick.rows = 19;
  brick.columns = 4
  for (r = 0; r < brick.rows; r++){
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++){
        bricks[r][c]={
          x: c*brick.x + 170,
          y: r*(brick.y-5) + 85,
          unbroken:true
      };
    }
  }
}
//------------------------ BRICKS LEVEL 5 --------------------------------------
function createBricksL5(){
  brick.rows = 6;
  brick.columns = 6;
  for (r = 0; r < brick.rows; r++){
    bricks[r]=[];
    for (c = 0; c < brick.columns; c++){
        bricks[r][c]={
          x: c*brick.x + 170,
          y: r*brick.y + 80,
          unbroken:true
      };
    }
  }
}

function createBricks(){
  if (gameState=='home'||gameState=='level1'||gameState=='playL1'){
    createBricksL1();
  } else if (gameState=='level2'||gameState=='playL2'){
    createBricksL2();
  } else if (gameState=='level3'||gameState=='playL3'){
    createBricksL3();
  } else if (gameState=='level4'||gameState=='playL4'){
    createBricksL4();
  } else if (gameState=='level5'||gameState=='playL5'){
    createBricksL5();
  }
}
createBricks();

//------------------------------------------------------------------------------
function drawBricks(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){

      if (gameState=='level1'||gameState=='playL1'||gameState=='pauseL1'||gameState=='gameOver'){
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
          context.fillStyle='#85fbf1';
          context.fillRect(b3.x, b3.y, brick_width, brick_height);
        }
      }
      if (gameState=='level2'||gameState=='playL2'||gameState=='pauseL2'){
        let b1=bricks[r][0];
        if(b1.unbroken){
          context.fillStyle='#ea0f42';
          context.fillRect(b1.x, b1.y, brick_width, brick_height);
        }
        let b2=bricks[r][1];
        if(b2.unbroken){
          context.fillStyle='#ff7b00';
          context.fillRect(b2.x, b2.y, brick_width, brick_height);
        }
        let b3=bricks[r][2];
        if(b3.unbroken){
          context.fillStyle='#ff7b00';
          context.fillRect(b3.x, b3.y, brick_width, brick_height);
        }
        let b4=bricks[r][3];
        if(b4.unbroken){
          context.fillStyle='#ffff00';
          context.fillRect(b4.x, b4.y, brick_width, brick_height);
        }
        let b5=bricks[r][4];
        if(b5.unbroken){
          context.fillStyle='#99e000';
          context.fillRect(b5.x, b5.y, brick_width, brick_height);
        }
        let b6=bricks[r][5];
        if(b6.unbroken){
          context.fillStyle='#004dff';
          context.fillRect(b6.x, b6.y, brick_width, brick_height);
        }
        let b7=bricks[r][6];
        if(b7.unbroken){
          context.fillStyle='#004dff';
          context.fillRect(b7.x, b7.y, brick_width, brick_height);
        }
        let b8=bricks[r][7];
        if(b8.unbroken){
          context.fillStyle='#7238a8';
          context.fillRect(b8.x, b8.y, brick_width, brick_height);
        }
      }
      if (gameState=='level3'||gameState=='playL3'||gameState=='pauseL3'){
        let b1=bricks[0][c];
        if(b1.unbroken){
          context.fillStyle='#383838';
          context.fillRect(b1.x, b1.y, brick_width, brick_height);
        }
        let b2=bricks[1][c];
        if(b2.unbroken){
          context.fillStyle='#5e5e5e';
          context.fillRect(b2.x, b2.y, brick_width, brick_height);
        }
        let b3=bricks[2][c];
        if(b3.unbroken){
          context.fillStyle='#838383';
          context.fillRect(b3.x, b3.y, brick_width, brick_height);
        }
        let b4=bricks[3][c];
        if(b4.unbroken){
          context.fillStyle='#9C9C9C';
          context.fillRect(b4.x, b4.y, brick_width, brick_height);
        }
        let b5=bricks[4][c];
        if(b5.unbroken){
          context.fillStyle='#B4B4B4';
          context.fillRect(b5.x, b5.y, brick_width, brick_height);
        }
        let b6=bricks[5][c];
        if(b6.unbroken){
          context.fillStyle='C3C3C3';
          context.fillRect(b6.x, b6.y, brick_width, brick_height);
        }
        let b7=bricks[6][c];
        if(b7.unbroken){
          context.fillStyle='D3D3D3';
          context.fillRect(b7.x, b7.y, brick_width, brick_height);
        }
        let b8=bricks[7][c];
        if(b8.unbroken){
          context.fillStyle='E2E2E2';
          context.fillRect(b8.x, b8.y, brick_width, brick_height);
        }
        let b9=bricks[8][c];
        if(b9.unbroken){
          context.fillStyle='F3F3F3';
          context.fillRect(b9.x, b9.y, brick_width, brick_height);
        }
      }
      if (gameState=='level4'||gameState=='playL4'||gameState=='pauseL4'){
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
        // let b5=bricks[r][4];
        // if(b5.unbroken){
        //   context.fillStyle='yellow';
        //   context.fillRect(b5.x, b5.y, brick_width, brick_height);
        // }
        // let b6=bricks[r][5];
        // if(b6.unbroken){
        //   context.fillStyle='yellow';
        //   context.fillRect(b6.x, b6.y, brick_width, brick_height);
        // }
      }
      if (gameState=='level5'||gameState=='playL5'||gameState=='pauseL5'){
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
          context.fillStyle='red';
          context.fillRect(b3.x, b3.y, brick_width, brick_height);
        }
        let b4=bricks[r][3];
        if(b4.unbroken){
          context.fillStyle='red';
          context.fillRect(b4.x, b4.y, brick_width, brick_height);
        }
        let b5=bricks[r][4];
        if(b5.unbroken){
          context.fillStyle='red';
          context.fillRect(b5.x, b5.y, brick_width, brick_height);
        }
        let b6=bricks[r][5];
        if(b6.unbroken){
          context.fillStyle='red';
          context.fillRect(b6.x, b6.y, brick_width, brick_height);
        }
      }
    };
  }
}

// -----------------------------------------------------------------------------
//                                10- COLLISIONS !!!
// -----------------------------------------------------------------------------

function ballCollisionsCanvas() {
  if (ball.y + ball.radius > canvas_height-10) {
    ball.ySpeed = -ball.ySpeed;
    soundWalls.play();
  } else if (ball.y - ball.radius < 10) {
      soundWalls.play();
      ball.ySpeed = -ball.ySpeed;
  }
  if (ball.x + ball.radius >= canvas_width-20) {
    soundWalls.play();
    ball.xSpeed = -ball.xSpeed;
  } else if (ball.x - ball.radius < 20){
      soundWalls.play();
      ball.xSpeed = -ball.xSpeed;
  }
}

function ballCollisionsPaddle() {
  if (ball.y+(ball.radius-1) > paddle.y && ball.x > paddle.x && ball.x < paddle.x + paddle.width){
    ball.ySpeed = -ball.ySpeed;
  }
}
let brickHitCount=0;
let score=0;

function ballCollisionsBricks(){
  for(r=0; r<brick.rows; r++){
    for(c=0; c<brick.columns; c++){ //nested for loops needed to have access to the bricks[][] again.

      let b1=bricks[0][c];
      if (b1.unbroken){
        if(ball.x + ball.radius > b1.x && ball.x - ball.radius < b1.x + brick.width && ball.y + ball.radius > b1.y &&ball.y-ball.radius<b1.y+brick.height){
          soundBricksGold.play();
          b1.unbroken=false;
          ball.ySpeed = -ball.ySpeed;
          score += 100;
        }
      }

      let b2=bricks[1][c];
      if (b2.unbroken){
        if(ball.x + ball.radius > b2.x && ball.x - ball.radius < b2.x + brick.width && ball.y + ball.radius > b2.y &&ball.y-ball.radius<b2.y+brick.height){
          soundBricksGold.play();
          b2.unbroken=false;
          ball.ySpeed = -ball.ySpeed;
          score += 50;
        }
      }

      let b3=bricks[2][c];
      if (b3.unbroken){
        if(ball.x + ball.radius > b3.x && ball.x - ball.radius < b3.x + brick.width && ball.y + ball.radius > b3.y &&ball.y-ball.radius<b3.y+brick.height){
          soundBricksGold.play();
          b3.unbroken=false;
          ball.ySpeed = -ball.ySpeed;
          score+= 20;
          brickHitCount+=1;
        }
        // if (brickHitCount===2){
      }
      if (brick.rows > 3){
      let b4=bricks[3][c];
        if (gameState==='playL2'&& b4.unbroken||gameState==='playL3'&& b4.unbroken||gameState==='playL4'&& b4.unbroken||gameState==='playL5'&& b4.unbroken){
         if(ball.x + ball.radius > b4.x && ball.x - ball.radius < b4.x + brick.width && ball.y + ball.radius > b4.y &&ball.y-ball.radius<b4.y+brick.height){
            soundBricksGold.play();
            b4.unbroken=false;
            ball.ySpeed = -ball.ySpeed;
            score += 15;
          }
        }
      }
      if (brick.rows > 4) {
      let b5=bricks[4][c];
        if (gameState==='playL2'&& b5.unbroken||gameState==='playL3'&& b5.unbroken||gameState==='playL4'&& b5.unbroken||gameState==='playL5'&& b5.unbroken){
          if(ball.x + ball.radius > b5.x && ball.x - ball.radius < b5.x + brick.width && ball.y + ball.radius > b5.y &&ball.y-ball.radius<b5.y+brick.height){
            soundBricksGold.play();
            b5.unbroken=false;
            ball.ySpeed = -ball.ySpeed;
            score += 10;
          }
        }
      }
        if (brick.rows > 5){
        let b6=bricks[5][c];
          if (gameState==='playL2'&& b6.unbroken||gameState==='playL3'&& b6.unbroken||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b6.unbroken){
            if(ball.x + ball.radius > b6.x && ball.x - ball.radius < b6.x + brick.width && ball.y + ball.radius > b6.y &&ball.y-ball.radius<b6.y+brick.height){
              soundBricksGold.play();
              b6.unbroken=false;
              ball.ySpeed = -ball.ySpeed;
              score += 10;
            }
          }
        }
        if (brick.rows > 6) {
        let b7=bricks[6][c];
          if (gameState==='playL3'&& b7.unbroken||gameState==='playL4'&& b7.unbroken||gameState==='playL5'&& b7.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
            if(ball.x + ball.radius > b7.x && ball.x - ball.radius < b7.x + brick.width && ball.y + ball.radius > b7.y &&ball.y-ball.radius<b7.y+brick.height){
              soundBricksGold.play();
              b7.unbroken=false;
              ball.ySpeed = -ball.ySpeed;
              score += 10;
            }
          }
          let b8=bricks[7][c];
            if (gameState==='playL3'&& b8.unbroken||gameState==='playL4'&& b8.unbroken||gameState==='playL5'&& b8.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
              if(ball.x + ball.radius > b8.x && ball.x - ball.radius < b8.x + brick.width && ball.y + ball.radius > b8.y &&ball.y-ball.radius<b8.y+brick.height){
                soundBricksGold.play();
                b8.unbroken=false;
                ball.ySpeed = -ball.ySpeed;
                score += 10;
              }
            }
          let b9=bricks[8][c];
            if (gameState==='playL3'&& b9.unbroken||gameState==='playL4'&& b9.unbroken||gameState==='playL5'&& b9.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
              if(ball.x + ball.radius > b9.x && ball.x - ball.radius < b9.x + brick.width && ball.y + ball.radius > b9.y &&ball.y-ball.radius<b9.y+brick.height){
                soundBricksGold.play();
                b9.unbroken=false;
                ball.ySpeed = -ball.ySpeed;
                score += 10;
              }
            }
          }
          if (brick.rows > 9) {
          let b10=bricks[9][c];
            if (gameState==='playL4'&& b10.unbroken||gameState==='playL5'&& b10.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
              if(ball.x + ball.radius > b10.x && ball.x - ball.radius < b10.x + brick.width && ball.y + ball.radius > b10.y &&ball.y-ball.radius<b10.y+brick.height){
                soundBricksGold.play();
                b10.unbroken=false;
                ball.ySpeed = -ball.ySpeed;
                score += 10;
              }
            }
          let b11=bricks[10][c];
            if (gameState==='playL4'&& b11.unbroken||gameState==='playL5'&& b11.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
              if(ball.x + ball.radius > b11.x && ball.x - ball.radius < b11.x + brick.width && ball.y + ball.radius > b11.y &&ball.y-ball.radius<b11.y+brick.height){
                soundBricksGold.play();
                b11.unbroken=false;
                ball.ySpeed = -ball.ySpeed;
                score += 10;
              }
            }
          let b12=bricks[11][c];
              if (gameState==='playL4'&& b12.unbroken||gameState==='playL5'&& b12.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                if(ball.x + ball.radius > b12.x && ball.x - ball.radius < b12.x + brick.width && ball.y + ball.radius > b12.y &&ball.y-ball.radius<b12.y+brick.height){
                  soundBricksGold.play();
                  b12.unbroken=false;
                  ball.ySpeed = -ball.ySpeed;
                  score += 10;
                }
              }
            let b13=bricks[12][c];
                if (gameState==='playL4'&& b13.unbroken||gameState==='playL5'&& b13.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                  if(ball.x + ball.radius > b13.x && ball.x - ball.radius < b13.x + brick.width && ball.y + ball.radius > b13.y &&ball.y-ball.radius<b13.y+brick.height){
                    soundBricksGold.play();
                    b13.unbroken=false;
                    ball.ySpeed = -ball.ySpeed;
                    score += 10;
                }
              }
            let b14=bricks[13][c];
                if (gameState==='playL4'&& b14.unbroken||gameState==='playL5'&& b14.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                  if(ball.x + ball.radius > b14.x && ball.x - ball.radius < b14.x + brick.width && ball.y + ball.radius > b14.y &&ball.y-ball.radius<b14.y+brick.height){
                    soundBricksGold.play();
                    b14.unbroken=false;
                    ball.ySpeed = -ball.ySpeed;
                    score += 10;
                }
              }
            let b15=bricks[14][c];
              if (gameState==='playL4'&& b15.unbroken||gameState==='playL5'&& b15.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                if(ball.x + ball.radius > b15.x && ball.x - ball.radius < b15.x + brick.width && ball.y + ball.radius > b15.y &&ball.y-ball.radius<b15.y+brick.height){
                  soundBricksGold.play();
                  b15.unbroken=false;
                  ball.ySpeed = -ball.ySpeed;
                  score += 10;
                }
              }
            let b16=bricks[15][c];
              if (gameState==='playL4'&& b16.unbroken||gameState==='playL5'&& b16.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                if(ball.x + ball.radius > b16.x && ball.x - ball.radius < b16.x + brick.width && ball.y + ball.radius > b16.y &&ball.y-ball.radius<b16.y+brick.height){
                  soundBricksGold.play();
                  b16.unbroken=false;
                  ball.ySpeed = -ball.ySpeed;
                  score += 10;
                }
              }
            let b17=bricks[16][c];
              if (gameState==='playL4'&& b17.unbroken||gameState==='playL5'&& b17.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                if(ball.x + ball.radius > b17.x && ball.x - ball.radius < b17.x + brick.width && ball.y + ball.radius > b17.y &&ball.y-ball.radius<b17.y+brick.height){
                  soundBricksGold.play();
                  b17.unbroken=false;
                  ball.ySpeed = -ball.ySpeed;
                  score += 10;
                }
              }
            let b18=bricks[17][c];
              if (gameState==='playL4'&& b18.unbroken||gameState==='playL5'&& b18.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                if(ball.x + ball.radius > b18.x && ball.x - ball.radius < b18.x + brick.width && ball.y + ball.radius > b18.y &&ball.y-ball.radius<b18.y+brick.height){
                  soundBricksGold.play();
                  b18.unbroken=false;
                  ball.ySpeed = -ball.ySpeed;
                  score += 10;
                }
              }
            let b19=bricks[18][c];
              if (gameState==='playL4'&& b19.unbroken||gameState==='playL5'&& b19.unbroken){//||gameState==='playL4'&& b6.unbroken||gameState==='playL5'&& b4.unbroken){
                if(ball.x + ball.radius > b19.x && ball.x - ball.radius < b19.x + brick.width && ball.y + ball.radius > b19.y &&ball.y-ball.radius<b19.y+brick.height){
                  soundBricksGold.play();
                  b19.unbroken=false;
                  ball.ySpeed = -ball.ySpeed;
                  score += 10;
                }
              }
          }

      }
    }
}



// -----------------------------------------------------------------------------
//                              GAME LOOP FUNCTIONS
// -----------------------------------------------------------------------------
function displayLives (text, textX, textY){
  context.fillStyle='white';
  if(life==2||life==0){
    context.fillStyle='red';
  }
  context.fillText(text, textX, textY);
  context.font = '16px pixel';
}
function displayScore (text, textX, textY){
  context.fillStyle='white';
  if (score>=1000){
    context.fillStyle='#f8ff43';
  }
  if (score>=2000){
    context.fillStyle='pink';
  }
  if (score>=3000){
    context.fillStyle='#ff5106';
  }
  if (score>=4000){
    context.fillStyle='#00ee1b';
  }
  if (score>=5000){
    context.fillStyle='#0037c4';
  }
  if (score>=6000){
    context.fillStyle='#FFD700';
  }
  context.fillText(text, textX, textY);
  context.font = '16px pixel';
}


function draw(){
  if (gameState!=='ending'){

      displayScore('SCORE: '+ score, 400, 45)

    if (life>3){
      displayLives(life+' lives', 40, 45);
    }
    if(life==3){
      displayLives('warning : 3 lives left', 40, 45);

    }
    if (life==2){
      displayLives('WARNING : 2 lives left', 40, 45);
    }
    if (life==1){
      displayLives('death is near ...', 40, 45);
    }
    if (life==0){
      displayLives('DEAD ! R.I.P.', 40, 45);
    }

  drawPaddle();
  drawBall();
  drawBricks();
}
};

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
function game(){
  context.clearRect(0, 0, canvas_width, canvas_height);
  if (gameState!=='ending')
    draw();
    resizePaddle();

  if (gameState==='playL1'||gameState==='playL2'||gameState==='playL3'||gameState==='playL4'||gameState==='playL5')
    move();
    collisions();
    loseLife();
    levelUp();
    requestAnimationFrame(game);
}
game();
