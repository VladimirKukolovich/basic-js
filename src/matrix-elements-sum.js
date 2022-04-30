const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let matrixLength = matrix.length;
  for( i = matrixLength - 1; i > 0; i --) {
  
    matrix[i - 1].map((e, ind) => e === 0? matrix[i].splice(ind, 1, 0): e)
    
   }
   let newMatrix = matrix.join().split(',').map((i) =>   i = i*1).filter((i) => i > 0);
   let sum = 0;
   for(i = 0; i < newMatrix.length ; i++) {
     sum = sum + newMatrix[i];
    }
  
    return sum;
   
  }
module.exports = {
  getMatrixElementsSum
};
