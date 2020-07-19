//arr.push(args) adds one or more elements to the end of the array and returns the new length
var colors = ["red", "orange", "green"];
console.log(colors);

colors.push("blue", "purple");
console.log(colors);

//arr.pop() removes the last element of the array and returns it.
var popped = colors.pop();
console.log(colors);
console.log("Popped: " + popped);

//shift() removes one element from beginnning of the array and returns the removed element
var removed = colors.shift();
console.log(colors);
console.log("Removed: " + removed);

//unshift adds one or more element to the beginning of the array and returns the new length
var newLen = colors.unshift("black", "yellow");
console.log(colors);
console.log("New length: " + newLen);

//indexOf takes an argument and tries to find the argument in the array and returns the first index of the element if found and -1 if not found
console.log(colors.indexOf("green"));
console.log(colors.indexOf("red"));

//slice is used to copy different portions of the array
//arr.slice(start, end);
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(citrus);

//use slice() with no arguments to copy the entire array
var newFruits = fruits.slice();
console.log(newFruits);