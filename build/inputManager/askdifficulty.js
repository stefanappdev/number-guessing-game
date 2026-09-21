"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameModeValidator_1 = __importDefault(require("../game/inputValidators/gameModeValidator"));
const readLinePromises = require('readline/promises');
const askDifficulty = async () => {
    const RLI = readLinePromises.createInterface({
        input: process.stdin, output: process.stdout
    });
    console.log(`Choose your difficulty:
        1. Easy   (10 chances)
        2. Normal (5 chances)
        3. Hard   (3 chances)\n`.trim());
    let userInput = await RLI.question('your choice:');
    let difficulty = '';
    let chances = 0;
    if ((0, gameModeValidator_1.default)(userInput) === false) {
        console.log(`Choose your difficulty:
        1. Easy   (10 chances)
        2. Normal (5 chances)
        3. Hard   (3 chances)\n`.trim());
        while (true) {
            let userInputReconfirm = await RLI.question(' Re-enter your choice:');
            userInput = userInputReconfirm;
            if ((0, gameModeValidator_1.default)(userInput)) {
                break;
            }
        }
    }
    if (userInput === '3') {
        difficulty = 'hard';
        chances = 3;
    }
    else if (userInput === '2') {
        difficulty = 'normal';
        chances = 5;
    }
    else {
        difficulty = 'easy';
        chances = 10;
    }
    RLI.close();
    return new Promise((resolve, reject) => {
        resolve({ mode: difficulty, chances: chances });
    });
};
exports.default = askDifficulty;
//# sourceMappingURL=askdifficulty.js.map