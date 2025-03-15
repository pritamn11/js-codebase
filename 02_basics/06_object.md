### **Destructuring in JavaScript**
Destructuring allows you to **extract values** from arrays and objects in a clean and readable way.

---

## **1. Array Destructuring**
Extract values from an array into variables.

### **Basic Example:**
```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

### **Skipping Elements:**
```js
const colors = ["red", "green", "blue"];

const [, secondColor] = colors; 

console.log(secondColor); // "green"
```

### **Using Rest (`...`) Operator:**
```js
const fruits = ["apple", "banana", "cherry", "date"];

const [first, ...rest] = fruits;

console.log(first); // "apple"
console.log(rest);  // ["banana", "cherry", "date"]
```

---

## **2. Object Destructuring**
Extract properties from an object into variables.

### **Basic Example:**
```js
const person = {
  name: "Pritam",
  age: 25,
  country: "India"
};

const { name, age, country } = person;

console.log(name);   // "Pritam"
console.log(age);    // 25
console.log(country); // "India"
```

### **Renaming Variables:**
```js
const user = {
  username: "john_doe",
  email: "john@example.com"
};

const { username: userId, email: userEmail } = user;

console.log(userId);   // "john_doe"
console.log(userEmail); // "john@example.com"
```

### **Setting Default Values:**
```js
const car = { brand: "Toyota", model: "Corolla" };

const { brand, model, year = 2024 } = car; 

console.log(year); // 2024 (default value)
```

### **Nested Object Destructuring:**
```js
const student = {
  name: "Alice",
  details: {
    age: 22,
    city: "New York"
  }
};

const { name, details: { age, city } } = student;

console.log(age);  // 22
console.log(city); // "New York"
```

---

## **3. Destructuring in Function Parameters**
Destructuring can be used directly in function parameters.

### **For Arrays:**
```js
function sum([x, y]) {
  return x + y;
}

console.log(sum([3, 5])); // 8
```

### **For Objects:**
```js
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

const user = { name: "David", age: 30 };
greet(user);
```

---

## **4. Combination of Array & Object Destructuring**
```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const [{ name: firstUser }, { name: secondUser }] = users;

console.log(firstUser);  // "Alice"
console.log(secondUser); // "Bob"
```

---

### **Why Use Destructuring?**
✅ **Cleaner and more readable**  
✅ **Avoids repetitive `obj.property` lookups**  
✅ **Easy to extract and rename values**  

Would you like more examples or edge cases? 🚀