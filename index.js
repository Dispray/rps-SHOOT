function getComputerChoice(){
    let choice = "";
    let randomChoice = Math.random();

    if (randomChoice<0.33){
        choice="rock"
    } 
    else if (randomChoice>0.67){
        choice="scissors"
    }
    else{
        choice="paper"
    }
    console.log(randomChoice)
    return choice
}

let dog = getComputerChoice()
console.log(dog)