"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayRules = () => {
    return `Welcome to the Number guesser game!
    Here are the rules:
    - You will be asked to guess a number between 1 and 100 within a certain number of attempts.

    - The number of attempts you are allowed depends on the difficulty you choose.

    - There are three(3) difficulty modes:
        Easy    (10 attempts)
        NOrmal  (5  attempts) 
        Hard    (3 attempts)
    
    - At the end of each round you will be asked to exit the game or continue on 
      either the same difficulty or a different one.    `.trim();
};
exports.default = displayRules;
//# sourceMappingURL=Rules.js.map