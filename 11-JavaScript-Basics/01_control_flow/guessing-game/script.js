//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));
//check guess
if(guess === secretNumber) {
    alert("Right guess");
} else  if(guess > secretNumber) {
    alert("Too High! Guess again.");
} else {
    alert("Too Low! Guess again.");
}