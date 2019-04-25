'use strict';

import { Apple } from './apples';

import * as test from 'tape';

let test = require('tape');

test('write out apple as string', t => {

  let firstApple = new Apple();

  const actual = firstApple.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
