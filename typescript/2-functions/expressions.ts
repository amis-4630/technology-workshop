/*
Expression syntax is also supported in TypeScript.
When using expression syntax, the function is not hoisted.
YOu must declare the function before you can use it.

*/
const multiply = function (x: number, y: number): number {
    return x * y;
}

console.log(multiply(2, 2)); // 4