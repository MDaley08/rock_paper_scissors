const choiceArray = ["rock", "paper", "scissors"];
let playerScore = 0; 
let computerScore = 0; 
let currentRound = 0; 

/**
 * generates a random number and utilizes to chose a string from array
 * @returns {[string]} returns a string that is "rock", "paper" or "scissors"
 */
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[choice];
};

/**
 * takes user input and ensures it's of correct type
 * @returns {[string]} user's input if it was "rock", "paper", or "scissors"
 */
const getPlayerChoice = () => {
   let choice;
   while(true){
    choice = prompt('choose "rock", "paper" or "scissors".').toLowerCase();
    if((choiceArray.includes(choice))) return choice;
    alert(`${choice} is not a valid choice. Try again.`);
   }
};

/**
 * Takes choices from player and computer and then determines winner based on choices
 * @param {[string] } playerChoice Input retrived by user must be. "rock", "paper", "scissors"
 * @param {[string]} computerChoice This is computer choice generated randomly. has to be "rock", "paper", or "scissors"
 * @returns {[string]} returns a string that informs user if they won, tie or lost
 */
const processChoices = (playerChoice, computerChoice) => {

    if(computerChoice === playerChoice) return `It was a tie, both chose ${playerChoice}!`;

    switch(playerChoice){
        case "rock":
            if(computerChoice === "paper") {
                computerScore++;
                return "You lost, Paper beats Rock!";
            }
            else {
                playerScore++;
                return "You Won, Rock beats Scissors!";
            }
        case "paper":
            if(computerChoice === "scissors") {
                computerScore++;
                return "You lost, Scissors beats Paper!";
            }
            else {
                playerScore++;
                return "You Won, Paper beats Rock!"
            }
        case "scissors":
            if(computerChoice === "rock") {
                computerScore++;
                return "You lost, Rock beats Scissors!";
            }
            else {
                playerScore++;
                return "You Won, Scissors beat Paper!";
            }
    }

};

/**
 * displays the result of player and computer choices and current game information
 * @param {[string]} results a string storing the results of the round between player and compuer
 */
const displayResults = (results) => {
    alert(`${results} \nCurrent score: [Player: ${playerScore}  Opponent: ${computerScore}] \nCurrent round:${currentRound} `);
};

/**
 * combines prior functions to execute a singular round of rps between player and computer
 */
const playRound = () => {
    displayResults(processChoices(getPlayerChoice(),getComputerChoice()));
};

/**
 * initiates a game of rock paper scissors that lasts specified rounds
 * @param {[number]} rounds number of rounds to play game for
 */
const playGame = (rounds) => {
    for(let i = 0; i < rounds; i++){
        currentRound++;
        playRound();
    }
    if(playerScore > computerScore)alert("Congratulations! You've Won!");
    else if(playerScore === computerScore)alert("This game was a tie!");
    else alert("Sorry, you've lost this game!");
    //resettiing global variable
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
};

playGame(5);

//dom manipulation