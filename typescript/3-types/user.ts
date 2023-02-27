/*
In TypeScript, objects and types are declared with the interface keyword and the type keyword.

You cannot add new properties to an object. 
This is a good thing because it prevents you from accidentally adding a property to an object that you did not intend to add.

*/

type User = {
    name: string;
    age: number;
};

const user: User = {
    name: 'John',
    age: 22,
};

user.major = 'Computer Science'; // Error: Property 'major' does not exist on type '{ name: string; age: number; }'.

console.log(user); // Error: Property 'major' does not exist on type '{ name: string; age: number; }'.