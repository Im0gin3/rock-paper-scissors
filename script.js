//make a function called getComputerChoice with no inputs
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
//make a function to get human choice called getHumanChoice with no inputs
//use prompt to ask for choice
//return humans choice
function getHumanChoice(){
    let choice= prompt("Enter your choice: ")
    return choice;
}
// function that makes us play 5 rounds and keeps track of the scores
function playGame(){
    let humanScore=0;
    let computerScore=0;
    // a function that basically is used as a round. 
    //it will take two inputs, computer and human choice.
    //it will decide which wins, increment score, and output who won.
    function playRound(humanChoice, computerChoice){
        humanChoice=humanChoice.toLowerCase();
        if (humanChoice=="rock"){
            if (computerChoice=="scissors"){
                console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                humanScore++;
            } else if (computerChoice=="rock"){
                console.log("A tie!");
            } else {
                console.log(`You lose, ${humanChoice} loses to ${computerChoice}!`);
                computerScore++;
            }
        } else if (humanChoice=="scissors"){
            if (computerChoice=="scissors"){
                console.log("A tie!");
            } else if (computerChoice=="rock"){
                console.log(`You lose, ${humanChoice} loses to ${computerChoice}!`);
                computerScore++;
            } else {
                console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                humanScore++;
            }
        } else{
            if (computerChoice=="scissors"){
                console.log(`You lose, ${humanChoice} loses to ${computerChoice}!`);
                computerScore++;
            } else if (computerChoice=="rock"){
                console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                humanScore++;
            } else {
                console.log("A tie!");
            }
        }
    }
    for(let i=1;i<=5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(`Human score: ${humanScore}. Computer score: ${computerScore}`);
}
playGame();
