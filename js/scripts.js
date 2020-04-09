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

// function Score(total) {
//   this.total.push(total);
// }
// Score.prototype.addDice = function () {
//   this.roundScore = roundScore += ScoreScore;
// }

// Sum of the totals
Player.prototype.addDice = function (number) {
  for (var i = 0; i < this.dice.length; i++) {

  }
}

Player.prototype.addDice = function (number) {
  for (rollDice() = this.turnScore
    if (i = 0 ) {

  }
}

Player.prototype.switchPlayers = function() {

}


// Victory Condition
Player.prototype.victor = function() {
  if (this.gameScore >= 100) {
    return (this.name + " is Victorious!")
  }
}

// Creates our players
var playerOne = new Player("player one");
var playerTwo = new Player("player two");

// This method we created will run the two subsequent functions to return a dice roll between 1-6
function rollDice() {
//  alert("the dice were rolled")
  return 1 + Math.floor(Math.random()*6)
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
    playerTwo.addDice(playerTwoRoll)
    $("#score2").text(playerTwoRoll);
  })

  // event.preventDefault();
  console.log();
});