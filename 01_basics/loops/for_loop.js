// when we have that what work we have to do, till where i have to go.
//start,end,how to reach.


//print 1-10
for (let i = 1; i <= 10; i++){
    console.log("The value of i is: ", i);
}

//Print even from 1- 20
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

//print table of 5
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// print sum of 1-100
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum +=i
}
console.log("the sum of 1-100 is: ", sum);