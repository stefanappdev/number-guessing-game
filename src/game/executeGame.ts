//import { runWinSequence,runLoseSequence } from "../inputManager/EndingSequences";
import RNG from "./numberGenertor";
import runGameMode from "./runGameMode";





const executeGame=async (difficulty:string,chances:number):Promise<void>=>{
   
    let RNGnumber:number=RNG();

    switch(difficulty){
        case 'easy':
            console.log('you are playing on easy mode');
            break
        case 'hard':
            console.log('you are playing on hard mode');
            break
        case 'normal':
            console.log('you are playing on normal mode');
            break
        default:
            break
    }


   await runGameMode(chances,RNGnumber)

}


export default executeGame