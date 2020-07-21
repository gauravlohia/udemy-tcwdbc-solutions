//textContent: this property will extract text within the tag selected, even if the content is nested.

var p = document.querySelector("p");
console.log(p.textContent);

var ul = document.querySelector("ul");
console.log(ul.textContent);

// we can reassign new text to a tag using textContent
// But it should be kept in mind that all nested tags will be lost
// p.textContent = "Corgi mixes are really really super adorable";


// innerHTML: keeps nested html tags intact
console.log(p.textContent);
console.log(p.innerHTML);

//innerHTML is also not used to add content because the old content will be overwritten