const fsPromises=require('fs/promises');
import displayRules from "./Rules";
import RNG from "./numberGenertor";
import setDifficulty from "../inputManager/setDifficulty";
import executeGame from "./executeGame";

const game=async ()=>{
    //display the rules
    console.log(displayRules());
    let RNGnumber:number=RNG();
    try{

        //get the difficulty and attempts to guess the number
        let gameModeObj:{mode:string,chances:number}= await setDifficulty();
        let difficulty:string=gameModeObj.mode; 
        let attempts:number=gameModeObj.chances;

        //execute game
        executeGame(RNGnumber,difficulty,attempts)
        
    }catch(err){
        console.log(err)
    }
    


}


export default game;