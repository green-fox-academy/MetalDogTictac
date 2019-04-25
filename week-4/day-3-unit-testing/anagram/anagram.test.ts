"use strict";

import { isAnagram } from "./anagram";

import * as test from "tape";

test("comparing anagrams", function(t: any) {
  const actual: boolean = isAnagram("anna", "nana");
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
});
