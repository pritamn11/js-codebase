//  *Stack (Primitive)  
// stack is like a structured and organized space for managing (function calls and primitive data),
//  *Heap (Non-Primitive) 
//  heap is a more flexible area for storing  (non-primitive, larger data structures).

let realName = "pritam";  // You put pritam in the box.
let nickName = realName;  // You copied pritam into another box.

nickName = "prito";   // You changed what's in the second box.

console.log(realName);  // Output: pritam, It's still pritam in the first box.
console.log(nickName);    // Output: prito, Now it's prito in the second box.


let userOne = {
    email : "user1@google.com",
    upi : "user1@hdfcbank"
}

let userTwo = {
    email : "user2@google.com",
    upi : "user2@sbibank"
}

// let userTwo = userOne 

userTwo.email = "pritam@google.com"

console.log(userOne)
console.log(userTwo)



// STACK                             HEAP
// +-----------------+               +----------------------+
// |                 |               |                      |
// |                 |               |                      |
// +-----------------+               |                      |
// |                 |               |                      |
// |                 |               |                      |
// +-----------------+               |                      |
// |                 |               |                      |
// |                 |               |                      |
// +-----------------+               +----------------------+
// |                 |                    |            |
// |                 |                    |            |
// +-----------------+                    |            |
//    