const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

console.log(input === input.toUpperCase() ? "YES" : "NO");
