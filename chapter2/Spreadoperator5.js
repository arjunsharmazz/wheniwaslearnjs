// 🔹 क्या है Spread Operator (...) ?
// Spread operator (...) तीन dots होते हैं जो किसी array, object या iterable को उसके individual elements में "फैला" देते हैं।

// इसे हिंदी में कहें तो — "array या object को खोलना / फैलाना"

// ✅ 1. Arrays में प्रयोग
// 🔸 a) एक array को दूसरे में जोड़ना:

let a = [1, 2, 3];
let b = [4, 5];
let combined = [...a, ...b];
console.log(combined);  // [1, 2, 3, 4, 5]
// 🔸 b) Array की कॉपी बनाना:

let original = [10, 20, 30];
let copy = [...original];
console.log(copy);  // [10, 20, 30]
// 🔁 ये shallow copy बनाता है।

// ✅ 2. Objects में प्रयोग

let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3};
console.log(obj2);  // {a: 1, b: 2, c: 3}
// ✅ 3. Function में arguments पास करना

function sum(x, y, z) {
  return x + y + z;
}

let nums = [1, 2, 3];
console.log(sum(...nums));  // 6
// ✅ 4. Strings को फैलाना

let name = "Ravi";
let letters = [...name];
console.log(letters);  // ["R", "a", "v", "i"]
// 🧠 ध्यान रखने योग्य बातें
// Spread operator सिर्फ iterable चीज़ों पर ही काम करता है (arrays, strings, sets आदि)।

// Object में इसे shallow copy या properties मर्ज करने के लिए इस्तेमाल किया जाता है।

// इसे अक्सर React और functional programming में बहुत इस्तेमाल किया जाता है।