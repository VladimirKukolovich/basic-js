const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  const index1 = []
  arr.map((i, ind) => i === -1? index1.push(ind): i);
  const Arr = arr.filter((i) => i != -1).sort((a, b) => a - b)
   index1.map((i) => Arr.splice(i, 0, -1))
  return Arr;
}

module.exports = {
  sortByHeight
};
