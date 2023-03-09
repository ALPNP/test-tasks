const { perf, calculateSpeedup, getMinMaxValueKey } = require("./utils");

const {
  smallDataSet,
  mediumDataSet,
  bigDataSet,
  veryBigDataSet,
  incredibleDataSet,
} = require("./dataSets");


function measureArray(listOfNumbers) {
  const t1 = performance.now();
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
