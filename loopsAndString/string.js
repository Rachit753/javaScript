//Strings in JavaScript
//Srings are used for storing and manipulating text.
//Strings are created by enclosing characters in single quotes(''), double quotes(""), or backticks(``).

//Example of creating strings
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;

//String Concatenation
let greeting = "Hello";;
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message); // Output: Hello, Alice!

//String inbuilt properties are used to get information about the string
let sampleString = "JavaScript is fun!";
console.log(sampleString.length); // Output: 18

//Template Literals are string literals allowing embedded expressions
//They are enclosed by backticks (` `) instead of single or double quotes.
//Template literals can contain placeholders indicated by the dollar sign and curly braces (${expression}).

//Example of Template Literals
let age = 25;
let templateLiteralMessage = `My name is ${name} and I am ${age} years old.`;
console.log(templateLiteralMessage); // Output: My name is Alice and I am 25 years old.

//String interpolation:- is the process of embedding expressions within string literals using template literals.
let a = 5;
let b = 10;
let interpolationMessage = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(interpolationMessage); // Output: The sum of 5 and 10 is 15.

//String Methods:- JavaScript provides various built-in methods to manipulate strings.
//Srings are immutable, meaning they cannot be changed after they are created. However, string methods return new strings based on the original string.
//Difference between string properties and methods:- Properties provide information about the string, while methods perform actions on the string.

//Example of String Methods

let sampleText = "  Hello, JavaScript!  ";

//toUpperCase() - Converts the string to uppercase
console.log(sampleText.toUpperCase()); // Output: "  HELLO, JAVASCRIPT!  "

//toLowerCase() - Converts the string to lowercase
console.log(sampleText.toLowerCase()); // Output: "  hello, javascript!  "

//trim() - Removes whitespace from both ends of the string
console.log(sampleText.trim()); // Output: "Hello, JavaScript!"

//slice() - Extracts a section of the string and returns it as a new string
console.log(sampleText.slice(2, 7)); // Output: "Hello"

//replace() - Replaces a specified value with another value in the string
console.log(sampleText.replace("JavaScript", "World")); // Output: "  Hello, World!  " 

//split() - Splits the string into an array of substrings based on a specified separator
console.log(sampleText.trim().split(", ")); // Output: ["Hello", "JavaScript!"]

//charAt() - Returns the character at a specified index
console.log(sampleText.charAt(9)); // Output: "J" 

//indexOf() - Returns the index of the first occurrence of a specified value
console.log(sampleText.indexOf("JavaScript")); // Output: 7

//includes() - Checks if the string contains a specified value
console.log(sampleText.includes("JavaScript")); // Output: true

console.log(sampleText); // Original string remains unchanged due to immutability

//These methods help in performing various operations on strings in JavaScript.