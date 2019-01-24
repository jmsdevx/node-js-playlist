//directories methods example

// const fs = require("fs");

//delete a file
// fs.unlink('readme.txt')

//write a file
// fs.writeFile("readme.txt", "this is my test file", () => null);

//synchronous

//make directory
// fs.mkdirSync("manystuffs");

//delete directory
// fs.rmdirSync("manystuffs");

//async

//make a directory
// fs.mkdir("stuff", () =>
//   //read a file
//   fs.readFile("readme.txt", "utf8", (err, data) => {
//     //make a new file with the read file data
//     fs.writeFile("./stuff/writeme.txt", data, () => null);
//   })
// );

//delete a directory
//first delete file inside
// fs.unlink("./stuff/writeme.txt", () => fs.rmdir("stuff"));
