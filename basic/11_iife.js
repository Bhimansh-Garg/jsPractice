//Immediately invoked function expression (IIFE)
// is a function that runs as soon as it is defined

function one(){
    console.log("DB connected")
}
one()


(
    function two(){
        console.log("DB connected")
    }
)();// IIFE 

// if two iife functions are defined, the second one will override the first one
// to stop this semicolon is used after the first iife function
// otherwise semicolon is not required after the first iife function


// falsy values in javascript
// 0, -0, null, undefined, NaN, false, "" (empty string) , BigInt(0n) are falsy values in javascript

// truthy values in javascript
// all values that are not falsy are truthy

