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

// class Calculator{

//     add(x:number, y:number){
//         return x + y;
//     }

//     subtract(x:number,  y:number){
//         return x - y;
//     }

//     multiply(x:number, y:number){
//         return x * y;
//     }

//     divide(x:number, y:number){
//         if(y === 0){
//             return "Not Defined";
//         } else {
//             return x/y ;
//         }
//     }
// }

// const c = new Calculator();
// console.log(c.add(10,6));
// console.log(c.subtract(9,8));
// console.log(c.multiply(5,8));
// console.log(c.divide(10,2));
// console.log(c.divide(6,0));



// write a function that validates a User object (checks required fields, types) 
// and returns typed error messages


// interface User {
//   name: string;
//   email: string;
//   phNumber: number;
// }

// type ValidationError = {
//   field: keyof User;
//   message: string;
// };

// class ValidationRule {
//   private user: User;
//   public errors: ValidationError[] = [];

//   constructor(user: User) {
//     this.user = user;
//   }

//   validate(): ValidationError[] {
//     this.errors = []; // reset errors

//     // Name validation
//     if (!this.user.name) {
//       this.errors.push({ field: "name", message: "Name is required" });
//     } else if (typeof this.user.name !== "string") {
//       this.errors.push({ field: "name", message: "Name must be a string" });
//     }

//     // Email validation
//     if (!this.user.email) {
//       this.errors.push({ field: "email", message: "Email is required" });
//     } else if (typeof this.user.email !== "string") {
//       this.errors.push({ field: "email", message: "Email must be a string" });
//     } else if (!this.user.email.includes("@")) {
//       this.errors.push({ field: "email", message: "Email is invalid" });
//     }

//     // Phone Number validation
//     if (this.user.phNumber === undefined || this.user.phNumber === null) {
//       this.errors.push({ field: "phNumber", message: "Phone number is required" });
//     } else if (typeof this.user.phNumber !== "number") {
//       this.errors.push({ field: "phNumber", message: "Phone number must be a number" });
//     }

//     return this.errors;
//   }
// }

// const user: User = {
//   name: "test Name",
//   email: "test@gmail.com",
//   phNumber: 9876543210
// };

// const validator = new ValidationRule(user);
// const errors = validator.validate();

// console.log(errors);
// console.log(user);