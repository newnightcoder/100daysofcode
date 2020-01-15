// variables + constants
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

const canvas_height = 400;
const canvas_width = 400;
const paddle_width = 60 ;
const paddle_height = 10 ;
let xPaddle = (canvas_width - paddle_width)/2 ;
let yPaddle = canvas_height - 60;
let xSpeed = 5;

//paddle
function drawPaddle(){
  context.clearRect(0, 0, canvas_width, canvas_height);
  context.fillStyle = '#0aeb00';
  context.fillRect(xPaddle, yPaddle, paddle_width, paddle_height);
}

//THE BALL!!!
function drawBall(){
  context.beginPath();
  context.arc(100, -25, 30, 5, 2*Math.PI);
  context.strokeStyle = 'red';
  context.stroke();
}
drawBall(); // why doens't it WORK????

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
} )

// move the paddle
function movePaddle(){
  if (rightArrow && xPaddle <= (canvas_width - paddle_width) - 8){
    xPaddle += xSpeed;
  }else if (leftArrow && xPaddle>=8){
    xPaddle -= xSpeed;
  }

}
 // the game!
 function game(){
   drawPaddle();
   movePaddle();
   requestAnimationFrame(game);
 }
game();
