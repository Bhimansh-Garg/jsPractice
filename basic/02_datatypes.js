"use strict" // forces the code to be executed in strict mode, 
             //  which helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally.
             // basically to use the newer version of js

//alert("hello world") // shows a pop-up alert box with the message "hello world"
// alert(3+3) we are using node so alert will not work here , will work in browser


//primitive data types in js are : (call by value)
// null ==>standalone value that represents the intentional absence of any object value. It is one of JavaScript's primitive values.
// number ==> represents both integer and floating-point numbers. JavaScript uses a double-precision 64-bit binary format according to the IEEE 754 standard for representing numbers. It can also represent special values like Infinity, -Infinity, and NaN (Not-a-Number).
// bigint ==> is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive. BigInt can be used for arbitrarily large integers.
//string ==> represents a sequence of characters used for storing and manipulating text. Strings are immutable, meaning once created, they cannot be changed. They can be defined using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
// boolean ==> represents a logical entity and can have two values: true and false. It is often used for conditional testing and control flow in programming.
// undefined ==> is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments. It indicates the absence of a value or that a variable has not been initialized.
// symbol ==> for uniqueness 


// non primitive data types in js are : (call by reference)
// object // array // functions

console.table([typeof undefined, typeof null]) // undefined is a type itself, while null is an object. 
                                            // This is a quirk of JavaScript's type system and can lead to confusion. 
                                            // The typeof operator returns "undefined" for undefined values and "object" for null values, 
                                            // which is why you see this behavior in the console.table output.