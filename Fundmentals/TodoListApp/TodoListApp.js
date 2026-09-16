"use strict";
// class TodoApp{
//        public items: string[] = ["Apple", "Banana", "Grape"];
//        addItem(item: string){
//          this.items.push("pineApple");
//        }
//        removeItem(item: string){
//             this.items.filter((i)=> i !== item);
//        }
//        listItems(item:string){
//          this.items.forEach((item) => console.log(item));
//        }
// }
// const todoApp = new TodoApp();
// todoApp.listItems("");
// console.log(todoApp.listItems);
// Type Safe Calculator --- functions for add/subtract/multiply/divide with proper typing and error handling for divide-by-zero
class Calculator {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            return "Not Defined";
        }
        else {
            return x / y;
        }
    }
}
const c = new Calculator();
console.log(c.add(10, 6));
console.log(c.subtract(9, 8));
console.log(c.multiply(5, 8));
console.log(c.divide(10, 2));
console.log(c.divide(6, 0));
