//DataTypes :- It is a way of assigning different types of data to variables in programming languages.
//In JavaScript, we have 7 primitive data types and 1 non-primitive data type.

//1. String :- It is used to represent text data. It is a sequence of characters enclosed in single or double quotes.
let name = "Rachit Chauhan";
console.log(typeof name); //Output: string

//2. Number :- It is used to represent both integer and floating-point numbers.
let age = 21;
console.log(typeof age); //Output: number

//3. Boolean :- It represents a logical entity and can have two values: true or false.
let isStudent = true;
console.log(typeof isStudent); //Output: boolean 

//4. Null :- It represents the intentional absence of any object value. It is a primitive value that indicates "no value".
let children = null;
console.log(typeof children); //Output: object (this is a known quirk in JavaScript)

//5. Undefined :- It indicates that a variable has been declared but has not yet been assigned a value.
let job;
console.log(typeof job); //Output: undefined

//6. Symbol :- It is a unique and immutable primitive value that can be used as the key of an object property.
let sym = Symbol("uniqueIdentifier");
console.log(typeof sym); //Output: symbol

//7. BigInt :- It is used to represent integers with arbitrary precision, allowing for the representation of very large numbers.
let bigIntNum = BigInt(9007199254740991);
console.log(typeof bigIntNum); //Output: bigint

//Non-Primitive Data Type

//8. Object :- It is a collection of properties, where each property is defined as a key-value pair. Objects can store multiple values and complex data structures.
let person = {
    name: "Rachit Chauhan",
    age: 21,
    isStudent: true
};
console.log(typeof person); //Output: object
console.log(person.name); //Accessing object property

//JavaScript is a dynamically typed language, which means that variables can hold values of any data type and the type can change at runtime.
let variable = "Hello";
console.log(typeof variable); //Output: string
variable = 42;
console.log(typeof variable); //Output: number
variable = true;
console.log(typeof variable); //Output: boolean

//Type Conversion :- It is the process of converting a value from one data type to another.
let num = "100";
let convertedNum = Number(num); //Converting string to number
console.log(typeof convertedNum); //Output: number

let str = 50;
let convertedStr = String(str); //Converting number to string
console.log(typeof convertedStr); //Output: string

let bool = 1;
let convertedBool = Boolean(bool);  //Converting number to boolean
console.log(typeof convertedBool); //Output: boolean

//Type Coercion :- It is the automatic or implicit conversion of values from one data type to another during operations.
let result1 = "5" + 10; //String concatenation
console.log(result1); //Output: "510"
console.log(typeof result1); //Output: string

let result2 = "10" - 5; //Subtraction
console.log(result2); //Output: 5
console.log(typeof result2); //Output: number

let result3 = "10" * "2"; //Multiplication
console.log(result3); //Output: 20
console.log(typeof result3); //Output: number   

let result4 = "10" / "2"; //Division
console.log(result4);   //Output: 5
console.log(typeof result4); //Output: number

//Understanding data types is crucial for effective programming in JavaScript, as it helps in managing variables, performing operations, and debugging code efficiently.    
