'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require("fs");
export {};

function countTheLines(fileName: string) {
  try {
    let logsContent = fs.readFileSync("logs.txt", "UTF-8");
    let splitByLines = logsContent.split("\r\n");
    let newArr: number[] = [];
    let IPaddresses: number[] = [];

    for(let i: number = 0; i < splitByLines.length; i++) {
      newArr.push(splitByLines[i].split('   '));
    }

    //console.log(newArr);

    for(let i: number = 0; i < newArr.length; i++) {
      IPaddresses.push(newArr[i][1]);
    }
    console.log(IPaddresses);

  } catch (e) {}
}

countTheLines("logs.txt");

function getRatio(fileName: string) {
  
}