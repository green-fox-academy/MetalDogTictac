"use strict";

import { Student } from "./student";
/* Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() */

export class Teacher {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  answer() {
    console.log("Teacher answers.");
  }

  teach(student: Student) {
    student.learn();
  }
}
