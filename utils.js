const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );

const perf = (t1, t2) => +(t2 - t1).toFixed(2);

const getMinMaxValueKey = (obj) => {
  let [minValueKey] = Object.keys(obj);
  let maxValueKey = minValueKey;

  for (const key in obj) {
    if (obj[key] < obj[minValueKey]) {
      minValueKey = key;
    }
    if (obj[key] > obj[maxValueKey]) {
      maxValueKey = key;
    }
  }

  return { minValueKey, maxValueKey };
};

const calculateSpeedup = (fasterTime, slowerTime) => {
  const differenceInMilliseconds = slowerTime - fasterTime;
  const percentFaster = (differenceInMilliseconds / slowerTime) * 100;

  return percentFaster > 0 ? percentFaster.toFixed(2) + "%" : 'N/A';
};

module.exports = {
  arrayRange,
  perf,
  calculateSpeedup,
  getMinMaxValueKey,
};
