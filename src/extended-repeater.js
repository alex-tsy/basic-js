const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 1,
        separator = options.separator || '+',
        addition = options.addition !== undefined ? '' + options.addition : '',
        additionSeparator = options.additionSeparator || '',
        additionRepeatTimes = options.additionRepeatTimes || 1,
        result = '',
        additionStr = '';

    for (let i = 0; i < additionRepeatTimes; i++) {
        if (additionRepeatTimes - 1 == i) {
            additionStr += addition;
            continue;
        }
        additionStr += addition + additionSeparator;
    }

    for (let i = 0; i < repeatTimes; i++) {
        result += str + additionStr + separator;
    }
    return result.slice(0, -separator.length);
};
