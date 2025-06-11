// 🔹 1. Primitive Data Types (मूल डेटा प्रकार)
// ये immutable (अपरिवर्तनीय) होते हैं और एक ही वैल्यू को स्टोर करते हैं।

// Data Type	Description (विवरण)	Example
// String	टेक्स्ट डेटा	"Hello"
// Number	संख्याएँ (integer, float दोनों)	42, 3.14
// BigInt	बहुत बड़ी संख्याएँ (ES2020 में आया)	123456789012345678901234567890n
// Boolean	लॉजिकल वैल्यू (true या false)	true, false
// undefined	जब वैरिएबल को वैल्यू नहीं मिली हो	let a;
// null	जानबूझकर "खाली" वैल्यू दी गई हो	let a = null;
// Symbol	यूनिक वैल्यूज़ के लिए (ES6 में आया)	Symbol('id')

// 🔸 2. Non-Primitive / Reference Data Types
// ये objects होते हैं और इनका डेटा memory में reference के रूप में स्टोर होता है।

// Data Type	Description (विवरण)	Example
// Object	key-value pair के रूप में डेटा	{ name: "Ram", age: 25 }
// Array	Ordered list of values (object की special type)	[1, 2, 3]
// Function	Executable code block (object का sub-type)	function() {}
// Date	तारीख़ और समय के लिए built-in object	new Date()
// RegExp	Regular expressions के लिए	/abc/


typeof "hello";     // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object"   ❗ (JavaScript की एक पुरानी गलती)
typeof Symbol();    // "symbol"
typeof [];          // "object"
typeof {};          // "object"
typeof function () { } // "function"






// example of all datatypes








// 🔹 1. Primitive Data Types
// ✅ String

let name = "Aman";
console.log(typeof name);  // "string"
// ✅ Number

let age = 25;
let price = 99.99;
console.log(typeof age);   // "number"
// ✅ BigInt(बड़ी संख्या)

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);  // "bigint"
// ✅ Boolean

let isLoggedIn = true;
console.log(typeof isLoggedIn);  // "boolean"
// ✅ undefined

let score;
console.log(typeof score);  // "undefined"
// ✅ null

let emptyValue = null;
console.log(typeof emptyValue);  // "object" ❗ (JavaScript bug)
// ✅ Symbol

let id = Symbol("userID");
console.log(typeof id);  // "symbol"
// 🔸 2. Non - Primitive(Reference) Data Types
// ✅ Object

let person = {
    name: "Ravi",
    age: 30
};
console.log(typeof person);  // "object"
// ✅ Array

let colors = ["red", "green", "blue"];
console.log(typeof colors);   // "object"
// ✅ Function

function greet() {
    console.log("Hello!");
}
console.log(typeof greet);  // "function"
// ✅ Date

let today = new Date();
console.log(typeof today);  // "object"
// ✅ RegExp(Regular Expression)

let pattern = /[a-z]+/;
console.log(typeof pattern);  // "object"
// 🎯 Summary Table
// Data Type	Example	typeof Output
// String	"hello"	"string"
// Number	42	"number"
// BigInt	123456789n	"bigint"
// Boolean	true	"boolean"
// undefined	let x;	"undefined"
// null	let y = null	"object" ❗
// Symbol	Symbol("id")	"symbol"
// Object	{name: "Ali"}	"object"
// Array	[1, 2, 3]	"object"
// Function	function() {}	"function"
// Date	new Date()	"object"
// RegExp	/abc/	"object"