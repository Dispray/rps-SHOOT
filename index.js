function getComputerChoice(){
    let choice = "";
    let randomChoice = Math.floor(Math.random()*3);

    if (randomChoice==0){
        choice="rock"
    } 
    else if (randomChoice==1){
        choice="scissors"
    }
    else{
        choice="paper"
    }
    console.log(randomChoice)
    console.log(Math.random())
    return choice
}

getComputerChoice()
