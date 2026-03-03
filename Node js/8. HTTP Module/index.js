import http from "http";

// Create out server
const server = http.createServer((req, res) => {
    console.log(req);
});

//Listening on port 3000
server.listen(3000, () => console.log("Server Up!"));