let h1 = document.querySelector("body > h1");

//.style is used to perform styling operation on a tag.
h1.style.backgroundColor = "red";
h1.style.fontFamily = "Gilory";
h1.style.color = "white";

//.classList - a class is formed on html page and we are adding that class by using only one line of code and we can add that any number of elements.
let h2 = document.querySelectorAll("body > h2");
h2.forEach(function (el){
    el.classList.add("hulu");
})

//remove - it is used for removing the classList from the element.
//toggle - if added then remove and viceversa.

