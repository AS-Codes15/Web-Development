//1. print even no. from 0 to 100
// for (let i = 0; i <= 100; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }
    
// }

//2. guessNumber game
let gameNum=29;
let userNum=prompt("guess the nuber");
while (gameNum!=userNum) {
    let userNum=prompt("you entered wrong number. guess again");
}
console.log("congrats, you entered the right number");