// Business Logic ---------

// Setting up the Constructor to be able to add player name and have the running score associated with that name
function Players(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
}

// This constructor will hold our array to count up to 100 for each player. Start with lower number for testing purposes. 
// Are these simply polluting our environment?
function Score(total) {
  this.dice = [];
  this.total.push(total);
}
Score.prototype.addDice = function () {
  this.roundScore = roundScore += ScoreScore;
}

// Sum of the totals
Players.prototype.addDice = function () {
  for (var i = 0; i < this.dice.length; i++) {

  }
}

// Creates our players
var playerOne = new Players("player one");
var playerTwo = new Players("player two");
// Create our Dice... do I even need to do this...?
var dice = new Dice();
// function Dice(sides) {        --- Sides is never defined in our rollDice method
//   this.sides = sides || 6;
// }


// This method we created will run the two subsequent functions to return a dice roll between 1-6
function rollDice() {
  return 1 + Math.floor(Math.random()*6)
  alert("the dice were rolled")
}


// UI Logic ----------

$(document).ready(function() {

  // player one roll event
  $("#rolldice").on("click", function() {
    playerOne = rollDice();
    $("#score1").text(playerOne);
  })

  // player two roll event
  $("#rolldice2").on("click", function() {
    playerTwo = rollDice();
    $("#score2").text(playerTwo);
  })

  event.preventDefault();
  console.log(rollDice);
});