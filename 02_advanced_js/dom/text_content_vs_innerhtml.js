//For changing the text/content of html tag we use these properties.

let h1 = document.querySelector("h1");
console.dir(h1);

let h2 = document.querySelector("h2");
console.dir(h2);

//These will change the text from the screen.
h1.textContent = "Hello Rachit";
h2.innerText = "how are you";

//For changing the inner html tag content we use this, it will also reflect on console and on screen also.
let h3 = document.querySelector("h3");
console.dir(h3);

h3.innerHTML = "<i>Everything ok? </>";
