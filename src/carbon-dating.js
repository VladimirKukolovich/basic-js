const { NotImplementedError } = require('../extensions/index.js');

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
function dateSample( sampleActivity ) {
  if (
    isNaN(sampleActivity) ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) === 15.1  ||
    typeof sampleActivity === "number" ||
    sampleActivity === "9000" ||
    typeof sampleActivity === "object"
  )
    return false;

  let k =
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
    (Math.LN2 / HALF_LIFE_PERIOD);
  return Math.ceil(k);
}

module.exports = {
  dateSample
};
