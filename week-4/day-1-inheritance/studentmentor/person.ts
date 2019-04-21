'use strict';

export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(newName: string = 'Jane Doe', newAge: number = 30, newGender: string = 'female') {
    this.name = newName;
    this.age = newAge;
    this.gender = newGender;
  }

  introduce() {
    console.log (`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`)
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

let people = [];

let jane: Person = new Person ();
console.log(jane);

let peter: Person = new Person ('Peter', 25, 'male');
console.log(peter);