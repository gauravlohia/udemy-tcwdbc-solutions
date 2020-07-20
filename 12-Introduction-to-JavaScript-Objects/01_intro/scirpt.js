// Suppose I wanted to model a single person: name, age and city

//I could use an array like this:
var person = ["Cindy", 32, "Minnoula"];

//to retrueve the person's hometown
person[2]//no meaningful code

//This is the perfect use case for an OBJECT
var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
};

// Retrieving Data
//Dot notation
console.log(person.name);

// Bracket Notation like arrays
console.log(person["age"]);

// Note: unline arrays, objects have no order for the attributes.

// Difference between Bracket and Dot notation
// you cannot use dot notation if the property starts with a number
someObject.1blah;   //INVALID
someObject["1blah"];    //VALID

// you can lookup using a variable with bracket notation
var str = "name"
someObject.str      //doesn't look for "name"
someObject[str]     //does evaluate str and looks for "name"

// you cannot use dot notation for property names with spaces
someObject.fav color    //INVALID
someObject["fav color"]     //VALID

// Updating Data
person["age"] += 1;
person.city = "London";


// Creating objects
var person = {};
person.name = "Gaurav";
person.age = 26;
person.city = "Dehradun";

var person2 = {
    name: "Priyanka",
    city: "Rajasthan",
    age: 28
};

var person = new Object();
person.name = "Deepak";
person.age = 35;
person.city = "Dehradun";


// Objects can hold all sorts of data
var junkObject = {
    age: 57,
    color: "purple",
    isHungry: true,
    friends: ["Horatio", "Hamlet"],
    pet: { //another object
        name: "Rusty",
        species: "Dog",
        age: 2
    }
};