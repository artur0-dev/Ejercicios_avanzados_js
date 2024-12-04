const rollDice=(nCaras)=> {
    return  parseInt(Math.random()*nCaras)+1;
}
console.log(rollDice(5));
console.log(rollDice(12));
console.log(rollDice(25));