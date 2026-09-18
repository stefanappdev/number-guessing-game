
import displayRules from "./Rules";

import askDifficulty from "../inputManager/askdifficulty.ts";
import executeGame from "./executeGame";

const game=async ()=>{
    //display the rules
    console.log(displayRules());
    
    try{

        //get the difficulty and attempts to guess the number


        let gameModeObj:{mode:string,chances:number}= await askDifficulty();

        let difficulty:string=gameModeObj.mode; 
        let attempts:number=gameModeObj.chances;

        //execute game
        executeGame(difficulty,attempts)
        
    }catch(err){
        console.log(err)
    }
    


}


export default game;