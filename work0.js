const username = {
    name:'Pritam',
    city:'Mumbai',
    salary:1000000,

    greet: function(){
        console.log(`name is ${this.name} lives in ${this.city} city.`)
        // console
        // .log(this)
    }
}

// username.greet()
// username.name = 'Leo'
// username.greet()


function viewNow(){
    console.log(this)
}

// viewNow()

const newFunction = () => {
    let user = 'Pritam'
    let city = 'Banglore'
    return `user name is ${this.user} lives in city ${city} `
}

// let b = newFunction()
// console.log(b)

const addNums = (val1,val2) => ({username:'pritam'})

// console.log(addNums())

function greet(){
    return `hello pritam`
}

// console.log(typeof greet)
// console.log(greet())

const greetUser = () => console.log('my name is pritam from google')

// greetUser()

const multiply = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
  };
// console.log(multiply(3, 4)); // 12

const user = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`); // `this` refers to `user`
    },

    newGreet: () => console.log(`hello name is ${name} `)
  };
  
user.greet(); // "Hello, John"
user.newGreet()
  