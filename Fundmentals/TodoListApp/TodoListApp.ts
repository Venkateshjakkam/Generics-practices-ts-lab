interface Todo{
 id: number;
 text: string; 
 completed: boolean;
 Status:String 
}

type TodoList = {
    field: keyof Todo;
   Status: "pending" | "in-progress" | "done"
}

class TodoApp{
      public items: Todo[] = [
             { id: 1, text: "Apple", completed: false ,Status:"pending"},
             { id: 2, text: "Banana", completed: false , Status:"in-progress"},
             { id: 3, text: "Grape", completed: true , Status: "done"},
             { id: 4, text: "Pumpkin", completed: false , Status: "invalid"}
            ];
         
       addItem(text: string){
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
            Status:text
        };
         this.items.push(newTodo);
       }

      removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

 
  listItems() {
    this.items.forEach((item) => {
      const status = item.completed ? "[X]" : "[ ]";
      console.log(`${status} ${item.id}: ${item.text}`);
    });
  }


  toggleComplete(id: number){
    this.items = this.items.map((itm)=> {
        if(itm.id === id){
            return {
                ...itm,
                completed: !itm.completed
            }
        }
        return itm;
    });
  }

  getCompletedTodos(): Todo[]{
   return this.items.filter((itr)=> itr.completed === false);
  }

  updateStatus(id: number, status: String) {
    const item = this.items.find((i) => i.id === id);
    if (item) {
      item.Status = status;
      if (status === "done") {
        item.completed = true;
      }
    }
  }

}

const todoApp = new TodoApp();

todoApp.updateStatus(2, "done");

todoApp.listItems();
console.log("\nCompleted Todos:", todoApp.getCompletedTodos());



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

