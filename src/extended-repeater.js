const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = [];
  let result = [];
  if (typeof str !== 'string') str = String(str);
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = '+';
  if (options.addition === null) options.addition = String(options.addition);
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition, options.additionSeparator)
  }
  addition.pop();
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str, addition.join(''), options.separator);
  }
  result.pop();
  return result.join('');
  return result;
}

module.exports = {
  repeater
};
