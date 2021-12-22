const assert = require("assert");
const { run } = require("./d3-challenge1");
const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().split("\n");
assert.equal(run(input), 3847100);

console.log("All passed!");
