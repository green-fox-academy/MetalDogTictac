'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');
export {};

function writeMyName(fileName: string) {
  try {
    fs.readFileSync('writemyname.txt');
    fs.writeFileSync('writemyname.txt', fileName);
  } catch (e) {
    console.log('Unable to write file: writemyname.txt');
  }

}

writeMyName('Lili Ivany');

