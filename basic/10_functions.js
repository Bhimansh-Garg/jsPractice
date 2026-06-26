function Addition(a,b){
    return a+b
}

function Subtraction(a,b){
    return a-b
}
function loginUserMessage(username){
    return `${username} just logged in`
}


// rest and spread operator
function sumAll(...args){
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}   

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500)); // [200, 300, 400, 500] // prints the array of numbers

function calculateCartPrice2(val1, val2, ...num2){
    return num2
}

console.log(calculateCartPrice2(200, 300, 400, 500)); // [400, 500] // prints the array of numbers after the first two arguments
// 200 -> val1, 300 -> val2, 400, 500 -> num2

function handleObject(anyObject){
    console.log(`${anyObject.name} is ${anyObject.age} years old`)
}
handleObject({name: "John", age: 30}) // John is 30 years old // prints the name and age of the object

const addTwoNumbers = function(a, b){
    return a + b
}// expression function

const addTwoNumbers2 = (a, b) => a + b // arrow function




