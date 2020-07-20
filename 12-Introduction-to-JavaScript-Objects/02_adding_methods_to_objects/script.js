// Adding methods to an object
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    square: function (num) {
        return num * num;
    }
}
// Namespacing
var dog = {
    speak: function() {
        console.log("WOOF!");
    }
};

var cat = {
    speak: function() {
        console.log("MEOW.");
    }
};
dog.speak();//function have same name withing different namespaces
cat.speak();

// The Keyword this
var comments = {};
comments.data = ["Good Job!", "Bye", "Roger that", "lame..."];
comments.print = function() {
    // here the this keyword refers to the the object comments
    this.data.forEach(function(elem) {
        console.log(elem);
    });
};