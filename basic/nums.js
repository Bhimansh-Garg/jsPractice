let num = new Number(12) // creates a Number object
let hundreds = 1000000000

console.log(num.toPrecision(4)) // 12.00 // returns a string representing the number to the specified precision
console.log(num.toFixed(4)) // 12.0000 // returns a string representing the number to the specified number of decimal places
console.log(num.toExponential(4)) // 1.2000e+1 // returns a string representing the number in exponential notation with the specified number of decimal places

console.log(hundreds.toLocaleString("en-IN")) // 1,00,00,00,000 // returns a string with a language-sensitive representation of the number
// diff between toPrecision and toFixed is that toPrecision formats the number to a specified total number of significant digits, while toFixed formats the number to a specified number of decimal places.
// more simpler explanation is that toPrecision is used for controlling the total number of significant digits in a number, while toFixed is used for controlling the number of digits after the decimal point.

const min = 10
const max = 20

const random = Math.floor(Math.random() * (max - min + 1)) + min // generates a random integer between min and max (inclusive)
console.log(random)