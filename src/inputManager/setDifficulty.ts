

const readlinePromises=require('readline/promises')



const setDifficulty=async ():Promise<{mode:string,chances:number}>=>{
    
    const RLI=readlinePromises.createInterface({
        input:process.stdin,output:process.stdout
    })


    
    console.log(`Choose your difficulty:
        1. Easy   (10 chances)
        2. Normal (5 chances)
        3. Hard   (3 chances)`.trim());
    
    let userInput:string=await RLI.question('your choice:');
    let difficulty=parseInt(userInput);
    
    switch(difficulty){
        case 1:
            return new Promise<{mode:string,chances:number}>((resolve, reject) => {
                resolve({mode:'easy',chances:10})
            })

        case 2:
            return new Promise<{mode:string,chances:number}>((resolve, reject) => {
                resolve({mode:'normal',chances:5})
            })

        case 3:
            return new Promise<{mode:string,chances:number}>((resolve, reject) => {
                resolve({mode:'hard',chances:3})
            })
        default:
             
            throw new Error('An error occured in setting game data')
    }


}


export default setDifficulty