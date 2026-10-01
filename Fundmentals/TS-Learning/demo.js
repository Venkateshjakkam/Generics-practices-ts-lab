"use strict";
let newObj = [
    { name: "John", age: 30, gender: "male" },
    { name: "caretner", age: 32, gender: "Female" },
    { name: "David", age: 38, gender: "male" },
    { name: "", age: -8, gender: "male" }
];
// function getAverageAge(newObj:Details[]){
//     if(newObj.length===0) return 0;
//     let averAge:any = newObj.reduce((sum , currItem) => {
//      return sum + currItem.age;
//     },0)
//     return averAge/newObj.length;
// }
// console.log(getAverageAge(newObj))
function filterOutInvalidUsers(newObj) {
    const filterDetails = newObj.filter((item, id) => {
        if (item.name === "") {
            console.log(`The name was not given on ${id}`);
            return `The name was not given on ${id}`;
        }
        else if (item.age <= 0) {
            return "The age is less Than zero";
        }
        else if (item.name === "" && item.age <= 0) {
            return "The entered age and name are Incorrect or reenter properly";
        }
    }, "InitialValue");
    return filterDetails;
}
console.log(filterOutInvalidUsers(newObj));
// for(let i=0; i<=newObj.length-1; i++){
//     console.log(`My name is ${newObj[i].name} and age is ${newObj[i].age} i am ${newObj[i].gender}` );
// }
// function demo(a:number, b:number){
//     return a+b;
// }
// console.log(demo(3,6))
