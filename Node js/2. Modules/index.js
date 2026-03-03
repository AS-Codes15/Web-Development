//this will allow us to use that fucntion from greet.js file and wwe can use it right here
 const greet = require("./greet");

// greet("Archana")

const{person1, person2, person3} = require("./person");
console.log(person1, person2, person3);

greet(person1);
greet(person2);
greet(person3);