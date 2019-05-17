"use strict";
import * as test from "tape";
import { isAnagram } from "./anagram";

test("Gets the index of a value from a list", t => {
  const word1: string = "csao";
  const word2: string = "scao";
  const word3: string = "csss";
  const word4: string[] = ["c", "sao"];
  t.equal(isAnagram(word1, word2), true);
  t.equal(isAnagram(word1, word3), false);
  t.equal(isAnagram(word1, word4), "Please input proper things");
  t.end();
});
