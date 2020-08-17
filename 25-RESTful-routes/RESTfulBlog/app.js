var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressSanitizer = require('express-sanitizer');
var mongoose = require('mongoose');
var express = require("express");
const { request } = require('express');
var app = express();
var port = 7000;

// App config
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// MONGOOSE CONFIG
var blogSchema = new mongoose.Schema( {
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

// Model
var Blog = mongoose.model("Blog", blogSchema);
// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1570021974424-60e83dfee639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
//     body: "Hello This is a Blog Post"
// });

// Restful Routes ================================================
app.get("/", (req, res) => {
    res.redirect("/blogs");
});
// INDEX ROUTE
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log("SOMETHING WENT WRONG!!")
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get("/blogs/new", (req, res) => {
    res.render("new");
});
// CREATE ROUTE
app.post("/blogs", (req, res) => {
    //create blog
    console.log()
    req.body.blogBody = req.sanitize(req.body.blogBody);
    Blog.create({
        title: req.body.blogTitle,
        image: req.body.blogImage, 
        body: req.body.blogBody
    }, (err, newBlog) => {
        if (err) {
            console.log(err);
            res.render("new");
        } else {
            console.log(`BLOG SAVED SUCCESSFULLY WITH ID: ${newBlog._id}`);
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put("/blogs/:id", (req, res) => {
    console.log("Before");
    console.log(req.body.blogBody);
    console.log("====================");
    req.body.blogBody = req.sanitize(req.body.blogBody);
    console.log("After");
    console.log(req.body.blogBody);
    Blog.findByIdAndUpdate(req.params.id, {title: req.body.blogTitle, image: req.body.blogImage, body: req.body.blogBody}, (err, updatedBlog) => {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
            // console.log(req.body);
        }
    });
});

app.delete("/blogs/:id", (req, res) => {
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    })
    //redirect
});

// ===========================================================


// Server Creation
app.listen(port, () => {
    console.log(`Blog App started at http://localhost:${port}`);
})