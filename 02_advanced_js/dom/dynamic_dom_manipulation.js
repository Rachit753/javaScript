//If tag is not presnt in HTML page, but you want to add, we do dynamic_dom_manipulation.

//Step1 - Create Element
//Step2 - Append(after script tag)/Prepend(before script tag)

let z = document.createElement("z");
z.textContent = "Hello";
document.querySelector("body").prepend(z);

//appendChild : It is used to append tag.
let h1 = document.createElement("h1");
h1.textContent = "I am fine";
document.querySelector("div").appendChild(h1);

//remove : It will remove the tag.
let h4 = document.querySelector("h4");
h4.remove();
