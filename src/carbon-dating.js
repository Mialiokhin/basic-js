const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity) {
    return false;
  }
  if (typeof sampleActivity !== "string") return false;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (
    typeof Number(sampleActivity) !== "number" ||
    Number(sampleActivity) > 15 ||
    Number(sampleActivity) <= 0 ||
    String(Number(sampleActivity)) === "Infinity" ||
    String(Number(sampleActivity)) === "NaN"
  ) {
    return false;
  }
  const howOld = Math.log(15 / Number(sampleActivity)) / (0.693 / 5730);
  return Math.ceil(howOld);
}

module.exports = {
  dateSample,
};
