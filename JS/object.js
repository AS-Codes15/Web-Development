// const student = {
//     fullName: "Archana Sharma",
//     marks: 83,
//     printMarks: function () {
//         console.log("marks =",this.marks);
//     },
// };

const employee = {
    calTax() {
        console.log("tax rate is 10%");
    }
};

const archana = {
    salary: 50000,
};

archana.__proto__ = employee;