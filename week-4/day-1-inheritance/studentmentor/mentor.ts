'use strict';

import { Person } from './person';

export class Mentor extends Person {
  level: string;

  constructor(newName: string = 'Jane Doe', newAge: number = 30, newGender: string = 'female', newLevel = 'intermediate') {
    super(newName, newAge, newGender);
    this.name = newName;
    this.age = newAge;
    this.gender = newGender;
    this.level = newLevel;
  }

  getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} ${this.level} mentor.`);
  }
}

let mentor = new Mentor();

const mentor1: Mentor = new Mentor('James', 40, 'male', 'senior');
console.log(mentor1);
