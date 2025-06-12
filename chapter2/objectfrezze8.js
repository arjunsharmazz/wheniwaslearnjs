// 📘 Object.freeze() - Theory and Examples

/*
👨‍🏫 Object.freeze() क्या करता है?
यह एक built-in JavaScript method है जो किसी object को immutable बना देता है।
यानि:
  - आप उसमें नई properties नहीं जोड़ सकते
  - आप existing properties की values को बदल नहीं सकते
  - आप properties को delete भी नहीं कर सकते

🔧 Syntax:
Object.freeze(obj);
*/

// ✅ Example 1: Freeze करना और value बदलने की कोशिश
const person = {
  name: "Anjali",
  age: 25
};

Object.freeze(person);

// Try modifying
person.age = 30;         // No effect
person.city = "Delhi";   // No effect
delete person.name;      // No effect

console.log("1. Frozen object:");
console.log(person);     // { name: "Anjali", age: 25 }

// ✅ Example 2: Check if object is frozen
console.log("\n2. Is person frozen?", Object.isFrozen(person)); // true

// ✅ Example 3: Freeze shallow है (nested object change हो सकता है)
const user = {
  name: "Ravi",
  address: {
    city: "Mumbai"
  }
};

Object.freeze(user);

// This is allowed! (nested object is not frozen)
user.address.city = "Pune";
console.log("\n3. Freeze is shallow:");
console.log(user); // address.city changed

// ----------------------------------------------------
// 🧠 PRACTICE QUESTIONS
// ----------------------------------------------------

/*
✅ Q1: एक object `settings` बनाइए जिसमें theme: "dark", fontSize: 14 हो
✅ Q2: `Object.freeze(settings)` का उपयोग कीजिए
✅ Q3: fontSize को 16 में बदलने की कोशिश करें और console.log(settings) देखें
✅ Q4: एक nested object freeze करें और चेक करें कि nested property बदल सकती है या नहीं
✅ Q5: Object.isFrozen() का उपयोग कर के frozen status चेक करें
*/

/*
🎓 SUMMARY:

- Object.freeze(obj): object को immutable बना देता है
- Shallow freeze होता है — nested object को manually freeze करना पड़ता है
- Object.isFrozen(obj): checks if object is frozen
*/

