var express = require('express'),
    router = express.Router(),
    User = require("../models/user"),
    passport = require('passport');

// root route
router.get('/', (req, res) => {
    // console.log(res.locals);
    res.render('landing')
});


// ============================================================================
// AUTH ROUTES
// ============================================================================
router.get("/register", (req, res) => {
    res.render("register");
});

//handle sign up logic
router.post("/register", (req, res) => {
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
router.get("/login", (req, res) => {
    res.render("login");
});

// handle login logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), (req, res) => {
});

// logout route
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/campgrounds");
});

//middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;