const assert = require("assert");
const { run } = require("./challenge1.js");
const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().split("\n");
assert.equal(run(input), 25410);

console.log("All passed!");
