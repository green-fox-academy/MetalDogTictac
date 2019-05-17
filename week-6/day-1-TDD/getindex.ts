"use strict";

function returnIndex(inputArray: any, searchValue: any): any {
  let outputArray: number[] = [];
  if (typeof inputArray !== "object" && inputArray.constructor !== Array) {
    return "Please input an array";
  } else {
    for (let i: number = 0; i < inputArray.length; i++) {
      if (inputArray[i] === searchValue) {
        outputArray.push(i);
      }
    }
    if (outputArray[0] === undefined) {
      outputArray.push(-1);
    }
    return outputArray;
  }
}

export { returnIndex };
