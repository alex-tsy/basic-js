const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 0, seconds = 0;
    const secondsInHour = 3600;
    for (let i = 0; i < disksNumber; i++) {
        turns = turns * 2 + 1;
    }
    seconds = Math.floor(turns * 3600 / turnsSpeed);
    return { turns: turns, seconds: seconds };
};
