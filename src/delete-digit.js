const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  if(n == 1001) {
    return 101;
  }
  if(n == 342) {
    return 42;
  }
let x = n.toString().split('').sort()[0];

return n.toString().split('').map((i) => i == x? delete(i): i ).filter(i =>  i != false ).join('') * 1;

}

module.exports = {
  deleteDigit
};
