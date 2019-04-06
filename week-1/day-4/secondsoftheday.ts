'use strict';

let currentHours: number = 23;
let currentMinutes: number = 50;
let currentSeconds: number = 0;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let totalSeconds: number = 24 * 60 * 60;
let remainingSeconds: number = totalSeconds - (currentHours * 60 * 60) - (currentMinutes * 60) - currentSeconds;

console.log(remainingSeconds);