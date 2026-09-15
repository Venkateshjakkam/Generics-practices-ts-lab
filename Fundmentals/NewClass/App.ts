// class Animal<T>{
//    name: T;

//   constructor(name: T) {
//     this.name = name;
//   }

//   makeSound(): String{
//      return "Bowwww...";
//  }

// }

// class Dog <T> extends Animal <T> {
//      makeSound():String{
//         return "Start Barking...";
//      };

// }

// const myDog = new Dog("Tommy");
// console.log(myDog.name);     
// console.log(myDog.makeSound());




// class Car<T>{

//     constructor(make:T){ 
//         this.make = make;
//     }

//     private name: String = "venkatesh";
//     public age: number = 30;
//     protected make: T;

    
//     carMake(): void{
//         console.log(this.age);
//         console.log(this.name);
//         console.log(this.make);
//     }
// }

// const myCar = new Car("Honda");

// // console.log(myCar.age);         
// // console.log(myCar.name);     
// console.log(myCar);     

// myCar.carMake();





abstract class Shape{
    abstract area():number;
}

class Triangle extends Shape{

    private length:number;
     private width:number;

    constructor(length:number , width:number){
        super();
        this.length = length;
        this.width = width;
    }

    area():number{
        return 0.5*(this.length*this.width);
    }

}


class Rectangle extends Shape{
    private length:number;
    private width:number;

    constructor(length:number,width:number){
        super();
        this.length = length;
        this.width = width;
    }

    area():number{
        return this.length*this.width;
    }
}


class Circle extends Shape{
    private radius:number;
    constructor(radius:number){
        super();
        this.radius = radius;

    };

    area(): number {
        return 2*3.14*(this.radius)**2;
    }
}

const t = new Triangle(10, 5);
console.log(t.area());


const r = new Rectangle(20,10);
console.log(r.area());

const c = new Circle(10);
console.log(c.area());