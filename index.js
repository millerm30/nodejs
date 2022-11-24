console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

console.log(process.argv);

const car = require("./car.js");
const fs = require("fs");
const os = require("os");
const http = require("http");

fs.writeFileSync("hello.txt", "Hello World!" + os.EOL);
fs.writeFileSync("hello.txt", "Hello World!" + os.EOL);
fs.appendFileSync("hello.txt", "Hello World!" + os.EOL);

const obj = {
  name: "Mike",
  age: 42,
};

const Port = 8080;

fs.readFile("index.html", function (err, html) {
  if (err) throw err;
  http.createServer(function (req, res) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    })
    .listen(Port);
});

console.log("Server running at http://localhost:8080/");
console.log(fs.readFileSync("hello.txt").toString());
console.log(obj);
console.log(car);


