// Strings
const s1 = "Hello"
const s2 = 'world'
const s3 = `string with eval: ${s1}, ${s2}`
const s4 = "string with eval: " + s1 + ", " + s2

console.log(s1, s2, s3)

// Numbers
const i1 = 10
const f1 = 10.1

// JS Weirdness:
console.log(0.0001 + 0.0002) // => 0.00030000000000000003

/*
    Operators:
    +, -, /, *,
    &&(and), ||(or),
*/


// Functions:
function func1(param1){
    return param1 // if omited, return this
}
// anon function
function(){
    // body
}

let f3 = () => { body }
const functionVar = function(){}

// Arrays
const list = [1, 2, "3", { k: "str" } ]
  // indexes
    list[0]

// Mutability
    list[0] = "new Value" // internal mutability
    list = ["new items"] // not ok, declared as const

// Objects

const firstNames = ["Tyrion", "Jon", "Jorah", "Arya", "Joffrey"]
const lastNames = ["Lannister", "Snow", "Mormont", "Stark", "Baratheon"]

const person1 = {
    firstName: "Joffery",
    lastName: "Baratheon",
    email: "joff@widowswail.com"
}

person1.lastName = "sdasd"
person1['lastName']



import { person1 } from 'randomLib'


if(typeof person1 === 'string'){
    // its a string
}else if(typeof person1 === 'object'){

}

Object.keys( person1 )
Object.values( person1 )

function isArray(v){
    if(v.length && v.prototype === Array) return true
}





// Higher order functions

const arr = [1, 2, 3]

const result = arr.map(function(arrayItem, index, array){
    return Array(arr.length)
});
result === [[3], [3], [3]]

arr.forEach( (arrayItem, index, array) => {
    arr === array // [1, 2, 3]
    arrayItem   // 1 || 2 || 3
    index       // 0 || 1 || 2
})


const reduceResult = arr.reduce(
    (previousValue, arrayItem, index, array) => {

        return previousValue + 1
    },
    0 // Initial value
)



















const person2 = {
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
}

const person3 = {
firstName: "Tyrion",
lastName: "Lannister",
email: "tyrion@pourmeanother.com"
}

// Key value pairs
const _person2 = {
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
}

// Dot notation

// Loops and higher order functions

for(let i = 0; i < 10; i++ ){
    // do stuff
}
let x = 0;
for( ; x < 10; ){
    // do stuff
}
while ( true ){
    // do stuff
}
