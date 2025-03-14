In JavaScript, **primitive** and **reference** types refer to two different ways that values are stored and manipulated in memory.

## **Primitive Types**
These are immutable (cannot be changed) and stored directly in memory. When assigned to a variable, the variable holds the actual value.

### **Primitive Types in JavaScript:**
1. `string` → `"hello"`
2. `number` → `42`
3. `boolean` → `true` / `false`
4. `null` → `null`
5. `undefined` → `undefined`
6. `bigint` → `9007199254740991n`
7. `symbol` → `Symbol('id')`

### **Characteristics of Primitives:**
- Stored in **stack memory**.
- When assigned to a new variable, a **copy of the value** is made.
- Changes to one variable **do not affect** the original.

#### **Example:**
```js
let a = 10;
let b = a; // b gets a copy of a
b = 20;    // Changing b does not affect a

console.log(a); // 10
console.log(b); // 20
```

---

## **Reference Types**
These are objects stored in **heap memory**, and variables hold a **reference (or pointer)** to the memory location.

### **Reference Types in JavaScript:**
1. `Object` → `{ name: "Alice" }`
2. `Array` → `[1, 2, 3]`
3. `Function` → `function() {}`

### **Characteristics of References:**
- Stored in **heap memory**.
- When assigned to a new variable, the **reference (memory address)** is copied, **not the value**.
- Changes made through one variable **affect all references**.

#### **Example:**
```js
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 gets a reference to obj1's memory location

obj2.name = "Bob"; // Modifying obj2 affects obj1

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
```

---

### **Key Differences:**
| Feature          | Primitive Types | Reference Types |
|----------------|----------------|----------------|
| Stored in      | Stack memory    | Heap memory    |
| Copies        | Value copy      | Reference copy |
| Mutable       | No              | Yes            |
| Example       | `let a = 5;`    | `let obj = {};` |

Would you like a more detailed explanation on any part? 🚀