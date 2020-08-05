var express = require('express');
var app = express();
var port = 4000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.set('views', 'views');
// =============================================
// ROUTES
// =============================================
app.get('/', function(req, res) {
    res.render("home.ejs");
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "This one skill will make you millions one day", author: "Aaron"},
        {title: "Vertigo. Reality or Conspiracy", author: "Keke Anthony"},
    ];

    res.render("posts", {posts: posts});
})

// =============================================
// SERVER SETUP
// =============================================
app.listen(port, function() {
    console.log(`Server started on http://localhost:${port}`);
});