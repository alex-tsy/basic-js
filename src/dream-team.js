const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    let dreamTeamName = '';
    members.forEach(element => {
        if (typeof (element) == 'string') {
            console.log(`element:  ${element}`);
            dreamTeamName += element.trim().substring(0, 1).toUpperCase();
        }
    });
    dreamTeamName = dreamTeamName.split('').sort().join('');
    return dreamTeamName;
};
