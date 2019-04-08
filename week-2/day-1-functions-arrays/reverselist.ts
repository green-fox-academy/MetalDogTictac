"use strict";

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];

//done with a built-in method

let newList: number[] = numList.reverse();

console.log(newList);

//done with a loop

let reversedList: number[] = [];

for (let i = numList.length - 1; i >= 0; i--) {
  reversedList.push(numList[i]);
}

numList = reversedList;

console.log(numList);
