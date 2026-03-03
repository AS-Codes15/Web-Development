// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }    

// class Child extends Parent {}
// let obj = new Child();


// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("can eat");
//     }

//     sleep(){
//         console.log("can sleep");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         super(); //to invoke parent class constructor (mandatory)
//         this.branch = branch;
//     }
//     work(){
//         console.log("solve problem and also create their own problem"); 
//     }
// }

// let engObj = new Engineer("software engg");

class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name =name;
    }

    sleep(){
        console.log("can sleep");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor (mandatory)
    }

    work(){
        super.sleep();
        console.log("solve problem and also create their own problem"); 
    }
}

let engObj = new Engineer("archana");

