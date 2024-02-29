// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Classic",
//     pages: 180,
//     publishedYear: 1925
// };

// console.log(book.author);
// Destructuring in JavaScript is a feature that allows you to extract values from arrays or properties from objects into distinct variables. It provides a concise and expressive way to work with arrays and objects. 

// const {author} = book  
// console.log(author);  // F. Scott Fitzgerald

// const {author:a} = book   
// console.log(a);     // F. Scott Fitzgerald 

// const { title, author, genre, pages, publishedYear } = book;
// console.log(title);  // The Great Gatsby
// console.log(author);  // F. Scott Fitzgerald

// const { title: a, author: b, genre: c, pages: d, publishedYear: e } = book;  // Aliasing Variables
// console.log(a); // "The Great Gatsby"
// console.log(e);   // 1925


// const { title = "Unknown", author = "Unknown" } = book;  // Default Values , You can provide default values for properties in case they are not present in the object.
// console.log(title); // "The Great Gatsby"


// const { title, author, ...rest } = book;  // Rest Syntax
// console.log(author);  // F. Scott Fitzgerald
// console.log(rest); // { genre: "Classic", pages: 180, publishedYear: 1925 }



