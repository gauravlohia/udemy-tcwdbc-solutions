var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/auth_demo", { useNewUrlParser: true, useUnifiedTopology: true });


var app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('express-session')({
    secret: "Bruno is the best and the cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ============================================================================
// ROUTES
// ============================================================================

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

// AUTH ROUTES

// show sign up form
app.get("/register", (req, res) => {
    res.render("register");
});

// register a user
app.post("/register", (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, () => {
            console.log(user);
            res.redirect("/secret");
        });
    });
});


// LOGIN ROUTES
app.get("/login", (req, res) => {
    res.render("login");
});

// login logic
//middleware - code that runs before the route callback
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {
});

// LOGOUT ROUTE
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}


app.listen(5000, () => {
    console.log("Server started");
});