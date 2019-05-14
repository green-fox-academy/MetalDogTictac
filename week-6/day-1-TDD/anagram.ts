'use strict';

function isAnagram(word1: any, word2: any): any {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    return 'Please input proper things';
  } else {
    word1 = word1
      .split('')
      .sort()
      .join('');

    word2 = word2
      .split('')
      .sort()
      .join('');

    return word1 === word2;
  }
}

export { isAnagram };