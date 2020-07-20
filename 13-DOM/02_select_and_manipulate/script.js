var h1 = document.querySelector("h1"); // selecting
h1.style.color = "pink"; //manipulate

var body = document.body;
isBlue = false;
setInterval(function() {
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);
