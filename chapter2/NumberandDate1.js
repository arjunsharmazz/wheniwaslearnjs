// 🔢 Numbers in JavaScript
// All numbers in JavaScript are of type number (no separate types for integers/floats).

// Examples:

let a = 42;         // integer
let b = 3.14;       // float
let c = 2e5;        // exponential (200000)
let d = Infinity;   // special numeric value
let e = NaN;        // "Not-a-Number"
// ➗ Common Number Methods

let num = 123.456;

// num.toFixed(2);       // "123.46" (string, rounded to 2 decimals)
// num.toString();       // "123.456"
// Number("123");        // 123
// parseInt("10.5");     // 10
// parseFloat("10.5");   // 10.5
// isNaN("abc");         // true
// 🧮 Math Object in JavaScript
// JavaScript provides the Math object for advanced math functions.


Math.PI             // 3.14159...
Math.round(4.7);    // 5
Math.floor(4.7);    // 4
Math.ceil(4.2);     // 5
Math.abs(-7);       // 7
Math.pow(2, 3);     // 8
Math.sqrt(16);      // 4
Math.random();      // Random number between 0 and 1
Math.max(1, 5, 9);  // 9
Math.min(1, 5, 9);  // 1


const othern = 123.5666
console.log(othern.toPrecision(4));

const hunderds = 1000000
console.log(hunderds.toLocaleString());
console.log(hunderds.toLocaleString('en-IN'));//to indian standard



