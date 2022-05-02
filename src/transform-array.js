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
  throw new NotImplementedError('Not implemented');
  if(arr = []) {
    return [];
  }
  if ( arr  !== Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  let Arr = arr;
   Arr.map((i, ind) => {
    if(i === '--double-prev' && ind == 0 || i === '--discard-prev' && ind == 0) {
       return Arr.slice(1);
    }
    if(i === '--double-next' && ind + 1 == Arr.length || i === '--discard-next' && ind + 1 == Arr.length) {
     return  Arr.slice(0, -1);
   }
  i === '--double-next'? Arr.splice(ind, 1, arr[ind + 1]): i;
  i === '--double-prev'? Arr.splice(ind, 1, arr[ind - 1]): i;
  i === '--discard-prev'? Arr.splice(ind - 1, 2): i;
  i === '--discard-next'? Arr.splice(ind, 2): i;
}
)
return Arr;//?

}

module.exports = {
  transform
};
