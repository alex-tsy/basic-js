const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof (sampleActivity) != 'string') {
        return false;
    }

    let sampleActivityNumber = Number(sampleActivity);
    if (sampleActivityNumber > 0 && sampleActivityNumber <= MODERN_ACTIVITY) {
        let age = Math.log2(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD / Math.LOG2E;
        return Math.ceil(age);
    }

    return false;
}
