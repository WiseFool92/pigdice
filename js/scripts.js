// Business Logic ---------

// Setting up the Constructor to be able to add player name and have the running score associated with that name
function Players(name) {
  this.name = name;
  this.roundScore = roundScore;
  this.gameScore = gameScore;
}

// This constructor will hold our array to count up to 100 for each player. Start with lower number for testing purposes.
function Diceroll(total) {
  this.dice = [];
  this.total.push(total);
}

// 

function rollDice() {
  return 1 + Math.floor(Math.random()*6)
  console.log(rollDice())
}

Diceroll.prototype.addDice = function () {
  this.roundScore = roundScore += Diceroll;
}

// Creates our players
var playerOne = new Players("player one");
var playerTwo = new Players("player two");

// function rollDice() {
//   var die1 = document.getElementById("die1");
//   var die2 = document.getElementById("die2");
//   var status = document.getElementById("status");
//   var d1 = Math.floor(Math.random() * 6) +1;
//   var d2 = Math.floor(Math.random() * 6) +1;
//   var diceTotal = d1 + d2;
//   die1.innerHTML = d1;
//   die2.innerHTML = d2;
//   status.innerHTML = "You rolled "+diceTotal+"."; 
// }

// UI Logic ----------

$(document).ready(function() {
  event.preventDefault();
  console.log(diceTotal);
});