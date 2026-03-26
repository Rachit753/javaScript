//Variables which accept the values inside the fucntions these are called parameter.

let add = (v1, v2) => {
    console.log(v1, v2);
}
//Arguments are values which we send to the function when we are calling a function.
add(1, 2) //Arguments


//*************** There are  the types of parameter. ************

//default para if no value then default value will be used.
let multiply = (v1, v2=2) => { 
    console.log(v1, v2);
}
multiply(1);

//Rest parameter are used when we are sending so many argument to the function,then with the help of (rest perator ...) function will create parameter automatically in the form of array.
let print = (a, b, c, ...val) => {
    console.log(a, b, c, val);
}
print(1, 2, 3, 4, 5, 6, 7);