const assert = require("assert");
const { run } = require("./d1-challenge2");
const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");
assert.equal(run(input), 1653);

console.log("All passed!");