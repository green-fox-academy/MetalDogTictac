'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: any[]) {
  let listOfUniques: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (listOfUniques.indexOf(arr[i]) < 0) {
      listOfUniques.push(arr[i]);
    } 
  }
  return listOfUniques;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`



