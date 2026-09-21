import game from "../game/Game";

const readLinePromises=require('readline/promises');

const restartGame=async():Promise<void>=>{
    const RLI=readLinePromises.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    let resetOption=await RLI.question('Would like to restart the game (Y) or exit (N)?')
    
    if(resetOption==='Y'||resetOption==='y'){
        RLI.close()
        game()
    }else if(resetOption==='N'||resetOption==='n'){
        console.log('exitting the Game...');
        RLI.close()
        process.exit(0)
    }

}


export default restartGame

