'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

let c: number = a;
let d: number = b;
b = c;
a = d;

console.log(a);
console.log(b);