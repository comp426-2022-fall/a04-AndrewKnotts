

export function roll(sides, dice, rolls){

    let answers = [];

    for(let i = 0; i < rolls; i++){
       let sum = 0;

        for(let i = 0; i < dice; i++){
            sum += Math.floor(Math.random() * sides) + 1;
         }
         answers.push(sum);
    }

    return JSON.stringify({"sides": sides,"dice": dice,"rolls": rolls,"results": answers});

}