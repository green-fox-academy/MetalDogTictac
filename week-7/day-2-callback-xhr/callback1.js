"use strict";
// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  return output;
};

const addOne = number => {
  return number + 1;
};

// EXERCISE 1:
console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]



// EXERCISE 2:
const words = ["map", "reduce", "filter"];

// Create a callback function which removes every second character from a string

const removeSecondLetter = word => {
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      newWord += word[i];
    }
  }
  return newWord;
};

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
