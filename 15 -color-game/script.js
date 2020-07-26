var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var winnerColor = pickRandomColor(numberOfSquares);

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("mode");

//initialize game
function initialize() {
    for (var i = 0; i < numberOfSquares; i++) {
        //give random color to each square
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            var squareColor = this.style.backgroundColor;
            if (squareColor === winnerColor) {
                changeColor(squareColor);
                messageDisplay.textContent = "Correct!";
                header.style.backgroundColor = squareColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    colorDisplay.textContent = winnerColor;
}

function resetGame() {
    header.style.backgroundColor = "rgb(27, 114, 141)";
    colors = generateRandomColors(numberOfSquares);
    for (var i = 0; i < 6; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    winnerColor = pickRandomColor(numberOfSquares);
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    colorDisplay.textContent = winnerColor;
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(getRandomColor());
    }
    return arr;
}

function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickRandomColor(numberOfSquares) {
    return colors[Math.floor(Math.random() * numberOfSquares)];
}

function changeColor(color) {
    for (var i = 0; i < numberOfSquares; i++) {
        squares[i].style.backgroundColor = color;
    }
}

initialize();

resetButton.addEventListener("click", resetGame);
for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        for (var i = 0; i < modeButtons.length; i++) {
            modeButtons[i].classList.remove("selected");
        }
        this.classList.add("selected");
        if (this.textContent === "easy") {
            numberOfSquares = 3;
        } else {
            numberOfSquares = 6;
        }
        resetGame();
    });
}
