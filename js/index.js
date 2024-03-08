// const processChoices = (playerChoice, computerChoice) => {

//     if(computerChoice === playerChoice) return `It was a tie, both chose ${playerChoice}!`;

//     switch(playerChoice){
//         case "rock":
//             if(computerChoice === "paper") {
//                 computerScore++;
//                 return "You lost, Paper beats Rock!";
//             }
//             else {
//                 playerScore++;
//                 return "You Won, Rock beats Scissors!";
//             }
//         case "paper":
//             if(computerChoice === "scissors") {
//                 computerScore++;
//                 return "You lost, Scissors beats Paper!";
//             }
//             else {
//                 playerScore++;
//                 return "You Won, Paper beats Rock!"
//             }
//         case "scissors":
//             if(computerChoice === "rock") {
//                 computerScore++;
//                 return "You lost, Rock beats Scissors!";
//             }
//             else {
//                 playerScore++;
//                 return "You Won, Scissors beat Paper!";
//             }
//     }
// };

const getCompChoice = () => {
    const choiceArray = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[index];
};

const displayCompChoice = () => {
    const choiceMap = new Map();
    let currChoice;
    choiceMap.set('rock',document.querySelector(".computer #rock"));
    choiceMap.set('paper', document.querySelector(".computer #paper"));
    choiceMap.set('scissors', document.querySelector(".computer #scissors"));
    currChoice = choiceMap.get(getCompChoice());
    currChoice.focus();
}

displayCompChoice();