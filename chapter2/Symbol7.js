// 📘 JavaScript Symbol - Theory and Examples

/*
👨‍🏫 Symbol क्या है?
Symbol JavaScript का एक नया primitive data type है (introduced in ES6) जिसका उपयोग unique identifiers बनाने के लिए किया जाता है।

👉 Syntax:
let sym = Symbol("description");

🧠 खास बात:
हर Symbol यूनिक होता है, चाहे उसका description एक जैसा हो।
*/

// ✅ Example 1: Basic Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("1. Are sym1 and sym2 equal?", sym1 === sym2);  // false

// ✅ Example 2: Symbol in object
let user = {
  name: "Ravi",
  [sym1]: 101
};

console.log("\n2. Object with symbol as key:");
console.log(user);
console.log("Accessing symbol key value:", user[sym1]);

// ✅ Example 3: Symbol is not enumerable
console.log("\n3. Symbol not shown in for...in:");
for (let key in user) {
  console.log("Key:", key);  // 'name' only, not symbol
}

// ✅ Example 4: Use Symbol.for (global symbol registry)
let globalSym1 = Symbol.for("globalId");
let globalSym2 = Symbol.for("globalId");

console.log("\n4. Symbol.for creates shared symbols:");
console.log(globalSym1 === globalSym2);  // true

// ✅ Example 5: Symbol.keyFor
console.log("Symbol.keyFor(globalSym1):", Symbol.keyFor(globalSym1)); // globalId

/*
🎯 Symbol का उपयोग:
- Object keys को hidden/private बनाने के लिए
- Libraries में collision से बचने के लिए
- Advanced programming (e.g. custom iterators, meta programming)

🛡️ Symbols are not accessible by regular loops like for...in or Object.keys().
*/

// ----------------------------------------------------
// 🧠 PRACTICE QUESTIONS
// ----------------------------------------------------

/*
✅ Q1: एक Symbol बनाइए जिसका description हो "token"
let token = Symbol("token");

✅ Q2: एक object में Symbol को key की तरह use कीजिए और उसमें value assign करें

✅ Q3: Check करें कि दो symbols (same description) एक जैसे हैं या नहीं

✅ Q4: एक object बनाइए जिसमें एक string key और एक symbol key दोनों हों — फिर for...in से loop करें और बताएं क्या दिखता है?

✅ Q5: Symbol.for और Symbol.keyFor का उपयोग करके एक shared symbol बनाएँ और उसे console में दिखाएँ।
*/

/*
🎓 Summary:

- Symbol() → unique value हर बार
- Symbol.for() → global registry से shared symbol
- symbol as object key → not enumerable
- Symbol.keyFor(sym) → shared symbol की key पता करें
*/

