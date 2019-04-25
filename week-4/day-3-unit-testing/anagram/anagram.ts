"use strict";

/* Write a function, that takes two strings and returns a boolean value 
based on if the two strings are Anagramms or not.
Write a test for it */

function isAnagram(word1, word2): boolean {
  if (!word1 || !word2) {
    return;
  }
  word1 = word1
    .split("")
    .sort()
    .join("");
  word2 = word2
    .split("")
    .sort()
    .join("");

  return word1 === word2;
}

console.log(isAnagram("joe", "jeo"));

export { isAnagram };
