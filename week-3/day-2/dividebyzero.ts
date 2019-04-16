'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero (num: number = 10) {
  if (num !== 0) {
    console.log(10 / num);
  } else {
    console.log('fail');
  }
}

divideByZero(0); 
