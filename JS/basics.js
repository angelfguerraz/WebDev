// Variables

var name = "angel";
var age = 15;

var person = {
    name: name,
    age: age
}

// Functions:
// declarative function
function return_n(n) {
    return n
}

// anonym function (exp) 
var sum = function (a, b) {
    return a + b
}

function greet(person) {
    console.log(`Hola ${person}`)
}

// constructors
function person(name, age) {
    this.name = name;
    this.age = age;
}

var me = new person("angel", 23);
var you = new person("julia", 12);

a = [];
a.push(me, you)

// p = person
a.filter(function(p){
    return p.age < 20 // returns julia
});

a.forEach(element => {
    console.log(`Hello ${element.name}`)
});