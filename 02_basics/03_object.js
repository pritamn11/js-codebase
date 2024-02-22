// # singleton 
// Object.create 



// # Object literals 
// note -  object itself contains a variety of data types, including strings, numbers, booleans, objects, arrays, and functions.

const mySym = Symbol("Unique Key 467")

const userDetail = {
    name : "Pritam",
    age : 18,
    location : "Mumbai",
    email : "pritamn@gmail.com",
    [mySym] : "key",        // to refer Symbol datatype we use square bracket if you not apply it wil consider it string
    isLoggedIn : true,       // Boolean property

    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"             // Nested object property
      },
    hobbies: ["reading", "traveling", "cooking"],    // Array property

    sayHello: function() {
        console.log("Hello! My name is " + this.name + ".");    // Function to log a greeting message
      }
};

// console.log(userDetail)
// console.log(userDetail.name)  // Dot notation
// console.log(userDetail["name"])   // bracket notation
// console.log(userDetail.mySym) // undefined   // When you use bracket notation to access a property on an object, JavaScript interprets the expression inside the brackets as a string
// console.log(userDetail[mySym]);
// console.log(typeof userDetail[mySym]);    // string 

// userDetail.email = 'pritam@chatgpt.com'
// console.log(userDetail['email'])    // pritam@chatgpt.com

// Object.freeze(userDetail)
// userDetail.email = 'pritam@microsoft.com'
// console.log(userDetail['email']);    // 'pritam@chatgpt.com'  it doesn't chnage bcz i freeze the object

userDetail.greeting = function() {
  console.log("Hello Pritam, I am learning Javascript");
}

console.log(userDetail);   // greeting: [Function (anonymous)], you define a function expression as a property of an object, and you don't explicitly provide a name for the function, it becomes an anonymous function.
// If you want to name the function, you can use a function declaration instead: function sayGreeting(). it will no longer be anonymous.

