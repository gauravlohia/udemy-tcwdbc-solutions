function printReverse(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

var nums = [1, 2, 3, 4, 5];

printReverse(nums);


function isUniform(arr) {
    if (arr.length === 1) {
        return true;
    }
    
    var elem = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== elem) {
            return false;
        }
    }
    return true;
}

var not_uniform = [1, 2, 3, 4, 5];
var uniform = [5, 5, 5, 5, 5];
console.log(isUniform(not_uniform));
console.log(isUniform(uniform));


function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(elem) {
        sum += elem;
    });
    return sum;
}

console.log(sumArray([1, 2, 3]));


function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([10, 3, 10, 4]));