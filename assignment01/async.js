import fs from "fs";

console.log("Start");

fs.readFile("world.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File reading completed");
});

console.log("End");