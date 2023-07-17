// function to reset the game and display the winner
function resetGame(winner) {
    document.body.innerHTML = `the ${winner} has won.`;
}
// Function to play the game
function playGame(userChoice)
// choices available
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
// randomly chosing for AI
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
// variables to display results
let userScore = '';
let AIScore = '';
let resultText = '';
// for tie
if (userChoice === computerChoice) {
    resultText = "It's a tie";
}




