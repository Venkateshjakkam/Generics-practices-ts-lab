"use strict";
// interface Person {
//   readonly name: string;
//   age: number;
// }
// const person: Person = { name: "Alice", age: 30 };
// function greet(person: Person, job:string = "Working as Developer Telus", jobId:number|string = "Xid12331"): string {
//   return `Hello ${person.name}, you are ${person.age} years old and ${job} with ${jobId}.`;
// }
// // person.name = "Venkatesh";
// console.log(greet(person));
// const products:any[] = 
//     [
//        {
//          id : 1,
//         pname : "Laptop",
//         price: 10000
//        },
//        {
//          id : 2,
//         pname : "Mobile",
//         price: 50000
//        },
//        {
//         id : 3,
//         pname : "HeadPhone",
//         price: 500
//        }
//     ];
// function filterPrice(products: any[]): any{
// // return products.filter(item => item.price > 1000).map(item => item.pname);
// for(let i=0; i<products.length; i++){
//    if( products[i].price > 1000){
//     console.log(products[i].pname);
//    };
// }
// }
// filterPrice(products);
// enum workingDays {
//    Monday = "Monday",
//    Tuesday = "Tuesday",
//    Wednesday = "Wednesday",
//    Thuesday = "Thuesday",
//    Friday = "Friday",
//    Saturday = "Saturday",
//    Sunday = "Sunday"
// }
// const weekday : workingDays[] = [workingDays.Monday,workingDays.Tuesday,workingDays.Wednesday,workingDays.Thuesday,workingDays.Friday];
// const weekend : workingDays[] = [workingDays.Saturday,workingDays.Sunday];
// console.log(weekend);
// const numbers = [10, 20, 30];
// const names = ["Alice", "Bob", "Charlie"];
// const products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" }
// ];
// let  arr: any[] = ["apple","banana","GOA"]
// function getFirst<T>(value: T[]): T{
//     return value[0];
// }
// console.log(getFirst(arr));
// console.log(getFirst(numbers));
// console.log(getFirst(names));
// console.log(getFirst(products));
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const numStack = new Stack();
numStack.push(10);
numStack.push(20);
numStack.push(30);
numStack.push(40);
numStack.push(50);
numStack.push(60);
console.log(numStack.peek());
console.log(numStack.pop());
console.log(numStack.size());
console.log(numStack.isEmpty());
const stringStack = new Stack();
console.log(stringStack.isEmpty());
stringStack.push("Hockey");
stringStack.push("Gym");
stringStack.push("Circket");
stringStack.push("VolleyBall");
stringStack.push("BasketBall");
console.log(stringStack.isEmpty());
console.log(stringStack.peek());
console.log(stringStack.pop());
console.log(stringStack.size());
