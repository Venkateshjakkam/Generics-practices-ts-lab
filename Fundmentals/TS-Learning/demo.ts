interface Details {
    name:string;
    age:number;
    gender:string;
}

let newObj:Details[] = [
    {name:"John",age:30,gender:"male"},
    {name:"caretner",age:32,gender:"female"},
    {name:"David",age:38,gender:"male"},
    {name:"",age:-8,gender:"male"},
    {name:"David",age:38,gender:"male"},
    {name:"",age:-8,gender:"male"}
]


// function getAverageAge(newObj:Details[]){

//     if(newObj.length===0) return 0;

//     let averAge:any = newObj.reduce((sum , currItem) => {
//      return sum + currItem.age;
//     },0)

//     return averAge/newObj.length;

// }

// console.log(getAverageAge(newObj))


// function filterOutInvalidUsers(newObj:Details[]){

//     const filterDetails:any = newObj.filter((item,id:any)=>{
//         if(item.name === ""){
//             console.log(`The name was not given on ${id}`)
//             return `The name was not given on ${id}`;
//         } else if(item.age <= 0){
//             return "The age is less Than zero";
//         } else if(item.name === "" && item.age <= 0){
//             return "The entered age and name are Incorrect or reenter properly";
//         } else if(item.age>18){
//             return `The item id is ${id}`;
//         } 
//     },"InitialValue");

// }
// console.log(filterOutInvalidUsers(newObj));


function findGender(newObj:Details[]){
    let male:any[] = [];
     let female:any[] = [];

     newObj.forEach((item,id)=>{
         if(item.gender === "male"){
            male.push(item);
        } else if(item.gender === "female") {
            female.push(item);
        }
    }) 

    return {  male, female };
    
}
// console.log(findGender(newObj));



function getYounger(newObj:Details[]){
    let young:any[] = [];
    let old:any[] = [];

    newObj.forEach((item,id) => {
        if(item.age <= 18){
            young.push(item.name);
        } else {
            old.push(item.name)
        }
    });

    return { young, old }
}
console.log(getYounger(newObj))


function duplicateName(newObj:Details[]){

    let dpName:any[] = [];
    let newName:any[] = [];

    let orgnialName = newObj.map((item,id)=> {
        newName.push(item.name);
    })

    newObj.forEach((item:any,id)=>{
        if(newName.includes(item.name)){
            dpName.push(item.name)
        }
    });
    return {dpName, newName};
}
console.log(duplicateName(newObj))


// for(let i=0; i<=newObj.length-1; i++){
//     console.log(`My name is ${newObj[i].name} and age is ${newObj[i].age} i am ${newObj[i].gender}` );
// }

// function demo(a:number, b:number){
//     return a+b;
// }
// console.log(demo(3,6))