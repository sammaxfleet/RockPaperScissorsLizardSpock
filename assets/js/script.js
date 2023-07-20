// function to remove body elements and display the winner
function resetGame(winner) {
  document.body.innerHTML = `the ${winner} has won.<br><button class="return_btn"><a href="/">Back to Game</a></button>`;
}
// Function to play the game
function playGame(userChoice) {
  // choices available
  let choices = ["rock", "paper", "scissors", "lizard", "spock"];
  // randomly chosing for AI using random() and floor() to round off the number to nearest integer
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Variables to display results
  let resultText = "";

  // For a tie
  if (userChoice === computerChoice) {
    resultText = "It's a tie";
  }
  // User Wins conditions
  else if (
    (userChoice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (userChoice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (userChoice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (userChoice === "lizard" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (userChoice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    // update results accordingly for user winner conditions

    resultText = "You Win!";
    let currentResult = (document.getElementById("userScore").value += "+ 1");
    let userScored = (new Function('return '+currentResult))();
 
    if (userScored > 9) {
      resetGame("User");
    } else {
      document.getElementById("userScore").value = userScored;
    }
  }
  // update results according to AI winner conditions
  else {
    resultText = "You Lose!";
    let currentResultAI = (document.getElementById("AIScore").value += "+ 1");
    let AIScored = (new Function('return '+currentResultAI))();
    if (AIScored > 9) {
      resetGame("AI");
    } else {
      document.getElementById("AIScore").value = AIScored;
    }
  }
  document.getElementById(
    "result"
  ).textContent = `you chose ${userChoice}. Computer Chose ${computerChoice}. ${resultText}`;
}
