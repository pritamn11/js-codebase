
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);    // not print anything
// console.log(b);     // not print anything
// console.log(c);   // 30    //thats the reason we don't use var

// function one(){
//     const username = "Pritam"

//     function two(){
//         const website = "github.io"
//         console.log(username);
//     }
//     // console.log(website);    // throw error

//     // two()

// }

// one()

if (true) {
    const username = "pritam"
    if (username === "pritam") {
        const website = "github.io"
        console.log(username + website);  // you will get output
    }
    // console.log(website);   // This would cause an error
}

// console.log(username);    // This will cause a ReferenceError

// Both username and website are not accessible outside their respective block scopes due to 
// being declared with const. Accessing them outside their blocks results in ReferenceError. 

// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



console.log(addTwo(5))  // // This will not work correctly
const addTwo = function(num){   // here we declare function and hold it in variable addTwo
    return num + 2
}

// console.log(addTwo(5))  // // This will work correctly