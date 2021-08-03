function sum(a, b) {
    return a + b
}

/* Callback */
function calc(n1, n2, callback) {
    return callback(n1, n2)
}

console.log(calc(2, 2, sum))

/* Callback */
function date(callback) {
    console.log("1 " + new Date) // Prints first date
    setTimeout(function () {
        let date = new Date
        callback(date) // callback = print_date
    }, 300) // runs out after 300s
}

function print_date(dateNow) {
    console.log("2 " + dateNow)
}

date(print_date)