// Business Logic ---------

// Setting up the Constructor to be able to add player name and have the running score associated with that name
function Players(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
}

// This constructor will hold our array to count up to 100 for each player. Start with lower number for testing purposes.
function Diceroll(total) {
  this.dice = [];
  this.total.push(total);
}

// This method we created will run the two subsequent functions to return a dice roll between 1-6
function rollDice() {
  return 1 + Math.floor(Math.random()*6)
  alert("the dice were rolled")
}

Diceroll.prototype.addDice = function () {
  this.roundScore = roundScore += Diceroll;
}

// Creates our players
var playerOne = new Players("player one");
var playerTwo = new Players("player two");
// Create our Dice... do I even need to do this...?
var dice = new Dice();
// function Dice(sides) {        --- Sides is never defined in our rollDice method
//   this.sides = sides || 6;
// }



// UI Logic ----------

$(document).ready(function() {

  // player one roll event
  $("#rolldice").on("click", function() {
    var dice = dice.roll();
  })

  // player two roll event
  $("#rolldice2")
  event.preventDefault();


  console.log(diceTotal);
});