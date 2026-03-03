// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     reject("some error occured")
// });


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:",dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 7000);
//     });
// }


//to use promises
const getPromise = () => {
     return new Promise((resolve,reject) => {
        console.log("I am a promise");
        //resolve("success");
        reject("error");
    });
};

let promise= getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
})

promise.catch((err) => {
    console.log("rejected",err);
})