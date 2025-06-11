// 🧮 JavaScript में Arithmetic Operators
// ऑपरेटर	नाम	उदाहरण	रिज़ल्ट
// +	जोड़ (Addition)	5 + 3	8
// -	घटाव (Subtraction)	5 - 3	2
// *	गुणा (Multiplication)	5 * 3	15
// /	भाग (Division)	6 / 2	3
// %	माड्यूलस (Remainder)	5 % 2	1
// **	पावर (Exponentiation)	2 ** 3	8
// ++	इन्क्रीमेंट (Increment)	a++	पहले a, फिर a+1
// --	डिक्रीमेंट (Decrement)	a--	पहले a, फिर a-1

// 🔢 उदाहरण (Examples):

let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

a++;
console.log(a);      // 11

b--;
console.log(b);      // 2




//  कुछ बातें ध्यान रखने लायक:
// अगर आप string और number को + से जोड़ते हैं, तो JavaScript string में बदल देती है:


"5" + 3 // "53"
// बाक़ी सभी ऑपरेशनों में JavaScript string को number में बदल देती है:
"5" - 3 // 2
