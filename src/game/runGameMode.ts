import validateGuess from "./inputValidators/guessValidator"
import restartGame from "../inputManager/EndingSequence"

const readLinePromises=require('readline/promises')



const guessHelper=(RNGnumber:number,userGuess:number):void=>{
    RNGnumber<userGuess?console.log('your guess is too high')
    :console.log('your guess is too low')
}



const runGameMode= async(chances:number,RNGnumber:number)=>{
  
    

    
 const makeGuess=async():Promise<void>=>{

          const RLI=readLinePromises.createInterface({
        input:process.stdin,
        output:process.stdout
         })

         while(chances>0){
        let guess:string=await RLI.question('Enter your guess:');

        if(validateGuess(guess)===false){

            while(true){
                
                let guessReconfirm:string=await RLI.question('Re-enter your guess:');
                guess=guessReconfirm;
                if(validateGuess(guess)){
                    break
                }
            }  
        }

        chances-=1
        if(parseInt(guess)===RNGnumber){
            console.log('Congrats!,You won the round.');
            break
        }
        else{
            if(chances===0){
            console.log('You lose,the number was '+RNGnumber);
            break
            }

            guessHelper(RNGnumber,parseInt(guess));
            console.log(`you've got ${chances} chances left to guess the number\n`);
        }
    }

    RLI.close()
    await restartGame()
    
    }


    makeGuess()
}


export default runGameMode