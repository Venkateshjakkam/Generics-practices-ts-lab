"use strict";
// interface Person {
//   name: string;
//   age: number;
// }
// const person: Person = { name: "Alice", age: 30 };
// function greet(person: Person): string {
//   return `Hello ${person.name}, you are ${person.age} years old.`;
// }
// console.log(greet(person));
var workingDays;
(function (workingDays) {
    workingDays["Monday"] = "Monday";
    workingDays["Tuesday"] = "Tuesday";
    workingDays["Wednesday"] = "Wednesday";
    workingDays["Thuesday"] = "Thuesday";
    workingDays["Friday"] = "Friday";
    workingDays["Saturday"] = "Saturday";
    workingDays["Sunday"] = "Sunday";
})(workingDays || (workingDays = {}));
const weekday = [workingDays.Monday, workingDays.Tuesday, workingDays.Wednesday, workingDays.Thuesday, workingDays.Friday];
const weekend = [workingDays.Saturday, workingDays.Sunday];
console.log(weekend);
