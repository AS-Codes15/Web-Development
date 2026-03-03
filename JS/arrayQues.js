//1. find average

// let marks=[85,97,44,37,76,60];
// let sum=0;

// for (const num of marks) {
//     sum+=num;
// }

// console.log("sum=",sum);
// let avg=sum/marks.length;
// console.log("average=",avg);

//2.

let items=[250,645,300,900,50];
let i=0;

// for(let val of items){
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++
// }

// for (let i = 0; i < items.length; i++) {
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);


// 3. using aray methods

let companies= ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

//companies.shift();

//companies.splice(2,1,"Ola")

companies.push("Amazon");
console.log(companies)