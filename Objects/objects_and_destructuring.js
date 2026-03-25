//Object is used for storing so many details related to one member.

//Object Declaration
let obj = {
    name: "Rachit",
    age: 22,
    email: "test@test.com",
};

console.log(obj.age);   
console.log(obj["age"]);

console.log(obj["huehue"]);   //with this method we will not get error if object key is not present.


//Destructuring:- It means storing properties of an object into an variable.

let { name, age } = obj;
console.log(name); //Rachit
console.log(age);  //22

//OR

let { "name": naam, "age": umar } = obj;
console.log(naam);
console.log(umar);