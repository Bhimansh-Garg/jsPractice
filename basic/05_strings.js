let name = "John Doe"
let age = 30

console.log("My name is " + name + " and I am " + age + " years old.")
console.log(`My name is ${name} and I am ${age} years old.`) // using template literals

const name1 = new String("John Doe") // creates a String object
const name2 = "John Doe" // creates a string primitive

console.log(name1 === name2) // false

console.log(name1.length) // 8
console.log(name2.charAt(0)) // J
console.log(name2.indexOf("Doe")) // 5
console.log(name2.slice(0, 4)) // John

let hello = "     hello     "
console.log(hello.toUpperCase())
console.log(hello.trim())

let url =  "https://www.example.com%20hello"
console.log(url.replace("%20","-"))

