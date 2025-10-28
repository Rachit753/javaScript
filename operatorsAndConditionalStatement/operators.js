//Operators in JavaScript

//Arithmetic Operators
let a = 10;
let b = 5;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

//Comparison Operators
console.log("a > b =", a > b); // Greater than
console.log("a < b =", a < b); // Less than
console.log("a >= b =", a >= b); // Greater than or equal to
console.log("a <= b =", a <= b); // Less than or equal to
console.log("a == b =", a == b); // Equal to
console.log("a != b =", a != b); // Not equal to
console.log("a === b =", a === b); // Strict equal to (checking datatype also)
console.log("a !== b =", a !== b); // Strict not equal to(checking datatype also)

//Logical Operators
let x = true;
let y = false;

console.log("x && y =", x && y); // Logical AND
console.log("x || y =", x || y); // Logical OR
console.log("!x =", !x); // Logical NOT

//Unary Operators
let c = 10;
console.log("++c =", ++c);
console.log("c++ =", c++);
console.log("--c =", --c);
console.log("c-- =", c--);
console.log("typeof c =", typeof c);

//Assignment Operators
let d = 20;

d += 5; // d = d + 5
console.log("d after += 5:", d);

d -= 3; // d = d - 3
console.log("d after -= 3:", d);

d *= 2; // d = d * 2
console.log("d after *= 2:", d);

d /= 4; // d = d / 4
console.log("d after /= 4:", d);

d %= 3; // d = d % 3
console.log("d after %= 3:", d);

d **= 2; // d = d ** 2
console.log("d after **= 2:", d);
