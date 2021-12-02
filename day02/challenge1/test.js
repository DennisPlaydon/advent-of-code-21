const assert = require("assert");
const { run } = require("./d2-challenge1");
const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");
assert.equal(run(input), 1580000);

console.log("All passed!");
