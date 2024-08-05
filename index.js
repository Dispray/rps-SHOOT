function getComputerChoice(){
    let choice = "";
    let randomChoice = Math.floor(Math.random()*3);

    if (randomChoice==0){
        choice="ROCK"
    } 
    else if (randomChoice==1){
        choice="SCISSORS"
    }
    else{
        choice="PAPER"
    }
    
    return choice
}



function getHumanChoice(){
    let choice = prompt("SHOOT YOUR SHOT OR I'LL SHOOT YOUR BALLS")
    
    return choice.toUpperCase()
}

function playRound(humanChoice,computerChoice){
    
    let playerRoundScore = 0;
    console.log(`YOU:${humanChoice} || BING CHILING:${computerChoice}`)
    
    if (humanChoice=="ROCK"){
        if (computerChoice=='PAPER'){
            playerRoundScore-=1
        }else if(computerChoice=='SCISSORS'){
            playerRoundScore+=1
        }
    } else if (humanChoice=="PAPER"){
        if (computerChoice=='SCISSORS'){
            playerRoundScore-=1
        }else if(computerChoice=='ROCK'){
            playerRoundScore+=1
        }
    } else if (humanChoice=="SCISSORS"){
        if (computerChoice=='ROCK'){
            playerRoundScore-=1
        }else if(computerChoice=='PAPER'){
            playerRoundScore+=1
        }
    }else{
        console.log("ARE U BRAINDEAD? RPS BRO NOT ABCDEFGHIWHATEVA THE F YOU TYPED")
        console.log(`YOU:${humanScore},BING-CHILING:${computerScore}`)
        return
    }

    if (playerRoundScore==0){
        console.log("It's a neck")
        console.log(`YOU:${humanScore}-BING-CHILING:${computerScore}`)
        return
    }
    else if (playerRoundScore==-1){
        computerScore+=1
        console.log("You're ass bruh")
        console.log(`YOU:${humanScore}-BING-CHILING:${computerScore}`)
        return
    }
    else{
        humanScore+=1
        console.log("+5000 credit score")
        console.log(`YOU:${humanScore}-BING-CHILING:${computerScore}`)
        return
    }
}

function playGame(){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    round1 = playRound(humanChoice,computerChoice)
    let humanChoice2 = getHumanChoice()
    let computerChoice2 = getComputerChoice()
    round2 = playRound(humanChoice2,computerChoice2)
    let humanChoice3 = getHumanChoice()
    let computerChoice3 = getComputerChoice()
    round3 = playRound(humanChoice3,computerChoice3)
    let humanChoice4 = getHumanChoice()
    let computerChoice4 = getComputerChoice()
    round4 = playRound(humanChoice4,computerChoice4)
    let humanChoice5 = getHumanChoice()
    let computerChoice5 = getComputerChoice()
    round5 = playRound(humanChoice5,computerChoice5)
}


let humanScore = 0;
let computerScore = 0;
playGame()
