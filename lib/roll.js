

export function roll(numsides, numdice, numrolls){

    let answers = [];

    for(let i = 0; i < numrolls; i++){
       let sum = 0;

        for(let i = 0; i < numdice; i++){
            sum += Math.floor(Math.random() * numsides) + 1;
         }
         answers.push(sum);
    }

    return JSON.stringify({"sides": numsides,"dice": numdice,"rolls": numrolls,"results": answers});

}