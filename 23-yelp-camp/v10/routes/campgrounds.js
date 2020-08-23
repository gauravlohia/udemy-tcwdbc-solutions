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
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = { name: name, image: image, description: desc, author: author };
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

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});


//UPDATE CAMPGROUND ROUTE
router.put("/:id",checkCampgroundOwnership, (req, res) => {
    // find and update the correct campground
    // Campground.findById(req.params.id, (err, campground) => {
    //     campground.name = req.body.name;
    //     campground.image = req.body.image;
    //     campground.description = req.body.description;
    //     campground.save(function (err, campground) {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("Campground edited successfully");
    //             console.log(campground);
    //             //redirect to the show page
    //             res.redirect("/campgrounds");
    //         }
    //     });
    // });
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/campgrounds/${req.params.id}`);
        }
    });
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, (err, foundCampground) => {
            if (err) {
                res.redirect("back");
            } else {
                //does the user own the campground
                if(req.user._id.equals(foundCampground.author.id)) {
                    next();
                }else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

module.exports = router;