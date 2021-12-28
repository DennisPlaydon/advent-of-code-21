const assert = require("assert");
const { run } = require("./challenge.js");
const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

assert.equal(run(input)[0], 340987);
assert.equal(run(input)[1], 96987874);

console.log("All passed!");
