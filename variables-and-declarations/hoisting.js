//Hoisting it is a js behaviour where it moved declarations of variables and function to the top of their scope before code execution
// bcz of this we will get

console.log(a);  //undefined
var a = 12;

/*  internalley whats happeing

var a= undefined  **declared part
console.log(a)
a =12             **initialized part

*/

//same happend for let and const but they give refrense error bcz of TDZ.


/*
eg = 
console.log(b)
let b =2;

**internally**

let b = undefined
console.log(b)       **(error) cannot acces var before initialization.
b = 2;

*/