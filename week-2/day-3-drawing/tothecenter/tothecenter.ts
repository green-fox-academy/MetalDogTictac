"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function toTheCenter(x: number, y: number) {
  for (let x = 0; x <= 600; x = x + 300) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = "blue";
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
  return x;
}
console.log(toTheCenter(0, 0));
