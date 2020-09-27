const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Not an Array');
    }
    let transformed = new Array();

    for (let i = 0; i < arr.length; i++) {
        
        switch (arr[i]) {        
            case '--discard-next':
                i++;
                transformed.push(undefined);
                break;
            case '--discard-prev':
                if (i - 1 >= 0 && transformed[transformed.length - 1] != undefined) {
                    transformed[transformed.length - 1] = undefined;
                }
                break;
            case '--double-next':
                if (i + 1 < arr.length) {
                    transformed.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (i - 1 >= 0 && transformed[transformed.length - 1] != undefined) {
                    transformed.push(transformed[transformed.length - 1]);
                }
                break;
            default:
                transformed.push(arr[i]);
        }
    };
    transformed = transformed.filter(e => e != undefined);
    return transformed;
};
