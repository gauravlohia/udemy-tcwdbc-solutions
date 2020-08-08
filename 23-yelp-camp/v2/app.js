var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true })
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String, 
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Salmon Creek",
//     image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=640:*",
//     description: "This is a great place to camp. Plenty of salmon to catch."
//     }, (err, campground) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         }
//     });


app.get('/', (req, res) => {
    res.render('landing')
});

// INDEX ROUTE - show all campgrounds in the DB
app.get('/campgrounds', (req, res) => {
    // res.render('campgrounds', { campgrounds: campgrounds });
    //Get all campgrounds from the DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds });
        }
    });
});

// CREATE ROUTE - save a new campground to the DB
app.post('/campgrounds', (req, res) => {
    //get data from form and add to campgrounds array
    // eval(require('locus'));
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = { name: name, image: image, description: desc };
    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });
    //redirect back to campgrounds page
    // res.redirect('/campgrounds');
});

// NEW ROUTE - show the form to create a new campground
app.get('/campgrounds/new', (req, res) => {
    res.render("new.ejs");
});

//SHOW - shows more info about one campground
app.get('/campgrounds/:id', (req, res) => {
    // find the campground with provided ID
    var id = req.params.id;
    Campground.findById(id, (err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(port, () => {
    console.log(`YelpCamp started at http://localhost:${port}`);
});