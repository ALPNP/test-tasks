const { perf, calculateSpeedup, getMinMaxValueKey } = require("./utils");

const {
  smallDataSet,
  mediumDataSet,
  bigDataSet,
  veryBigDataSet,
  incredibleDataSet,
} = require("./dataSets");

// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function measureArray(listOfNumbers) {
  const t1 = performance.now();
  listOfNumbers.sort()
  let result = 1;
  while (listOfNumbers.includes(result)) result++;
  const t2 = performance.now();
  return perf(t1, t2);
}

function measureSet(listOfNumbers) {
  const t1 = performance.now();
  const set = new Set(listOfNumbers);
  let result = 1;
  while (set.has(result)) result++;
  const t2 = performance.now();
  return perf(t1, t2);
}

const measureTable = {
  small: {
    array: measureArray(smallDataSet),
    set: measureSet(smallDataSet),
  },
  medium: {
    array: measureArray(mediumDataSet),
    set: measureSet(mediumDataSet),
  },
  big: {
    array: measureArray(bigDataSet),
    set: measureSet(bigDataSet),
  },
  veryBig: {
    array: measureArray(veryBigDataSet),
    set: measureSet(veryBigDataSet),
  },
  incredible: {
    // I do not recommended uses this method for this task.
    // Because includes method on big arrays use whole CPU resources.
    // includes: measureArray(incredibleDataSet),
    set: measureSet(incredibleDataSet),
  },
};

Object.keys(measureTable).forEach((key) => {
  const current = measureTable[key];
  const { minValueKey, maxValueKey } = getMinMaxValueKey(current);

  current.fastest = minValueKey;
  current.percent = calculateSpeedup(
    current[minValueKey],
    current[maxValueKey]
  );
});

console.log("");
console.log("Measure table in milliseconds:");
console.table(measureTable);
