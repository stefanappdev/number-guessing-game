"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { runWinSequence,runLoseSequence } from "../inputManager/EndingSequences";
const numberGenertor_1 = __importDefault(require("./numberGenertor"));
const runGameMode_1 = __importDefault(require("./runGameMode"));
const executeGame = async (difficulty, chances) => {
    let RNGnumber = (0, numberGenertor_1.default)();
    switch (difficulty) {
        case 'easy':
            console.log('you are playing on easy mode');
            break;
        case 'hard':
            console.log('you are playing on hard mode');
            break;
        case 'normal':
            console.log('you are playing on normal mode');
            break;
        default:
            break;
    }
    await (0, runGameMode_1.default)(chances, RNGnumber);
};
exports.default = executeGame;
//# sourceMappingURL=executeGame.js.map