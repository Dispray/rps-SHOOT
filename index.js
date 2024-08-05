function getComputerChoice(){
    let choice = "";
    let randomChoice = Math.random();

    if (randomChoice>0.33){
        choice="rock"
    } 
    else if (randomChoice<0.67){
        choice="paper"
    }
    else{
        choice="scissors"
    }

    return choice
}

console.log(getComputerChoice)
console.log("rat")
console.log(Math.random())