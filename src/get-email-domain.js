const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain( email ) {
  let num = email.split('').reverse().findIndex(el => el == '@');
  let leng = email.split('').length;
  return email.split('').slice(leng - num).join('');
 }

module.exports = {
  getEmailDomain
};
