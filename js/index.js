// const processChoices = (playerChoice, computerChoice) => {

// };
let playerScore = 0;
let computerScore = 0;
let numRounds = 1;

//mapping choices to page element for adjustment using stings
const computerChoiceMap = new Map();
computerChoiceMap.set('rock', document.querySelector(".computer #rock"));
computerChoiceMap.set('paper', document.querySelector(".computer #paper"));
computerChoiceMap.set('scissors', document.querySelector(".computer #scissors"));

//
const results = document.getElementById("results");
const round = document.querySelector(".round #value")
const computerScoreString = document.querySelector(".computer.score #value")
const playerScoreString = document.querySelector(".player.score #value")

//querying "buttons" used as choices
const playerRock = document.querySelector(".player #rock");
const playerPaper = document.querySelector(".player #paper");
const playerScissors = document.querySelector(".player #scissors");

const getComputerChoice = () => {
    const choiceArray = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[index];
};

const displayComputerChoice = (computerChoice) => {
    let currChoice;
    currChoice = computerChoiceMap.get(computerChoice);
    currChoice.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
};

const clearComputerChoices = () => {
    rockTemp = computerChoiceMap.get('rock');
    paperTemp = computerChoiceMap.get('paper');
    scissorsTemp = computerChoiceMap.get('scissors');

    rockTemp.style.backgroundColor = 'rgba(210, 210, 210, 0.4)'
    paperTemp.style.backgroundColor = 'rgba(210, 210, 210, 0.4)'
    scissorsTemp.style.backgroundColor = 'rgba(210, 210, 210, 0.4)'
}

const processChoice = (playerChoice,computerChoice) => {

    if(computerChoice === playerChoice){
        results.textContent = `It was a tie, both chose ${playerChoice}!`;
    }
    else {
        switch(playerChoice){
            case "rock":
                if(computerChoice === "paper") {
                    computerScoreString.textContent = ++computerScore;
                    results.textContent = "You lost, Paper beats Rock!";
                }
                else {
                    playerScoreString.textContent = ++playerScore;
                    results.textContent = "You Won, Rock beats Scissors!";
                }
                break;
            case "paper":
                if(computerChoice === "scissors") {
                    computerScoreString.textContent = ++computerScore;
                    results.textContent = "You lost, Scissors beats Paper!";
                }
                else {
                    playerScoreString.textContent = ++playerScore;
                    results.textContent = "You Won, Paper beats Rock!";
                }
                break;
            case "scissors":
                if(computerChoice === "rock") {
                    computerScoreString.textContent = ++computerScore;
                    results.textContent = "You lost, Rock beats Scissors!";
                }
                else {
                    playerScoreString.textContent = ++playerScore;
                    results.textContent = "You Won, Scissors beat Paper!";
                }
                break;
        }
    }
    round.textContent = numRounds;
    //if rounds are 5 end game
    if(numRounds >= 5){
        if(playerScore > computerScore){
            results.textContent = "You Won!";
            computerScoreString.textContent = 0;
            playerScoreString.textContent = 0;
            playerScore = 0;
            computerScore = 0;
            numRounds = 1;
            round.textContent = '-';
            return;
        }
        else if( playerScore === computerScore){
            results.textContent = "It was a tie!";
            computerScoreString.textContent = 0;
            playerScoreString.textContent = 0;
            playerScore = 0;
            computerScore = 0;
            numRounds = 1;
            round.textContent = '-';
            return;
        }
        else {
            results.textContent = "You lost! :(";
            computerScoreString.textContent = 0;
            playerScoreString.textContent = 0;
            playerScore = 0;
            computerScore = 0;
            numRounds = 1;
            round.textContent = '-';
            return;
        }
    }
    numRounds++;
    clearComputerChoices();
    displayComputerChoice(computerChoice);


};



playerRock.addEventListener('click', () => processChoice('rock', getComputerChoice()));
playerPaper.addEventListener('click', () => processChoice('paper', getComputerChoice()));
playerScissors.addEventListener('click', () => processChoice('scissors', getComputerChoice()));

