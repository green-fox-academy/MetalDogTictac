'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverseAString (reversed) {
  let newArray: string[] = reversed.split('');
  newArray = newArray.reverse();
  let output: string = newArray.join('');
  return output;
}

console.log(reverseAString(reversed));


