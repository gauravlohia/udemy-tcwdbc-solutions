function myForEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

var colors = ["red", "green", "blue"];

myForEach(colors, function(color) {
    console.log(color.toUpperCase());
});