'use strict';

var lineCount: number = 14;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
  let empty: any = "";
  for (let j: number = 1; j < lineCount-i; j++){
      empty = empty + " ";
  }
  for (let k: number = 1; k <= (2*i+1); k++) {
      empty = empty + '*';
    }
  
  console.log(empty);
}