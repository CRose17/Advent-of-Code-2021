const { getArrayFromFile } = require("./day01array");
const { countDepthIncreases } = require("./day01CountIncreases");

const depths = getArrayFromFile("./day01inputs.txt");

test("Question 1: ", countDepthIncreases(depths));

/* function sum(a, b) {
  return a + b;
}
module.exports = sum; */
