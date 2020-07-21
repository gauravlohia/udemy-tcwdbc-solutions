// Use getAttribute() and setAttribute() to read and write attributes like src or href

var img = document.getElementsByTagName("img")[0];

img.setAt0tribute("src", "https://i.pinimg.com/originals/57/38/33/57383338a6056c30eaaa83db693ba7cc.jpg"); 

var google_link = document.querySelector("a");

google_link.setAttribute("href", "http://www.bing.com");