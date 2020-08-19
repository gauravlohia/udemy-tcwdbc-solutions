var mongoose = require('mongoose');

//POST - title, content [Defined first because it is used in userSchema]
var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;