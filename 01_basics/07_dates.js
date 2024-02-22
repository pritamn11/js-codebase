// Dates 

let myDate = new Date()    // Date object/instance
// console.log(myDate)   // 2024-02-10T12:11:25.440Z
// console.log(myDate.toString());  // Sat Feb 10 2024 17:43:58 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Feb 10 2024
// console.log(myDate.toISOString());   // 2024-02-10T12:15:18.675Z
// console.log(myDate.toLocaleString());   // 2/10/2024, 5:45:18 PM
// console.log(myDate.toJSON());       // 2024-02-10T12:17:28.920Z

// console.log(typeof myDate);    // remember its a object

// let myCreatedDate = new Date(2024, 0, 10)      // month starts from 0, 0 means jan
// console.log(myCreatedDate);    // 2024-01-09T18:30:00.000Z
// console.log(myCreatedDate.toDateString());   // Wed Jan 10 2024 

// let myCreatedDate1 = new Date(2024, 0, 10, 5 ,3)
// console.log(myCreatedDate1); 
// console.log(myCreatedDate1.toLocaleString());   // 1/10/2024, 5:03:00 AM   outputs with date 

// let myCreatedDate2 = new Date("01-14-2024")  // mm-dd-yyyy format , u can change it
// console.log(myCreatedDate2);
// console.log(myCreatedDate2.toLocaleString());    // 1/14/2024, 12:00:00 AM


// let myTimeStamp = Date.now()

// console.log(myTimeStamp)  //  1707626431299 from Date.now() represents the number of milliseconds that have passed since a specific starting point in time, which is called the Unix epoch. This starting point is set to January 1, 1970, at midnight UTC (Coordinated Universal Time).
// console.log(myCreatedDate2.getTime());  // 1705170600000

// console.log(Math.floor(Date.now() / 1000));  // convert a timestamp from milliseconds to seconds.


let newDate = new Date()
// console.log(newDate);   // currrent data and time
// console.log(newDate.getMonth()); // 1 mean feb
// console.log(newDate.getMonth() + 1); // 2 , i make it +1 so that end user wn't confuse
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());   // 0 means sunday

const weekday = newDate.toLocaleString('default',{
    weekday : "long",
    month : "long",
    
})
 
console.log(weekday);   // February Sunday, because today is sunday

