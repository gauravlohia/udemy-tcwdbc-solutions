var tag = document.querySelector("h1");
tag.style.border = "5px solid pink";

// classList: a read-only list that contains the classes for a given element.

// We can add, remove and toggle a class to a classList

//tag.classList.add("another-class");
//tag.classList.remove("another-class");
//tag.classList.toggle("another-class"); removes another-class if it is present and vice-versa

var p = document.querySelector("p");
p.classList.add("big");