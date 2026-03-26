//First Class Function :- it means functions can be treated as values in js,it means we can declare function insider a variable and we can pass a function as a argument also.
function xyz(val) { // accepting s func as parameter,HOF function
    val();
}

xyz(function () {
    console.log("I am a function as an argument.")
})


//High Order Functions:- These are the functions in js which either can return a function or accept a function as an parameter.
function conv() {
    return function () {
        console.log("I am returing a function.");
    }
}
conv()(); // one bracket for main func,another for inside func.

//Two types of function pure and impure, pure which will not change the value of outside code,and impure viceversa.

//Closures:- A function which will return a function and returned funtion willused the variable of parent function.
function abcd() {
    let a = 12;
    return function () {
        console.log(a);
    }
}
abcd()();