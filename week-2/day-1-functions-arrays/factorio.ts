"use strict";

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorialize(num: number): number {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    result = num * result;
  }
  return result;
}

console.log(factorialize(5));
