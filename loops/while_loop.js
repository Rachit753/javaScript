//when we dont have clearity that at what time we have to stop.

//print 10-1
//let i = 10;
while (i > 0) {
    console.log("The value of i is: ", i);
    i--;
}

//Print odd 1-15
// let i = 1;
while (i <= 15) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

//take a num from user chek even or odd

// let num = 30;
// let i = 1;
while (i <= num) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
    i++;
}

//count how many number b/w 1-100 are divisible by both 3 and 5

let i = 1;
let stop = prompt("Enter a number till where you want to check:");
let count = 0;
while (i <= stop) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} is divisible by both 3 and 5.`)
        count += 1;
    }
    i++;
}
console.log(`total number divisible by 3 and 5 are ${count}`);