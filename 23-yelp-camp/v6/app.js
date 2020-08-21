var express = require('express'),
    app = express(),
    port = 5000,
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment'),
    User = require("./models/user"),
    seedDB = require('./seeds');


mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true })
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded());
seedDB();

// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: "Secret message to encrypt the passwords",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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
            res.render("campgrounds/index", { campgrounds: allCampgrounds });
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
    res.render("campgrounds/new.ejs");
});

//SHOW - shows more info about one campground
app.get('/campgrounds/:id', (req, res) => {
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

// ============================================================================
// COMMENTS ROUTES
// ============================================================================
app.get("/campgrounds/:id/comments/new", (req, res) => {
    //find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", { campground: campground });
        }
    });
});

app.post("/campgrounds/:id/comments", (req, res) => {
    // look up campground using id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            // create new comment
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {
                    // connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // redirect to campground show page
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
        }
    });
});


// ============================================================================
// AUTH ROUTES
// ============================================================================
app.get("/register", (req, res) => {
    res.render("register");
});

//handle sign up logic
app.post("/register", (req, res) => {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            return res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/campgrounds");
            });
        }
    });
});

// show login form
app.get("/login", (req, res) => {
    res.render("login");
});

// handle login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), (req, res) => {
});

app.listen(port, () => {
    console.log(`YelpCamp started at http://localhost:${port}`);
});