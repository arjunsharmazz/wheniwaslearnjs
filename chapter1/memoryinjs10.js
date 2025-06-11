// 🧠 1. Stack Memory (स्टैक मेमोरी)
// 🔷 विशेषताएँ:
// Fast (तेज़)

// Fixed-size memory allocation

// Automatically managed (LIFO - Last In First Out)

// Primitive data types को स्टोर करता है:
// 👉 string, number, boolean, null, undefined, symbol, bigint

// 🔹 उदाहरण:
js
Copy
Edit
let name = "Aman";   // stored in stack
let age = 25;        // stored in stack
// यहाँ name और age जैसे primitive values सीधे stack में स्टोर होते हैं।

// 🧩 2. Heap Memory (हीप मेमोरी)
// 🔷 विशेषताएँ:
// Slower (धीमी)

// Dynamically allocated memory

// Complex (reference) data types को स्टोर करता है:
// 👉 Object, Array, Function, etc.

// Garbage Collector द्वारा manage होती है

// 🔹 उदाहरण:

let person = {
  name: "Aman",
  age: 25
};
// यहाँ:

// person नाम का variable stack में है

// लेकिन उसका actual object heap memory में है

// stack में सिर्फ उसका reference (address) होता है

// ⚠️ Primitive vs Reference Example:

let x = 10;
let y = x;
y = 20;

console.log(x); // 10 (Primitive → copy हुआ)

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;

console.log(obj1.value); // 20 (Reference → same object)
// 🧾 Summary Table:
// Feature	Stack	Heap
// Speed	Fast	Slower
// Memory Allocation	Static	Dynamic
// Stores	Primitive values	Reference types (objects, arrays)
// Access method	LIFO	Direct access via reference
// Managed by	JavaScript engine automatically	Garbage Collector