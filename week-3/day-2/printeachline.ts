'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');
let read = '';

function readFileContent(path) {
  return fs.readFileSync('my-file.txt', 'UTF-8');
}

try {
  read = readFileContent('my-file.txt');
} catch (e) {
  console.log('Unable to read file: my-file.txt');
}

console.log(read);