// var isEven = function(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
function isEven(num) {
    return num % 2 === 0;
}
console.log("Testing isEven(23)");
var num = 23;
console.log(isEven(num));
console.log("Testing isEven(20)");
var num = 20;
console.log(isEven(num));


var factorial = function(num) {
    var count = num;
    var ans = 1;
    while(count > 0) {
        ans *= count;
        count--;
    }
    return ans;
}
console.log("Testing factorial(5)");
console.log(factorial(5));
console.log("Testing factorial(10)");
console.log(factorial(10)); 


var kebabToSnake = function(str) {
    return str.replace(/-/g, '_');
}
console.log("Testing kebabToSnake('hello-world')");
console.log(kebabToSnake('hello-world'));
console.log('Testing kebabToSnake("dogs-are-awesome")');
console.log(kebabToSnake("dogs-are-awesome"));
console.log("Testing kebabToSnake('blah')");
console.log(kebabToSnake("blah"));
