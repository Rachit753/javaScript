//Destructuring :- It means storing a copy of element of an array in the variable.

let arr = [1, 2, 3, 4, 5];
let [a, b, , d] = arr;
console.log("Elements of an array: ", arr);
console.log(`Value of a is ${a}\nValue of b is ${b}\nValue of d is${d}`);

//Spread Operator :- It helps us to make a exact copy of an array, so if we do some changes in our copied it will not affect original array.
let newarr = [...arr];
console.log("Elements of an copiedarray: ", newarr);