//Loops in JavaScript
//Loops are used to execute a block of code repeatedly until a specified condition is met.

//1. For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: ", i);
}

//2. While Loop
let j = 0;
while(j<=5) {
    console.log("While Loop iteration: ", j);
    j++;
}

//3. Do-While Loop
let k = 0;
do {
    console.log("Do-While Loop iteration: ", k);
    k++;
} while(k<5);

//4. For...of Loop
const array = ['a', 'b', 'c', 'd'];
for (const element of array) {
    console.log("For...of Loop element: ", element);
}

//5. For...in Loop
const object = {
    name: 'John', 
    age: 30, 
    city: 'New York'
};

for(const key in object){
    console.log("For...in Loop key:",key,", value:",object[key]);
}