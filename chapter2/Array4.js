// ✅ JavaScript Array के 15 उपयोगी Methods (उदाहरण सहित)
// 1. push()
// ➡️ Array के अंत में वैल्यू जोड़ता है।


let fruits = ["सेब", "केला"];
fruits.push("आम");  // ["सेब", "केला", "आम"]
// 2. pop()
// ➡️ Array के अंत की वैल्यू हटाता है।

fruits.pop();  // ["सेब", "केला"]
// 3. unshift()
// ➡️ Array के शुरुआत में वैल्यू जोड़ता है।


fruits.unshift("अंगूर");  // ["अंगूर", "सेब", "केला"]
// 4. shift()
// ➡️ Array के शुरुआत की वैल्यू हटाता है।

fruits.shift();  // ["सेब", "केला"]
// 5. length
// ➡️ Array में कितने आइटम हैं ये बताता है।


console.log(fruits.length);  // 2
// 6. includes()
// ➡️ चेक करता है कि कोई वैल्यू Array में है या नहीं।


fruits.includes("सेब");  // true
// 7. indexOf()
// ➡️ वैल्यू का पहला index देता है।

js
Copy
Edit
fruits.indexOf("केला");  // 1
// 8. join()
// ➡️ Array को string में बदलता है (कस्टम सेपरेटर के साथ)।

fruits.join(", ");  // "सेब, केला"
// 9. reverse()
// ➡️ Array को उल्टा कर देता है।

fruits.reverse();  // ["केला", "सेब"]
// 10. sort()
// ➡️ Array को alphabetical या numerical order में sort करता है।


let nums = [10, 2, 30];
nums.sort();  // [10, 2, 30] ❌ (string के हिसाब से)
nums.sort((a, b) => a - b);  // [2, 10, 30] ✅
// 11. concat()
// ➡️ दो या ज्यादा arrays को जोड़ता है।

let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);  // [1, 2, 3, 4]
// 12. slice(start, end)
// ➡️ Array का टुकड़ा (copy) बनाता है।


let nums1 = [10, 20, 30, 40];
let part = nums1.slice(1, 3);  // [20, 30]
// 13. splice(start, deleteCount, ...items)
// ➡️ Array में से डिलीट या एडिट करता है।

let nums2 = [1, 2, 3];
nums2.splice(1, 1, 5);  // [1, 5, 3]
// 14. map()
// ➡️ हर आइटम पर function लागू करके नया array बनाता है।


let numbers = [1, 2, 3];
let doubled = numbers.map(x => x * 2);  // [2, 4, 6]
// 15. filter()
// ➡️ केवल वो आइटम रखता है जो condition को pass करें।


let numbers1 = [1, 2, 3, 4];
let even = numbers1.filter(x => x % 2 === 0);  // [2, 4]
// बोनस: 🎁
// forEach() — हर आइटम पर loop लगाता है।

// find() — पहली वैल्यू जो condition को match करे।

// reduce() — सभी वैल्यू को जोड़कर एक वैल्यू बनाता है।

// 🔚 निष्कर्ष (Summary)
// Method	काम (काम करता है)
// push/pop	अंत में जोड़ना / हटाना
// shift/unshift	शुरुआत में जोड़ना / हटाना
// indexOf/includes	वैल्यू ढूँढना
// slice/splice	भाग निकालना / बदलना
// map/filter	नया array बनाना
// sort/reverse	क्रम बदलना
// join/concat	जोड़ना या string बनाना







//agar array k andar or andar array ho to kese use kare
const arrayyy =[1,2,3,[2,4,5],[12,324,[12,425,345,[234,345,435]]]]
console.log(arrayyy)
const anotherarrayyy =arrayyy.flat(Infinity)
console.log(anotherarrayyy)


//agar kisi value ko array bananna ho
console.log(Array.isArray("arjun"))
console.log(Array.from("arjun"))

//agar bhut sare variables ko array banna ho to
let a=90
let b=90
let c=90
console.log(Array.of(a,b,c));
