function greet(username) {
    console.log("hello", username);
}

//Tell other file that they can use this same function
module.exports = greet;