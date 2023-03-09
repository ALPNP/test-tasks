const { arrayRange } = require("./utils");

const smallDataSet = [1, 2, 5, 8, 33];
const mediumDataSet = arrayRange(-100, 100, 1);
mediumDataSet.splice(199, 1);
const bigDataSet = arrayRange(-10000, 5000, 1);
bigDataSet.splice(14999, 1);
const veryBigDataSet = arrayRange(-50000, 50000, 1);
veryBigDataSet.splice(99999, 1);
const incredibleDataSet = arrayRange(-1000000, 1000000, 1);
incredibleDataSet.splice(1999999, 1);

module.exports = {
  smallDataSet,
  mediumDataSet,
  bigDataSet,
  veryBigDataSet,
  incredibleDataSet,
};