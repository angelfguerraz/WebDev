var i = 40  // integer
var f = 40.0    // float
var str = "Angel"   // string
var yes = true  // boolean
var no = false  // boolean
var n = null    // null (type:object)
var x = undefined   // type:undefined -- uninitialized variables 
var a = [1, 2, 3]   // array
var obj = { name: str } // object

console.log(person)

// Declarative function
function sum(a, b) {
    return a + b
}

// Expression function
var sub = function (a, b) {
    return a - b
}

var person = {
    name: "angel",
    age: 34
}

var greet = function (name) {
    console.log(`Hello ${name}`)
}

greet(person.name)

// Truthy and Falsy
// Falsy values
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Truthy values
Boolean(1); //true for 1 or n != 0
Boolean(-1); //true for 1 or n != 0
Boolean("a"); //true fro any char
Boolean([]); //true for any array, despite empty
Boolean({}); //true for any object
Boolean(function () { }); //true for all functions

// ARRAYS
var a = []
a.push(1, 2, 3) // pushes to the end
a.pop(2) // pops last element 
a.unshift(8) // shifts element to start
a.shift(1)  // deletes first element 
console.log(`a: ${a} type of a: ${typeof (a)} length = ${a.length} index of 1: ${a.indexOf(1)}`)

// LOOPS
var a = [0, 1, 2, 3, 4, 5]
function display(n) {
    console.log(`Index: ${a.indexOf(n)} Number: ${a[n]}`)
}

for (var i = 0; i < a.length; i++) {
    display(i)
}

for (var n of a) {
    display(n)
}

// OBJECTS
class Person {
    constructor(name, age, student) {
        this.name = name,
            this.age = age,
            this.student = student
    }
}

var p0 = new Person("Angel", 23, true)
console.log(Person)
console.log(typeof (Person))
console.log(p0)
console.log(typeof (p0))

// Array Methods
var array = [
    { char: "a", ascii: "a".charCodeAt() },
    { char: "b", ascii: "b".charCodeAt() },
    { char: "c", ascii: "c".charCodeAt() },
    { char: "d", ascii: "d".charCodeAt() },
    { char: "e", ascii: "e".charCodeAt() },
    { char: "@", ascii: "@".charCodeAt() },
]

// Filter return a new array
var array_filter = array.filter((elem) => {
    return elem.ascii <= 100
});

var array_map = array.map((elem) => {
    return elem.char
})

var a_find = array.find((element)=>{
    return element.char === "@"
})

//Some return a boolean
var a_some = array.some((e)=>{
    return e.ascii <=100
})

console.log(array_filter)
console.log(array_map)
console.log(a_find)
console.log(a_some)