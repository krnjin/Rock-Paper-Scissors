function computerPlay() {
    var rpsArray = ["rock", "paper", "scissors"];

    var result = rpsArray[Math.floor(Math.random()*rpsArray.length)];

    return result;
}


var playerSelection;

function resultRock(){
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return;
}

function resultPaper(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return;
}

function resultScissors(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection = computerSelection)
        console.log("DRAW");
    else
        console.log("Win or Lose");
}

