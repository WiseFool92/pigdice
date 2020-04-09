// Business Logic ---------

// Setting up the Constructor to be able to add player name and have the running score associated with that name
function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
  this.dice = [];
}

// Creates our players
var playerOne = new Player("player one");
var playerTwo = new Player("player two");

// Sum of the totals
Player.prototype.addDice = function (number) {
  this.dice.push(number)
  this.turnScore = this.dice.reduce(function(total, value){return total+value})
  console.log(this.turnScore);
}

//hold condition to add up accumulated rolls this round
Player.prototype.hold = function () {
  this.gameScore += this.turnScore;
  //(i = 0);
}

// Player.prototype.switchPlayers = function() {
// }

// //Travis Example
// ...
// this.currentPlayerIndex = 0;
// ...
// var currentPlayer = game.currentPlayer[game.currentPlayerIndex];
// ...


// Method to switch players:
// ...
// this.currentPlayerIndex = 1 - this.currentPlayerIndex;
// ...
// // Travis example


// Victory Condition
Player.prototype.victor = function() {
  if (this.gameScore >= 100) {
    return (this.name + " is Victorious!");
  }
}

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
    $("#currentRoll1").text(playerOneRoll);
    $("#total1").text()
  })
  
  // Upon clicking hold this will display the total gameScore of the player
  $("#hold").on("click", function() {
    playerOne.hold();
    $("#total1").text(playerOne.turnScore);
  })

  // player two roll event
  $("#rolldice2").on("click", function() {
    playerTwoRoll = rollDice();
    playerTwo.addDice(playerTwoRoll)
    $("#currentRoll2").text(playerTwoRoll);
    $("#total2").text()
  })

  // Upon clicking hold this will display the total gameScore of the player
  $("#hold2").on("click", function() {
    playerTwo.hold();
    $("#total2").text(playerTwo.turnScore);
  })

  // event.preventDefault();
  console.log();
});