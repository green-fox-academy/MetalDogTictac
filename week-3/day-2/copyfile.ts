// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

"use strict";
export {};

let fs = require("fs");

function copyFileContent(fromFile: string, toFile: string) {
  try {
    let textToAdd = fs.readFileSync(fromFile, "utf-8"); //save text in var that has to be added
    fs.appendFileSync(toFile, textToAdd);               //add that text with append to the desired file
    console.log("true");                                //console log if successful
  } catch (error) {}                                    //dont show any error
}

copyFileContent("my-file.txt", "myfile2.txt");
