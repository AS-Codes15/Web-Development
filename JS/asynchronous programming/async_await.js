// An async function always returns a promise itself
// await keyword pause the execution of its surrounding for the promise to be setteled
//await is only used with asycnc function

// async function hello() {
//     console.log("hello");
// }

// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(30);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }


function getData(dataId) {
    return new Promise((resolve,reject) =>{
       //2s
        setTimeout(() => {
            console.log("data:",dataId);
            resolve("success");
        }, 3000);
   });
}

async function getAllData() {            //need call to execute
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(2);
    console.log("getting data 4....");
    await getData(4);
}

//getAllData();


//IIFE
( async function() {      
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(2);
    console.log("getting data 4....");
    await getData(4);
}) ();                  //does not need call to execute
