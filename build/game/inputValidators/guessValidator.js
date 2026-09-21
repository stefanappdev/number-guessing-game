"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateGuess = (input) => {
    let unacceptedRegex = /[\D]+/;
    if (input === '') {
        console.log('an input is required for your guess');
        return false;
    }
    if (unacceptedRegex.test(input) === true) {
        console.log('Input entered is not valid,please try again!');
        return false;
    }
    if (parseInt(input) > 100 || parseInt(input) < 0) {
        console.log('Input entered outside of allowed guessing range');
        return false;
    }
    return true;
};
exports.default = validateGuess;
//# sourceMappingURL=guessValidator.js.map