/*
    Using `let` keyword in TypeScript:
    - It is block-scoped
    - It is not hoisted
*/

var mascot = "Brutus"; // This is a global variable

if (mascot) {
    let mascot = "Buster"; // This is a local variable
    console.log(mascot); // Buster
}

console.log(mascot); // Buster