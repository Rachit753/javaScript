// Scope (global, block, functional)

var a = 20; // global we can access it in any anywhere.

{
    var a = 30; //again we access it anywhere,bcz var is func scope.
}

{
    var x = 1;
    let y = 2;
    const z = 3;
}
console.log(x)
console.log(y) //error bcz let and const are block scoped.
console.log(z)
