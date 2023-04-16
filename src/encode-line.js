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
function encodeLine(str) {
  const arr = str.split('')
  let res = 1
  let resultStr = ''

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
      res += 1
    } else {
      resultStr += (res === 1 ? '' : res) + arr[i]
      res = 1
    }

  }

  return resultStr
}

module.exports = {
  encodeLine
};
