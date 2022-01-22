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