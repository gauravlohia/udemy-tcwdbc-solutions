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

// Requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");


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


// adding a custom middleware - whatever function we provide will be called on every route
// needs to be added after passport.session() to access user data
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    // console.log(`From the middleware: ${res.locals.currentUser}`);
    next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);


app.listen(port, () => {
    console.log(`YelpCamp started at http://localhost:${port}`);
});