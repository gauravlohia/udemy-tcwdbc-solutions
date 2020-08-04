var express = require('express');
var app = express();
var port = 4000;

// ==================================================
// ROUTES
// ==================================================
app.get('/', function(req, res) {
    console.log('User requested home page');
    res.send('Hi there, welcome to my assignment.');
});

app.get('/speak/:animal', function(req, res) {
    var animal = req.params.animal.toLowerCase();
    console.log(`User requested sound for ${animal}`);
    var sounds =  {
        dog: "Woof Woof!",
        pig: "Oink",
        cow: "Moo",
        cat: "Meow"
    }
    var sound = sounds[animal];
    res.send(`The ${animal} says "${sound}"`);
});

app.get('/repeat/:word/:number', function(req, res) {
    var params = req.params;
    var message = '';
    for (var i = 0; i < params.number; i++) {
        message += params.word + " ";
    }
    res.send(message);
});

app.get('*', function(req, res) {
    res.send('Sorry, page not found...What are you doing with your life?');
})

// ==================================================
// Server Setup
// ==================================================
app.listen(port, function() {
    console.log(`Server started successfully on http://localhost:${port}`);
});