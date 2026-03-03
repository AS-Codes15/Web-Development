class ToyotaCar {
    constructor(brand) {              
        this.brand = brand;                 //constructor
        console.log("creating new object");
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");

let fortuner = new ToyotaCar("fortuner");
console.log(fortuner);
let lexus = new ToyotaCar();                 //brand will be undifiend if not initialize

