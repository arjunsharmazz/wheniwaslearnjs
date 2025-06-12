// 📘 JavaScript Object - Theory and Examples

/* 
👨‍🏫 OBJECT क्या है?
JavaScript में object एक data structure है जो key-value pairs में data रखता है।
हर key को "property" कहते हैं और उसकी value कुछ भी हो सकती है (string, number, boolean, function आदि)।

🔧 Syntax:
let obj = {
  key1: value1,
  key2: value2
};
*/

// 👉 Example 1: Object बनाना
let student = {
  name: "Anjali",
  age: 20,
  isPassed: true
};

console.log("1. Student object:");
console.log(student);

// 👉 Example 2: Value को access करना
console.log("\n2. Accessing values:");
console.log("Name:", student.name);     // dot notation
console.log("Age:", student["age"]);    // bracket notation

// 👉 Example 3: नई property जोड़ना
student.city = "Mumbai";
console.log("\n3. After adding city:");
console.log(student);

// 👉 Example 4: Property को update करना
student.name = "Priya";
console.log("\n4. After updating name:");
console.log(student);

// 👉 Example 5: Property delete करना
delete student.isPassed;
console.log("\n5. After deleting isPassed:");
console.log(student);

// 👉 Example 6: Object के अंदर function (method)
let person = {
  name: "Raj",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log("\n6. Method call:");
person.greet();

// 👉 Example 7: Practice Question - Car object
let car = {
  brand: "Honda",
  start: function() {
    console.log("Car started");
  }
};

console.log("\n7. Car object:");
console.log(car);
car.start();

// 👉 Example 8: Object को loop से पढ़ना
console.log("\n8. Loop through student:");
for (let key in student) {
  console.log(key + ": " + student[key]);
}

/* 
🎓 Summary:

- Access: obj.key or obj["key"]
- Add: obj.newKey = value;
- Update: obj.key = newValue;
- Delete: delete obj.key;
- Method: obj.func = function() {}
- Loop: for (let key in obj) { ... }

👍 Object JS का सबसे important concept है — mastery से आगे बढ़ते हैं!
*/







//questions


// 📘 JavaScript Object - Theory and Examples

/* 
👨‍🏫 OBJECT क्या है?
JavaScript में object एक data structure है जो key-value pairs में data रखता है।
हर key को "property" कहते हैं और उसकी value कुछ भी हो सकती है (string, number, boolean, function आदि)।

🔧 Syntax:
let obj = {
  key1: value1,
  key2: value2
};
*/

// 👉 Example 1: Object बनाना
let student = {
  name: "Anjali",
  age: 20,
  isPassed: true
};

console.log("1. Student object:");
console.log(student);

// 👉 Example 2: Value को access करना
console.log("\n2. Accessing values:");
console.log("Name:", student.name);     // dot notation
console.log("Age:", student["age"]);    // bracket notation

// 👉 Example 3: नई property जोड़ना
student.city = "Mumbai";
console.log("\n3. After adding city:");
console.log(student);

// 👉 Example 4: Property को update करना
student.name = "Priya";
console.log("\n4. After updating name:");
console.log(student);

// 👉 Example 5: Property delete करना
delete student.isPassed;
console.log("\n5. After deleting isPassed:");
console.log(student);

// 👉 Example 6: Object के अंदर function (method)
let person = {
  name: "Raj",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log("\n6. Method call:");
person.greet();

// 👉 Example 7: Practice Question - Car object
let car = {
  brand: "Honda",
  start: function() {
    console.log("Car started");
  }
};

console.log("\n7. Car object:");
console.log(car);
car.start();

// 👉 Example 8: Object को loop से पढ़ना
console.log("\n8. Loop through student:");
for (let key in student) {
  console.log(key + ": " + student[key]);
}

/* 
🎯 PRACTICE QUESTIONS (Solve below!)
------------------------------------ */

// ✅ Question 1: Create a book object
// let book = { title: ..., author: ..., pages: ... };

// ✅ Question 2: Access the author from book object
// console.log(...);

// ✅ Question 3: Update the pages of book to 750
// book.pages = ...;

// ✅ Question 4: Add a new property 'language' with value "Sanskrit"
// book.language = ...;

// ✅ Question 5: Delete the 'pages' property
// delete book.pages;

// ✅ Question 6: Create user object with sayHello() method
/*
let user = {
  name: "Rahul",
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};
user.sayHello();
*/

// ✅ Question 7: Loop through employee object
/*
let employee = {
  name: "Amit",
  salary: 50000,
  position: "Manager"
};
for (let key in employee) {
  console.log(key + ": " + employee[key]);
}
*/

// ✅ Question 8: Nested object access
/*
let person = {
  name: "Neha",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};
console.log(person.address.pincode);
*/

// ✅ Question 9: Array of student objects
/*
let students = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 22 }
];
console.log(students);
*/

// ✅ Question 10: Pass object to a function
/*
function printDetails(obj) {
  console.log("Name:", obj.name);
  console.log("Age:", obj.age);
}
let person1 = { name: "Simran", age: 24 };
printDetails(person1);
*/

/*
🎓 SUMMARY:

- Access: obj.key or obj["key"]
- Add: obj.newKey = value;
- Update: obj.key = newValue;
- Delete: delete obj.key;
- Method: obj.func = function() {}
- Loop: for (let key in obj) { ... }
*/

