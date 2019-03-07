function computerPlay() {
    var rpsArray = ["ROCK", "PAPER", "SCISSORS"];

    var result = rpsArray[Math.floor(Math.random()*rpsArray.length)];

    return result;
}

function reset(){
    count = 0;
    compCount = 0;
    youCount = 0;
    document.getElementById("computer").innerHTML = 0;
    document.getElementById("you").innerHTML = 0;
}

function gameRock(){
    var playerSelection = "ROCK"
    var computerSelection = computerPlay();
    var you = playerSelection;
    var comp = computerSelection;

    document.getElementById("compResult").innerHTML = comp;
    document.getElementById("youResult").innerHTML = you;
    
    playRound(playerSelection, computerSelection);
}

function gamePaper(){
    var playerSelection = "PAPER"
    var computerSelection = computerPlay();
    var you = playerSelection;
    var comp = computerSelection;

    document.getElementById("compResult").innerHTML = comp;
    document.getElementById("youResult").innerHTML = you;
    
    playRound(playerSelection, computerSelection);
}

function gameScissors(){
    var playerSelection = "SCISSORS"
    var computerSelection = computerPlay();
    var you = playerSelection;
    var comp = computerSelection;

    document.getElementById("compResult").innerHTML = comp;
    document.getElementById("youResult").innerHTML = you;
    
    playRound(playerSelection, computerSelection);
}

var count = 0;
var compCount = 0;
var youCount = 0;

function playRound(playerSelection, computerSelection)
{

    if (playerSelection == computerSelection)
    {
        alert("DRAW!");
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER")
    {
        count++;
        compCount++;
        document.getElementById("computer").innerHTML = compCount;
        alert("LOSE!");
        if (count == 5)
        {
            if (compCount > youCount)
            {
                alert("You lost the game.")
                reset();
            }
            else
            {
                alert("You won the game!")
                reset();
            }
        }
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS")
    {
        count++;
        youCount++;
        document.getElementById("you").innerHTML = youCount;
        alert("WIN!");
        if (count == 5)
        {
            if (compCount > youCount)
            {
                alert("You lost the game.")
                reset();
            }
            else
            {
                alert("You won the game!")
                reset();
            }
        }
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS")
    {
        count++;
        compCount++;
        document.getElementById("computer").innerHTML = compCount;
        alert("LOSE!");
        if (count == 5)
        {
            if (compCount > youCount)
            {
                alert("You lost the game.")
                reset();
            }
            else
            {
                alert("You won the game!")
                reset();
            }
        }
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK")
    {
        count++;
        youCount++;
        document.getElementById("you").innerHTML = youCount;
        alert("WIN!");
        if (count == 5)
        {
            if (compCount > youCount)
            {
                alert("You lost the game.")
                reset();
            }
            else
            {
                alert("You won the game!")
                reset();
            }
        }
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER")
    {
        count++;
        youCount++;
        document.getElementById("you").innerHTML = youCount;
        alert("WIN!");
        if (count == 5)
        {
            if (compCount > youCount)
            {
                alert("You lost the game.")
                reset();
            }
            else
            {
                alert("You won the game!")
                reset();
            }
        }
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        count++;
        compCount++;
        document.getElementById("computer").innerHTML = compCount;
        alert("LOSE");
        if (count == 5)
        {
            if (compCount > youCount)
            {
                alert("You lost the game.")
                reset();
            }
            else
            {
                alert("You won the game!")
                reset();
            }
        }
    }
    
   
}


