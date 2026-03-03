// Event handling in JS

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div")
// }

//Event object

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY)
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY)
// }

//EVENT LISTENER

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",() => {
//     console.log("btn1 was clicked - handler 1");
// })

// btn1.addEventListener("click",(evt) => {
//     console.log("btn1 was clicked - handler 2");
//     // console.log(evt);
//     // console.log(evt.type);
// })

// const handler3 = () =>{
//     console.log("btn1 was clicked - handler 3");
// }

// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click",() => {
//     console.log("btn1 was clicked - handler 4");
// })

// // to remove handler 3
// btn1.removeEventListener("click",handler3);



//ques
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode ="light";

modeBtn.addEventListener("click",() =>{
    if (currMode === "light") {
        currMode = "dark";

        //document.querySelector("body").style.backgroundColor ="black";

        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currMode = "light";

        //document.querySelector("body").style.backgroundColor ="white";
        
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
})