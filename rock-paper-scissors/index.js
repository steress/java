let pScore = 0;
let pcScore = 0;
game()
function game() {
    while (pScore <=4 && pcScore <=4){
        let playerSelection = prompt("Write down your choise:").toLowerCase();
        let computerSelection = computerPlay();
        // alert(playRound(playerSelection, computerSelection));
        }
    } alert(winner());

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock"){
        return "Its a Tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        pcScore++;
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        pScore++;
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Its a Tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        pcScore++;
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        pScore++;
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "Its a Tie!";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        pScore++;
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        pcScore++;
        return "You Lose! Rock beats Scissors!";
    }
};
function winner() {
    if (pScore > pcScore){
        console.log(pScore)
        console.log(pcScore)
        return `You won!! You got ${pScore} points and computer got only ${pcScore}`
    } else {
        console.log(pScore)
        console.log(pcScore)
        return `Damm, you lost! Computer got ${pcScore} points and you only ${pScore}`
    }   
}




    