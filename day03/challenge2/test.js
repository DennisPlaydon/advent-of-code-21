const assert = require("assert");
const { run } = require("./d3-challenge2");
const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().split("\n");
assert.equal(run(input), 4105235);

console.log("All passed!");
