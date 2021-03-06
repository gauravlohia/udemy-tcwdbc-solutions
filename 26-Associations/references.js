var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true, useUnifiedTopology: true });

var Post = require('./models/post');
var User = require('./models/user');
// Post.create({
//     title: "How to cook the best burger PART-3",
//     content: "asdf;ojz;xlknv;as "
// }, (err, post) => {
//     if (err) {
//         console.log(err); 
//     } else {
//         User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save((err, data) => {
//                     if(err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 })
//             }
//         });
//     }
// });
// User.create({
//     email: "bob@gmail.com",
//     name:"Bob Belcher"
// });

// Find User
// find all posts for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});