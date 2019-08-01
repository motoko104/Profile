// Setting the canvas and filling the window with the canvas
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// variable to hold the context of the canvas methods and functions (a super object)
let c = canvas.getContext('2d');

// the center coordinates to use from the window
let cw = window.innerWidth/2;
let ch = window.innerHeight/2 - 80;

// create cat head
// ------------------- center of head ---------------------------
c.beginPath();
c.moveTo(cw, ch);
c.lineTo(cw + 50, ch + 40);
c.lineTo(cw + 25, ch + 90);
c.lineTo(cw + 25, ch + 130);
c.lineTo(cw, ch + 140);
c.lineTo(cw - 25, ch + 130);
c.lineTo(cw - 25, ch + 90);
c.lineTo(cw - 50, ch + 40);
c.closePath();
c.strokeStyle = "rgba(67, 42, 118, 0.5)";
c.stroke();
c.fillStyle = "rgba(67, 42, 118, 0.7)";
c.fill();

// ------------------------ small parts above the nose --------------------------
//right
c.beginPath()
c.moveTo(cw, ch + 140);
c.lineTo(cw + 18, ch + 145);
c.lineTo(cw + 25, ch + 130);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo( cw + 18, ch + 145);
c.lineTo(cw + 35, ch + 165);
c.lineTo(cw + 25, ch + 130);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

//left
c.beginPath()
c.moveTo(cw, ch + 140);
c.lineTo(cw - 18, ch + 145);
c.lineTo(cw - 25, ch + 130);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo( cw - 18, ch + 145);
c.lineTo(cw - 35, ch + 165);
c.lineTo(cw - 25, ch + 130);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();


// ------------------------ cat forehead area ----------------------------------
//mid tri
c.beginPath();
c.moveTo(cw, ch);
c.lineTo(cw + 35, ch - 27);
c.lineTo(cw - 35, ch - 27);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();
//right side
c.beginPath();
c.moveTo(cw + 35, ch -27);
c.lineTo(cw + 55, ch - 21);
c.lineTo(cw + 50, ch + 40);
c.lineTo(cw, ch);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 55, ch - 21);
c.lineTo(cw + 95, ch - 12);
c.lineTo(cw + 103, ch - 7);
c.lineTo(cw + 50, ch + 40);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 50, ch + 40);
c.lineTo(cw + 90, ch + 60);
c.lineTo(cw + 103, ch - 7);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw + 90, ch + 60);
c.lineTo(cw + 125, ch + 125);
c.lineTo(cw + 103, ch - 7);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();


//left side
c.beginPath();
c.moveTo(cw - 35, ch -27);
c.lineTo(cw - 55, ch - 21);
c.lineTo(cw - 50, ch + 40);
c.lineTo(cw, ch);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw - 55, ch - 21);
c.lineTo(cw - 95, ch - 12);
c.lineTo(cw - 103, ch - 7);
c.lineTo(cw - 50, ch + 40);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 50, ch + 40);
c.lineTo(cw - 90, ch + 60);
c.lineTo(cw - 103, ch - 7);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 90, ch + 60);
c.lineTo(cw - 125, ch + 125);
c.lineTo(cw - 103, ch - 7);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();


// c.fillStyle = "rgba(67, 42, 118, 0.2)";
// c.fillRect(50, 50, 100, 100);
// c.fillStyle = "rgba(30, 7, 75, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(120, 103, 195, 0.7)";
// c.fillRect(150, 150, 100, 100);


// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#7867c3";
// c.stroke();

// for (let i = 0; i < 200; i++) {
//     // Arc/ Circle
//     c.beginPath();
//     c.arc(10 * 1, 10 * i, 30, 0, Math.PI * 2, true);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }


// $(document).ready(function () {
//     let canvas = $('canvas');
//     canvas.width = window.innerWidth;
//     console.log(canvas);

// });