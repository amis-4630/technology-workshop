/*
When writing arrow functions, you can omit the return keyword and curly braces if the function body is a single expression.

This is the common practice in React.
*/

//---------no function--------------------no curly-- 
const divide = (x: number, y: number): number => x / y;

console.log(divide(2, 2)); // 1


const logger = (message: string): number => {
    if (message) {
        console.log(message);
        return 1;
    }
    return 0;
}

/*
Arrow functions use lexical "this", meaning that the value of this is determined by the context in which the function is defined.
*/