const course = {
    courseName: 'TypeScript',
    students: 20,
    isAwesome: true,
};
// You can destructure an object into a variable.
// This is useful when you want to use only a few properties of an object.
const { courseName, students } = course;
console.log(courseName, students); // TypeScript 20