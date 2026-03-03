// function myFunc(msg) {
//     console.log(msg);
// }

// myFunc("bedagrk")

// function sum(a,b) {
//     return a+b;
// }

// const arrowSum = (a,b) => {
//     console.log(a + b);
// };

// const printMsg = () => console.log("level sbke niklenge");

// function countVowel(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a"  || char === "e" || char ==="i" || char === "o" || char === "u") 
//         {
//             count ++;
//         }
//     }

//     console.log(count);
// }


const countVowel = (str) =>{
    let count = 0;
    for (const char of str) {
        if (char === "a"  || char === "e" || char ==="i" || char === "o" || char === "u") 
        {
            count ++;
        }
    }

    return count;
}