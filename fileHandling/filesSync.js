const fs = require("fs");
// const data = fs.readFileSync("../data/user.js", "utf-8");
// console.log(data);

// fs.writeFileSync("../data/file1.txt", "hey from file system"); //rewrites the text

fs.appendFileSync("../data/file1.txt", "start"); //appends the text