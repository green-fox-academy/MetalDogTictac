"use strict";
export {};
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let countUntil: number = 5;

function sum(countUntil): number {
  let startingNumber: number = 0;
  for (let i: number = 1; i <= countUntil; i++) {
    startingNumber += i;
  }
  return startingNumber;
}

console.log(sum(countUntil));
