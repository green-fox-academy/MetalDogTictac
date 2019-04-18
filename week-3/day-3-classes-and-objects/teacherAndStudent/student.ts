"use strict";

import { Teacher } from "./teacher";
/* Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() */

export class Student {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  learn() {
    console.log("Student started to learn.");
  }

  question(teacher: Teacher) {
    teacher.answer();
  }
}
