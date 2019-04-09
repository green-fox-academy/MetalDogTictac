"use strict";

var bookMap: any = {
  "978-1-60309-452-8": "A Letter to Jo",
  "978-1-60309-459-7": "Lupus",
  "978-1-60309-444-3": "Red Panda and Moon Bear",
  "978-1-60309-461-0": "The Lab"
};

//print all key-value pairs in the following format:
//A letter to Jo (ISBN: xxx)

let codes = Object.keys(bookMap);
let books = Object.values(bookMap);

codes.forEach(function(ISBN, bookName) {
  console.log(`${codes[bookName]} (ISBN: ${ISBN})`);
});

//delete a kv pair that includes a certain key
delete bookMap["978-1-60309-452-8"];

//delete the pair with value The Lab
Object.keys(bookMap).forEach(e => {
  if (bookMap[e] === "The Lab") {
    delete bookMap[e];
  }
});

//add the following kv pairs to the map
bookMap["978-1-60309-450-4"] = "They Called us Enemy";
bookMap["978-1-60309-453-5"] = "Why Did We Trust Him?";

//print whether there is an associated value with key xxx
console.log(bookMap.hasOwnProperty("478-0-61159-424-8"));

//print the value associated with key xxx
console.log(bookMap["978-1-60309-453-5"]);
