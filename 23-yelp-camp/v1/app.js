var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {name: "Salmon Creek", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=640:*"},
    {name: "Granite Hill", image: "https://www.tripsavvy.com/thmb/ekAcrsKGhqVjsQvxnMJpjv1ymvw=/2137x1403/filters:fill(auto,1)/sunrise-camping--676019412-5b873a5a46e0fb0050f2b7e0.jpg"},
    {name: "Tungnath Valley", image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"},
    {name: "Salmon Creek", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=640:*"},
    {name: "Granite Hill", image: "https://www.tripsavvy.com/thmb/ekAcrsKGhqVjsQvxnMJpjv1ymvw=/2137x1403/filters:fill(auto,1)/sunrise-camping--676019412-5b873a5a46e0fb0050f2b7e0.jpg"},
    {name: "Tungnath Valley", image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"},
    {name: "Salmon Creek", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=640:*"},
    {name: "Granite Hill", image: "https://www.tripsavvy.com/thmb/ekAcrsKGhqVjsQvxnMJpjv1ymvw=/2137x1403/filters:fill(auto,1)/sunrise-camping--676019412-5b873a5a46e0fb0050f2b7e0.jpg"},
    {name: "Tungnath Valley", image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"},
    {name: "Salmon Creek", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=640:*"},
    {name: "Granite Hill", image: "https://www.tripsavvy.com/thmb/ekAcrsKGhqVjsQvxnMJpjv1ymvw=/2137x1403/filters:fill(auto,1)/sunrise-camping--676019412-5b873a5a46e0fb0050f2b7e0.jpg"},
    {name: "Tungnath Valley", image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"}
]

app.get('/', (req, res) => {
    res.render('landing')
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
    //get data from form and add to campgrounds array
    // eval(require('locus'));
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    res.render("new.ejs");
});

app.listen(port, () => {
    console.log(`YelpCamp started at http://localhost:${port}`);
});