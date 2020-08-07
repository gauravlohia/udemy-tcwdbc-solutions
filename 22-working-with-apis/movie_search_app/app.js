var express = require('express');
var app = express();
var port = 5000;
var request = require('request');

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("search");
});

app.get('/results', (req, res) => {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=77df9d62&s=" + query;
    request.get(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', { searchResult: data });
        } else {
            console.log("SOMETHING WENT WRONG!!!");
            console.log(error);
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})