"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = __importDefault(require("./Rules"));
const askdifficulty_ts_1 = __importDefault(require("../inputManager/askdifficulty.js"));
const executeGame_1 = __importDefault(require("./executeGame"));
const game = async () => {
    //display the rules
    console.log((0, Rules_1.default)());
    try {
        //get the difficulty and attempts to guess the number
        let gameModeObj = await (0, askdifficulty_ts_1.default)();
        let difficulty = gameModeObj.mode;
        let attempts = gameModeObj.chances;
        //execute game
        (0, executeGame_1.default)(difficulty, attempts);
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = game;
//# sourceMappingURL=Game.js.map