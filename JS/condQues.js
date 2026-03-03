//alert("hello")

// let name = prompt("what is your name");
// console.log(name)

// to check a no. is multiple of 5 or not

// let num1 = prompt("enter a number")
// if(num1 % 5 === 0)
//     console.log(num1," is multiple of 5")
// else
//     console.log(num1," is not multiple of 5")

let marks=prompt("enter your marks");
let grades;
if(marks >= 90 && marks <= 100)
{
    grades="A";
}
else if(marks >=70 && marks <= 89)
{
    grades="B";
}
else if(marks >= 60 && marks <= 69)
{
    grades="C";
}
else if(marks >= 50 && marks <= 59)
{
    grades="D";
}
else if(marks >= 0 && marks <=40)
{
    grades="F"
}

console.log(grades)