var options = ["a", "e", "i", "o", "u"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

  
var upgradeWins = function() {
  document.querySelector("#wins").innerHTML.wins;
};
var upgradeLosses = function() {
  document.querySelector("#losses").innerHTML.losses;
}
var updageRemainingGuesses = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};
var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
}

document.onkeydown = function(event) {
  var userpick = event.key.toLocaleLowerCase();
  guessesLeft--;

  var computerpick = options[Math.floor(Math.random()*options.length)]; 
  console.log(computerpick);
  
  guessedLetters.push(userpick);
  
  upgradeWins();
  upgradeWins();
  updageRemainingGuesses();
  updateGuessesSoFar();

  if (userpick === computerpick) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }
  
  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }


}


  
  
  
