const choose = document.querySelector('div.result');
const buttons = document.querySelectorAll('button');
const playerResultScore = document.querySelector('.playerscore')
const computerResultScore = document.querySelector('.computerscore')
const resetGameSCore = document.querySelector('score');
let pScore = 0;
let pcScore = 0;
game ()
function game() {
            buttons.forEach(button => {
            button.addEventListener ('click', function() {
                
                for (i = 0; i <(pScore <= 4 && pcScore <= 4); i++) {
                    playerSelection = button.id
                    // console.log(playerSelection)
                    computerSelection = computerPlay()
                    // console.log(computerSelection)
                    playRound(playerSelection,computerSelection)
                    playerScore();
                    computerScore();  
                    if(pScore == 5 || pcScore == 5){
                        setTimeout(() => {
                            alert(winner()); 
                            reset();
                        }, 100);
                    } 
                }
                    // console.log(pScore);
                    // console.log(pcScore);
                    
            });   
        }); 
    }
    
function reset() {
    pScore = 0;
    pcScore = 0;
    choose.removeChild(choose.childNodes[0]);
    computerResultScore.removeChild(computerResultScore.childNodes[0]);
    const computerResultSpan = document.createElement('span');
    computerResultSpan.appendChild(document.createTextNode(`0`));
    computerResultScore.appendChild(computerResultSpan);

    playerResultScore.removeChild(playerResultScore.childNodes[0]);
    const playerResultSpan = document.createElement('span');
    playerResultSpan.appendChild(document.createTextNode(`0`));
    playerResultScore.appendChild(playerResultSpan);
    
    window.location.reload();
}

function computerPlay() {
    const random = Math.floor(Math.random()*3)+ 1;
    if (random == 1) {
        return "rock";
    } else if (random == 2){
        return "paper";
    } else  if (random == 3){
        return "scissors";
    }
    }
function computerScore() {
    computerResultScore.removeChild(computerResultScore.childNodes[0]);
    const computerResultSpan = document.createElement('span');
    computerResultSpan.appendChild(document.createTextNode(`${pcScore}`));
    computerResultScore.appendChild(computerResultSpan);
}
function playerScore() {
    playerResultScore.removeChild(playerResultScore.childNodes[0]);
    const playerResultSpan = document.createElement('span');
    playerResultSpan.appendChild(document.createTextNode(`${pScore}`));
    playerResultScore.appendChild(playerResultSpan);
}



function itsATie() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("Its a Tie!"));
    choose.appendChild(newSpan);
}
function youLosePaperBeatsRock() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("You Lose! Paper beats Rock !"));
    choose.appendChild(newSpan);
}
function youWinRockBeatsScissors() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("You Win! Rock beats Scissors !"));
    choose.appendChild(newSpan);
}
function youLoseScissorsBeatsPaper() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("You Lose! Scissors beats Paper !"));
    choose.appendChild(newSpan);
}
function youWinPaperBeatsRock() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("You Win! Paper beats Rock!"));
    choose.appendChild(newSpan);
}
function youWinScissorsBeatsPaper() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("You Win! Scissors beats Paper!"));
    choose.appendChild(newSpan);
}
function youLoseRockBeatsScissors() {
    choose.removeChild(choose.childNodes[0]);
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode("You Lose! Rock beats Scissors!"));
    choose.appendChild(newSpan);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        itsATie()
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        pcScore++;
        youLosePaperBeatsRock()
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        pScore++;
        youWinRockBeatsScissors()
    } else if (playerSelection == computerSelection){
        itsATie()
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        pcScore++;
        youLoseScissorsBeatsPaper()
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        pScore++;
        youWinPaperBeatsRock()
    } else if (playerSelection ==  computerSelection){
        itsATie()
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        pScore++;
        youWinScissorsBeatsPaper()
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        pcScore++;
        youLoseRockBeatsScissors()
    }
};
function winner() {
    if (pScore > pcScore){
        console.log(pScore)
        console.log(pcScore)
        return `You won!! You got ${pScore} points and computer got only ${pcScore}!`
    } else {
        console.log(pScore)
        console.log(pcScore)
        return `Damm, you lost! Computer got ${pcScore} points and you only ${pScore}!`
    }   
}