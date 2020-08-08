var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/catsdb", { useNewUrlParser: true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 11,
//     temperament: "Evil"
// });

// george.save((err, cat) => {
//     if (err) {
//         console.log("SOMETHING WENT WRONG");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//         console.log(george);
//     }
// });

// new and save all at once
Cat.create({
    name: "Tar Black",
    age: 10,
    temperament: "Calm"
}, (err, cat) => {
    if (err) {
        console.log("SOMETHING WENT WRONG");
        console.log(err);
    } else {
        console.log("SAVED A CAT TO THE DB USING CREATE");
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, (err, cats) => {
    if (err) {
        console.log('OH NO, ERROR!');
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});