// othere operators

// instanceof

let names = ["nirosh", "edirisinghe"]

let name = names[0];

console.log(names instanceof Array);
console.log(name instanceof Array);


// ternary operator
let True = true;
let Flase = false;

console.log(True ? "nirosh" : "Edirisinghe");
console.log(Flase ? "nirosh" : "Edirisinghe");


// precedence

let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false



let A, B;
B = (A = (20 + 20) * 2) > (3 ** 2);
console.log(A); // -> 60
console.log(B); // -> true
