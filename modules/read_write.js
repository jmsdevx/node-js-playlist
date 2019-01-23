//reading and writing files

//Synchronous Example

// const fs = require("fs");

// const readme = fs.readFileSync("./readme.txt", "utf8");
// // console.log(readme);

// fs.writeFileSync("writeme.txt", readme);

//Async example

// const fs = require("fs");

// //while this is happening in the background
// fs.readFile("readme.txt", "utf8", (err, data) => {
//   return fs.writeFile("writeme.txt", data);
// });

// //this code will execute
// console.log("test");