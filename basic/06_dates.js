let date = new Date() // creates a new Date object with the current date and time
console.log(date) // prints the current date and time
console.log(date.toDateString()) // prints the date in a human-readable format  
console.log(date.toLocaleString())
console.log(date.toISOString()) // prints the date in ISO 8601 format
console.log(typeof date)

let createdDate = new Date(2023,0,1) // creates a new Date object with the specified date
console.log(createdDate) // prints the specified date
console.log(createdDate.toDateString()) // prints the specified date in a human-readable format
console.log(createdDate.toLocaleString())
console.log(createdDate.toISOString()) // prints the specified date in ISO 8601 format
console.log(typeof createdDate)

let myTimeStamp = Date.now() // returns the number of milliseconds since January 1, 1970
console.log(myTimeStamp) // prints the current timestamp
console.log(typeof myTimeStamp) // prints the type of the timestamp

console.log(createdDate.getTime()) // returns the number of milliseconds since January 1, 1970 for the specified date

createdDate.toLocaleString('default',{weekday:'long', timeZone:'Asia/Kolkata'}) // returns the day of the week for the specified date in the specified time zone