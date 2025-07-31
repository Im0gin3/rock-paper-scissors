//Declarations
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results=document.querySelector(".results");
let humanScore = 0;
let computerScore=0;
//functions
    //computer chooses something
    function getComputerChoice(){
        //assign the random value to a variable
        randomNumber=Math.random()
        //if else conditional statements to get an equal probability of each choice
        if (randomNumber<=100/300){
            return "rock";
        } else if (randomNumber<=200/300){
            return "paper";
        } else{
            return "scissors";
        }
    }
    //plays round
    function playRound(humanChoice, computerChoice){
        console.log("playRound was called")
        if (humanChoice=="rock"){
            if (computerChoice=="scissors"){
                humanScore++;
                results.textContent = `You win, ${humanChoice} beats ${computerChoice}! 
                Score: Human: ${humanScore}. Computer: ${computerScore}`;
            } else if (computerChoice=="rock"){
                results.textContent=`A tie! Score: Human: ${humanScore}. Computer: ${computerScore}`;
            } else {
                computerScore++;
                results.textContent=`You lose, ${humanChoice} loses to ${computerChoice}!
                 Score: Human: ${humanScore}. Computer: ${computerScore}`;
            }
        } else if (humanChoice=="scissors"){
            if (computerChoice=="scissors"){
                results.textContent=`A tie! Score: Human: ${humanScore}. Computer: ${computerScore}`;
            } else if (computerChoice=="rock"){
                computerScore++;
                results.textContent=`You lose, ${humanChoice} loses to ${computerChoice}!
                 Score: Human: ${humanScore}. Computer: ${computerScore}`;
            } else {
                humanScore++;
                results.textContent = `You win, ${humanChoice} beats ${computerChoice}! 
                Score: Human: ${humanScore}. Computer: ${computerScore}`;
            }
        } else{
            if (computerChoice=="scissors"){
                computerScore++;
                results.textContent=`You lose, ${humanChoice} loses to ${computerChoice}!
                 Score: Human: ${humanScore}. Computer: ${computerScore}`;
            } else if (computerChoice=="rock"){
                humanScore++;
                results.textContent = `You win, ${humanChoice} beats ${computerChoice}! 
                Score: Human: ${humanScore}. Computer: ${computerScore}`;
            } else {
                results.textContent=`A tie! Score: Human: ${humanScore}. Computer: ${computerScore}`;
            }
        }
    }
// plays as many rounds as needed for a person to reach 5 wins. 
while ((humanScore<5) && (computerScore<5)){
    //human choice triggers a round. 
    rock.addEventListener("click", playRound("rock", getComputerChoice()));
    paper.addEventListener("click", playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", playRound("scissors", getComputerChoice()));
}
if (humanScore>computerScore){
    results.textContent=`You win! Score: Human: ${humanScore}. Computer: ${computerScore}.`;
} else{
    results.textContent=`You lose! Score: Human: ${humanScore}. Computer: ${computerScore}.`;
}




    
