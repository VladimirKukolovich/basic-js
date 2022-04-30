const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {

    if(s1.split('')[0] === s1.split('')[s1.length - 1] && s2.split('')[0] === s2.split('')[s2.length - 1] && s1.length != 1) {
    return Math.floor(s1.length + s2.length)/2 - Math.abs(s1.length - s2.length)/2
    }
     const res = s1.split('')
     .concat( s2.split(''))
     .sort();
    let result = 0;
     for(i = 0; i < res.length; ) {
      if(res[i] == res[i+1]){
        result = result + 1;
         i = i + 2; } else {
           i++
         }}
         return result;
        
    }

module.exports = {
  getCommonCharacterCount
};
