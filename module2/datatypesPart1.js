// test 1
let a1 = true;
let a2 = Boolean(true);

let b1 = "nirosh";
let b2 = String('nirosh');

let c1 = 10;
let c2 = Number(10);

console.log(typeof a1);
console.log(typeof a2);
console.log(typeof b1);
console.log(typeof b2);
console.log(typeof c1);
console.log(typeof c2);


// test 2
console.log(`${a1} [${typeof a2}]`);
console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${c1} [${typeof c1}]`);
console.log(`${c2} [${typeof c2}]`);


// test 3
let str = '12345'
let num = Number(str);
let big = BigInt(num);
let bool = Boolean(big);
console.log(`${bool} ${typeof bool}`);

console.log(Boolean(BigInt(Number('12345'))));
console.log(typeof Boolean(BigInt(Number('12345'))) );

// test 5
let StringSum = "hello" + "world";
console.log(typeof StringSum);

let numSum = 10 + 20;
console.log(typeof numSum);

let BooleanSum = true + false;
console.log(typeof BooleanSum);

let undefine = undefined + undefined;
console.log(typeof undefine);

let nullSum = null + null;
console.log(typeof nullSum);


let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); 

// test 7
let x = 42;
let y = Number('1');
let str1 = x+y;
console.log(`${str1} ${typeof str1}`);
