"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EndingSequence_1 = __importDefault(require("../inputManager/EndingSequence"));
const readLinePromises = require('readline/promises');
const guessHelper = (RNGnumber, userGuess) => {
    RNGnumber < userGuess ? console.log('your guess is too high')
        : console.log('your guess is too low');
};
const runGameMode = async (chances, RNGnumber) => {
    const RLI = readLinePromises.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log(`The number was selected`);
    console.log(`you've got ${chances} chances to guess the number`);
    while (chances > 0) {
        let guess = await RLI.question('Enter your guess:');
        chances -= 1;
        if (parseInt(guess) === RNGnumber) {
            console.log('You won');
            break;
        }
        else {
            if (chances === 0) {
                console.log('You lose');
                break;
            }
            guessHelper(RNGnumber, parseInt(guess));
            console.log(`you've got ${chances} chances left to guess the number`);
        }
    }
    RLI.close();
    await (0, EndingSequence_1.default)();
};
exports.default = runGameMode;
//# sourceMappingURL=runGameMode.js.map