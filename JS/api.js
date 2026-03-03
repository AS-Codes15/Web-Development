const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const bnt = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

const getFacts =async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
     console.log(response);                 //JSON form
    let data = await response.json();

    console.log(data);
     console.log(data[0]);

    factPara.innerText = data[0].text;
};

// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     })
//     .then((data) =>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     })
// }

bnt.addEventListener("click",getFacts);
