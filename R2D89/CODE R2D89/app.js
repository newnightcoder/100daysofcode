const body = document.querySelector('body');
body.style.height = '100vh';
body.style.width = '100vw';
body.style.overflow = 'hidden';
body.style.margin = '0';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const canvasHeight = window.innerHeight;//document.documentElement.clientHeight;//window.innerHeight;
const canvasWidth = window.innerWidth;//document.documentElement.clientWidth;
canvas.height = canvasHeight;
canvas.width = canvasWidth;

const focalLength = canvasWidth;
const centerX = canvasWidth/2;
const centerY = canvasHeight/2;


function Star() {
  this.x = Math.random()*canvasWidth,
  this.y = Math.random()*canvasHeight,
  this.z = Math.random()*canvasWidth,
  this.size = .75,
  this.speed = 5,

  this.display = function(){
    let x,y,r;
    x = (this.x - centerX) * (focalLength/this.z);
    x += centerX;
    y = (this.y - centerY) * (focalLength/this.z);
    y += centerY;
    r = this.size * (focalLength/this.z);

    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI);
    context.fillStyle = 'white';
    context.fill();
  },

  this.fly = function(){
    this.z = this.z - this.speed;
    if(this.z<=0){
      this.z = canvasWidth;
    }
  }
}

const stars = new Array(1000);
for (let i = 0; i < stars.length; i++){
  stars[i] = new Star();
}

function draw(){
  context.fillStyle = 'black';
  context.fillRect(0,0, canvasWidth, canvasHeight);
  for(let i=0; i< stars.length; i++) {
    stars[i].display();
    stars[i].fly();
  }
}


function loop(){
  requestAnimationFrame(loop);
  context.clearRect(0,0, canvasWidth, canvasHeight);
  draw();
}
loop();























//
