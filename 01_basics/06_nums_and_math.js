const score = 400 
// console.log(score);    // 400
// score is a string number primitive containing the value 400.


const balance = new Number(100)        // >> Inspect element in console
// console.log(balance);   // [Number: 100]
// (Number Object) balance stores it indirectly as an object property.
 

// console.log(balance.toString())    // converts into string data types
// console.log(balance.toString().length)  // string length method 

// console.log(balance.toFixed(2))   // 100.00

const gstTax = 23.89567

// console.log(gstTax.toPrecision(3));  // 23.9  
// toPrecision(number parameter) It's used to format a number to a specified precision and returns the formatted number as a string.

const amount = 1000000

// console.log(amount.toLocaleString());  // 1,000,000   (1 million return USA standard amount)
// toLocaleString() displaying currency amounts or numerical data in different languages and regions.

// console.log(amount.toLocaleString('en-IN'));   // 10,00,000   (10 lacs returns Indian standard amount)

// console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
// Number.MAX_VALUE is logged to the console, showing the largest representable numeric value in JavaScript.

// console.log(Number.MIN_VALUE);  // 5e-324
//  showing the smallest positive non-zero value representable in JavaScript. 


// +++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));   // 4 
// console.log(Math.round(4.3));   // 4
// console.log(Math.round(4.6));   // 5
// console.log(Math.ceil(4.2));    // 5
// console.log(Math.floor(4.6))   // 4

// console.log(Math.min(6,2,9,7));  // 2
// console.log(Math.max(6,2,9,7));  // 9

// console.log(Math.random());   // give random values bw 0 to 1 
// console.log((Math.random() * 10) + 1);    
// console.log(Math.floor(Math.random() * 10) + 1);   

const min = 10 
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // prints value from 10 - 20 range
