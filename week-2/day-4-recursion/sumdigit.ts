"use strict";

//Given a non-negative int n, return the sum of its digits recursively (no loops).
//Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
//while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(n: number) {
  n = Math.floor(n);
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + sumDigits(n / 10);
  }
}

console.log(sumDigits(126));
