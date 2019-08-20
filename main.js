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

// ----------------------- Nose area ------------------------------------------
c.beginPath();
c.moveTo(cw, ch + 140);
c.lineTo(cw + 18, ch + 145);
c.lineTo(cw + 21, ch + 149);
c.lineTo(cw, ch + 153);
c.lineTo(cw - 21, ch + 149);
c.lineTo(cw - 18, ch + 145);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw, ch + 153);
c.lineTo(cw + 21, ch + 149);
c.lineTo(cw + 23, ch + 151);
c.lineTo(cw + 6, ch + 165);
c.lineTo(cw + 5, ch + 180);
c.lineTo(cw + 19, ch + 185);
c.lineTo(cw + 18, ch + 186);
c.lineTo(cw - 18, ch + 186);
c.lineTo(cw - 19, ch + 185);
c.lineTo(cw - 5, ch + 180);
c.lineTo(cw - 6, ch + 165);
c.lineTo(cw - 23, ch + 151);
c.lineTo(cw - 21, ch + 149);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

// --------------------------------Mouth area ---------------------------------
// top lips
//right
c.beginPath();
c.moveTo(cw + 23, ch + 151);
c.lineTo(cw + 6, ch + 165);
c.lineTo(cw + 5, ch + 180);
c.lineTo(cw + 19, ch + 185);
c.lineTo(cw + 45, ch + 170);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

//left
c.beginPath();
c.moveTo(cw - 23, ch + 151);
c.lineTo(cw - 6, ch + 165);
c.lineTo(cw - 5, ch + 180);
c.lineTo(cw - 19, ch + 185);
c.lineTo(cw - 45, ch + 170);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

//bottom jaw area
//middle
c.beginPath();
c.moveTo(cw + 18, ch + 186);
c.lineTo(cw - 18, ch + 186);
c.lineTo(cw - 18, ch + 210);
c.lineTo(cw + 18, ch + 210);
c.closePath();
c.strokeStyle = "rgba(67, 42, 118, 0.5)";
c.stroke();
c.fillStyle = "rgba(67, 42, 118, 0.7)";
c.fill();

// right
c.beginPath();
c.moveTo(cw + 19, ch + 185);
c.lineTo(cw + 45, ch + 170);
c.lineTo(cw + 80, ch + 185);
c.lineTo(cw + 18, ch + 210);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

//left
c.beginPath();
c.moveTo(cw - 19, ch + 185);
c.lineTo(cw - 45, ch + 170);
c.lineTo(cw - 80, ch + 185);
c.lineTo(cw - 18, ch + 210);
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

// -------------------------------- Ears -----------------------------------------
// right ear
c.beginPath();
c.moveTo(cw + 35, ch -27);
c.lineTo(cw + 55, ch - 21);
c.lineTo(cw + 60, ch - 50);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw + 55, ch - 21);
c.lineTo(cw + 95, ch - 12);
c.lineTo(cw + 120, ch - 95);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 60, ch - 50);
c.lineTo(cw + 55, ch - 21);
c.lineTo(cw + 120, ch - 95);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 95, ch - 12);
c.lineTo(cw + 113, ch - 20);
c.lineTo(cw + 120, ch - 95);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 95, ch - 12);
c.lineTo(cw + 103, ch - 7);
c.lineTo(cw + 113, ch - 20);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

// left ear
c.beginPath();
c.moveTo(cw - 35, ch -27);
c.lineTo(cw - 55, ch - 21);
c.lineTo(cw - 60, ch - 50);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 55, ch - 21);
c.lineTo(cw - 95, ch - 12);
c.lineTo(cw - 120, ch - 95);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw - 60, ch - 50);
c.lineTo(cw - 55, ch - 21);
c.lineTo(cw - 120, ch - 95);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 95, ch - 12);
c.lineTo(cw - 113, ch - 20);
c.lineTo(cw - 120, ch - 95);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 0.7)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 95, ch - 12);
c.lineTo(cw - 103, ch - 7);
c.lineTo(cw - 113, ch - 20);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

// ----------------------------- Eye area ----------------------------------------
//right side
c.beginPath();
c.moveTo(cw + 50, ch + 40);
c.lineTo(cw + 25, ch + 90);
c.lineTo(cw + 25, ch + 130);
c.lineTo(cw + 35, ch + 120);
c.lineTo(cw + 37, ch + 100);
c.lineTo(cw + 53, ch + 80);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw + 50, ch + 40);
c.lineTo(cw + 53, ch + 80);
c.lineTo(cw + 90, ch + 60);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 90, ch + 60);
c.lineTo(cw + 25, ch + 130);
c.lineTo(cw + 125, ch + 125);
c.closePath();
c.strokeStyle = "rgba(67, 42, 118, 0.5)";
c.stroke();
c.fillStyle = "rgba(67, 42, 118, 0.7)";
c.fill();

