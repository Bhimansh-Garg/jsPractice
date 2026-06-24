console.log(2>3)
console.log(2==3)
console.log(2!=3)

console.log("2">3)
console.log("2"==2)
console.log("02"!=2)//unprecedented behavior, because "02" is coerced to a number, which is 2, and then compared to 2. Since they are equal, the result is false.

console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true
// the reason is in js equality and comparison operators work differently.
//comparisons convert null to a number 
//thats why null>0 is false, null==0 is false, but null>=0 is true because null is converted to 0 for the comparison.

console.log(undefined>0) // false
console.log(undefined==0) // false
console.log(undefined>=0) // false

// strict check === operator checks for both value and type equality, while == operator performs type coercion before checking for equality.
console.log(2==="2") // false
console.log(2=="2") // true 