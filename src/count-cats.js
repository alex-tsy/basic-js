const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let cats = 0;
    matrix.forEach(row => cats += row.filter(e => e === '^^').length);
    return cats;
};
