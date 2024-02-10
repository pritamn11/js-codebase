// Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

let animal = "dog"
let bird = "dog"
// console.log(animal == bird)  // true

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId)   // false 
// console.log(id.description === anotherId.description);  // true

const bigNumber = 45897465444683543526n

const temp = null 

// console.log(typeof temp)


// Reference (Non primitive)
// Array, Object, Functions

const heros = ["ironman","thor","hulk","spiderman"]

let myObj = {
    name : "pritam",
    age : 22,
    city : "banglore"
}

const myFunction = function(){
    console.log("Hello World");
}

// myFunction()  // calling the function




// ----------------------------------------------------------------------------------------------------------------------
// | Data Type         | Type        | Mutable/Immutable | Example                                                      |
// |-------------------|-------------|-------------------|--------------------------------------------------------------|
// | String            | Primitive   | Immutable         | `let text = "Hello, JavaScript!";`                           |
// | Number            | Primitive   | Immutable         | `let number = 42;`                                           |
// | Boolean           | Primitive   | Immutable         | `let isTrue = true;`                                         |
// | Null              | Primitive   | Immutable         | `let nullValue = null;`                                      |
// | Undefined         | Primitive   | Immutable         | `let undefinedValue;`                                        |
// | Symbol            | Primitive   | Immutable         | `let symbol = Symbol("unique");`                             |
// | BigInt            | Primitive   | Immutable         | `let bigNumber = 1234567890123456789012345678901234567890n;` |
// | Object            | Reference   | Mutable           | `let person = { name: "John", age: 30 };`                    |
// | Array             | Reference   | Mutable           | `let numbers = [1, 2, 3, 4, 5];`                             |
// | Function          | Reference   | Mutable           | `function greet() { console.log("Hello!"); }`                |
// ----------------------------------------------------------------------------------------------------------------------
// ### Key Differences:

// 1. **Mutability:**
//    - **Primitive:** Immutable (values cannot be changed after creation).
//    - **Reference:** Mutable (values can be changed, modified, or extended).

// 2. **Storage Location:**
//    - **Primitive:** Stored directly in the variable's memory location.
//    - **Reference:** Stored in a different location; the variable holds a reference (memory address) to that location.

// 3. **Comparison:**
//    - **Primitive:** Compares by value.
//    - **Reference:** Compares by reference (whether they reference the same object in memory).

// 4. **Passing by Value/Reference:**
//    - **Primitive:** Passed by value (the actual value is passed).
//    - **Reference:** Passed by reference (the reference to the memory location is passed).

// 5. **Immutability:**
//    - **Primitive:** Once created, values cannot be changed directly.
//    - **Reference:** Values can be changed or modified directly.


// https://262.ecma-international.org/5.1/#sec-11.4.3