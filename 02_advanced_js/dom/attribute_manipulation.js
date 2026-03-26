//Attribute:- Everything written inside the tag.


//setAttribute :- With the help of this we can set any attribute of the tag.
let a = document.querySelector("a");
console.dir(a);
a.setAttribute("href", "https://google.com");


let img = document.querySelector("img");
console.dir(img);
img.setAttribute("src",
    "https://images.unsplash.com/photo-1773558057568-27ee1049a8ac?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);


//getAttribute :- It is give you the value of the desired attribute, if not present give null.
console.log("There is the value of href attribute of a tag: ", a.getAttribute("href"));
console.log("There is the value of src attribute of img tag: ", img.getAttribute("src"));

//removeAttribute :- It will remove the value of the attribute, if already empty give undefined.
let b = document.querySelector("b");
console.dir(b);
console.log("There is the value of href attribute of b tag: ", b.removeAttribute("href"));



