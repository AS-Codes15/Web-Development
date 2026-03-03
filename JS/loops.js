// for Loop

// for (let i = 0; i < 5; i++) {
//     console.log("Archu");
    
// }

// let sum=0;
// for (let i = 1; i <= 5; i++) {
//     sum+=i;  
// }
// console.log("sum=",sum);
// console.log("loop has ended");

// while Loop
// let i=1;
// while (i<=5) {
//     console.log("i=",i);
//     i++
// }

//do while Loop
// let i=20;
// do {
//     console.log("hello");
// } while (i<10);


//for-of Loop                          //used for array and string
// let str="Fuck off";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);

//for-in Loop
let student={
    fullName: "Archana Sharma",
    age: 20,
    cgpa: 8.2,
    isPass: true
};

for (let key in student) {
    console.log("keys=",key,"values=",student[key]);
}