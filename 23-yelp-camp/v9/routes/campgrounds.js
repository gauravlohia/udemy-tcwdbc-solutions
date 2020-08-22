var express = require('express'),
    router = express.Router(),
    Campground = require("../models/campground");

// INDEX ROUTE - show all campgrounds in the DB
router.get('/', (req, res) => {
    // console.log(res.locals.currentUser);
    //Get all campgrounds from the DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds: allCampgrounds });
        }
    });
});

// CREATE ROUTE - save a new campground to the DB
router.post('/', isLoggedIn, (req, res) => {
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
router.get('/new', isLoggedIn, (req, res) => {
    res.render("campgrounds/new.ejs");
});

//SHOW - shows more info about one campground
router.get('/:id', (req, res) => {
    // find the campground with provided ID
    var id = req.params.id;
    Campground.findById(id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", { campground: foundCampground });
        }
    });
});

// middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;