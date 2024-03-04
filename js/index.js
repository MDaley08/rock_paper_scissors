const choiceArray = ["rock", "paper", "scissors"];
let playerScore = 0; //global variable tracking player score
let computerScore = 0; //global variable tracking computer score
let currentRound = 0; //initializing rounds

/**
 * computer that player plays against, randomly choses "rock", "paper", or "scissors"  from list
 * @returns {[string]} returns a string that is "rock", "paper" or "scissors"
 */
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[choice];
};

/**
 * takes user input and processes it, returns a string of user input if valid
 * @returns {[string]} users input if it was "rock", "paper", or "scissors"
 */
let getPlayerChoice = () => {
   let choice;
   while(true){
    choice = prompt('choose "rock", "paper" or "scissors".').toLowerCase();
    if((choiceArray.includes(choice))) return choice;
    alert(`${choice} is not a valid choice. Try again.`);
   }
};

/**
 * Takes in choices of "rock", "paper", or "scissors" from user and computer and determines a winner
 * @param {[string] } playerChoice Input retrived by user must be. "rock", "paper", "scissors"
 * @param {[string]} computerChoice This is computer choice generated randomly. has to be "rock", "paper", or "scissors"
 * @returns {[string]} returns a string that informs user if they won, tie or lost
 */
let processChoices = (playerChoice, computerChoice) => {

    if(computerChoice === playerChoice) return `It was a tie, both chose ${playerChoice}!`;

    switch(playerChoice){
        case "rock":
            if(computerChoice === "paper") {
                computerScore ++;
                return "You lost, paper beats rock!";
            }
            else {
                playerScore++;
                return "You Won, rock beats scissors"
            }
        case "paper":
            if(computerChoice === "paper") {
                computerScore ++;
                return "You lost, paper beats rock!";
            }
            else {
                playerScore++;
                return "You Won, rock beats scissors"
            }
            return computerChoice === "scissors" ? "You lost, scissors beats paper!" : "You won, paper beats rock!";
        case "scissors":
            if(computerChoice === "rock") {
                computerScore ++;
                return "You lost, Rock beats Scissors!";
            }
            else {
                playerScore++;
                return "You Won, Scissors beat Paper!";
            }
    }

};

/**
 * handles how the result of round will be displayed
 * @param {[string]} results a string storing the results of the round between player and compuer
 */
let displayResults = (results) => {
    alert(`${results} \nCurrent score: [Player: ${playerScore}  Opponent: ${computerScore}] \nCurrent round:${currentRound} `);
};

/**
 * takes player input, generate computer output, compute results and display results to makes a round of rock paper scissoes
 */
let playRound = () => {
    displayResults(processChoices(getPlayerChoice(),getComputerChoice()));
};

/**
 * initiates a game of rock paper scissors that lasts specified rounds
 * @param {[number]} rounds number of rounds to play game for
 */
let playGame = (rounds) => {
    for(let i = 0; i < rounds; i++){
        currentRound++
        playRound();
    }
    if(playerScore > computerScore)alert("Congratulations! You've Won!");
    else if(playerScore === computerScore)alert("This game was a tie!");
    else alert("Sorry, you've lost this game!")
};

playGame(5);