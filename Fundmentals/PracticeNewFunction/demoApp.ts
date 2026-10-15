// Filter invalid users
// Given User[] with name and age, return users with a non-empty name and
//  age greater than or equal to 18.


interface User {
    name: string;
    age: number;
}

const users:User[] = [{name:"Sumathi",age:28},{name:"Vidya", age:24}]

function getDetails(users:User[]): User[] {
return users.filter((item,id )=> item.age > 25 );
}
console.log(getDetails(users));


function isValidUser(user: User): boolean {
  return (
    typeof user.name === "string" &&
    user.name.trim() !== "" &&
    Number.isFinite(user.age) &&
    user.age >= 18
  );
}

const valid = users.filter(isValidUser);

// Generics----
function getFirst<T>(items:T[]):T | undefined {
    return items[0];
}
const a = getFirst([1,2,3]);
const b = getFirst(["X","Y","Z"]);
const c = getFirst([]);
const d = getFirst([{id:1,name:"Sumathi"},{id:2,name:"Vidya"}]);

// Partial<T>
// Create an updateUser 
// function that accepts Partial<User> so callers can update only selected properties.

interface UserInfo {
  id: number;
  name: string;
  email: string;
  age: number;
}

function updateUser(user: UserInfo, updates: Partial<UserInfo>): UserInfo {
  return { ...user, ...updates };
}

const alice: UserInfo = { id: 1, name: "Alice", email: "alice@example.com", age: 28 };

updateUser(alice, { age: 29 });                    // only age changes
updateUser(alice, { name: "Alicia", age: 30 });    // two fields
updateUser(alice, {});                             // no changes, returns a copy
// updateUser(alice, { phone: "123" });               // ❌ Error: 'phone' does not exist in User
// updateUser(alice, { age: "30" }); 



//Pick and Omit
interface UserData {
    id:number;
    name:string;
    email:string;
    phone:number;
    job:boolean;
}

type userDetails = Pick<UserData, "id" | "name" |"phone">
type userEmailData = Omit<UserData, "emial">



const person1: userDetails =  {id:1,name:"Sumathi"};
const person2: userDetails = {id:2,name:"Vidya",phone:92039};
const person3: userEmailData = {id:3, name:"venkatesh", emai:"venkate.Sumathi@gmail.com"}