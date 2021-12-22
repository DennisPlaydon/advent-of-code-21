const assert = require("assert");
const { run } = require("./challenge.js");
const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

// Pt. 1
// assert.equal(run(input), 4826);

// Pt. 2
assert.equal(run(input), 16793);

console.log("All passed!");
