"use strict";
import * as test from "tape";
import { returnIndex } from "./getindex";

test("Gets the index of a value from a list", t => {
  const testArray1: number[] = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9];
  const testArray2: string[] = [
    "reggeli",
    "ebed,",
    "vacsi",
    "reggeli",
    "vacsi",
    "ebed"
  ];
  const testArray3: string = "Nem vagyok egy array";
  const testInput0: number = 0;
  const testInput1: number = 7;
  const testInput2: string = "vacsi";
  const testInput3: string = "nem vagyok egy array";
  const expected0: number[] = [-1];
  const expected1: number[] = [6, 7, 8];
  const expected2: number[] = [2, 4];
  const expected3: string = "Please input an array";

  t.deepEqual(returnIndex(testArray1, testInput0), expected0);
  t.deepEqual(returnIndex(testArray1, testInput1), expected1);
  t.deepEqual(returnIndex(testArray2, testInput2), expected2);
  t.equal(returnIndex(testArray3, testInput3), expected3);
  t.end();
});
