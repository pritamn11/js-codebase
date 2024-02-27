const fbUser = new Object()

const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "Pritam"
instaUser.address = "Mumbai"


const regularUser = {
    email : 'pritam@chatgpt.com',
    userdetail : {
        userFullName : { 
        name : 'Pritam',
        lastName :'Narwade'
    }

    }
}

// console.log(regularUser.userdetail.userFullName.name);   // Nesting is easy here

// const obj1 = {1:'a', 2:'b'}
// const obj2 = {3:'c', 4:'d'}

// const objA = {obj1 , obj2}    // 
// console.log(objA);           // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({},obj1, obj2)   // this is the correct way to combine object  // we provide extra parameter {} It is a good idea, this is explained in the documentation.

// console.log(obj3);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1)  // { '1': 'a', '2': 'b' }
// console.log(obj3 == obj1)  // false

// const obj4 = Object.assign(obj1, obj2)  

// console.log(obj4);    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 
// console.log(obj1)     // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  it returns full object
// console.log(obj2);    //  { '3': 'c', '4': 'd' }
// console.log(obj4 == obj1);  //  true


/// *************************************************************

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
// console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 0, b: { c: 0 } }  // not change in obj2

obj2.a = 2;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
// console.log(obj1); // { a: 1, b: { c: 3 } }   // changed
// console.log(obj2); // { a: 2, b: { c: 3 } }    // changed 

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);     //structuredClone  This ensures that changes made to the cloned object do not affect the original object, and vice versa.
obj4.a = 4; 
obj4.b.c = 4;
// console.log(obj3); // { a: 0, b: { c: 0 } }   


// ********************************************************

const car = {
    make: "Toyota",
    model: "Glanza",
    color: "Blue",
    mileage: 25000
};

console.log(Object.keys(car));  // [ 'make', 'model', 'year', 'color', 'mileage' ] returns array 
console.log(Object.values(car)) // [ 'Toyota', 'Glanza', 2020, 'Silver', 25000 ] 
console.log(Object.entries(car)); // [[ 'make', 'Toyota' ],[ 'model', 'Glanza' ],[ 'color', 'Blue' ],[ 'mileage', 25000 ] ] array in array
  
let data = Object.values(car)
console.log(data[2]); // Glanza

