// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.dataset.selection === "submit") {
                alert("You clicked!");
            } else {
                let gameType = this.dataset.selection;
                alert(`You clicked ${gameType}`);
            }
        });
    }

});

function runGame() {
  const selectionButtons = document.querySelectorAll('[button-selection]')
const SELECTIONS = [

  {
    name: 'rock',
    emoji: '🤛',
    beats: [
        'scissors', 'lizard'
  ]
},
{
    name: 'paper',
    emoji: ' ✋',
    beats: [
        'rock', 'spock'
    ]
},

  {
    name: 'scissors',
    Symbol: '✂️',
    beats: [
        'paper', 'lizard'
    ]
},
{
  name: 'lizard' ,
  Symbol: '🦎',
  beats: [
    'paper', 'spock'
]
},
{
  name: 'spock' ,
  Symbol: '🖖',
  beats: [
    'scissors ' , 'rock'
  ]
}
]}

function makeSelection(selection) {
  // Creates 1 random numbers between 1 and 5
  let num1 = Math.floor(Math.random() * 5) + 1;

  const computerSelection = randomSelection()
  const computerWinner = isWinner(computerSelection, selection)
  const yourWinner = isWinner(selection, computerSelection)
  
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

  function incrementScore(scoreSpan)
{
  scoreSpan.Result (score-area)

}





