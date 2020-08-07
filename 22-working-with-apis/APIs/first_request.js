var express = require('express');
var app = express();
var axios = require('axios');
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
axios.get('https://api.sunrise-sunset.org/json?lat=30.324394&lng=78.042133&date=today')
    .then(function(response) {
        if (response.status === 200) {
            console.log(response.data);
            console.log(response.data.results.sunrise);
            console.log(response.data.results.sunset);
        }
    })
    .catch(function(error) {
        console.log("Something went wrong!");
        console.log(error);
    });