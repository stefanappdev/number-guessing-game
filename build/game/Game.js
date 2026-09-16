"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fsPromises = require('fs/promises');
const Rules_1 = __importDefault(require("./Rules"));
const numberGenertor_1 = __importDefault(require("./numberGenertor"));
const setDifficulty_1 = __importDefault(require("../inputManager/setDifficulty"));
const executeGame_1 = __importDefault(require("./executeGame"));
const game = async () => {
    //display the rules
    console.log((0, Rules_1.default)());
    let RNGnumber = (0, numberGenertor_1.default)();
    try {
        //get the difficulty and attempts to guess the number
        let gameModeObj = await (0, setDifficulty_1.default)();
        let difficulty = gameModeObj.mode;
        let attempts = gameModeObj.chances;
        //execute game
        (0, executeGame_1.default)(RNGnumber, difficulty, attempts);
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = game;
//# sourceMappingURL=Game.js.map