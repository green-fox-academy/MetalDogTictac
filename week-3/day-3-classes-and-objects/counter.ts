"use strict";

/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {
  startNumber: number;
  amount: number;

  constructor(startNumber: number = 0, amount: number) {
    this.startNumber = startNumber;
    this.amount = amount;
  }

  add(num: number = 1) {
    return this.startNumber + num;
  }

  get(): string {
    return `${this.startNumber}`;
  }

  reset() {
    this.amount = this.startNumber;
  }
}

const newCounter: Counter = new Counter(5, 5);

newCounter.add();
console.log(newCounter);
