const marvel_heros = ["Thor","Ironman","Spiderman"]
const animals = ["Tiger","Elephant","Monkey"]

// marvel_heros.push(animals)
// console.log(marvel_heros);  // [ 'Thor', 'Ironman', 'Spiderman', [ 'Tiger', 'Elephant', 'Monkey' ] ]
// console.log(marvel_heros[3][1])  // Elephant

// marvel_heros.concat(animals)
// console.log(marvel_heros);   // [ 'Thor', 'Ironman', 'Spiderman' ]

// const all_heros = marvel_heros.concat(animals)
// console.log(all_heros);     // [ 'Thor', 'Ironman', 'Spiderman', 'Tiger', 'Elephant', 'Monkey' ]


// const all_heros = [...marvel_heros, ...animals]    // this is spread operator
// console.log(all_heros);      // [ 'Thor', 'Ironman', 'Spiderman', 'Tiger', 'Elephant', 'Monkey' ]


// const another_array = [1, 2, 3,[4, 5, 6], [45, 81,[ 90, 11] ] ]

// const real_another_array = another_array.flat(Infinity)   // the paramete asks for depth you can give 1 ,2 or 3 depends on how may array it contains, i passed infinity 
// console.log(real_another_array);    // [1,  2,  3,  4,  5, 6, 45, 81, 90, 11 ] 

// console.log(Array.isArray("Pritam"));
// console.log(Array.from("Pritam"));
// console.log(Array.from({name : "Pritam"}));  // []   // intresting case for interview

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3))

