"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateGameMode = (input) => {
    let unacceptedRegex = /[\D]+/;
    if (input === '') {
        console.log('an input is required for the game Mode');
        return false;
    }
    if (unacceptedRegex.test(input) === true) {
        console.log('Input entered is not valid,please try again!');
        return false;
    }
    if (parseInt(input) > 3 || parseInt(input) < 1) {
        console.log('No such game mode available');
        return false;
    }
    return true;
};
exports.default = validateGameMode;
//# sourceMappingURL=gameModeValidator.js.map