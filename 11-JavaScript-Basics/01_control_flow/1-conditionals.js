var age = 36;

var isPerfectSquare = function(n) {
    return n > 0 && Math.sqrt(n) % 1 == 0;
};

if (age < 0) {
    console.log("Error: enter a valid age");
}
else if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
}
else if (age < 21) {
    console.log("You can enter, but cannot drink");
}
else if (age == 21) {
    console.log("happy 21st birthday");
}
else {
    console.log("Come on in. You can drink");
}

if(age % 2 != 0) {
    console.log("Your age is odd!");
}

if (isPerfectSquare(age)) {
    console.log("Perfect Sqaure!");
}