//Conditional Statements in JavaScript
//Conditional statements are used to perform different actions based on different conditions.
// Examples of various conditional statements

//If Statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

//If-Else Statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

//If-Else If-Else Statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}

//Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

//Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount: " + (discount * 100) + "%");

//Nested If Statement
let num = 15;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else {
    console.log("The number is not positive.");
}


//Conditional (Ternary) Operator with Function
function checkEligibility(age) {
    return (age >= 18) ? "Eligible to vote." : "Not eligible to vote.";
}
console.log(checkEligibility(20));
console.log(checkEligibility(16));
