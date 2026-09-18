"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLinePromises = require('readline/promises');
const RLI = readLinePromises.createInterface({
    input: process.stdin, output: process.stdout
});
const setDifficulty = async () => {
    console.log(`Choose your difficulty:
        1. Easy   (10 chances)
        2. Normal (5 chances)
        3. Hard   (3 chances)`.trim());
    let difficulty = await RLI.question('choose a difficulty:');
    RLI.close();
    if (difficulty === '1') {
        return new Promise((resolve, reject) => {
            resolve({ mode: 'easy', chances: 10 });
        });
    }
    else if (difficulty === '2') {
        return new Promise((resolve, reject) => {
            resolve({ mode: 'normal', chances: 5 });
        });
    }
    else if (difficulty === '3') {
        return new Promise((resolve, reject) => {
            resolve({ mode: 'hard', chances: 3 });
        });
    }
    else {
        throw new Error('no such difficulty');
    }
};
exports.default = setDifficulty;
//# sourceMappingURL=setDifficulty.js.map