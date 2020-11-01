const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let accumulator = '';

  options.addition = (typeof options.addition === 'boolean' || typeof options.addition === 'object') ? "" + options.addition : options.addition;

  str += (options.addition || '');

  if (!options.repeatTimes) return str;

  for (let index = 1; index < options.additionRepeatTimes; index++) {
    str += (options.additionSeparator || '+') + options.addition;
  }

  for (let index = 0; index < options.repeatTimes; index++) {
    if (index === 0) {
      accumulator += str;
    } else {
      accumulator += (options.separator || "+") + str;
    }
  }

  return accumulator;
};
