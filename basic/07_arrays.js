let myArray  = [1,2,3,4,5,6,7,8,9,10] // creates an array with 10 elements
console.log(myArray[0]) // 1 // accessing the first element of the array
console.log(myArray[myArray.length - 1]) // 10 // accessing the last element of the array

// array makes shallow copy of the array when we use slice method
// shallow copy means that the new array will have the same elements as the original array, 
// but if we change an element in the new array, it will not affect the original array. 
// However, if we change an object or an array inside the new array, 
// it will affect the original array 
// because they are still referencing the same object or array in memory.

myArray.push(11) // adds an element to the end of the array
myArray.unshift(0) // adds an element to the beginning of the array
myArray.pop() // removes the last element of the array
myArray.shift() // removes the first element of the array

const newArray = myArray.join()
console.log(newArray) // 1,2,3,4,5,6,7,8,9,10 // joins the elements of the array into a string  

const newArray1 = myArray.slice(0,5) // creates a new array with the first 5 elements of the original array
console.log(newArray1) // [1,2,3,4,5] // prints the new array

console.log(myArray.splice(0,5)) // removes the first 5 elements of the array and returns them
console.log(myArray) // [6,7,8,9,10,11] // prints the modified original array


let arr1 = ['a','b','c','d','e']
let arr2 = ['f','g','h','i','j']
let arr3 = arr1.concat(arr2) // creates a new array by concatenating arr1 and arr2
console.log(arr3) // ['a','b','c','d','e','f','g','h','i','j'] // prints the new array     

const newArray2 = [...arr1,...arr2] // creates a new array by spreading arr1 and arr2
console.log(newArray2) // ['a','b','c','d','e','f','g','h','i','j'] // prints the new array]

console.log(Array.isArray(arr1)) // true // checks if arr1 is an array
console.log(Array.from(arr1)) // ['a','b','c','d','e'] // creates a new array from arr1

let arr4 = [['a','b'],['c','d'],['e']] // creates a 2D array    
console.log(arr4.flat(Infinity)) // ['a','b','c','d','e'] // flattens the 2D array into a 1D array

console.log(Array.from({ name: 'John'})) // [undefined] // creates an array from an object with a length property

