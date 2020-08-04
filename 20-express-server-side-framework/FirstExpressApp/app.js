var express = require('express');
var app = express();
var port = 9000;

// "/" -> "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" -> "Goodbye"
app.get("/bye", function(req, res) {
    res.send("Goodbye");
});
// "/dog" -> "MEOW!"
app.get("/dog", function(req, res) {
    console.log("user requested dog");
    res.send("MEOW!");
});

// the * route matches to every route which is not defined
app.get("*", function(req, res) {
    console.log("User made a bad request. Sending star message");
    res.send("YOU ARE A STAR");
})
// Tell Express to listen for requests (start server)
app.listen(port, function() {
    console.log(`Server has started at http://localhost:${port}`);
});