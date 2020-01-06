
let canvas = document.querySelector ('canvas');
//the coordinates of the paddle as variables = starting point!
let x= 170;
let y=340;

let context = canvas.getContext('2d');

//drawing the rectangle
context.fillStyle='#0aeb00';
context.fillRect (x, y, 60, 10);


canvas.addEventListener ('keydown', movePaddle, true);

//function to make the paddle MOVE!
function movePaddle (event){
  switch (event.keyCode) {
    case 39: x=x+5;
    break;
    case 37: x=x-5;
    break;
  }
}
