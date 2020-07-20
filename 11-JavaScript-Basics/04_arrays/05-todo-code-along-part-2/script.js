var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodo();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodo() {
    console.log("****************");
    // for (var i = 0; i < todos.length; i++) {
    //     console.log(i + ": " + todos[i]);
    // }
    todos.forEach(function (item, index) {
        console.log(index + ": " + item);
    });
    console.log("****************");
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
    var idx = prompt("Enter index of the todo to delete");
    //The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
    todos.splice(idx, 1);
    console.log("Todo deleted");
}