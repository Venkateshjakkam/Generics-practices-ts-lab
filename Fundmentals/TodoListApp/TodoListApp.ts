class TodoApp{
       public items: string[] = ["Apple", "Banana", "Grape"];
         
       constructor(){
              this.items.push("pineApple");
              this.items.forEach((item) => console.log(item));
       }
      
}

const todoApp = new TodoApp();

console.log(todoApp);