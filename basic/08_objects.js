//singleton pattern

// object literal
const mySym = Symbol("key1") // creates a new symbol
const singleton1 = {
    name: "Singleton 1",
    [mySym]: "This is a symbol property",
    getValue: function() {
        return this.name;
    }
}; 

console.log(singleton1["name"])
console.log(singleton1[mySym]) // This is a symbol property

// Object.freeze(singleton1) // prevents any changes to the object

singleton1.greeting = function(){
    return `Hello, ${this.name}!`;     
}