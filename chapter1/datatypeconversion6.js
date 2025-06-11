// 🔁 1. Implicit Conversion (Type Coercion)
// ब्राउज़र या JavaScript इंजन अपने आप एक डेटा टाइप को दूसरे में बदल देता है।

// उदाहरण:
// js
// Copy
// Edit
let result = '5' + 3;    // "53" (number 3 को string में बदल दिया)
let result2 = '5' - 3;   // 2 (string '5' को number में बदल दिया)
let result3 = true + 1;  // 2 (true को 1 माना गया)
// 🔧 2. Explicit Conversion (Type Casting)
// जब आप ख़ुद किसी डेटा को एक टाइप से दूसरे में बदलते हैं।

// To String:
// js
// Copy
// Edit
String(123);       // "123"
(123).toString();  // "123"
// To Number:
// js
// Copy
// Edit
Number("123");     // 123
parseInt("123.45"); // 123
parseFloat("123.45"); // 123.45
// To Boolean:
// js
// Copy
// Edit
Boolean(0);        // false
Boolean(1);        // true
Boolean("");       // false
Boolean("Hello");  // true
// 📌 कुछ Special Notes:
// null को number में बदलो ⇒ 0

// undefined को number में बदलो ⇒ NaN

// खाली string ("") ⇒ false (Boolean में)

console.log("2"+2+2)
console.log(2+2+"2")

console.log(-true)
console.log(+true)
console.log(+false)
console.log(-false)
console.log(false)
console.log(true)
console.log(+"")
let a,b,c
a=b=c=2+2
console.log(a,b,c)

let x=0
x++
console.log(x)
++x
console.log(x)