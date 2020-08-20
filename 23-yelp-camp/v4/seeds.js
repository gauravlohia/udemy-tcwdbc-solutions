var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    {
        name: "Cloud's Rest",
        image: "https://q9m3bv0lkc15twiiq99aa1cy-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/TENT.jpeg",
        description: "blah blah blah"
    },
    {
        name: "Lost Angle's Ground",
        image: "https://laistassets.scprdev.org/i/0a1539c659eb373083bdd95e6a619291/5ec9707ba758ab0008b1c2ae-eight.jpg",
        description: "blah blah blah"
    },
    {
        name: "God's Meadow",
        image: "https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-04/Table%20Mountain%20Campground%20tents.jpg?itok=aW2w0ktq",
        description: "blah blah blah"
    }
]

function seedDB() {
    Campground.remove({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Removed campgrounds");
        //remove existing comments
        Comment.remove({}, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Removed all comments");
                // add a few campgrounds
                data.forEach((seed) => {
                    Campground.create(seed, (err, campground) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("added a campground");
                            // create a comment for every campground
                            Comment.create({
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, (err, comment) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                        }
                    });
                });
            }
        });
    });
}

module.exports = seedDB;