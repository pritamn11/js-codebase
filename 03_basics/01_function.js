function sayJS() {
    console.log("Hello all my name is Pritam");
    console.log("I am learning Javascript");
}

// sayJS();

function userLogin(name) {
    if (!name) {              // !name is similar as name === undefined
        console.log('Please enter a username');
        return
    }
    
    return `${name} you are now log in`

}

// console.log(userLogin("Pritam"))  // Pritam you are now log in
// userLogin()   // Please enter a username


// rest parameter ...num1 to collect all the arguments passed to it into an array called num1.
function calculateCartPrice(...num1){    // ...num1 this is rest operator, if dont mention this the output will became 200
    return num1
}

// console.log(calculateCartPrice(200,300,400));  // [ 200, 300, 400 ]


function calculateCartPrice1(val1,val2,...num1){    // ...num1 this is rest operator, if dont mention this the output will became 200
    return num1
}

// console.log(calculateCartPrice1(200,400,500,2000));  // [ 500, 2000 ]




const user = {
    username : "pritam",
    price : 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);   // I intentionally make the prices which is typo
}

// handleObject(user);   // Username is pritam and price is undefined 
// handleObject({
//     username: "justin",
//     price:399
// })                   // Username is justin and price is 399 



const myNewArray = [200,400,500,700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  // 400
console.log(returnSecondValue(['A','B','C','D']));   // B
