"use strict";

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let listB: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

//print whether listA contains Durian or not
console.log(listA.indexOf("Durian") > -1);

//remove Durian from listB
console.log(listB.splice(3, 1));
console.log(listB);

//add Kiwifruit to listA after the 4th element
console.log(listA.splice(4, 0, "Kiwifruit"));
console.log(listA);

//compare the size of listA to listB
if (listA.length > listB.length) {
  console.log("ListA has more elements than listB.");
} else {
  console.log("ListB has more elements than listA.");
}

//get the index of Avocado from listA
console.log(listA.indexOf("Avocado"));

//get the index of Durian from listB
console.log(listB.indexOf("Durian"));

//add Passionfruit and Pomelo to listB in a single statement
let addingNewFruits = listB.push("Passion Fruit", "Pomelo");
console.log(listB);

//print out the 3rd element from listA
console.log(listA[2]);
