"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("../game/Game"));
const readLinePromises = require('readline/promises');
const restartGame = async () => {
    const RLI = readLinePromises.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let resetOption = await RLI.question('Would like to restart the game (Y) or exit (N)?');
    if (resetOption === 'Y' || resetOption === 'y') {
        RLI.close();
        (0, Game_1.default)();
    }
    else if (resetOption === 'N' || resetOption === 'n') {
        console.log('exitting the Game...');
        RLI.close();
        process.exit(0);
    }
};
exports.default = restartGame;
//# sourceMappingURL=EndingSequence.js.map