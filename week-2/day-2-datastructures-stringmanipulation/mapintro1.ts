"use strict";

var newMap: any = {
  97: "a",
  98: "b",
  99: "c",
  65: "A",
  66: "B",
  67: "C"
};

console.log(newMap);

//Print all the keys
console.log(Object.keys(newMap));

//Print all the values
console.log(Object.values(newMap));

//Add value D with the key 68
newMap[68] = "D";

//Print the value that is associated with key 99
let findValue = Object.values(newMap);
console.log(findValue[6]);

//remove the key-value pair where the key is 97
delete newMap[97];
console.log(newMap);

//print whether there is an associated value with the key 100 or not
console.log(newMap.hasOwnProperty("100"));

//remove all the key-value pairs
for (let key in newMap) {
  delete newMap[key];
}

console.log(newMap);
