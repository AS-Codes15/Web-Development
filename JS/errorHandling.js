let a=5
let b=0;

console.log(`a + b = ${a+b}`);
console.log(`a * b = ${a*b}`);

try {
    console.log(`a + c = ${a+c}`);
} catch (err) {
    console.log(err);
}

console.log(`a - b = ${a-b}`);