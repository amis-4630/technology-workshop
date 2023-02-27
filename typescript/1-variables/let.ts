/*
In JavaScript, variables can be scoped to the function, module, namespace, or global scope.
Below, the variable mascot is declared in the global scope with the var keyword.

In TypeScript, the let keyword is the preferred way to declare a variable.

*/

var mascot = "Brutus"; // This is a global variable

if (mascot) {
    var mascot = "Buster"; // This is a local variable
    console.log(mascot); // Buster
}

console.log(mascot); // Buster