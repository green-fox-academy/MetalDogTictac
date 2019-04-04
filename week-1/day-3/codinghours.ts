'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyCodingHours: number = 6;
let weeklyWorkingHours: number = 52;
let weeklyCodingHours: number = 5 * dailyCodingHours;
let semesterWeeks: number = 17;

//amount of hours coded in one semester per attendee
console.log(semesterWeeks * 5 * 6);

//percentage of coding hours in one semester
console.log((semesterWeeks * weeklyWorkingHours) / 100 * 6);
