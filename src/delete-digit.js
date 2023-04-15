const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArr = n.toString().split('');
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    numArr.splice(i, 1);
    if (+numArr.join('') > result) {
      result = +numArr.join('');
    }
    numArr = n.toString().split('');
  }
  return result;
}

module.exports = {
  deleteDigit
};
