const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  let res = '';
  let Str = str;
  for(x = 0; x < str.length; ) {
    let words = Str.split('');
    if(words.length === 0) {

      return res;
    }
    if(words[0] !== words[1]) {
      res = res + Str.split('')[0];
      Str = Str.slice(1);
      x++;
    }
    if(words.length === 1) {
      res = res + Str.slice(0, 1);
      return res;
    }
    
  if(words[0] === words[1]) {
    words.filter(i => i == Str.split('')[0]).length
    res = res + Str.split('').filter(i => i == Str.split('')[0]).length + Str.split('')[0];
    Str = Str.split('').splice(Str.split('').filter(i => i == Str.split('')[0]).length).join('');
    x++;
  }
}
return res;
}

module.exports = {
  encodeLine
};
