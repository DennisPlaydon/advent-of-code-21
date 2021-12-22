const assert = require("assert");
const { run } = require("./challenge.js");
const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

assert.equal(run(input)[0], 352195);
assert.equal(run(input)[1], 1600306001288);

console.log("All passed!");
