let num = [29,6,24];

// let newArr = num.map((val) => {
//     return val*val;
// })

// console.log(newArr)


//filter
// let newArr = num.filter((val) => {
//     return val%2 == 0;
// })


//reduce
// const output = num.reduce((res,curr) => {
//     return res + curr;
// })

// console.log(output);

const largest = num.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})

console.log(largest);