'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable

let matrix2: number [][] = [];
let matrixSize = 4;

for (let i = 0; i < matrixSize; i++) {
  matrix2.push([]);
  for (let j = 0; j < matrixSize; j++) {
      if (j === matrixSize-i-1) {
        matrix2[i].push(1);
      }
      else {
        matrix2[i].push(0);
      }
}
console.log(matrix2[i]);
}

//Peter's solution

function createMatrix(size: number): void {
  const matrix: number[][] = []; // first level

  for (let i: number = 0; i < size; i++) {
    matrix[i] = []; // second level

    for (let j: number = 0; j < size; j++) {
      matrix[i][j] = j === (size - i - 1) ? 1 : 0;
    }

    console.log(matrix[i]);
  }
}

createMatrix(4);