const COL = colombia.map(function (person) {
    return person.salary
})

const LEN = parseInt(COL.length)

const SORTED_COL = COL.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
)

/* Splices off the 10% */
const spliceStart = (LEN * (100 - 10)) / 100;
const spliceCount = LEN - spliceStart
const COL_TOP10 = SORTED_COL.splice(spliceStart, spliceCount)

function isEven(n) {
    return n % 2 === 0
}

function salaryMedian(a) {
    const len = a.length
    const mid = parseInt(len / 2)

    if (isEven(len)) {
        const p1 = a[mid]
        const p2 = a[mid - 1]
        return p1 + p2 / 2
    } else {
        return a[mid]
    }
}
