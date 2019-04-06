'use strict';
export {};

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let x: number = 3;

let sum: number = 0;

for (let i: number = 1; i <= x; i++) {
   sum = sum + i;
}

console.log('Sum is: ' + sum);

let average: number = sum / x;

console.log('Average is: ' + average);
