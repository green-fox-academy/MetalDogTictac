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

console.log(sum);

let average: number = sum / x;

console.log(average);

















/* var given_number: number = 4;

var sum: number = 0;
for (var i = 1; i <= given_number; i++) {
    sum = sum + i;
}

console.log("\nSum:",sum);

var average: number = sum / (i-1)
console.log("Average: ",average, "\n"); */
