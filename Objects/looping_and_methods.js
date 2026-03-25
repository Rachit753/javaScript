//Nested Object

let obj = {
    name: "Rachit",
    age: 22,
    address: {
        city: "Jalandhar",
        pincode: 144401,
        coordinates: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};


//For in Loop
for (let key in obj) {
    console.log(`${key} = ${obj[key]}`);
}

//Methods for obejcts
//It will convert all the key of an object into an element of an array.
console.log("Values after using Object.keys = ",Object.keys(obj));

//It will convert all the properties of an object in to array.
console.log("Values after using Object.entries = ", Object.entries(obj));

//It will copy all the properties of an object into an another obejct.
let newObj = Object.assign({}, obj);
console.log("newObj after using Object.assign = ", newObj);

//Looping over Object.entries
Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object") {
        console.log(`${key} is`, value);
    } else {
        console.log(`${key} is ${value}`);
    }
});