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

let newMatrix: number[][] = [];
let matrixLines: number = 5;

for (let i: number = 0; i < matrixLines; i++) {
  newMatrix.push([]);
  for (let j: number = 0; j < matrixLines; j++) {
    if (j === matrixLines - 1 - i) {
      newMatrix[i].push(1);
    } else {
      newMatrix[i].push(0);
    }
  }
}

console.log(newMatrix);

//Peter's solution
/* 
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

createMatrix(4); */