//right eye
c.beginPath();
c.moveTo( cw + 25, ch + 130);
c.lineTo(cw + 35, ch + 120);
c.lineTo(cw + 40, ch + 100);
c.lineTo(cw + 53, ch + 80);
c.lineTo(cw + 90, ch + 60);
c.arc(cw + 95, ch + 67, 18, 2.45, 2.10, true);
c.arc(cw + 66, ch + 95, 23, 4.76, 2.1, false);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 1.0)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 1.0)";
c.fill();

    /// Iris
    c.beginPath();
    c.moveTo(cw + 66, ch + 90);
    c.arc(cw + 66, ch + 95, 18, 5.5, 2.7, false);
    c.closePath();
    c.strokeStyle = "rgba(129, 253, 2, 1.0)";
    c.stroke();
    c.fillStyle = "rgba(129, 253, 2, 1.0)";
    c.fill();

    c.beginPath();
    c.moveTo(cw + 66, ch + 90);
    c.arc(cw + 66, ch + 95, 14, 4.7, 3.2, false);
    c.closePath();
    c.strokeStyle = "rgba(30, 7, 75, 1.0)";
    c.stroke();
    c.fillStyle = "rgba(30, 7, 75, 1.0)";
    c.fill();

// left side
c.beginPath();
c.moveTo(cw - 50, ch + 40);
c.lineTo(cw - 25, ch + 90);
c.lineTo(cw - 25, ch + 130);
c.lineTo(cw - 35, ch + 120);
c.lineTo(cw - 37, ch + 100);
c.lineTo(cw - 53, ch + 80);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 50, ch + 40);
c.lineTo(cw - 53, ch + 80);
c.lineTo(cw - 90, ch + 60);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw - 90, ch + 60);
c.lineTo(cw - 25, ch + 130);
c.lineTo(cw - 125, ch + 125);
c.closePath();
c.strokeStyle = "rgba(67, 42, 118, 0.5)";
c.stroke();
c.fillStyle = "rgba(67, 42, 118, 0.7)";
c.fill();

//left eye
c.beginPath();
c.moveTo( cw - 25, ch + 130);
c.lineTo(cw - 35, ch + 120);
c.lineTo(cw - 40, ch + 100);
c.lineTo(cw - 53, ch + 80);
c.lineTo(cw - 90, ch + 60);
c.lineTo(cw - 86, ch + 68);
c.arc(cw - 66, ch + 95, 23, 1.25 * Math.PI, 0.3 * Math.PI, true);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 1.0)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 1.0)";
c.fill();

    /// Iris
    c.beginPath();
    c.moveTo(cw - 66, ch + 90);
    c.arc(cw - 66, ch + 95, 18, 1.3 * Math.PI, 0.15 * Math.PI, true);
    c.closePath();
    c.strokeStyle = "rgba(129, 253, 2, 1.0)";
    c.stroke();
    c.fillStyle = "rgba(129, 253, 2, 1.0)";
    c.fill();

    c.beginPath();
    c.moveTo(cw - 66, ch + 90);
    c.arc(cw - 66, ch + 95, 14, 1.5 * Math.PI, 0 * Math.PI, true);
    c.closePath();
    c.strokeStyle = "rgba(30, 7, 75, 1.0)";
    c.stroke();
    c.fillStyle = "rgba(30, 7, 75, 1.0)";
    c.fill();

// ----------------------------- Cheek Area ----------------------------------
// Right side
c.beginPath();
c.moveTo(cw + 25, ch + 130);
c.lineTo(cw + 85, ch + 175);
c.lineTo(cw + 125, ch + 125);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw + 25, ch + 130);
c.lineTo(cw + 85, ch + 175);
c.lineTo(cw + 80, ch + 185);
c.lineTo(cw + 35, ch + 165);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw + 85, ch + 175);
c.lineTo(cw + 80, ch + 185);
c.lineTo(cw + 110, ch + 165);
c.lineTo(cw + 125, ch + 125);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 1.0)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 1.0)";
c.fill();

// Left side
c.beginPath();
c.moveTo(cw - 25, ch + 130);
c.lineTo(cw - 85, ch + 175);
c.lineTo(cw - 125, ch + 125);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 0.7)";
c.fill();

c.beginPath();
c.moveTo(cw - 25, ch + 130);
c.lineTo(cw - 85, ch + 175);
c.lineTo(cw - 80, ch + 185);
c.lineTo(cw - 35, ch + 165);
c.closePath();
c.strokeStyle = "rgba(120, 103, 195, 0.7)";
c.stroke();
c.fillStyle = "rgba(120, 103, 195, 1.0)";
c.fill();

c.beginPath();
c.moveTo(cw - 85, ch + 175);
c.lineTo(cw - 80, ch + 185);
c.lineTo(cw - 110, ch + 165);
c.lineTo(cw - 125, ch + 125);
c.closePath();
c.strokeStyle = "rgba(30, 7, 75, 1.0)";
c.stroke();
c.fillStyle = "rgba(30, 7, 75, 1.0)";
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