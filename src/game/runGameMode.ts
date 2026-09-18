import restartGame from "../inputManager/EndingSequence"

const readLinePromises=require('readline/promises')



const guessHelper=(RNGnumber:number,userGuess:number):void=>{
    RNGnumber<userGuess?console.log('your guess is too high')
    :console.log('your guess is too low')
}



const runGameMode= async(chances:number,RNGnumber:number)=>{
  
    
    
    const RLI=readLinePromises.createInterface({
        input:process.stdin,
        output:process.stdout
    })

      
    
    console.log(`The number was selected`)
    console.log(`you've got ${chances} chances to guess the number`);

    while(chances>0){
        let guess:string=await RLI.question('Enter your guess:');
        chances-=1
        if(parseInt(guess)===RNGnumber){
            console.log('You won');
            break
        }
        else{
            if(chances===0){
            console.log('You lose');
            break
            }

            guessHelper(RNGnumber,parseInt(guess));
            console.log(`you've got ${chances} chances left to guess the number`);
        }
    }

    RLI.close()
    await restartGame()
    
}


export default runGameMode