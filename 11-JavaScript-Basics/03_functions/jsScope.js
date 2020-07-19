function doMath() {
    var x = 40;
    console.log(x);
}

doMath(); // prints x

//console.log(x); //shows ReferenceError: x is not defined

var y = 99;

function doSomething() {
    console.log("y from inside doSomething: " + y); // prints y, which means that we can access the variables with global scope inside a function.
    y = 100;
    console.log("y after updating inside doSomething: " + y); // prints the updated value
}

doSomething();
console.log("y outside of doSomething: " + y); // an update inside a function persists outside the funciton and is reflected in the global scope.

var z = "hello";
console.log("z in the global scope: " + z);
function changeVar() {
    var z = 55;// the var keyword declares a new variable inside the function and thus the outside variable is not touched
    console.log("z inside the changeVar()'s scope: " + z);
}
changeVar();
