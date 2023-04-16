const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  if(arr === []) {
    return [];
  }
  const Arr = new Array().concat(arr);
    if ( !Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const descriptor = ['--double-prev', '--discard-prev', '--double-next', '--discard-next', undefined];
  Arr.map((i, ind) => {  
        if(ind !== 0) {
          i === '--double-prev'? Arr.splice(ind, 1, Arr[ind - 1]): i;
          i === '--discard-prev'? Arr.splice((ind -1), 1, '--discard-prev'): i;
        }
        i === '--double-next'? Arr.splice(ind, 1, Arr[ind + 1] || Arr[ind]): i;
        i === '--discard-next'? Arr.splice(ind + 1, 1, '--discard-prev'): i;
      }
      )
      const  res = Arr.filter((i) => !descriptor.includes(i));
return res;
    }



module.exports = {
  transform
};
