var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];
// =================================================
// ROUTES
//==================================================
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/friends', function(req, res) {
    res.render('friends', {friends: friends});
});

app.post('/addfriend', function(req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect('/friends');
});
// =================================================
// SERVER SETUP
//==================================================
app.listen(port, function() {
    console.log(`Server started at http://localhost:${port}`);
});