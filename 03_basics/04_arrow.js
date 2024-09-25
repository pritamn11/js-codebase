// 1. Basic Arrow Function (No Parameters)

const greet = () => console.log("Hello");
greet();  // Output: Hello

// 2. Single Parameter
// If there is only one parameter, you can omit the parentheses.

const greetUser = user => console.log(`Hello, ${user}`);
greetUser("Pritam");  // Output: Hello, Pritam

// Multiple Parameters
// If there are multiple parameters, parentheses are required. 

const addNum = (a, b) => a + b;
console.log(addNum(3, 4));  // Output: 7

// Multi-line Body (Explicit Return)
// If the function body has multiple lines or you need to perform more complex operations, 
// curly braces are required, and you must use return explicitly.

const calculate = (a, b) => {
    const result = a + b;
    return result;
};
console.log(calculate(5, 7));  // Output: 12

// Arrow Function Returning an Object
// To return an object literal directly, you must wrap it in parentheses to avoid 
// confusion with block statements.

const getUser = () => ({ name: "Pritam", age: 25 });
console.log(getUser());  // Output: { name: 'Pritam', age: 25 }


// Summary of Arrow Function Types:
// No parameters: () => ...
// One parameter: param => ...
// Multiple parameters: (param1, param2) => ...
// Multi-line function: (param1, param2) => { ... }
// Return object: () => ({ ... })
