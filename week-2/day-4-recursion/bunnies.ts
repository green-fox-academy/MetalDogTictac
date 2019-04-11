"use strict";

//We have a number of bunnies and each bunny has two big floppy ears. 
//We want to compute the total number of ears across all the bunnies recursively 
//(without loops or multiplication).

function bunnyEarCounter (numberOfBunnies: number): number {
  if (numberOfBunnies === 1) {
    return 2;
  } else {
    return numberOfBunnies + bunnyEarCounter(numberOfBunnies - 1);
  }
}

console.log(bunnyEarCounter(2));