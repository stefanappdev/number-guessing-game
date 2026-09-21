"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guessValidator_1 = __importDefault(require("./inputValidators/guessValidator"));
const EndingSequence_1 = __importDefault(require("../inputManager/EndingSequence"));
const readLinePromises = require('readline/promises');
const guessHelper = (RNGnumber, userGuess) => {
    RNGnumber < userGuess ? console.log('your guess is too high')
        : console.log('your guess is too low');
};
const runGameMode = async (chances, RNGnumber) => {
    const makeGuess = async () => {
        const RLI = readLinePromises.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        while (chances > 0) {
            let guess = await RLI.question('Enter your guess:');
            if ((0, guessValidator_1.default)(guess) === false) {
                while (true) {
                    let guessReconfirm = await RLI.question('Re-enter your guess:');
                    guess = guessReconfirm;
                    if ((0, guessValidator_1.default)(guess)) {
                        break;
                    }
                }
            }
            chances -= 1;
            if (parseInt(guess) === RNGnumber) {
                console.log('Congrats!,You won the round.');
                break;
            }
            else {
                if (chances === 0) {
                    console.log('You lose,the number was ' + RNGnumber);
                    break;
                }
                guessHelper(RNGnumber, parseInt(guess));
                console.log(`you've got ${chances} chances left to guess the number\n`);
            }
        }
        RLI.close();
        await (0, EndingSequence_1.default)();
    };
    makeGuess();
};
exports.default = runGameMode;
//# sourceMappingURL=runGameMode.js.map