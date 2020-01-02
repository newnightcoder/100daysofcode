//my first js file ever haha!!
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
//paddle/rectangle
context.fillStyle='#0aeb00';
context.fillRect (230, 330, 60, 10);


//ball/circle
context.beginPath();
context.arc(200, 130, 8, 0, 2*Math.PI, false);
context.strokeStyle ='#0aeb00';
context.stroke();
