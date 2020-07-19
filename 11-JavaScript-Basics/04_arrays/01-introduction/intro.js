var colors = ["red", "orange", "yellow"];

console.log(colors);

colors[3] = "green";
console.log(colors);

colors[5] = "blue";
console.log(colors);

// We can initialize an empty array in two ways
var friends = [];
var friends = new Array(); //uncommon

// Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null]
console.log(random_collection);

//Arrays have a length property
var nums = [45, 37, 89, 24, [34, 35]];
console.log(nums.length);