let score = "43"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// "43" => 43
// "43abc" => Nan
// true => 1, false => 0


let isLoggedIn = "pritam"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true, 0 => false 
// "" => false
// "pritam" => true


let someNumber = 33 

let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)


// *********************** OPERATIONS ****************************

let value = 3
let negValue = -value
// console.log(negValue)  // -3

let str1 = "Hello"
let str2 = " Pritam"
let str3 = str1 + str2 
// console.log(str3)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log(typeof("1" + 2))   // string
// console.log("1" + 2 + 2)  // 122 
// console.log(1 + 2 + "2")  // 32


// console.log(true) // true
// console.log(+true) // 1
// console.log(true+) // Throw Error 


let gameScore = 100
++gameScore
// console.log(gameScore)  // 101


let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`);

let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`);

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion