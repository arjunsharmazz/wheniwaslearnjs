
// 📘 सिद्धांत (Theory): JavaScript में Date और Time
// JavaScript में Date और Time को मैनेज करने के लिए Date object का उपयोग किया जाता है। इसकी मदद से आप:

// वर्तमान दिनांक और समय पा सकते हैं

// कोई विशेष तारीख बना सकते हैं

// वर्ष, महीना, दिन आदि निकाल सकते हैं

// तारीखों को बदल सकते हैं

// तारीखों में गणना (जैसे दो तारीखों के बीच दिन) कर सकते हैं

// 🛠️ Date Object बनाना (Creating Dates)

let now = new Date();               // अभी की तारीख और समय
let d1 = new Date("2025-06-12");    // स्ट्रिंग से तारीख
let d2 = new Date(2025, 5, 12);     // वर्ष, महीना (0 से शुरू), दिन
// 🔸 ध्यान दें: JavaScript में महीनों की गिनती 0 से होती है (0 = जनवरी, 11 = दिसंबर)

// 📥 Date से जानकारी निकालना (Getting Parts)

let date = new Date();

date.getFullYear();   // 2025 → वर्ष
date.getMonth();      // 5 → जून
date.getDate();       // 12 → महीने का दिन
date.getDay();        // 4 → सप्ताह का दिन (0 = रविवार)
date.getHours();      // घंटे (0–23)
date.getMinutes();    // मिनट (0–59)
date.getSeconds();    // सेकंड (0–59)
// 📤 Date सेट करना (Setting Date/Time)

let dte = new Date();

dte.setFullYear(2030);  // वर्ष बदलें
dte.setMonth(11);       // महीना (दिसंबर)
dte.setDate(25);        // दिन (25वां)
// ⏱️ तारीखों की गणना (Date Calculations)

let start = new Date("2025-01-01");
let end = new Date("2025-06-01");

let diff = end - start;  // मिलिसेकंड में अंतर
let days = diff / (1000 * 60 * 60 * 24);  // दिनों में बदलें
console.log(days);       // कुल दिन
// 📆 Date को फॉर्मेट करना (Formatting Date)

let d = new Date();
let formatted = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
console.log(formatted);  // उदाहरण: "12-6-2025"




// ✅ ध्यान दें: अधिक अच्छे फॉर्मेटिंग के लिए आप Intl.DateTimeFormat या Moment.js जैसे लाइब्रेरी का भी उपयोग कर सकते हैं।

