import path from "path";

//console.log(path.basename("c:\\node js\\app.html"));                  
//console.log(path.basename("c:\\node js\\app.js", ".js"));                    // for only app

// console.log(path.dirname("c:\\node js\\app.js"));
// console.log(path.dirname("c:\\node js\\courses\\app.js"));
// console.log(path.extname("c:\\node js\\courses\\app.js"));

//console.log(path.join("c:", "Node js", "module", "index"));

// GO UP A LEVEL
// console.log(path.join("c:", "Node js", "module", "index", ".."));                          //removes the last one
// console.log(path.join("c:", "Node js", "module", "index", "..", "..")); 

//console.log(path.normalize("c:\\node js\\\courses\\store\\app.js"));
//console.log(path.parse("c:\\node js\\courses\\app.js"));

console.log(path.parse("c:\\node js\\courses\\app.js").base);
console.log(path.parse("c:\\node js\\courses\\app.js").name);
console.log(path.parse("c:\\node js\\courses\\app.js").ext);
