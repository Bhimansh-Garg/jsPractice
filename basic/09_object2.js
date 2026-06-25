const tinderUser = new Object(); // creates an empty object using the Object constructor // singleton
const tinderUser2 = {}
console.log(tinderUser) // prints an empty object created using the Object constructor
console.log(tinderUser2)// prints an empty object created using the object literal syntax

const user1 = {
    email :"user1@example.com",
    name : {
        fullname:{
            userName : {
                firstName : "John",
                lastName : "Doe"
            }
        }
    }
}

console.log(user1.name.fullname.userName.firstName) // John 

const object1 = {1:"a", 2:"b", 3:"c"}
const object2 = {4:"d", 5:"e", 6:"f"}
const object3 = Object.assign({}, object1, object2) // creates a new object by merging object1 and 
console.log(object3) // {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f"} // prints the new object

// const object4 = {...object1, ...object2} // creates a new object by spreading object1 and object2
// console.log(object4) // {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f"} // prints the new object

console.log(Object.keys(object3)) // [1, 2, 3, 4, 5, 6] // prints the keys of the object
console.log(Object.values(object3)) // ["a", "b", "c", "d", "e", "f"] // prints the values of the object
console.log(Object.entries(object3)) // [[1, "a"], [2, "b"], [3, "c"], [4, "d"], [5, "e"], [6, "f"]] // prints the key-value pairs of the object

//destructuring objects
const {1: first, 2: second, 3: third} = object3 // destructures the object and assigns the values to variables
console.log(first) // a
console.log(second) // b
console.log(third) // c

// in a simple language, destructuring is a way to extract values from an object and assign them to variables in a single statement. 
// In this case, we are extracting the values of the keys 1, 2, and 3 from the object3 
// and assigning them to the variables first, second, and third respectively.