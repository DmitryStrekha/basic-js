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
function transform(/*arr*/) {
  throw new NotImplementedError('Not implemented');
  if (Array.isArray(arr)) {
    var arr2 = arr.slice()

    let d = arr2.findIndex(i => i == "--double-prev")
    if (d > 0) {
      let resc = arr2.splice(d, 1, arr2[d - 1])
    } else if (d == 0) {
      let resc = arr2.splice(d, 1)
    }

    let z = arr2.findIndex(i => i == "--double-next")
    if (z === arr2.length - 1) {
      let b = arr2.splice(z, 1)
    } else if (z >= 0) {
      let resc = arr2.splice(z, 1, arr2[z + 1])
    }

    let a = arr2.findIndex(i => i == "--discard-next")
    if (a >= 0) {
      let res = arr2.splice(a, 2)
    }


    let b = arr2.findIndex(i => i == "--discard-prev")
    if (b > 0) {
      let resb = arr2.splice(b - 1, 2)
    } else if (b == 0) {
      let resb = arr2.splice(b, 1)
    }
  } else throw new Error('\'arr\' parameter must be an instance of the Array!')
  return arr2

}
module.exports = {
  transform
};
