import validateGameMode from "../game/inputValidators/gameModeValidator";

 const readLinePromises=require('readline/promises')
 

 
 const askDifficulty=async():Promise<{mode:string,chances:number}>=>{
    
    
    
  const RLI=readLinePromises.createInterface({
        input:process.stdin,output:process.stdout
    })
    
   console.log(`Choose your difficulty:
        1. Easy   (10 chances)
        2. Normal (5 chances)
        3. Hard   (3 chances)\n`.trim());

    let userInput=await RLI.question('your choice:'); 
   
    let difficulty:string='';
    let chances:number=0;

    if (validateGameMode(userInput)===false){
         console.log(`Choose your difficulty:
        1. Easy   (10 chances)
        2. Normal (5 chances)
        3. Hard   (3 chances)\n`.trim());
        while(true){
            let userInputReconfirm=await RLI.question(' Re-enter your choice:');
            userInput=userInputReconfirm
            if(validateGameMode(userInput)){
                break
            }
        }
    }

    if(userInput==='3'){
        difficulty='hard'
        chances=3;
        
    }else if(userInput==='2'){
        difficulty='normal'
        chances=5
    
    }else{
        difficulty='easy'
        chances=10
        
    }

    RLI.close()
    return new Promise<{mode:string,chances:number}>((resolve, reject) => {
        resolve({mode:difficulty,chances:chances})
    })
 }


 export default askDifficulty
 