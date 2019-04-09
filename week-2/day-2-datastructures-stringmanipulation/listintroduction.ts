//Create an empty list which will contain names (strings)
let nameList: string[] = [];

//Print out the number of elements in the list
console.log(nameList.length);

//Add William to the list
nameList[0] = "William";

console.log(nameList);

//Print out whether the list is empty or not
if (nameList.length === 0) {
  console.log("Name list is empty");
} else {
  console.log("The name list already contains data");
}

//add John and Amanda to the list
nameList.push("John", "Amanda");

//Print out the number of elements in the list
console.log(nameList.length);

//Print out the 3rd element
console.log(nameList[2]);

//Iterate through the list and print out each name
for (let i: number = 0; i <= nameList.length; i++) {
  console.log(nameList[i]);
}

//Iterate through the list and print the names with bullet numbers
for (let i: number = 0; i <= nameList.length; i++) {
  console.log([i + 1] + "." + nameList[i]);
}

//remove the 2nd element
nameList.splice(1, 1);
console.log(nameList);

//Iterate through the list in a reversed order and print out each name
nameList
  .slice()
  .reverse()
  .forEach(function(nameList) {
    console.log(nameList);
  });

//Remove all elements
nameList.splice(0, 3);
console.log(nameList);
