"use strict";

import { Sum } from "./sum";

import * as test from "tape";

let objectTested = new Sum();

test("return the sum of numbers in list", t => {
  //testing with multiple elements in the array

  let firstList: number[] = [1, 2, 3];

  t.equal(objectTested.summing(firstList), 6);
  t.end();
});

test("test with empty list", t => {
  //testing with an empty list

  let secondList: number[] = [];

  t.equal(objectTested.summing(secondList), 0);
  t.end();
});

test("test with one element", t => {
  //testing with one element in list

  let thirdList: number[] = [10];

  t.equal(objectTested.summing(thirdList), 10);
  t.end();
});
