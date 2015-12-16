
var word = ['f', 'o', 'x'];
var correctGuesses = [];

function checkGuess(guessedLetter) {
  for(var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === guessedLetter.toLowerCase()) {
      correctGuesses.push(guessedLetter);
      console.log("You guessed letter " + guessedLetter + " correctly!");
    }
  }
}

// Keep getting user input until they guess all the letters F O, X
console.log('game starting');
while (correctGuesses.length !== word.length) {
  var userGuess = prompt('Guess a letter');
  checkGuess(userGuess);
}


alert("You guessed the word!");
// }


//if statement inside of the while
//if they guess correctly, add to new array
