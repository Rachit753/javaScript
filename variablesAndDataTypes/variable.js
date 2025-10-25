//JavaScript:- It is a programming language that is used for web development, to make web pages interactive and dynamic.
//Variables :- These are the containers for storing data values.
name ="Rachit Chauhan";
age = 21;
isStudent = true;
children = null;
job = undefined;

//Output
console.log(name);
console.log(age);
console.log(isStudent);
console.log(children);
console.log(job);    //console.log prints the output to the console.

//Javascript is a dynamically typed language at runtime it allocate memory,so we can change the data type of variable at any time.
name = 25;   //Now name variable contains a number instead of string.
console.log(name); // now it will print 25 instead of "Rachit Chauhan".

/*Variable Rules
· Variable names are case sensitive; "a" & "A" is different.
· Only letters, digits, underscore(_) and $ is allowed. (not even space)
. Only a letter, underscore( _) or $ should be 1st character.
· Reserved words cannot be variable names.
*/

//var is used where variable value can be changed later and can be redeclared,it is function scoped.
var fruit = "Apple"; //ancient way of declaring variable.
console.log(fruit);
fruit = "Banana"; //value changed
console.log(fruit);
var fruit = "Orange"; //redeclared
console.log(fruit); 

//let is used where variable value can be changed later but cannot be redeclared,it is block scoped.
let city = "New York"; //after es6 or ekma script way of declaring variable.
console.log(city);
city = "Los Angeles"; //value changed
console.log(city);
//let city = "Chicago"; //error: cannot be redeclared.

//const is used where variable value cannot be changed later and cannot be redeclared,it is block scoped.
const country = "USA"; //value must be assigned during declaration.
console.log(country);
//country = "Canada"; //error: cannot be changed
//const country = "Mexico"; //error: cannot be redeclared