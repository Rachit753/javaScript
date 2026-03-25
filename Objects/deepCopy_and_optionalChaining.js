//COMPUTED PROPERTIES:-It is a concept of js by which we can value of variable as a key.
let role = "admin";
let obj = {
    name: "Rachit",
    age: 22,
    [role]:"Rachit",
    address: {
        city: "Jalandhar",
        pincode: 144401,
        coordinates: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};

//Copy with spread operator with SPREAD OPERATOR copy of object is created but not for nesting object,
// it means if i change the nested property of copied object it will affect original object also.

let newObj = { ...obj };
console.log("Copy of object using SPREAD OPERATOR: ", newObj);

//DEEP COPY:- If i change property of copied object it will not affect original object property.
let newobj = JSON.parse(JSON.stringify(obj));
console.log("Copy of object using JSON.parse and stringify: ", newobj);

//OPTIONAL CHAINING:- It means if property is not present in object which we are trying to access ,it will not give error it says undefined.
console.log("Before optional chaining", obj.address.coordinate.lang);     //coordinates not coordinate so error
console.log("After optional chaining", obj?.address?.coordinate?.lang);  // undefined


