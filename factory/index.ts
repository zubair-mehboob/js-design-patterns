import userFactory from './userFactory';

const instructor = userFactory('instructor', 'Bob', 'Software Engineer', 1000);
const student = userFactory('student', 'Hail', 'Beginner');
console.log(instructor.toString())
console.log(student.toString())