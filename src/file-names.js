const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

 function renameFiles(names) {
  let obj = {};
  additional = (x, y) => 
     x + `(${y})`;
  
  return names.map((item) => {
    let index = obj[item] || 0; //?
    obj[item] = index + 1; //?
    if (!index) return item; //?
    while (obj[additional(item, index)]) index++; //?
    obj[additional(item, index)]=1//?
    return additional(item, index);
  });
}

module.exports = {
  renameFiles
};
