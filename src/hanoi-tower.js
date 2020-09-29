const CustomError = require("../extensions/custom-error");
const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 0, seconds = 0;
    
    for (let i = 0; i < disksNumber; i++) {
        turns = turns * 2 + 1;
    }
    seconds = Math.floor(turns * SECONDS_IN_HOUR / turnsSpeed);
    return { turns: turns, seconds: seconds };
};
