import fs from "fs";

console.log("Start");

const data = fs.readFileSync("world.txt", "utf8");

console.log("File reading completed");

console.log("End");