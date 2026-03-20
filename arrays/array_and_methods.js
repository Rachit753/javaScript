//Arrays can store more than one value of different DT in one variable name,in a continous memory location.

//Declaration of array.
let arr = [2, 3];

//METHODS OF ARRAY (which change original array)

arr.push(4, 5);     //it will add the element at the last of array.
console.log("Array after push method: ",arr);

arr.pop();          // it will remove the element from the last.
console.log("Array aftre pop method: ",arr);

arr.unshift(0,1);   //it will add the element at the starting.
console.log("Array after unshift method: ",arr);

arr.shift()        // it will remove the element from the starting.
console.log("Array after shift method: ",arr);

arr.splice(0, 0, -1, 0)  //it will add the number (strt index,delete element,add element)
console.log("Array after splice method: ",arr);

arr.reverse()            // it will reverse the whole array.
console.log("Array after reverse method: ",arr);

let example = [9, 8, 3, 5, 1, 10];

example.sort(function (a, b) {  // it will sort the element , if we use without function then string sorting will be done.
    return a - b;     // ascending
})
console.log("Sorting after ascending order: ",example);

example.sort(function (a, b) {  // it will sort the element , if we use without function then string sorting will be done.
    return b - a;     // descending
})
console.log("Sorting after descending order: ",example);

// METHODS OF ARRAY(which make a new array, instead of changing original array)

let arr1 = [-1, 0, 1, 2, 3, 4, 5];

let arrslice = arr1.slice(0, 2);  // it will slice the array return newarray(starting index, ending index+1)
console.log("New array after slice method: ",arrslice);

//MAP :- it will make a new array of exact length of previous array and store value inside it acoording to the operation we are performing inside map function.
let arrmap = arr1.map(function (val) {
    return 1;
});
console.log("New array after map method: ", arrmap);

//FILTER :-  when we want those element from the previous array which satisfy our condition we use filter.
let arrfilter = arr1.filter(function (val) {
    if (val >= 0) return true;
});
console.log("New array after filter method: ", arrfilter);

//REDUCE:- when we want only single value after performing operation on an array.
let sum = arr1.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);
console.log("Value after reduce method: ", sum);

//FIND:- when we have to find a first occurence of any element in an array.
let hue = arr1.find(function (val) {
    return val === 3;
})
console.log("Value after find method: ", hue);

//SOME:- when we have to find some element fromt the whole array, if present true otherwise false.
let hue1 = arr1.some(function (val) {
    return val > 100;
})
console.log("Value after some method: ", hue1);

//EVERY:- when we have to check every element of the array is fulfilling our condition.

let hue2 = arr1.every(function (val) {
    return val > -2;
})
console.log("Value after every method: ",hue2);
