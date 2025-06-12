// 📚 JavaScript में Array क्या है?
// Array एक ऐसा डेटा स्ट्रक्चर है जिसमें हम एक ही वेरिएबल में एक से अधिक वैल्यू स्टोर कर सकते हैं।

// जैसे एक बक्से में कई किताबें — वैसे ही एक Array में कई वैल्यूज होती हैं।

// ✅ Array कैसे बनाते हैं?

let fruits = ["सेब", "केला", "आम"];
let numbers = [10, 20, 30, 40];
let mixed = [1, "hello", true];
// 🔢 Array के अंदर एलिमेंट्स को कैसे एक्सेस करें?
// Array का हर आइटम index number से एक्सेस किया जाता है, जो 0 से शुरू होता है।



console.log(fruits[0]);  // "सेब"
console.log(fruits[1]);  // "केला"
// 🔧 कुछ काम के Array Methods (मिथड्स)
// Method	काम (कार्य)	उदाहरण
// push()	अंत में वैल्यू जोड़ना	fruits.push("अंगूर")
// pop()	आखिरी वैल्यू हटाना	fruits.pop()
// shift()	पहली वैल्यू हटाना	fruits.shift()
// unshift()	शुरुआत में वैल्यू जोड़ना	fruits.unshift("पपीता")
// length	कुल आइटम्स की संख्या	fruits.length
// indexOf()	वैल्यू का इंडेक्स पता करना	fruits.indexOf("आम")
// includes()	चेक करना कि वैल्यू मौजूद है या नहीं	fruits.includes("केला")
// join()	सभी आइटम को एक string में जोड़ना	fruits.join(", ")

// 🔁 Array में Loop कैसे लगाते हैं?



for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}



fruits.forEach(function(fruit) {
  console.log(fruit);
});


// 🧠 याद रखने लायक बातें:
// JavaScript में array dynamic होता है (आप बाद में भी वैल्यू जोड़/हटा सकते हैं)

// एक array में अलग-अलग types के डेटा भी रख सकते हैं

// index हमेशा 0 से शुरू होता है

// अगर आप चाहें तो मैं multidimensional array, array methods पर quiz या प्रैक्टिस questions भी दे सकता हूँ। बोलिए! 😊