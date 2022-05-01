const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const firstWord = domains
  .map((item) => item.match(/\w+/g)[0])
  .map((item) => ["." + item]); //?
const pars = domains.map((item) => item.match(/\.([^.]+)/gm)); //?


const arr = firstWord.map((item, index) => item.concat(pars[index]).reverse()); //?
const allWord = arr.map(item=>item.join(''))//?
const lastWord = arr.map(item=>item[0])//?
const predLast = arr.map(item=>{
  if(item.length>2){
   return item.slice(0,2).join('')//?
  }
})
const final = [...allWord,...predLast,...lastWord.flat()].filter(item=>item!==undefined)//?
return final.reduce((acc,item)=>{
  acc[item]=(acc[item]||0)+1
  return acc
},{})
}

module.exports = {
  getDNSStats
};
