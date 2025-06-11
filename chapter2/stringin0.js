// 🔤 String in JavaScript
// 📌 String क्या है?
// String एक टेक्स्ट वैल्यू होती है — अक्षरों, शब्दों या किसी भी कैरेक्टर का क्रम (sequence of characters)।
// JavaScript में string एक primitive data type है।

// ✅ String बनाना:

let str1 = "Hello World";    // Double quotes
let str2 = 'Hello Again';    // Single quotes
let str3 = `Hello JS`;       // Backticks (Template literals)
// 🧰 Common String Methods (Functions)
// Method	Description	Example
// length	स्ट्रिंग की लंबाई	"hello".length → 5
// toUpperCase()	uppercase में बदलना	"hi".toUpperCase() → "HI"
// toLowerCase()	lowercase में बदलना	"HI".toLowerCase() → "hi"
// includes(sub)	substring मौजूद है या नहीं	"hello".includes("he") → true
// indexOf(sub)	substring की पहली पोज़िशन	"hello".indexOf("l") → 2
// slice(start, end)	substring काटना	"hello".slice(1, 4) → "ell"
// replace(old, new)	text बदलना	"hello".replace("h", "y") → "yello"
// trim()	whitespace हटाना	" hi ".trim() → "hi"
// split()	string को array में बदलना	"a,b,c".split(",") → ["a","b","c"]
// charAt(index)	index पर character	"hello".charAt(1) → "e"

// 🔁 String Concatenation (जोड़ना)
// ✅ Traditional way:

let name = "Aman";
let greet = "Hello " + name;
// ✅ Template Literal (Backticks से):

let greet2= `Hello ${name}`;
// 🎯 Strings are Immutable

let str = "hello";
str[0] = "H";
console.log(str); // "hello" (नहीं बदला)
// 🧪 Examples

let message = "JavaScript is Fun!";
console.log(message.length);          // 18
console.log(message.toUpperCase());   // JAVASCRIPT IS FUN!
console.log(message.includes("Fun")); // true