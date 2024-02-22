//# Array 

let myArr = [1,2,3,4,5]   // inspect this 

let b = "Spider man"

const myArr2 = new Array(1,2,3,4,b)   // inspect this
// console.log(myArr2);     // [ 1, 2, 3, 4, 'Spider man' ]
// console.log(myArr2[1])   // 2 


//# Array methods 
// myArr2.push(10)   // [ 1, 2, 3, 4, 'Spider man', 10 ]
// myArr2.push(7)    // [ 1, 2, 3, 4, 'Spider man', 10, 7 ]
// myArr2.pop()     // in pop() it didn't take any value, it will delete last value
// myArr2.unshift(25)  // it add mention element on starting
// myArr2.shift()  // shift() it didn't take any value,it deletes starting element
// console.log(myArr2);   

// console.log(myArr2.includes(4));  // true, it includes 4
// console.log(myArr2.includes(25));  // false, it not includes 25

// console.log(myArr2.indexOf(4))   // 3

// const newArr = myArr2.join()

// console.log(newArr);  // 1,2,3,4,Spider man 
// console.log(typeof newArr); // its string 

// #### Slice ,Splice 

// The slice() method returns a shallow copy of a portion of an array 
// into a new array. It does not modify the original array.

// console.log("A", myArr2);   // A [ 1, 2, 3, 4, 'Spider man' ]

// const myA1 = myArr2.slice(0,3)
// console.log(myA1);    // [ 1, 2, 3 ]
// console.log(myArr2);   // [ 1, 2, 3, 4, 'Spider man' ]


// The splice() method changes the contents of an array by removing or replacing existing elements 
// and/or adding new elements in place. It modifies the original array.

// console.log("B", myArr2);   // B [ 1, 2, 3, 4, 'Spider man' ]
// const myA2 = myArr2.splice(0,3)  // // Removes elements starting from index 0 (3 elements)
// console.log(myA2);  // Output: [1, 2, 3]
// console.log(myArr2);    // Output: [ 4, 'Spider man' ] (original array modified)


