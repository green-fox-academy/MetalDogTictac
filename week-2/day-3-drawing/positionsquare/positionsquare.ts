"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number) {
  for (let y = 0; y <= 400; y = y + 150) {
    // ez miert van itt???? y + 150? miert nem lehet tobb, kevesebb?
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.fillRect(x, y, 50, 50);
  }
}
drawSquare(100, 1);
