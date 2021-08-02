
const DATA = []

function calculate_stats() {
    insert_element();
    arith_mean();
    median();
    mode();
}

function insert_element() {
    var e = document.getElementById("inputElement").value
    DATA.push(e)

    var a = document.getElementById("array")
    a.innerText = DATA
}

function arith_mean() {

    const mean = document.getElementById("mean")

    let sum = DATA.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    // console.log("sum = " + sum)

    mean.innerText = sum / DATA.length
}

/*  After sorted element(s) in the middle of array 
    If even data list given, then calculate arithmetic mean
*/
function median() {

    const median = document.getElementById("median")

    var mid = 0
    var len = DATA.length
    var len_2 = parseInt(len / 2)
    // console.log("len = " + len)

    /*Sorts array increasing*/
    DATA.sort(function (a, b) {
        return a - b
    })

    if (len % 2 == 0) {
        let a = parseInt(DATA[len_2 - 1])
        let b = parseInt(DATA[len_2])
        // console.log(a, b)
        mid = (a + b) / 2
    } else {
        mid = DATA[len_2]
    }

    median.innerText = mid
}

/*  Most frequent found element in Data list*/
function mode() {

    const mode = document.getElementById("mode")

    /* Finding most frequent element with hashmap and reduce */
    const hashmap = DATA.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})

    /*Returns only first max value 
    var mostFrequentElem = Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b) */


    /*In case more elements have same max value */
    var mostFrequentElem = Object.keys(hashmap).filter(x => {
        return hashmap[x] == Math.max.apply(null, Object.values(hashmap))
    })

    mode.innerText = mostFrequentElem
}