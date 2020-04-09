// Business Logic ---------

// Setting up the Constructor to be able to add player name and have the running score associated with that name
function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
  this.dice = [];
}

// This constructor will hold our array to count up to 100 for each player. Start with lower number for testing purposes. 
// Are these simply polluting our environment?
function Score(total) {
  this.total.push(total);
}
Score.prototype.addDice = function () {
  this.roundScore = roundScore += ScoreScore;
}

// Sum of the totals
Player.prototype.addDice = function (number) {
  for (var i = 0; i < this.dice.length; i++) {

  }
}

// Creates our players
var playerOne = new Player("player one");
var playerTwo = new Player("player two");
// Create our Dice... do I even need to do this...?
// var dice = new Dice();
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
    playerOneRoll = rollDice();
    playerOne.addDice(playerOneRoll)
    $("#score1").text(playerOneRoll);
  })

  // player two roll event
  $("#rolldice2").on("click", function() {
    playerTwoRoll = rollDice();
    $("#score2").text(playerTwoRoll);
  })

  // event.preventDefault();
  console.log(playerOneRoll);
});