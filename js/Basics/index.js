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