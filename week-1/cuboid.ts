'use strict';
export {};

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let h: number = 2;
let w: number = 3;
let l: number = 4;

let cuboidSurfaceArea: number = (2*w*l + 2*l*h + 2*h*w);
let cuboidVolume: number = h * w *l;

console.log(`Cuboid surface area is ${cuboidSurfaceArea}.`);
console.log(`Cuboid volume is ${cuboidVolume}.`);