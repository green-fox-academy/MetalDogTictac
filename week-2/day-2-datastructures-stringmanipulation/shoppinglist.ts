"use strict";

/* Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list? */

let shopList = {
  eggs: 0,
  milk: 0,
  fish: 0,
  apples: 0,
  bread: 0,
  chicken: 0
};

function isItInTheList() {
  console.log(shopList.hasOwnProperty("milk"));
  console.log(shopList.hasOwnProperty("bananas"));
}

isItInTheList();
