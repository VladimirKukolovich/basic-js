const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.res = 1;
    this.arr = [];
  }
    calculateDepth( arr ) { 
      arr !== this.arr? this.res = 1: null;
      if(arr.find((i) => Array.isArray(i))) {
        this.res ++;
        arr = arr.flat();
        this.arr = arr;
        this.calculateDepth(this.arr);
      }
      return this.res;       
      }
}

module.exports = {
  DepthCalculator
};
