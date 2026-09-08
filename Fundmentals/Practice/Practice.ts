// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = { name: "Alice", age: 30 };

// function greet(person: Person): string {
//   return `Hello ${person.name}, you are ${person.age} years old.`;
// }

// console.log(greet(person));


enum workingDays {
   Monday = "Monday",
   Tuesday = "Tuesday",
   Wednesday = "Wednesday",
   Thuesday = "Thuesday",
   Friday = "Friday",
   Saturday = "Saturday",
   Sunday = "Sunday"
}

const weekday : workingDays[] = [workingDays.Monday,workingDays.Tuesday,workingDays.Wednesday,workingDays.Thuesday,workingDays.Friday];
const weekend : workingDays[] = [workingDays.Saturday,workingDays.Sunday];


console.log(weekend);