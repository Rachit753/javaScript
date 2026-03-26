//SELECTION ELEMENT:- It means we can select that on which tag of HTML we want to perform any operation.

//querySelector() - The first occurrence of given name tag will select.
let h1 = document.querySelector("h1");
console.dir(h1);

//querySelectorAll() - All occurrence of given name tag will select, and give array like structure called nodelist.
let h2 = document.querySelectorAll("h2");
console.dir(h2);

//getElementById() - The elements of given id will be selected.
let h3 = document.getElementById("abcd");
console.dir(h3);

//getElementByClassName() - All elements of given class name will be selected, it will make collection of all same name tag.
let h4 = document.getElementsByClassName("hue");
console.dir(h4);