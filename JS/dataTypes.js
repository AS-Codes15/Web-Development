// 7 primitive data types

/*
let name="Archu";
let age=20;
let marks=8.2;
isFollow=true;
let x;
let a=null;

let b=BigInt("123");
let s=Symbol("hey");
*/

// non primitive data types
//OBJECT: collection of different variables

const student={
    fullName: "Archana Sharma",
    age: 20,
    cgpa: 8.2,
    isPass: true
};

console.log(student.fullName)
console.log(student['fullName'])

student['age']=student['age']+1;
console.log(student['age'])
