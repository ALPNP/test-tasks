const { incredibleDataSet } = require("./dataSets");

/**
 * I think this is the most efficient algorithm.
 * I was looking for something faster but couldn't find it.
 */
function solution(listOfNumbers) {
  const set = new Set(listOfNumbers.sort());
  let result = 1;
  while (set.has(result)) result++;
  return result;
}

console.log(solution(incredibleDataSet));
