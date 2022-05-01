const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let newMatrix = Array.from({ length: matrix.length }, () =>
    Array.from({ length: matrix[0].length })
  );
  newMatrix;
  const up = (y, x, matrix) => {
    if (matrix[y - 1]) return matrix[y - 1][x];
  };
  const upRight = (y, x, matrix) => {
    if (matrix[y - 1]) return matrix[y - 1][x + 1];
  };
  const upLeft = (y, x, matrix) => {
    if (matrix[y - 1]) return matrix[y - 1][x -1];
  };

  const down = (y, x, matrix) => {
    if (matrix[y + 1]) return matrix[y + 1][x];
  };
  const downRight = (y, x, matrix) => {
    if (matrix[y + 1]) return matrix[y + 1][x+1];
  };
  const downLeft = (y, x, matrix) => {
    if (matrix[y + 1]) return matrix[y + 1][x - 1];
  };
  const left = (y, x, matrix) => {
    if (x - 1 >= 0) return matrix[y][x - 1];
  };
  const right = (y, x, matrix) => {
    return matrix[y][x + 1];
  };

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      const bombs = [up, down, left, right, upRight, upLeft, downRight, downLeft]
        .map((fn) => fn(y, x, matrix))
        .filter(Boolean).length;
      newMatrix[y][x] = bombs;
    }
  }
  return newMatrix;
}


module.exports = {
  minesweeper
};
