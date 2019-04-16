"use strict";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require("fs");
export {};

function countTheLines(fileName: string) {
  try {
    let fileContent = fs.readFileSync("my-file.txt", "UTF-8");
    let numberOfSentences = fileContent.split("\n");

    if (fileContent) {
      console.log(numberOfSentences.length);
    } else {
      console.log("0");
    }
  } catch (e) {}
}

countTheLines("my-file.txt");
