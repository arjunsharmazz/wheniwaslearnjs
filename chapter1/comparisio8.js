// 🔍 Comparison Operators (तुलना ऑपरेटर)
// ऑपरेटर	नाम (हिंदी में)	उपयोग का उदाहरण	रिज़ल्ट
// ==	बराबर (Loose Equality)	5 == '5'	true
// ===	सख्त बराबर (Strict Equality)	5 === '5'	false
// !=	बराबर नहीं (Loose Inequality)	5 != '5'	false
// !==	सख्त बराबर नहीं (Strict Inequality)	5 !== '5'	true
// >	बड़ा (Greater than)	5 > 3	true
// <	छोटा (Less than)	5 < 3	false
// >=	बड़ा या बराबर	5 >= 5	true
// <=	छोटा या बराबर	3 <= 5	true

// 🔑 Loose vs Strict Comparison:
// == और != type coercion करते हैं (मतलब अगर ज़रूरत हो तो type बदल कर तुलना करते हैं)।

// === और !== type और value दोनों चेक करते हैं।


5 == '5'     // true (type बदल दिया)
5 === '5'    // false (type अलग हैं)

0 == false   // true
0 === false  // false



// other example
let x = 10;
let y = '10';

console.log(x == y);   // true
console.log(x === y);  // false
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 5);    // true
console.log(x < 5);    // false
