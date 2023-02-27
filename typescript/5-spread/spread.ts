const person = {
    name: 'John',
    age: 32,
};

const employee = {
    ...person,
    salary: 100000,
};

const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'potato', 'tomato'];
const food = [...fruits, ...vegetables];

console.log(food); // ['apple', 'banana', 'orange', 'carrot', 'potato', 'tomato']

