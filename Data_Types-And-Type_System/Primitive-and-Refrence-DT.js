//Data Types are of Two types *Primitive and Refrence DT(non-Primitve)

//Primitive DT when we copy these DT we will get exact copy of these.

let a = 10;
let b = a;
b += 3;
console.log("value of a is ",a)
console.log("value of b is ", b)
//here both values are different means if i change b then it will not effect a,bcz b got exact copy of a.

//BUT WITH REFRENCE DT if i change one value it will affect another.

let c = [1, 2, 3];
let d = c;
d.pop() // i have chnge d but c is also effected.
console.log("value of c is ", c);
console.log("value of d is ", d); 

//PRIMITIVE DT

let age = 23;            //number any
let name = "Rachit";    //string
let isMale = true;     //boolean
let married = null;   //in future we will give value.
let behaviour;       // value is not there,bydefault get the value.
let breathCount = 9007199254740991n;  //bigint large number value.

// REFRENCE DT

let skills = ["python", "js", "node.js", "dsa"]; //ARRAY

let socialAccount = {
    gmail: "chauhanrachit02@gmail.com",
    linkdin: "www.linkedin.com/in/rachit-chauhan/"
};   //OBJECT




