// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}   

// for of loop
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}  

// for in loop
const object = {a: 1, b: 2, c: 3};  
for (const key in object) {
    console.log(key, object[key]);
}  

// for nested loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

// while loop  
let k = 0;
while (k < 5) {
    console.log(k);
}

// do while loop   
let l = 0;
do {
    console.log(l);
    l++;
} while (l < 5);

let coding = ["js", "cpp"," python"]
coding.forEach(function (item){
    console.log(item)
}) // higher order loop 

coding.forEach(function(item,index,arr){
    console.log(item,index,arr)
})


let myCoding  = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach(function (item){
    console.log(item.languageName)
})

// forEach doesn't return anything 

