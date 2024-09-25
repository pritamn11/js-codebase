const user = {
    username : 'Pritam',
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to javascript world`);
        console.log(this);      // The this keyword in the welcomeMessage method refers to the user object itself, allowing access to its properties and methods.
    }
}

// Call the 'welcomeMessage' method of the 'user' object
// user.welcomeMessage();        // Output: "Pritam, welcome to javascript world" and the 'user' object
// user.username = "Katrina";
// user.welcomeMessage();        // Output: "Katrina, welcome to javascript world" and the 'user' object

// console.log(this)     // {}  

// function viewThis(){
//     console.log(this);
// }

// viewThis()  


// function viewThis(){
//     let userName = 'Pritam';
//     console.log(this);
// }

// viewThis()

// In object methods, this refers to the object calling the method.
// In regular functions, this defaults to the global object, which is why you might not get the expected behavior unless you're working within an object.


// # New way to define function 

// const newFunc = function (){
//     let userName = 'Pritam';
//     console.log(this.userName);

// }

// newFunc()   // undefined  // nahi pata ye this kya hai islie undefined aya

// # making function using arrow key 
const newFunc = () => {
    let userName = 'Pritam';
    console.log(this.userName);
}

// newFunc()  // undefined  // nahi pata ye this kya hai islie undefined aya
// why undefined becz this.userName looks for userName as a property on the global object (in non-strict mode)
//  or the this context, but userName is a local variable and not part of the this object. 
//  Hence, it logs undefined.


// basic arrow function
// const addNum = (num1,num2) => {
//     return num1 + num2; 
// }
// console.log(addNum(3,4))  // 7

// const addNum = (num1,num2) => {return num1 + num2}   // if we write in curly braces we have to mention return keyword
// console.log(addNum(3,4))  // 7

// implicit return arrow function
// const addNum = (num1,num2) => num1 + num2
// console.log(addNum(3,4))  // 7

// const addNum = (num1,num2) => (num1 + num2)
// console.log(addNum(3,4))  // 7

// const addNum = (num1,num2) => {username : "pritam"}
// console.log(addNum(3,4))  // undefined

const addNum = (num1,num2) => ({username : "pritam"})
console.log(addNum(3,4))  // { username: 'pritam' }