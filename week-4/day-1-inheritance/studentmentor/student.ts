"use strict";

import { Person } from "./person";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(
    newName: string = "Jane Doe",
    newAge: number = 30,
    newGender: string = "female",
    newPreviousOrganization: string = "School of Life",
    newSkippedDays: number = 0
  ) {
    super(newPreviousOrganization, newSkippedDays);
    this.previousOrganization = newPreviousOrganization;
    this.skippedDays = newSkippedDays;
  }

  getGoal(): void {
    console.log("Be a junior software developer");
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${
        this.previousOrganization
      } who skipped ${this.skippedDays} from the course already.`
    );
  }

  skipDays(numberOfDays: number): number {
    return this.skippedDays + numberOfDays;
  }
}

let student = new Student();

const paul: Student = new Student('Paul', 50, 'male');
console.log(paul);
