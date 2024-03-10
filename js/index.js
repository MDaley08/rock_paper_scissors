// const processChoices = (playerChoice, computerChoice) => {

// };
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let computerCurrChoice;
//mapping choices to page element for adjustment using stings
const computerChoiceMap = new Map();
computerChoiceMap.set('rock', document.querySelector(".computer #rock"));
computerChoiceMap.set('paper', document.querySelector(".computer #paper"));
computerChoiceMap.set('scissors', document.querySelector(".computer #scissors"));

const results = document.getElementById("results");
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

const clearComputerChoice = () => {
    let currDisplay;
    currDisplay = computerChoiceMap.get(computerCurrChoice);
    currDisplay.style.backgroundColor = 'rgba(210, 210, 210, 0.4)';
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
    //if rounds are 5 end game
    if(rounds >= 5){
        if(playerScore > computerScore){
            results.textContent = "You Won!";
            computerScoreString.textContent = 0;
            playerScoreString.textContent = 0;
            playerScore = 0;
            computerScore = 0;
            rounds = 0;
            return;
        }
        else if( playerScore === computerScore){
            results.textContent = "It was a tie!";
            computerScoreString.textContent = 0;
            playerScoreString.textContent = 0;
            playerScore = 0;
            computerScore = 0;
            rounds = 0;
            return;
        }
        else {
            results.textContent = "You lost! :(";
            computerScoreString.textContent = 0;
            playerScoreString.textContent = 0;
            playerScore = 0;
            computerScore = 0;
            rounds = 0;
            return;
        }
    }
    rounds++;
    clearComputerChoice();
    displayComputerChoice(computerChoice);

};



playerRock.addEventListener('click', () => processChoice('rock', computerCurrChoice = getComputerChoice()));
playerPaper.addEventListener('click', () => processChoice('paper', computerCurrChoice = getComputerChoice()));
playerScissors.addEventListener('click', () => processChoice('scissors', computerCurrChoice = getComputerChoice()));

